use tauri::{
	api::dialog::ask, window::WindowBuilder, CustomMenuItem, GlobalShortcutManager,
	LogicalPosition, LogicalSize, Manager, PhysicalPosition, PhysicalSize, Position, RunEvent,
	Size, Window, WindowEvent, WindowUrl,
};

// #[tauri::command]
// pub async fn show_application(application: String, window: Window) {
// 	let monitor = window.primary_monitor().unwrap().unwrap();

// 	let window_position =
// 		window.outer_position().unwrap().to_logical::<f64>(monitor.scale_factor());
// 	//
// 	WindowBuilder::new(&window, id, WindowUrl::App("/blank".into()))
// 		.title(title)
// 		.decorations(false)
// 		.inner_size(width, height)
// 		.position(window_position.x + x, window_position.y + y);

// 	#[cfg(target_os = "macos")]
// 	let child = child.parent_window(window.ns_window().unwrap());
// 	#[cfg(windows)]
// 	let child = child.parent_window(window.hwnd().unwrap());

// 	child.build().unwrap();
// }
#[tauri::command]
pub async fn window_close_then_to(current: String, to: String, window: tauri::Window) {
	// Close login
	if let Some(current_window) = window.get_window(current.as_str()) {
		current_window.close().unwrap();
	}
	// Show main window
	window.get_window(to.as_str()).unwrap().show().unwrap();
}

#[tauri::command]
pub async fn window_hide_then_to(current: String, to: String, window: tauri::Window) {
	// Close login
	if let Some(current_window) = window.get_window(current.as_str()) {
		current_window.hide().unwrap();
	}
	// Show main window
	window.get_window(to.as_str()).unwrap().show().unwrap();
}
