#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

#[macro_use]
extern crate lazy_static;

use tauri::{
    api::dialog::ask, window::WindowBuilder, CustomMenuItem, GlobalShortcutManager, Manager,
    RunEvent, Window, WindowEvent, WindowUrl,
};

mod commands;
mod udi;

#[tokio::main]
async fn main() {
    tracing_subscriber::fmt()
        .with_max_level(tracing::Level::DEBUG)
        .init();
    tracing::info!("测试.");

    idns_eth_sdk::init_sdk("0ae86faeb300d3991c638d8597fd2baa43493933e87c664970f6a04fac532879")
        .unwrap();

    tauri::Builder::default()
        .setup(|app| {
            #[cfg(debug_assertions)]
            app.get_window("main").unwrap().open_devtools();

            // app.get_window("main").unwrap().set_decorations(false);
            Ok(())
        })
        .invoke_handler(tauri::generate_handler![
            //
            commands::window_close_then_to,
            commands::window_hide_then_to,
            //
            commands::browser_create_child_window,
            commands::browser_resize_child_window,
            commands::browser_set_decorations,
            commands::browser_set_show,
            commands::browser_set_always_on_top,
            commands::browser_change_url,
            //
            commands::idns_request_raw,
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
