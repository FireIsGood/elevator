/* empty css                              */function E(){}function P(e){return e()}function O(){return Object.create(null)}function w(e){e.forEach(P)}function H(e){return typeof e=="function"}function z(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function J(e){return Object.keys(e).length===0}let S=!1;function K(){S=!0}function Q(){S=!1}function R(e,t,n,s){for(;e<t;){const c=e+(t-e>>1);n(c)<=s?e=c+1:t=c}return e}function X(e){if(e.hydrate_init)return;e.hydrate_init=!0;let t=e.childNodes;if(e.nodeName==="HEAD"){const i=[];for(let l=0;l<t.length;l++){const o=t[l];o.claim_order!==void 0&&i.push(o)}t=i}const n=new Int32Array(t.length+1),s=new Int32Array(t.length);n[0]=-1;let c=0;for(let i=0;i<t.length;i++){const l=t[i].claim_order,o=(c>0&&t[n[c]].claim_order<=l?c+1:R(1,c,d=>t[n[d]].claim_order,l))-1;s[i]=n[o]+1;const a=o+1;n[a]=i,c=Math.max(a,c)}const f=[],r=[];let u=t.length-1;for(let i=n[c]+1;i!=0;i=s[i-1]){for(f.push(t[i-1]);u>=i;u--)r.push(t[u]);u--}for(;u>=0;u--)r.push(t[u]);f.reverse(),r.sort((i,l)=>i.claim_order-l.claim_order);for(let i=0,l=0;i<r.length;i++){for(;l<f.length&&r[i].claim_order>=f[l].claim_order;)l++;const o=l<f.length?f[l]:null;e.insertBefore(r[i],o)}}function g(e,t){if(S){for(X(e),(e.actual_end_child===void 0||e.actual_end_child!==null&&e.actual_end_child.parentNode!==e)&&(e.actual_end_child=e.firstChild);e.actual_end_child!==null&&e.actual_end_child.claim_order===void 0;)e.actual_end_child=e.actual_end_child.nextSibling;t!==e.actual_end_child?(t.claim_order!==void 0||t.parentNode!==e)&&e.insertBefore(t,e.actual_end_child):e.actual_end_child=t.nextSibling}else(t.parentNode!==e||t.nextSibling!==null)&&e.appendChild(t)}function j(e,t,n){S&&!n?g(e,t):(t.parentNode!==e||t.nextSibling!=n)&&e.insertBefore(t,n||null)}function _(e){e.parentNode.removeChild(e)}function Y(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function p(e){return document.createElement(e)}function B(e){return document.createTextNode(e)}function L(){return B(" ")}function Z(e,t,n,s){return e.addEventListener(t,n,s),()=>e.removeEventListener(t,n,s)}function h(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function y(e){return Array.from(e.childNodes)}function ee(e){e.claim_info===void 0&&(e.claim_info={last_index:0,total_claimed:0})}function G(e,t,n,s,c=!1){ee(e);const f=(()=>{for(let r=e.claim_info.last_index;r<e.length;r++){const u=e[r];if(t(u)){const i=n(u);return i===void 0?e.splice(r,1):e[r]=i,c||(e.claim_info.last_index=r),u}}for(let r=e.claim_info.last_index-1;r>=0;r--){const u=e[r];if(t(u)){const i=n(u);return i===void 0?e.splice(r,1):e[r]=i,c?i===void 0&&e.claim_info.last_index--:e.claim_info.last_index=r,u}}return s()})();return f.claim_order=e.claim_info.total_claimed,e.claim_info.total_claimed+=1,f}function te(e,t,n,s){return G(e,c=>c.nodeName===t,c=>{const f=[];for(let r=0;r<c.attributes.length;r++){const u=c.attributes[r];n[u.name]||f.push(u.name)}f.forEach(r=>c.removeAttribute(r))},()=>s(t))}function v(e,t,n){return te(e,t,n,p)}function U(e,t){return G(e,n=>n.nodeType===3,n=>{const s=""+t;if(n.data.startsWith(s)){if(n.data.length!==s.length)return n.splitText(s.length)}else n.data=s},()=>B(t),!0)}function T(e){return U(e," ")}let F;function x(e){F=e}const $=[],V=[],N=[],q=[],ne=Promise.resolve();let C=!1;function le(){C||(C=!0,ne.then(W))}function D(e){N.push(e)}const A=new Set;let k=0;function W(){const e=F;do{for(;k<$.length;){const t=$[k];k++,x(t),ie(t.$$)}for(x(null),$.length=0,k=0;V.length;)V.pop()();for(let t=0;t<N.length;t+=1){const n=N[t];A.has(n)||(A.add(n),n())}N.length=0}while($.length);for(;q.length;)q.pop()();C=!1,A.clear(),x(e)}function ie(e){if(e.fragment!==null){e.update(),w(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(D)}}const re=new Set;function ce(e,t){e&&e.i&&(re.delete(e),e.i(t))}function oe(e,t,n,s){const{fragment:c,after_update:f}=e.$$;c&&c.m(t,n),s||D(()=>{const r=e.$$.on_mount.map(P).filter(H);e.$$.on_destroy?e.$$.on_destroy.push(...r):w(r),e.$$.on_mount=[]}),f.forEach(D)}function ue(e,t){const n=e.$$;n.fragment!==null&&(w(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function se(e,t){e.$$.dirty[0]===-1&&($.push(e),le(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function fe(e,t,n,s,c,f,r,u=[-1]){const i=F;x(e);const l=e.$$={fragment:null,ctx:[],props:f,update:E,not_equal:c,bound:O(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(i?i.$$.context:[])),callbacks:O(),dirty:u,skip_bound:!1,root:t.target||i.$$.root};r&&r(l.root);let o=!1;if(l.ctx=n?n(e,t.props||{},(a,d,...m)=>{const b=m.length?m[0]:d;return l.ctx&&c(l.ctx[a],l.ctx[a]=b)&&(!l.skip_bound&&l.bound[a]&&l.bound[a](b),o&&se(e,a)),d}):[],l.update(),o=!0,w(l.before_update),l.fragment=s?s(l.ctx):!1,t.target){if(t.hydrate){K();const a=y(t.target);l.fragment&&l.fragment.l(a),a.forEach(_)}else l.fragment&&l.fragment.c();t.intro&&ce(e.$$.fragment),oe(e,t.target,t.anchor,t.customElement),Q(),W()}x(i)}class ae{$destroy(){ue(this,1),this.$destroy=E}$on(t,n){if(!H(n))return E;const s=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return s.push(n),()=>{const c=s.indexOf(n);c!==-1&&s.splice(c,1)}}$set(t){this.$$set&&!J(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function I(e,t,n){const s=e.slice();return s[4]=t[n],s[6]=n,s}function M(e){let t,n,s=e[4].name+"",c,f,r,u;function i(...l){return e[3](e[4],...l)}return{c(){t=p("li"),n=p("button"),c=B(s),f=L(),this.h()},l(l){t=v(l,"LI",{});var o=y(t);n=v(o,"BUTTON",{title:!0,class:!0});var a=y(n);c=U(a,s),a.forEach(_),f=T(o),o.forEach(_),this.h()},h(){h(n,"title",`Go to floor ${e[4].id}`),h(n,"class","svelte-ogsju1")},m(l,o){j(l,t,o),g(t,n),g(n,c),g(t,f),r||(u=Z(n,"click",i),r=!0)},p(l,o){e=l},d(l){l&&_(t),r=!1,u()}}}function de(e){let t,n,s,c,f,r,u,i=e[0],l=[];for(let o=0;o<i.length;o+=1)l[o]=M(I(e,i,o));return{c(){t=p("div"),n=p("div"),s=L(),c=p("div"),f=L(),r=p("div"),u=p("ul");for(let o=0;o<l.length;o+=1)l[o].c();this.h()},l(o){t=v(o,"DIV",{class:!0});var a=y(t);n=v(a,"DIV",{id:!0,class:!0}),y(n).forEach(_),s=T(a),c=v(a,"DIV",{id:!0,class:!0}),y(c).forEach(_),a.forEach(_),f=T(o),r=v(o,"DIV",{class:!0});var d=y(r);u=v(d,"UL",{class:!0});var m=y(u);for(let b=0;b<l.length;b+=1)l[b].l(m);m.forEach(_),d.forEach(_),this.h()},h(){h(n,"id","left-door"),h(n,"class","svelte-ogsju1"),h(c,"id","right-door"),h(c,"class","svelte-ogsju1"),h(t,"class","doors svelte-ogsju1"),h(u,"class","svelte-ogsju1"),h(r,"class","controller svelte-ogsju1")},m(o,a){j(o,t,a),g(t,n),g(t,s),g(t,c),j(o,f,a),j(o,r,a),g(r,u);for(let d=0;d<l.length;d+=1)l[d].m(u,null)},p(o,[a]){if(a&3){i=o[0];let d;for(d=0;d<i.length;d+=1){const m=I(o,i,d);l[d]?l[d].p(m,a):(l[d]=M(m),l[d].c(),l[d].m(u,null))}for(;d<l.length;d+=1)l[d].d(1);l.length=i.length}},i:E,o:E,d(o){o&&_(t),o&&_(f),o&&_(r),Y(l,o)}}}function _e(e,t,n){const s=[{name:"Home",id:1},{name:"About",id:2},{name:"Contact",id:3}];let{currentFloor:c}=t;const f=function(u,i){if(u===c)return;n(2,c=u),document.querySelector(`#floor-${u}`);const l=document.querySelector(".doors");l.style.setProperty("--door-percent","0%"),i.path[0].classList.add("active"),setTimeout(()=>{location.href=`#floor-${u}`},500),setTimeout(()=>{l.style.setProperty("--door-percent","-100%"),i.path[0].classList.remove("active")},1200)},r=(u,i)=>f(u.id,i);return e.$$set=u=>{"currentFloor"in u&&n(2,c=u.currentFloor)},[s,f,c,r]}class me extends ae{constructor(t){super(),fe(this,t,_e,de,z,{currentFloor:2})}}export{me as default};
