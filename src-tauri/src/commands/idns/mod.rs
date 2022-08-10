use std::collections::HashMap;

pub use idns_eth_api::idns::account::{
    Account, DecryptMessageRequest, DecryptMessageResponse, EncryptMessageRequest,
    EncryptMessageResponse, GenerateAccountResponse,
};

use idns_eth_sdk::{get_token, idns_eth_request_raw};

#[tauri::command]
pub async fn idns_request_raw(
    service_name: String,
    method_name: String,
    headers_vec: Vec<(String, String)>,
    data: Vec<u8>,
) -> (i32, String, Vec<u8>) {
    //
    let headers = HashMap::<String, String>::new();
    let result = idns_eth_request_raw(service_name.as_str(), method_name.as_str(), headers, data);

    if method_name == "import_and_login" || method_name == "login_by_password"{
        //
        if let Ok(token) = get_token() {
            crate::udi::init_system_database(&token);
        }
    }
    result
}
