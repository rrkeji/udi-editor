use tauri::{
	api::dialog::ask, window::WindowBuilder, CustomMenuItem, GlobalShortcutManager,
	LogicalPosition, LogicalSize, Manager, PhysicalPosition, PhysicalSize, Position, RunEvent,
	Size, Window, WindowEvent, WindowUrl,
};

#[tauri::command]
pub async fn browser_create_child_window(
	id: String,
	x: f64,
	y: f64,
	width: f64,
	height: f64,
	url: String,
	title: String,
	window: Window,
) {
	let monitor = window.primary_monitor().unwrap().unwrap();

	let window_position =
		window.outer_position().unwrap().to_logical::<f64>(monitor.scale_factor());
	//判断名称是否存在
	if let Some(_) = window.get_window(id.as_str()) {
		let _ = browser_change_url(id, url, window);
		return;
	}
	//
	let child = if let Some(index) = url.find("idns://") {
		if index == 0usize {
			if let Some(route) = url.get("idns:/".len()..) {
				WindowBuilder::new(&window, id, WindowUrl::App(route.into()))
			} else {
				WindowBuilder::new(&window, id, WindowUrl::App("/error".into()))
			}
		} else {
			WindowBuilder::new(&window, id, WindowUrl::External(url.parse().unwrap()))
		}
	} else {
		WindowBuilder::new(&window, id, WindowUrl::External(url.parse().unwrap()))
	}
	.title(title)
	.decorations(false)
	.inner_size(width, height)
	.resizable(false)
	.enable_clipboard_access()
	.position(window_position.x + x, window_position.y + y);

	#[cfg(target_os = "macos")]
	let child = child.parent_window(window.ns_window().unwrap());
	#[cfg(windows)]
	let child = child.parent_window(window.hwnd().unwrap());

	child.build().unwrap();
}

#[tauri::command]
pub async fn browser_resize_child_window(
	id: String,
	x: f64,
	y: f64,
	width: f64,
	height: f64,
	window: Window,
) {
	let monitor = window.primary_monitor().unwrap().unwrap();

	let window_position =
		window.outer_position().unwrap().to_logical::<f64>(monitor.scale_factor());

	if let Some(child) = window.get_window(id.as_str()) {
		let _ = child.set_size(Size::Logical(LogicalSize::<f64> { height, width }));
		//
		let _ = child.set_position(Position::Logical(LogicalPosition::<f64> {
			x: window_position.x + x as f64,
			y: window_position.y + y as f64,
		}));
	} else {
		//不存在创建
	}
}

#[tauri::command]
pub async fn browser_change_url(id: String, url: String, window: Window) {
	if let Some(child) = window.get_window(id.as_str()) {
		//TODO url处理
		if let Some(index) = url.find("idns://") {
			if index == 0usize {
				if let Some(route) = url.get("idns:/".len()..) {
					let _ = child.eval(format!("window.location.replace('{}')", route).as_str());
					return;
				}
			}
		}
		let _ = child.eval(format!("window.location.replace('{}')", url).as_str());
	}
}

#[tauri::command]
pub async fn browser_set_decorations(id: String, decorations: bool, window: Window) {
	//TODO url处理
	let child = window.get_window(id.as_str()).unwrap();
	let _ = child.set_decorations(decorations);
}

#[tauri::command]
pub async fn browser_set_show(id: String, show: bool, window: Window) {
	//TODO url处理
	if let Some(child) = window.get_window(id.as_str()) {
		let _ = if show { child.show() } else { child.hide() };
	} else {
		//
	}
}
#[tauri::command]
pub async fn browser_set_always_on_top(id: String, always_on_top: bool, window: Window) {
	//TODO url处理
	if let Some(child) = window.get_window(id.as_str()) {
		let _ = child.set_always_on_top(always_on_top);
	} else {
		//
	}
}
