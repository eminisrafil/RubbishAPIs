"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[1916],{74085:(e,t,r)=>{function s(e){}r.d(t,{Bg:()=>s}),r(80442)},45091:(e,t,r)=>{r.d(t,{Z:()=>c});var s,n,i=r(80442),o=r(71143);(n=s||(s={}))[n.varint=0]="varint",n[n.fixed64=1]="fixed64",n[n.delimited=2]="delimited",n[n.fixed32=5]="fixed32",n[n.unknown=99]="unknown";const a=4294967296,l=new TextDecoder("utf-8"),u=(0,i.Z)("safari")||(0,i.Z)("ios")?6:(0,i.Z)("ff")?12:32;class c{constructor(e,t,r=0,n=(e?e.byteLength:0)){this._tag=0,this._dataType=s.unknown,this._init(e,t,r,n)}_init(e,t,r,s){this._data=e,this._dataView=t,this._pos=r,this._end=s}asUnsafe(){return this}clone(){return new c(this._data,this._dataView,this._pos,this._end)}pos(){return this._pos}move(e){this._pos=e}nextTag(e){for(;;){if(this._pos===this._end)return!1;const t=this._decodeVarint();if(this._tag=t>>3,this._dataType=7&t,!e||e===this._tag)break;this.skip()}return!0}next(){if(this._pos===this._end)return!1;const e=this._decodeVarint();return this._tag=e>>3,this._dataType=7&e,!0}empty(){return this._pos>=this._end}tag(){return this._tag}getInt32(){return this._decodeVarint()}getInt64(){return this._decodeVarint()}getUInt32(){let e=4294967295;return e=(127&this._data[this._pos])>>>0,this._data[this._pos++]<128?e:(e=(e|(127&this._data[this._pos])<<7)>>>0,this._data[this._pos++]<128?e:(e=(e|(127&this._data[this._pos])<<14)>>>0,this._data[this._pos++]<128?e:(e=(e|(127&this._data[this._pos])<<21)>>>0,this._data[this._pos++]<128?e:(e=(e|(15&this._data[this._pos])<<28)>>>0,this._data[this._pos++]<128?e:void 0))))}getUInt64(){return this._decodeVarint()}getSInt32(){const e=this.getUInt32();if(void 0!==e)return e>>>1^-(1&e)|0}getSInt64(){return this._decodeSVarint()}getBool(){const e=0!==this._data[this._pos];return this._skip(1),e}getEnum(){return this._decodeVarint()}getFixed64(){const e=this._dataView,t=this._pos,r=e.getUint32(t,!0)+e.getUint32(t+4,!0)*a;return this._skip(8),r}getSFixed64(){const e=this._dataView,t=this._pos,r=e.getUint32(t,!0)+e.getInt32(t+4,!0)*a;return this._skip(8),r}getDouble(){const e=this._dataView.getFloat64(this._pos,!0);return this._skip(8),e}getFixed32(){const e=this._dataView.getUint32(this._pos,!0);return this._skip(4),e}getSFixed32(){const e=this._dataView.getInt32(this._pos,!0);return this._skip(4),e}getFloat(){const e=this._dataView.getFloat32(this._pos,!0);return this._skip(4),e}getString(){const e=this._getLength(),t=this._pos,r=this._toString(this._data,t,t+e);return this._skip(e),r}getBytes(){const e=this._getLength(),t=this._pos,r=this._toBytes(this._data,t,t+e);return this._skip(e),r}getLength(){return this._getLengthUnsafe()}processMessageWithArgs(e,t,r,s){const n=this.getMessage(),i=e(n,t,r,s);return n.release(),i}processMessage(e){const t=this.getMessage(),r=e(t);return t.release(),r}getMessage(){const e=this._getLength(),t=c.pool.acquire();return t._init(this._data,this._dataView,this._pos,this._pos+e),this._skip(e),t}release(){c.pool.release(this)}dataType(){return this._dataType}skip(){switch(this._dataType){case s.varint:this._decodeVarint();break;case s.fixed64:this._skip(8);break;case s.delimited:this._skip(this._getLength());break;case s.fixed32:this._skip(4);break;default:throw new Error("Invalid data type!")}}skipLen(e){this._skip(e)}_skip(e){if(this._pos+e>this._end)throw new Error("Attempt to skip past the end of buffer!");this._pos+=e}_decodeVarint(){const e=this._data;let t=this._pos,r=0,s=0;if(this._end-t>=10)do{if(s=e[t++],r|=127&s,0==(128&s))break;if(s=e[t++],r|=(127&s)<<7,0==(128&s))break;if(s=e[t++],r|=(127&s)<<14,0==(128&s))break;if(s=e[t++],r|=(127&s)<<21,0==(128&s))break;if(s=e[t++],r+=268435456*(127&s),0==(128&s))break;if(s=e[t++],r+=34359738368*(127&s),0==(128&s))break;if(s=e[t++],r+=4398046511104*(127&s),0==(128&s))break;if(s=e[t++],r+=562949953421312*(127&s),0==(128&s))break;if(s=e[t++],r+=72057594037927940*(127&s),0==(128&s))break;if(s=e[t++],r+=0x8000000000000000*(127&s),0==(128&s))break;throw new Error("Varint too long!")}while(0);else{let n=1;for(;t!==this._end&&(s=e[t],0!=(128&s));)++t,r+=(127&s)*n,n*=128;if(t===this._end)throw new Error("Varint overrun!");++t,r+=s*n}return this._pos=t,r}_decodeSVarint(){const e=this._data;let t=this._pos,r=0,s=0;const n=1&e[t];if(this._end-t>=10)do{if(s=e[t++],r|=127&s,0==(128&s))break;if(s=e[t++],r|=(127&s)<<7,0==(128&s))break;if(s=e[t++],r|=(127&s)<<14,0==(128&s))break;if(s=e[t++],r|=(127&s)<<21,0==(128&s))break;if(s=e[t++],r+=268435456*(127&s),0==(128&s))break;if(s=e[t++],r+=34359738368*(127&s),0==(128&s))break;if(s=e[t++],r+=4398046511104*(127&s),0==(128&s))break;if(s=e[t++],r+=562949953421312*(127&s),0==(128&s))break;if(s=e[t++],r+=72057594037927940*(127&s),0==(128&s))break;if(s=e[t++],r+=0x8000000000000000*(127&s),0==(128&s))break;throw new Error("Varint too long!")}while(0);else{let n=1;for(;t!==this._end&&(s=e[t],0!=(128&s));)++t,r+=(127&s)*n,n*=128;if(t===this._end)throw new Error("Varint overrun!");++t,r+=s*n}return this._pos=t,n?-(r+1)/2:r/2}_getLength(){if(this._dataType!==s.delimited)throw new Error("Not a delimited data type!");return this._decodeVarint()}_getLengthUnsafe(){return this.getUInt32()}_toString(e,t,r){if((r=Math.min(this._end,r))-t>u){const s=e.subarray(t,r);return l.decode(s)}let s="",n="";for(let i=t;i<r;++i){const t=e[i];128&t?n+="%"+t.toString(16):(s+=decodeURIComponent(n)+String.fromCharCode(t),n="")}return n.length&&(s+=decodeURIComponent(n)),s}_toBytes(e,t,r){return r=Math.min(this._end,r),new Uint8Array(e.buffer,t,r-t)}}c.pool=new o.Z(c,void 0,(e=>{e._data=null,e._dataView=null}))},33955:(e,t,r)=>{r.d(t,{Ji:()=>f,YX:()=>u,aW:()=>c,im:()=>y,l9:()=>p,oU:()=>h,q9:()=>m,wp:()=>d});var s=r(6570),n=r(9361),i=r(65091),o=r(94139),a=r(38913),l=r(58901);function u(e){return void 0!==e.xmin&&void 0!==e.ymin&&void 0!==e.xmax&&void 0!==e.ymax}function c(e){return void 0!==e.points}function d(e){return void 0!==e.x&&void 0!==e.y}function p(e){return void 0!==e.paths}function h(e){return void 0!==e.rings}function y(e){return null==e?null:e instanceof n.Z?e:d(e)?o.Z.fromJSON(e):p(e)?l.Z.fromJSON(e):h(e)?a.Z.fromJSON(e):c(e)?i.Z.fromJSON(e):u(e)?s.Z.fromJSON(e):null}function f(e){return e?d(e)?"esriGeometryPoint":p(e)?"esriGeometryPolyline":h(e)?"esriGeometryPolygon":u(e)?"esriGeometryEnvelope":c(e)?"esriGeometryMultipoint":null:null}const g={esriGeometryPoint:o.Z,esriGeometryPolyline:l.Z,esriGeometryPolygon:a.Z,esriGeometryEnvelope:s.Z,esriGeometryMultipoint:i.Z};function m(e){return e&&g[e]||null}},82397:(e,t,r)=>{r.d(t,{G6:()=>f,Ie:()=>y,J9:()=>p,RF:()=>d,U1:()=>h,vY:()=>o}),r(33955);const s=(e,t,r)=>[t,r],n=(e,t,r)=>[t,r,e[2]],i=(e,t,r)=>[t,r,e[2],e[3]];function o(e){return e?{originPosition:"upper-left"===e.originPosition?"upperLeft":"lower-left"===e.originPosition?"lowerLeft":e.originPosition,scale:e.tolerance?[e.tolerance,e.tolerance]:[1,1],translate:null!=e.extent?[e.extent.xmin,e.extent.ymax]:[0,0]}:null}function a({scale:e,translate:t},r){return r*e[0]+t[0]}function l({scale:e,translate:t},r){return t[1]-r*e[1]}function u(e,t,r){const s=new Array(r.length);if(!r.length)return s;const[n,i]=e.scale;let o=a(e,r[0][0]),u=l(e,r[0][1]);s[0]=t(r[0],o,u);for(let e=1;e<r.length;e++){const a=r[e];o+=a[0]*n,u-=a[1]*i,s[e]=t(a,o,u)}return s}function c(e,t,r){const s=new Array(r.length);for(let n=0;n<r.length;n++)s[n]=u(e,t,r[n]);return s}function d(e,t,r,s,n){return t.x=function({scale:e,translate:t},r){return Math.round((r-t[0])/e[0])}(e,r.x),t.y=function({scale:e,translate:t},r){return Math.round((t[1]-r)/e[1])}(e,r.y),t!==r&&(s&&(t.z=r.z),n&&(t.m=r.m)),t}function p(e,t,r,o,a){return null!=r&&(t.points=function(e,t,r,o){return u(e,r?o?i:n:o?n:s,t)}(e,r.points,o,a)),t}function h(e,t,r,s,n){return null==r||(t.x=a(e,r.x),t.y=l(e,r.y),t!==r&&(s&&(t.z=r.z),n&&(t.m=r.m))),t}function y(e,t,r,o,a){return null!=r&&(t.rings=function(e,t,r,o){return c(e,r?o?i:n:o?n:s,t)}(e,r.rings,o,a)),t}function f(e,t,r,o,a){return null!=r&&(t.paths=function(e,t,r,o){return c(e,r?o?i:n:o?n:s,t)}(e,r.paths,o,a)),t}},86973:(e,t,r)=>{r.d(t,{M:()=>n,P:()=>i});var s=r(35454);const n=(0,s.w)()({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon"}),i=(0,s.w)()({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon",esriGeometryEnvelope:"extent",mesh:"mesh"})},69285:(e,t,r)=>{r.d(t,{k:()=>i});var s=r(67900),n=r(8744);function i(e,t,r){if(null==t||null==r||r.vcsWkid||(0,n.fS)(t,r))return null;const i=(0,s._R)(t)/(0,s._R)(r);if(1===i)return null;switch(e){case"point":case"esriGeometryPoint":return e=>function(e,t){e&&null!=e.z&&(e.z*=t)}(e,i);case"polyline":case"esriGeometryPolyline":return e=>function(e,t){if(e)for(const r of e.paths)for(const e of r)e.length>2&&(e[2]*=t)}(e,i);case"polygon":case"esriGeometryPolygon":return e=>function(e,t){if(e)for(const r of e.rings)for(const e of r)e.length>2&&(e[2]*=t)}(e,i);case"multipoint":case"esriGeometryMultipoint":return e=>function(e,t){if(e)for(const r of e.points)r.length>2&&(r[2]*=t)}(e,i);case"extent":case"esriGeometryEnvelope":return e=>function(e,t){e&&null!=e.zmin&&null!=e.zmax&&(e.zmin*=t,e.zmax*=t)}(e,i);default:return null}}},1231:(e,t,r)=>{r.d(t,{Z:()=>g});var s,n=r(43697),i=r(35454),o=r(96674),a=r(5600),l=r(75215),u=(r(67676),r(80442),r(36030)),c=r(71715),d=r(52011),p=r(72729),h=r(86719);const y=new i.X({binary:"binary",coordinate:"coordinate",countOrAmount:"count-or-amount",dateAndTime:"date-and-time",description:"description",locationOrPlaceName:"location-or-place-name",measurement:"measurement",nameOrTitle:"name-or-title",none:"none",orderedOrRanked:"ordered-or-ranked",percentageOrRatio:"percentage-or-ratio",typeOrCategory:"type-or-category",uniqueIdentifier:"unique-identifier"});let f=s=class extends o.wq{constructor(e){super(e),this.alias=null,this.defaultValue=void 0,this.description=null,this.domain=null,this.editable=!0,this.length=-1,this.name=null,this.nullable=!0,this.type=null,this.valueType=null,this.visible=!0}readDescription(e,{description:t}){let r=null;try{r=t?JSON.parse(t):null}catch(e){}return r?.value??null}readValueType(e,{description:t}){let r=null;try{r=t?JSON.parse(t):null}catch(e){}return r?y.fromJSON(r.fieldValueType):null}clone(){return new s({alias:this.alias,defaultValue:this.defaultValue,description:this.description,domain:this.domain&&this.domain.clone()||null,editable:this.editable,length:this.length,name:this.name,nullable:this.nullable,type:this.type,valueType:this.valueType,visible:this.visible})}};(0,n._)([(0,a.Cb)({type:String,json:{write:!0}})],f.prototype,"alias",void 0),(0,n._)([(0,a.Cb)({type:[String,Number],json:{write:{allowNull:!0}}})],f.prototype,"defaultValue",void 0),(0,n._)([(0,a.Cb)()],f.prototype,"description",void 0),(0,n._)([(0,c.r)("description")],f.prototype,"readDescription",null),(0,n._)([(0,a.Cb)({types:p.V5,json:{read:{reader:p.im},write:!0}})],f.prototype,"domain",void 0),(0,n._)([(0,a.Cb)({type:Boolean,json:{write:!0}})],f.prototype,"editable",void 0),(0,n._)([(0,a.Cb)({type:l.z8,json:{write:!0}})],f.prototype,"length",void 0),(0,n._)([(0,a.Cb)({type:String,json:{write:!0}})],f.prototype,"name",void 0),(0,n._)([(0,a.Cb)({type:Boolean,json:{write:!0}})],f.prototype,"nullable",void 0),(0,n._)([(0,u.J)(h.v)],f.prototype,"type",void 0),(0,n._)([(0,a.Cb)()],f.prototype,"valueType",void 0),(0,n._)([(0,c.r)("valueType",["description"])],f.prototype,"readValueType",null),(0,n._)([(0,a.Cb)({type:Boolean,json:{read:!1}})],f.prototype,"visible",void 0),f=s=(0,n._)([(0,d.j)("esri.layers.support.Field")],f);const g=f},72729:(e,t,r)=>{r.d(t,{im:()=>x,V5:()=>v}),r(80442);var s,n=r(43697),i=r(22974),o=r(5600),a=(r(75215),r(36030)),l=r(52011),u=r(96674);r(67676);let c=s=class extends u.wq{constructor(e){super(e),this.name=null,this.code=null}clone(){return new s({name:this.name,code:this.code})}};(0,n._)([(0,o.Cb)({type:String,json:{write:!0}})],c.prototype,"name",void 0),(0,n._)([(0,o.Cb)({type:[String,Number],json:{write:!0}})],c.prototype,"code",void 0),c=s=(0,n._)([(0,l.j)("esri.layers.support.CodedValue")],c);const d=new(r(35454).X)({inherited:"inherited",codedValue:"coded-value",range:"range"});let p=class extends u.wq{constructor(e){super(e),this.name=null,this.type=null}};(0,n._)([(0,o.Cb)({type:String,json:{write:!0}})],p.prototype,"name",void 0),(0,n._)([(0,a.J)(d)],p.prototype,"type",void 0),p=(0,n._)([(0,l.j)("esri.layers.support.Domain")],p);const h=p;var y;let f=y=class extends h{constructor(e){super(e),this.codedValues=null,this.type="coded-value"}getName(e){let t=null;if(this.codedValues){const r=String(e);this.codedValues.some((e=>(String(e.code)===r&&(t=e.name),!!t)))}return t}clone(){return new y({codedValues:(0,i.d9)(this.codedValues),name:this.name})}};(0,n._)([(0,o.Cb)({type:[c],json:{write:!0}})],f.prototype,"codedValues",void 0),(0,n._)([(0,a.J)({codedValue:"coded-value"})],f.prototype,"type",void 0),f=y=(0,n._)([(0,l.j)("esri.layers.support.CodedValueDomain")],f);const g=f;var m;r(92604),r(20102);let _=m=class extends h{constructor(e){super(e),this.type="inherited"}clone(){return new m}};(0,n._)([(0,a.J)({inherited:"inherited"})],_.prototype,"type",void 0),_=m=(0,n._)([(0,l.j)("esri.layers.support.InheritedDomain")],_);const b=_;var k;let T=k=class extends h{constructor(e){super(e),this.maxValue=null,this.minValue=null,this.type="range"}clone(){return new k({maxValue:this.maxValue,minValue:this.minValue,name:this.name})}};(0,n._)([(0,o.Cb)({type:Number,json:{type:[Number],read:{source:"range",reader:(e,t)=>t.range&&t.range[1]},write:{enabled:!1,overridePolicy(){return{enabled:null!=this.maxValue&&null==this.minValue}},target:"range",writer(e,t,r){t[r]=[this.minValue||0,e]}}}})],T.prototype,"maxValue",void 0),(0,n._)([(0,o.Cb)({type:Number,json:{type:[Number],read:{source:"range",reader:(e,t)=>t.range&&t.range[0]},write:{target:"range",writer(e,t,r){t[r]=[e,this.maxValue||0]}}}})],T.prototype,"minValue",void 0),(0,n._)([(0,a.J)({range:"range"})],T.prototype,"type",void 0),T=k=(0,n._)([(0,l.j)("esri.layers.support.RangeDomain")],T);const w=T,v={key:"type",base:h,typeMap:{range:T,"coded-value":g,inherited:b}};function x(e){if(!e||!e.type)return null;switch(e.type){case"range":return w.fromJSON(e);case"codedValue":return g.fromJSON(e);case"inherited":return b.fromJSON(e)}return null}},86719:(e,t,r)=>{r.d(t,{v:()=>s});const s=new(r(35454).X)({esriFieldTypeSmallInteger:"small-integer",esriFieldTypeInteger:"integer",esriFieldTypeSingle:"single",esriFieldTypeDouble:"double",esriFieldTypeLong:"long",esriFieldTypeString:"string",esriFieldTypeDate:"date",esriFieldTypeOID:"oid",esriFieldTypeGeometry:"geometry",esriFieldTypeBlob:"blob",esriFieldTypeRaster:"raster",esriFieldTypeGUID:"guid",esriFieldTypeGlobalID:"global-id",esriFieldTypeXML:"xml",esriFieldTypeBigInteger:"big-integer",esriFieldTypeDateOnly:"date-only",esriFieldTypeTimeOnly:"time-only",esriFieldTypeTimestampOffset:"timestamp-offset"})},77863:(e,t,r)=>{r.d(t,{G$:()=>v,K9:()=>P,wn:()=>_});var s=r(20102),n=r(45091),i=r(5428),o=r(78760);const a=["esriFieldTypeSmallInteger","esriFieldTypeInteger","esriFieldTypeSingle","esriFieldTypeDouble","esriFieldTypeString","esriFieldTypeDate","esriFieldTypeOID","esriFieldTypeGeometry","esriFieldTypeBlob","esriFieldTypeRaster","esriFieldTypeGUID","esriFieldTypeGlobalID","esriFieldTypeXML","esriFieldTypeBigInteger","esriFieldTypeDateOnly","esriFieldTypeTimeOnly","esriFieldTypeTimestampOffset"],l=["sqlTypeBigInt","sqlTypeBinary","sqlTypeBit","sqlTypeChar","sqlTypeDate","sqlTypeDecimal","sqlTypeDouble","sqlTypeFloat","sqlTypeGeometry","sqlTypeGUID","sqlTypeInteger","sqlTypeLongNVarchar","sqlTypeLongVarbinary","sqlTypeLongVarchar","sqlTypeNChar","sqlTypeNVarchar","sqlTypeOther","sqlTypeReal","sqlTypeSmallInt","sqlTypeSqlXml","sqlTypeTime","sqlTypeTimestamp","sqlTypeTimestamp2","sqlTypeTinyInt","sqlTypeVarbinary","sqlTypeVarchar"],u=["upperLeft","lowerLeft"];function c(e){return e>=a.length?null:a[e]}function d(e){return e>=l.length?null:l[e]}function p(e){return e>=u.length?null:u[e]}function h(e,t){return t>=e.geometryTypes.length?null:e.geometryTypes[t]}function y(e,t,r){const s=e.asUnsafe(),n=t.createPointGeometry(r);for(;s.next();)switch(s.tag()){case 3:{const e=s.getUInt32(),r=s.pos()+e;let i=0;for(;s.pos()<r;)t.addCoordinatePoint(n,s.getSInt64(),i++);break}default:s.skip()}return n}function f(e,t,r){const s=e.asUnsafe(),n=t.createGeometry(r),i=2+(r.hasZ?1:0)+(r.hasM?1:0);for(;s.next();)switch(s.tag()){case 2:{const e=s.getUInt32(),r=s.pos()+e;let i=0;for(;s.pos()<r;)t.addLength(n,s.getUInt32(),i++);break}case 3:{const e=s.getUInt32(),r=s.pos()+e;let o=0;for(t.allocateCoordinates(n);s.pos()<r;)t.addCoordinate(n,s.getSInt64(),o),o++,o===i&&(o=0);break}default:s.skip()}return n}function g(e){const t=e.asUnsafe(),r=new i.Z;let s="esriGeometryPoint";for(;t.next();)switch(t.tag()){case 2:{const e=t.getUInt32(),s=t.pos()+e;for(;t.pos()<s;)r.lengths.push(t.getUInt32());break}case 3:{const e=t.getUInt32(),s=t.pos()+e;for(;t.pos()<s;)r.coords.push(t.getSInt64());break}case 1:s=o.A[t.getEnum()];break;default:t.skip()}return{queryGeometry:r,queryGeometryType:s}}function m(e){const t=e.asUnsafe();for(;t.next();)switch(t.tag()){case 1:return t.getString();case 2:return t.getFloat();case 3:return t.getDouble();case 4:return t.getSInt32();case 5:return t.getUInt32();case 6:return t.getInt64();case 7:return t.getUInt64();case 8:return t.getSInt64();case 9:return t.getBool();default:return t.skip(),null}return null}function _(e){const t=e.asUnsafe(),r={type:c(0)};for(;t.next();)switch(t.tag()){case 1:r.name=t.getString();break;case 2:r.type=c(t.getEnum());break;case 3:r.alias=t.getString();break;case 4:r.sqlType=d(t.getEnum());break;case 5:default:t.skip();break;case 6:r.defaultValue=t.getString()}return r}function b(e){const t={},r=e.asUnsafe();for(;r.next();)switch(r.tag()){case 1:t.name=r.getString();break;case 2:t.isSystemMaintained=r.getBool();break;default:r.skip()}return t}function k(e,t,r,s){const n=t.createFeature(r);let i=0;for(;e.next();)switch(e.tag()){case 1:{const t=s[i++].name;n.attributes[t]=e.processMessage(m);break}case 2:n.geometry=e.processMessageWithArgs(f,t,r);break;case 4:n.centroid=e.processMessageWithArgs(y,t,r);break;default:e.skip()}return n}function T(e){const t=[1,1,1,1],r=e.asUnsafe();for(;r.next();)switch(r.tag()){case 1:t[0]=r.getDouble();break;case 2:t[1]=r.getDouble();break;case 4:t[2]=r.getDouble();break;case 3:t[3]=r.getDouble();break;default:r.skip()}return t}function w(e){const t=[0,0,0,0],r=e.asUnsafe();for(;r.next();)switch(r.tag()){case 1:t[0]=r.getDouble();break;case 2:t[1]=r.getDouble();break;case 4:t[2]=r.getDouble();break;case 3:t[3]=r.getDouble();break;default:r.skip()}return t}function v(e){const t={originPosition:p(0)},r=e.asUnsafe();for(;r.next();)switch(r.tag()){case 1:t.originPosition=p(r.getEnum());break;case 2:t.scale=r.processMessage(T);break;case 3:t.translate=r.processMessage(w);break;default:r.skip()}return t}function x(e){const t={},r=e.asUnsafe();for(;r.next();)switch(r.tag()){case 1:t.shapeAreaFieldName=r.getString();break;case 2:t.shapeLengthFieldName=r.getString();break;case 3:t.units=r.getString();break;default:r.skip()}return t}function F(e,t){const r=t.createSpatialReference();for(;e.next();)switch(e.tag()){case 1:r.wkid=e.getUInt32();break;case 5:r.wkt=e.getString();break;case 2:r.latestWkid=e.getUInt32();break;case 3:r.vcsWkid=e.getUInt32();break;case 4:r.latestVcsWkid=e.getUInt32();break;default:e.skip()}return r}function G(e,t){const r=t.createFeatureResult(),s=e.asUnsafe();r.geometryType=h(t,0);let n=!1;for(;s.next();)switch(s.tag()){case 1:r.objectIdFieldName=s.getString();break;case 3:r.globalIdFieldName=s.getString();break;case 4:r.geohashFieldName=s.getString();break;case 5:r.geometryProperties=s.processMessage(x);break;case 7:r.geometryType=h(t,s.getEnum());break;case 8:r.spatialReference=s.processMessageWithArgs(F,t);break;case 10:r.hasZ=s.getBool();break;case 11:r.hasM=s.getBool();break;case 12:r.transform=s.processMessage(v);break;case 9:{const e=s.getBool();r.exceededTransferLimit=e;break}case 13:t.addField(r,s.processMessage(_));break;case 15:n||(t.prepareFeatures(r),n=!0),t.addFeature(r,s.processMessageWithArgs(k,t,r,r.fields));break;case 2:r.uniqueIdField=s.processMessage(b);break;default:s.skip()}return t.finishFeatureResult(r),r}function S(e,t){const r={};let s=null;for(;e.next();)switch(e.tag()){case 4:s=e.processMessageWithArgs(g);break;case 1:r.featureResult=e.processMessageWithArgs(G,t);break;default:e.skip()}return null!=s&&r.featureResult&&t.addQueryGeometry(r,s),r}function P(e,t){try{const r=2,s=new n.Z(new Uint8Array(e),new DataView(e)),i={};for(;s.next();)s.tag()===r?i.queryResult=s.processMessageWithArgs(S,t):s.skip();return i}catch(e){throw new s.Z("query:parsing-pbf","Error while parsing FeatureSet PBF payload",{error:e})}}},78760:(e,t,r)=>{r.d(t,{A:()=>l,J:()=>u});var s=r(67900),n=r(8744),i=r(70272),o=r(44876),a=r(5428);const l=["esriGeometryPoint","esriGeometryMultipoint","esriGeometryPolyline","esriGeometryPolygon"];class u{constructor(e){this._options=e,this.geometryTypes=l,this._coordinatePtr=0,this._vertexDimension=0}createFeatureResult(){return new o.Z}prepareFeatures(e){this._vertexDimension=2,e.hasZ&&this._vertexDimension++,e.hasM&&this._vertexDimension++}finishFeatureResult(e){if(!e||!e.features||!e.hasZ||!this._options.sourceSpatialReference||!e.spatialReference||(0,n.fS)(e.spatialReference,this._options.sourceSpatialReference)||e.spatialReference.vcsWkid)return;const t=(0,s._R)(this._options.sourceSpatialReference)/(0,s._R)(e.spatialReference);if(1!==t)for(const r of e.features){if(!(0,i.S6)(r))continue;const e=r.geometry.coords;for(let r=2;r<e.length;r+=3)e[r]*=t}}addFeature(e,t){e.features.push(t)}createFeature(){return new i.u_}createSpatialReference(){return{wkid:0}}createGeometry(){return new a.Z}addField(e,t){e.fields.push(t)}allocateCoordinates(e){e.coords.length=e.lengths.reduce(((e,t)=>e+t),0)*this._vertexDimension,this._coordinatePtr=0}addCoordinate(e,t){e.coords[this._coordinatePtr++]=t}addCoordinatePoint(e,t){e.coords.push(t)}addLength(e,t){e.lengths.push(t)}addQueryGeometry(e,t){e.queryGeometry=t.queryGeometry,e.queryGeometryType=t.queryGeometryType}createPointGeometry(){return new a.Z}}},45178:(e,t,r)=>{r.d(t,{C:()=>n});var s=r(77863);function n(e,t){const r=(0,s.K9)(e,t),n=r.queryResult.featureResult,i=r.queryResult.queryGeometry,o=r.queryResult.queryGeometryType;if(n&&n.features&&n.features.length&&n.objectIdFieldName){const e=n.objectIdFieldName;for(const t of n.features)t.attributes&&(t.objectId=t.attributes[e])}return n&&(n.queryGeometry=i,n.queryGeometryType=o),n}},61916:(e,t,r)=>{r.r(t),r.d(t,{default:()=>k});var s=r(74085),n=r(99001),i=r(82971),o=r(69285),a=(r(80442),r(1533),r(60437),r(24470),r(82397),r(86973),r(1231));r(8744);class l{constructor(e,t,r){this.uid=e,this.geometry=t,this.attributes=r,this.visible=!0,this.objectId=null,this.centroid=null}}class u{constructor(){this.exceededTransferLimit=!1,this.features=[],this.fields=[],this.hasM=!1,this.hasZ=!1,this.geometryType=null,this.objectIdFieldName=null,this.globalIdFieldName=null,this.geometryProperties=null,this.geohashFieldName=null,this.spatialReference=null,this.transform=null}}var c=r(98732);function d(e,t){return t}function p(e,t,r,s){switch(r){case 0:return g(e,t+s,0);case 1:return"lowerLeft"===e.originPosition?g(e,t+s,1):function({translate:e,scale:t},r,s){return e[s]-r*t[s]}(e,t+s,1)}}function h(e,t,r,s){return 2===r?g(e,t,2):p(e,t,r,s)}function y(e,t,r,s){return 2===r?g(e,t,3):p(e,t,r,s)}function f(e,t,r,s){return 3===r?g(e,t,3):h(e,t,r,s)}function g({translate:e,scale:t},r,s){return e[s]+r*t[s]}class m{constructor(e){this._options=e,this.geometryTypes=["point","multipoint","polyline","polygon"],this._previousCoordinate=[0,0],this._transform=null,this._applyTransform=d,this._lengths=[],this._currentLengthIndex=0,this._toAddInCurrentPath=0,this._vertexDimension=0,this._coordinateBuffer=null,this._coordinateBufferPtr=0,this._attributesConstructor=class{}}createFeatureResult(){return new u}finishFeatureResult(e){if(this._options.applyTransform&&(e.transform=null),this._attributesConstructor=class{},this._coordinateBuffer=null,this._lengths.length=0,!e.hasZ)return;const t=(0,o.k)(e.geometryType,this._options.sourceSpatialReference,e.spatialReference);if(null!=t)for(const r of e.features)t(r.geometry)}createSpatialReference(){return new i.Z}addField(e,t){e.fields.push(a.Z.fromJSON(t));const r=e.fields.map((e=>e.name));this._attributesConstructor=function(){for(const e of r)this[e]=null}}addFeature(e,t){const r=this._options.maxStringAttributeLength??0;if(r>0)for(const e in t.attributes){const s=t.attributes[e];"string"==typeof s&&s.length>r&&(t.attributes[e]="")}e.features.push(t)}addQueryGeometry(e,t){const{queryGeometry:r,queryGeometryType:s}=t,n=(0,c.$g)(r.clone(),r,!1,!1,this._transform),i=(0,c.di)(n,s,!1,!1);let o=null;switch(s){case"esriGeometryPoint":o="point";break;case"esriGeometryPolygon":o="polygon";break;case"esriGeometryPolyline":o="polyline";break;case"esriGeometryMultipoint":o="multipoint"}i.type=o,e.queryGeometryType=s,e.queryGeometry=i}prepareFeatures(e){switch(this._transform=e.transform??null,this._options.applyTransform&&e.transform&&(this._applyTransform=this._deriveApplyTransform(e)),this._vertexDimension=2,e.hasZ&&this._vertexDimension++,e.hasM&&this._vertexDimension++,e.geometryType){case"point":this.addCoordinate=(e,t,r)=>this.addCoordinatePoint(e,t,r),this.createGeometry=e=>this.createPointGeometry(e);break;case"polygon":this.addCoordinate=(e,t,r)=>this._addCoordinatePolygon(e,t,r),this.createGeometry=e=>this._createPolygonGeometry(e);break;case"polyline":this.addCoordinate=(e,t,r)=>this._addCoordinatePolyline(e,t,r),this.createGeometry=e=>this._createPolylineGeometry(e);break;case"multipoint":this.addCoordinate=(e,t,r)=>this._addCoordinateMultipoint(e,t,r),this.createGeometry=e=>this._createMultipointGeometry(e);break;case"mesh":case"extent":break;default:(0,s.Bg)(e.geometryType)}}createFeature(){return this._lengths.length=0,this._currentLengthIndex=0,this._previousCoordinate[0]=0,this._previousCoordinate[1]=0,new l((0,n.D)(),null,new this._attributesConstructor)}allocateCoordinates(){const e=this._lengths.reduce(((e,t)=>e+t),0);this._coordinateBuffer=new Float64Array(e*this._vertexDimension),this._coordinateBufferPtr=0}addLength(e,t){0===this._lengths.length&&(this._toAddInCurrentPath=t),this._lengths.push(t)}createPointGeometry(e){const t={type:"point",x:0,y:0,spatialReference:e.spatialReference,hasZ:!!e.hasZ,hasM:!!e.hasM};return t.hasZ&&(t.z=0),t.hasM&&(t.m=0),t}addCoordinatePoint(e,t,r){const s=this._transform?this._applyTransform(this._transform,t,r,0):t;if(null!=s)switch(r){case 0:e.x=s;break;case 1:e.y=s;break;case 2:e.hasZ?e.z=s:e.m=s;break;case 3:e.m=s}}_transformPathLikeValue(e,t){let r=0;return t<=1&&(r=this._previousCoordinate[t],this._previousCoordinate[t]+=e),this._transform?this._applyTransform(this._transform,e,t,r):e}_addCoordinatePolyline(e,t,r){this._dehydratedAddPointsCoordinate(e.paths,t,r)}_addCoordinatePolygon(e,t,r){this._dehydratedAddPointsCoordinate(e.rings,t,r)}_addCoordinateMultipoint(e,t,r){0===r&&e.points.push([]);const s=this._transformPathLikeValue(t,r);e.points[e.points.length-1].push(s)}_createPolygonGeometry(e){return{type:"polygon",rings:[[]],spatialReference:e.spatialReference,hasZ:!!e.hasZ,hasM:!!e.hasM}}_createPolylineGeometry(e){return{type:"polyline",paths:[[]],spatialReference:e.spatialReference,hasZ:!!e.hasZ,hasM:!!e.hasM}}_createMultipointGeometry(e){return{type:"multipoint",points:[],spatialReference:e.spatialReference,hasZ:!!e.hasZ,hasM:!!e.hasM}}_dehydratedAddPointsCoordinate(e,t,r){0===r&&0==this._toAddInCurrentPath--&&(e.push([]),this._toAddInCurrentPath=this._lengths[++this._currentLengthIndex]-1,this._previousCoordinate[0]=0,this._previousCoordinate[1]=0);const s=this._transformPathLikeValue(t,r),n=e[e.length-1],i=this._coordinateBuffer;if(i){if(0===r){const e=this._coordinateBufferPtr*Float64Array.BYTES_PER_ELEMENT;n.push(new Float64Array(i.buffer,e,this._vertexDimension))}i[this._coordinateBufferPtr++]=s}}_deriveApplyTransform(e){const{hasZ:t,hasM:r}=e;return t&&r?f:t?h:r?y:p}}var _=r(45178);class b{_parseFeatureQuery(e){const t=(0,_.C)(e.buffer,new m(e.options)),r={...t,spatialReference:t.spatialReference?.toJSON(),fields:t.fields?t.fields.map((e=>e.toJSON())):void 0};return Promise.resolve(r)}}function k(){return new b}}}]);