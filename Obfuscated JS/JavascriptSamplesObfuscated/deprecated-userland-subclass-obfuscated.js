var _0x292b=['deprecatedClass\x20is\x20deprecated.','util','assert','deprecate'];(function(_0x14d8c0,_0x4d5915){var _0x1b4729=function(_0x586b77){while(--_0x586b77){_0x14d8c0['push'](_0x14d8c0['shift']());}};_0x1b4729(++_0x4d5915);}(_0x292b,0x115));var _0x4113=function(_0x5a4d24,_0x5bbef5){_0x5a4d24=_0x5a4d24-0x0;var _0x4aa113=_0x292b[_0x5a4d24];return _0x4aa113;};const util=require(_0x4113('0x0'));const assert=require(_0x4113('0x1'));class deprecatedClass{}const deprecated=util[_0x4113('0x2')](deprecatedClass,_0x4113('0x3'));class subclass extends deprecated{constructor(){super();}}const instance=new subclass();assert(instance instanceof subclass);assert(instance instanceof deprecated);assert(instance instanceof deprecatedClass);