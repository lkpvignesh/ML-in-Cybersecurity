var _0x4548=[',\x20or\x20add\x20a\x20symlink\x20to\x20it\x20from\x20project\x27s\x20','node_modules/','defineProperty','__module_scope_plugin','chalk','path','appSrcs','isArray','apply','file','ModuleScopePlugin','context','issuer','descriptionFileRoot','indexOf','/node_modules/','\x5cnode_modules\x5c','every','relative','startsWith','..\x5c','resolve','dirname','__innerRequest_request','allowedFiles','has','You\x20attempted\x20to\x20import\x20','cyan','src/','\x20directory.\x20','\x20are\x20not\x20supported.','You\x20can\x20either\x20move\x20it\x20inside\x20'];(function(_0x26dd45,_0x3cabf3){var _0x3ef8a7=function(_0x1d131d){while(--_0x1d131d){_0x26dd45['push'](_0x26dd45['shift']());}};_0x3ef8a7(++_0x3cabf3);}(_0x4548,0x1c4));var _0x3869=function(_0x3e613c,_0x34cacf){_0x3e613c=_0x3e613c-0x0;var _0xb07aa9=_0x4548[_0x3e613c];return _0xb07aa9;};/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
'use strict';const chalk=require(_0x3869('0x0'));const path=require(_0x3869('0x1'));const os=require('os');class ModuleScopePlugin{constructor(_0x398045,_0x3370f8=[]){this[_0x3869('0x2')]=Array[_0x3869('0x3')](_0x398045)?_0x398045:[_0x398045];this['allowedFiles']=new Set(_0x3370f8);}[_0x3869('0x4')](_0x3fa19d){const {appSrcs}=this;_0x3fa19d['hooks'][_0x3869('0x5')]['tapAsync'](_0x3869('0x6'),(_0x314ce5,_0x4c674b,_0x12eaf8)=>{if(!_0x314ce5[_0x3869('0x7')][_0x3869('0x8')]){return _0x12eaf8();}if(_0x314ce5[_0x3869('0x9')][_0x3869('0xa')](_0x3869('0xb'))!==-0x1||_0x314ce5[_0x3869('0x9')][_0x3869('0xa')](_0x3869('0xc'))!==-0x1||!_0x314ce5['__innerRequest_request']){return _0x12eaf8();}if(appSrcs[_0x3869('0xd')](_0x2012c3=>{const _0x439f4b=path[_0x3869('0xe')](_0x2012c3,_0x314ce5[_0x3869('0x7')][_0x3869('0x8')]);return _0x439f4b[_0x3869('0xf')]('../')||_0x439f4b[_0x3869('0xf')](_0x3869('0x10'));})){return _0x12eaf8();}const _0x3c9b82=path[_0x3869('0x11')](path[_0x3869('0x12')](_0x314ce5[_0x3869('0x7')]['issuer']),_0x314ce5[_0x3869('0x13')]);if(this[_0x3869('0x14')][_0x3869('0x15')](_0x3c9b82)){return _0x12eaf8();}if(appSrcs[_0x3869('0xd')](_0x20a2f3=>{const _0x6f23c2=path[_0x3869('0xe')](_0x20a2f3,_0x3c9b82);return _0x6f23c2[_0x3869('0xf')]('../')||_0x6f23c2['startsWith']('..\x5c');})){const _0x1259d4=new Error(_0x3869('0x16')+chalk['cyan'](_0x314ce5[_0x3869('0x13')])+'\x20which\x20falls\x20outside\x20of\x20the\x20project\x20'+chalk[_0x3869('0x17')](_0x3869('0x18'))+_0x3869('0x19')+('Relative\x20imports\x20outside\x20of\x20'+chalk['cyan']('src/')+_0x3869('0x1a'))+os['EOL']+(_0x3869('0x1b')+chalk['cyan']('src/')+_0x3869('0x1c')+chalk[_0x3869('0x17')](_0x3869('0x1d'))+'.'));Object[_0x3869('0x1e')](_0x1259d4,_0x3869('0x1f'),{'value':!![],'writable':![],'enumerable':![]});_0x12eaf8(_0x1259d4,_0x314ce5);}else{_0x12eaf8();}});}}module['exports']=ModuleScopePlugin;