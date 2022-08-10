CREATE TABLE IF NOT EXISTS `udi_editor_pagemgr_draft` (
    `id` INTEGER PRIMARY KEY,
    `name` TEXT DEFAULT '',
    `labels` TEXT DEFAULT '',
    `schema` TEXT DEFAULT '',
    `description` TEXT DEFAULT '',
    `status` INTEGER DEFAULT 1,
    `_cid` TEXT DEFAULT '',
    `_cn` INTEGER DEFAULT 0
);

CREATE TABLE IF NOT EXISTS `udi_editor_pagemgr_published` (
    `id` INTEGER PRIMARY KEY,
    `name` TEXT DEFAULT '',
    `ctime` INTEGER DEFAULT 0,
    `page_cid` TEXT DEFAULT '',
    `labels` TEXT DEFAULT '',
    `schema` TEXT DEFAULT '',
    `description` TEXT DEFAULT '',
    `status` INTEGER DEFAULT 1,
    `_cid` TEXT DEFAULT '',
    `_cn` INTEGER DEFAULT 0
);