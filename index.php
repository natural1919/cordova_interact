<?php
// +----------------------------------------------------------------------
// | ThinkPHP [ WE CAN DO IT JUST THINK ]
// +----------------------------------------------------------------------
// | Copyright (c) 2006-2016 http://thinkphp.cn All rights reserved.
// +----------------------------------------------------------------------
// | Licensed ( http://www.apache.org/licenses/LICENSE-2.0 )
// +----------------------------------------------------------------------
// | Author: liu21st <liu21st@gmail.com>
// +----------------------------------------------------------------------

// [ 应用入口文件 ]
header('Access-Control-Allow-Origin:*');
header('Access-Control-Allow-Methods:POST,GET,PUT');
header('Access-Control-Allow-Headers:x-requested-with,content-type');
if(strtoupper($_SERVER['REQUEST_METHOD'])== 'OPTIONS'){
    exit;
}


// 定义应用目录
define('APP_PATH', __DIR__ . '/../application/');
// 加载框架引导文件
define('HSB_SYS', 'HsbYouPinMallAgent');
// 定义环境(因开发环境有设置product 这个项目环境设置:开发站 dev 测试test 正式 pro)
define('SYS_ENV', isset($_SERVER['HSB_ENV']) && in_array($_SERVER['HSB_ENV'], ['dev', 'test', 'pro']) ? $_SERVER['HSB_ENV'] : 'dev');
require __DIR__ . '/../../thinkphp/start.php';
