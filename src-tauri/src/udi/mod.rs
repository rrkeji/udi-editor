mod database;
pub use database::*;

use idns_eth_sdk::idns_core::{account::IdnsToken, idns_home_path};
use idns_eth_sdk::sqlite::Connection;

use anyhow::Result;
use std::sync::Arc;

pub fn init_system_database(token: &IdnsToken) -> Result<()> {
    tracing::debug!("初始化系统数据库");
    //
    let arc_conn = Arc::new(Connection::open(token)?);

    let token = idns_eth_sdk::get_token();
    idns_eth_sdk::set_connection(arc_conn.clone());
    execute_schema(&arc_conn.clone())?;
    tracing::debug!("执行完成数据库shema");
    Ok(())
}

pub fn close_system_database() -> Result<()> {
    //
    idns_eth_sdk::clear_connection();
    Ok(())
}
