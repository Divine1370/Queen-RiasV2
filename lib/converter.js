const _0x5b8ce1=_0x1f14;(function(_0x32b5c6,_0x4c1d5c){const _0x2d1945=_0x1f14,_0x566e8d=_0x32b5c6();while(!![]){try{const _0x4c3333=-parseInt(_0x2d1945(0x1ec))/0x1+parseInt(_0x2d1945(0x1d9))/0x2*(parseInt(_0x2d1945(0x1da))/0x3)+parseInt(_0x2d1945(0x1e4))/0x4+-parseInt(_0x2d1945(0x1df))/0x5+-parseInt(_0x2d1945(0x1d8))/0x6+-parseInt(_0x2d1945(0x1e1))/0x7*(-parseInt(_0x2d1945(0x1ed))/0x8)+-parseInt(_0x2d1945(0x1e8))/0x9*(-parseInt(_0x2d1945(0x1db))/0xa);if(_0x4c3333===_0x4c1d5c)break;else _0x566e8d['push'](_0x566e8d['shift']());}catch(_0x81d92d){_0x566e8d['push'](_0x566e8d['shift']());}}}(_0x4322,0x25936));const fs=require('fs'),path=require('path'),{spawn}=require(_0x5b8ce1(0x1e2));function ffmpeg(_0x1a48f6,_0x2c0292=[],_0x741e10='',_0x2cf5b0=''){return new Promise(async(_0x15f94c,_0x261f76)=>{const _0x2c5f7f=_0x1f14;try{let _0x531ad2=path[_0x2c5f7f(0x1e3)](__dirname,'../src',+new Date()+'.'+_0x741e10),_0x14d0d3=_0x531ad2+'.'+_0x2cf5b0;await fs[_0x2c5f7f(0x1dd)][_0x2c5f7f(0x1f7)](_0x531ad2,_0x1a48f6),spawn(_0x2c5f7f(0x1e0),['-y','-i',_0x531ad2,..._0x2c0292,_0x14d0d3])['on']('error',_0x261f76)['on']('close',async _0x2ca0b7=>{const _0x4f9bb2=_0x2c5f7f;try{await fs[_0x4f9bb2(0x1dd)][_0x4f9bb2(0x1e9)](_0x531ad2);if(_0x2ca0b7!==0x0)return _0x261f76(_0x2ca0b7);_0x15f94c(await fs[_0x4f9bb2(0x1dd)][_0x4f9bb2(0x1ee)](_0x14d0d3)),await fs[_0x4f9bb2(0x1dd)][_0x4f9bb2(0x1e9)](_0x14d0d3);}catch(_0x2b29a2){_0x261f76(_0x2b29a2);}});}catch(_0x32cc1e){_0x261f76(_0x32cc1e);}});}function toAudio(_0x4377aa,_0x3b379e){const _0x3ad62b=_0x5b8ce1;return ffmpeg(_0x4377aa,[_0x3ad62b(0x1e5),_0x3ad62b(0x1eb),'2',_0x3ad62b(0x1dc),_0x3ad62b(0x1e7),_0x3ad62b(0x1d5),_0x3ad62b(0x1f2),'-f',_0x3ad62b(0x1e6)],_0x3b379e,_0x3ad62b(0x1e6));}function toPTT(_0x2c3161,_0x439fd2){const _0x31fdf9=_0x5b8ce1;return ffmpeg(_0x2c3161,[_0x31fdf9(0x1e5),_0x31fdf9(0x1f0),_0x31fdf9(0x1ef),'-b:a',_0x31fdf9(0x1e7),_0x31fdf9(0x1f3),'on',_0x31fdf9(0x1f1),'10'],_0x439fd2,'opus');}function toVideo(_0xd8ccb0,_0x259d18){const _0x1b2cbb=_0x5b8ce1;return ffmpeg(_0xd8ccb0,[_0x1b2cbb(0x1d6),'libx264',_0x1b2cbb(0x1f0),_0x1b2cbb(0x1f6),_0x1b2cbb(0x1ea),_0x1b2cbb(0x1e7),_0x1b2cbb(0x1d5),_0x1b2cbb(0x1f2),_0x1b2cbb(0x1f5),'32',_0x1b2cbb(0x1de),'slow'],_0x259d18,_0x1b2cbb(0x1f4));}module[_0x5b8ce1(0x1d7)]={'toAudio':toAudio,'toPTT':toPTT,'toVideo':toVideo,'ffmpeg':ffmpeg};function _0x1f14(_0x51d23f,_0x58f8ae){const _0x432262=_0x4322();return _0x1f14=function(_0x1f1457,_0x359b7a){_0x1f1457=_0x1f1457-0x1d5;let _0x145226=_0x432262[_0x1f1457];return _0x145226;},_0x1f14(_0x51d23f,_0x58f8ae);}function _0x4322(){const _0x2af166=['73900QpoavE','3lDDjuq','10QfXDul','-b:a','promises','-preset','430760BYvSPG','ffmpeg','17206nDHEvg','child_process','join','628768EhMptk','-vn','mp3','128k','118305ymqMKe','unlink','-ab','-ac','11700tKZXFb','504mrwdZb','readFile','libopus','-c:a','-compression_level','44100','-vbr','mp4','-crf','aac','writeFile','-ar','-c:v','exports','662274dmbYQa'];_0x4322=function(){return _0x2af166;};return _0x4322();}