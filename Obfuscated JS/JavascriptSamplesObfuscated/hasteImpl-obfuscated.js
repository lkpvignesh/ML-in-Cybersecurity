var _0x3a67=['path','cwd','resolve','../../../','@react-native-community/cli','haste','../../','sep','platforms','^(.*).(','Libraries','ReactAndroid','reduce','replace','.js','.js.flow','find','substr','length','some','test','exports'];(function(_0x2396e6,_0x5d74db){var _0x583878=function(_0x27137d){while(--_0x27137d){_0x2396e6['push'](_0x2396e6['shift']());}};_0x583878(++_0x5d74db);}(_0x3a67,0x1e4));var _0x3ce9=function(_0x338733,_0x2e0d1f){_0x338733=_0x338733-0x0;var _0x5bd077=_0x3a67[_0x338733];return _0x5bd077;};/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 * @flow
 */
'use strict';const path=require(_0x3ce9('0x0'));const REACT_NATIVE_CI=process[_0x3ce9('0x1')]()===path[_0x3ce9('0x2')](__dirname,'..');let pluginsPath;if(REACT_NATIVE_CI){pluginsPath='..';}else{pluginsPath=_0x3ce9('0x3');}function getPlugins(){try{const {findPlugins}=require(_0x3ce9('0x4'));return findPlugins(path['resolve'](__dirname,pluginsPath));}catch(_0x5a666d){return{'haste':{'providesModuleNodeModules':[],'platforms':[]}};}}const plugins=getPlugins();const pluginRoots=plugins[_0x3ce9('0x5')]['providesModuleNodeModules']['map'](_0x3d9f09=>path[_0x3ce9('0x2')](__dirname,_0x3ce9('0x6'),_0x3d9f09)+path[_0x3ce9('0x7')]);const pluginNameReducers=plugins[_0x3ce9('0x5')][_0x3ce9('0x8')]['map'](_0x56ed92=>[new RegExp(_0x3ce9('0x9')+_0x56ed92+')$'),'$1']);const ROOTS=[path[_0x3ce9('0x2')](__dirname,'..')+path[_0x3ce9('0x7')],...pluginRoots];const BLACKLISTED_PATTERNS=[/.*[\\\/]__(mocks|tests)__[\\\/].*/,/^Libraries[\\\/]Animated[\\\/]src[\\\/]polyfills[\\\/].*/,/^Libraries[\\\/]Renderer[\\\/]fb[\\\/].*/,/DerivedData[\\\/].*/];const WHITELISTED_PREFIXES=['IntegrationTests',_0x3ce9('0xa'),_0x3ce9('0xb'),'RNTester'];const NAME_REDUCERS=[[/^(?:.*[\\\/])?([a-zA-Z0-9$_.-]+)$/,'$1'],[/^(.*)\.js(\.flow)?$/,'$1'],[/^(.*)\.(android|ios|native)$/,'$1'],...pluginNameReducers];const haste={'getHasteName'(_0x46389b,_0x1bf9fe){if(!isHastePath(_0x46389b)){return undefined;}const _0x720a24=NAME_REDUCERS[_0x3ce9('0xc')]((_0x219087,[_0x5783f0,_0x30f99d])=>_0x219087[_0x3ce9('0xd')](_0x5783f0,_0x30f99d),_0x46389b);return _0x720a24;}};function isHastePath(_0xfa4992){if(!_0xfa4992['endsWith'](_0x3ce9('0xe'))&&!_0xfa4992['endsWith'](_0x3ce9('0xf'))){return![];}const _0x476d39=ROOTS[_0x3ce9('0x10')](_0x17c5c2=>_0xfa4992['startsWith'](_0x17c5c2));if(!_0x476d39){return![];}_0xfa4992=_0xfa4992[_0x3ce9('0x11')](_0x476d39[_0x3ce9('0x12')]);if(BLACKLISTED_PATTERNS[_0x3ce9('0x13')](_0x4837f4=>_0x4837f4[_0x3ce9('0x14')](_0xfa4992))){return![];}return WHITELISTED_PREFIXES[_0x3ce9('0x13')](_0x43273f=>_0xfa4992['startsWith'](_0x43273f));}module[_0x3ce9('0x15')]=haste;