/* empty css                              */function E(){}function H(e){return e()}function O(){return Object.create(null)}function w(e){e.forEach(H)}function G(e){return typeof e=="function"}function F(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function J(e){return Object.keys(e).length===0}let S=!1;function K(){S=!0}function Q(){S=!1}function R(e,t,n,s){for(;e<t;){const o=e+(t-e>>1);n(o)<=s?e=o+1:t=o}return e}function X(e){if(e.hydrate_init)return;e.hydrate_init=!0;let t=e.childNodes;if(e.nodeName==="HEAD"){const r=[];for(let l=0;l<t.length;l++){const c=t[l];c.claim_order!==void 0&&r.push(c)}t=r}const n=new Int32Array(t.length+1),s=new Int32Array(t.length);n[0]=-1;let o=0;for(let r=0;r<t.length;r++){const l=t[r].claim_order,c=(o>0&&t[n[o]].claim_order<=l?o+1:R(1,o,d=>t[n[d]].claim_order,l))-1;s[r]=n[c]+1;const f=c+1;n[f]=r,o=Math.max(f,o)}const a=[],i=[];let u=t.length-1;for(let r=n[o]+1;r!=0;r=s[r-1]){for(a.push(t[r-1]);u>=r;u--)i.push(t[u]);u--}for(;u>=0;u--)i.push(t[u]);a.reverse(),i.sort((r,l)=>r.claim_order-l.claim_order);for(let r=0,l=0;r<i.length;r++){for(;l<a.length&&i[r].claim_order>=a[l].claim_order;)l++;const c=l<a.length?a[l]:null;e.insertBefore(i[r],c)}}function v(e,t){if(S){for(X(e),(e.actual_end_child===void 0||e.actual_end_child!==null&&e.actual_end_child.parentNode!==e)&&(e.actual_end_child=e.firstChild);e.actual_end_child!==null&&e.actual_end_child.claim_order===void 0;)e.actual_end_child=e.actual_end_child.nextSibling;t!==e.actual_end_child?(t.claim_order!==void 0||t.parentNode!==e)&&e.insertBefore(t,e.actual_end_child):e.actual_end_child=t.nextSibling}else(t.parentNode!==e||t.nextSibling!==null)&&e.appendChild(t)}function j(e,t,n){S&&!n?v(e,t):(t.parentNode!==e||t.nextSibling!=n)&&e.insertBefore(t,n||null)}function _(e){e.parentNode.removeChild(e)}function Y(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function p(e){return document.createElement(e)}function I(e){return document.createTextNode(e)}function A(){return I(" ")}function Z(e,t,n,s){return e.addEventListener(t,n,s),()=>e.removeEventListener(t,n,s)}function h(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function y(e){return Array.from(e.childNodes)}function ee(e){e.claim_info===void 0&&(e.claim_info={last_index:0,total_claimed:0})}function U(e,t,n,s,o=!1){ee(e);const a=(()=>{for(let i=e.claim_info.last_index;i<e.length;i++){const u=e[i];if(t(u)){const r=n(u);return r===void 0?e.splice(i,1):e[i]=r,o||(e.claim_info.last_index=i),u}}for(let i=e.claim_info.last_index-1;i>=0;i--){const u=e[i];if(t(u)){const r=n(u);return r===void 0?e.splice(i,1):e[i]=r,o?r===void 0&&e.claim_info.last_index--:e.claim_info.last_index=i,u}}return s()})();return a.claim_order=e.claim_info.total_claimed,e.claim_info.total_claimed+=1,a}function te(e,t,n,s){return U(e,o=>o.nodeName===t,o=>{const a=[];for(let i=0;i<o.attributes.length;i++){const u=o.attributes[i];n[u.name]||a.push(u.name)}a.forEach(i=>o.removeAttribute(i))},()=>s(t))}function g(e,t,n){return te(e,t,n,p)}function W(e,t){return U(e,n=>n.nodeType===3,n=>{const s=""+t;if(n.data.startsWith(s)){if(n.data.length!==s.length)return n.splitText(s.length)}else n.data=s},()=>I(t),!0)}function L(e){return W(e," ")}let B;function x(e){B=e}const $=[],V=[],N=[],q=[],ne=Promise.resolve();let C=!1;function le(){C||(C=!0,ne.then(z))}function D(e){N.push(e)}const T=new Set;let k=0;function z(){const e=B;do{for(;k<$.length;){const t=$[k];k++,x(t),ie(t.$$)}for(x(null),$.length=0,k=0;V.length;)V.pop()();for(let t=0;t<N.length;t+=1){const n=N[t];T.has(n)||(T.add(n),n())}N.length=0}while($.length);for(;q.length;)q.pop()();C=!1,T.clear(),x(e)}function ie(e){if(e.fragment!==null){e.update(),w(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(D)}}const re=new Set;function ce(e,t){e&&e.i&&(re.delete(e),e.i(t))}function oe(e,t,n,s){const{fragment:o,after_update:a}=e.$$;o&&o.m(t,n),s||D(()=>{const i=e.$$.on_mount.map(H).filter(G);e.$$.on_destroy?e.$$.on_destroy.push(...i):w(i),e.$$.on_mount=[]}),a.forEach(D)}function se(e,t){const n=e.$$;n.fragment!==null&&(w(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function ue(e,t){e.$$.dirty[0]===-1&&($.push(e),le(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function ae(e,t,n,s,o,a,i,u=[-1]){const r=B;x(e);const l=e.$$={fragment:null,ctx:[],props:a,update:E,not_equal:o,bound:O(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(r?r.$$.context:[])),callbacks:O(),dirty:u,skip_bound:!1,root:t.target||r.$$.root};i&&i(l.root);let c=!1;if(l.ctx=n?n(e,t.props||{},(f,d,...m)=>{const b=m.length?m[0]:d;return l.ctx&&o(l.ctx[f],l.ctx[f]=b)&&(!l.skip_bound&&l.bound[f]&&l.bound[f](b),c&&ue(e,f)),d}):[],l.update(),c=!0,w(l.before_update),l.fragment=s?s(l.ctx):!1,t.target){if(t.hydrate){K();const f=y(t.target);l.fragment&&l.fragment.l(f),f.forEach(_)}else l.fragment&&l.fragment.c();t.intro&&ce(e.$$.fragment),oe(e,t.target,t.anchor,t.customElement),Q(),z()}x(r)}class fe{$destroy(){se(this,1),this.$destroy=E}$on(t,n){if(!G(n))return E;const s=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return s.push(n),()=>{const o=s.indexOf(n);o!==-1&&s.splice(o,1)}}$set(t){this.$$set&&!J(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function M(e,t,n){const s=e.slice();return s[4]=t[n],s[6]=n,s}function P(e){let t,n,s=e[4].name+"",o,a,i,u;function r(...l){return e[2](e[4],...l)}return{c(){t=p("li"),n=p("button"),o=I(s),a=A(),this.h()},l(l){t=g(l,"LI",{});var c=y(t);n=g(c,"BUTTON",{title:!0,class:!0});var f=y(n);o=W(f,s),f.forEach(_),a=L(c),c.forEach(_),this.h()},h(){h(n,"title",`Go to floor ${e[4].id}`),h(n,"class","svelte-ogsju1")},m(l,c){j(l,t,c),v(t,n),v(n,o),v(t,a),i||(u=Z(n,"click",r),i=!0)},p(l,c){e=l},d(l){l&&_(t),i=!1,u()}}}function de(e){let t,n,s,o,a,i,u,r=e[0],l=[];for(let c=0;c<r.length;c+=1)l[c]=P(M(e,r,c));return{c(){t=p("div"),n=p("div"),s=A(),o=p("div"),a=A(),i=p("div"),u=p("ul");for(let c=0;c<l.length;c+=1)l[c].c();this.h()},l(c){t=g(c,"DIV",{class:!0});var f=y(t);n=g(f,"DIV",{id:!0,class:!0}),y(n).forEach(_),s=L(f),o=g(f,"DIV",{id:!0,class:!0}),y(o).forEach(_),f.forEach(_),a=L(c),i=g(c,"DIV",{class:!0});var d=y(i);u=g(d,"UL",{class:!0});var m=y(u);for(let b=0;b<l.length;b+=1)l[b].l(m);m.forEach(_),d.forEach(_),this.h()},h(){h(n,"id","left-door"),h(n,"class","svelte-ogsju1"),h(o,"id","right-door"),h(o,"class","svelte-ogsju1"),h(t,"class","doors svelte-ogsju1"),h(u,"class","svelte-ogsju1"),h(i,"class","controller svelte-ogsju1")},m(c,f){j(c,t,f),v(t,n),v(t,s),v(t,o),j(c,a,f),j(c,i,f),v(i,u);for(let d=0;d<l.length;d+=1)l[d].m(u,null)},p(c,[f]){if(f&3){r=c[0];let d;for(d=0;d<r.length;d+=1){const m=M(c,r,d);l[d]?l[d].p(m,f):(l[d]=P(m),l[d].c(),l[d].m(u,null))}for(;d<l.length;d+=1)l[d].d(1);l.length=r.length}},i:E,o:E,d(c){c&&_(t),c&&_(a),c&&_(i),Y(l,c)}}}function _e(e){const t=[{name:"Home",id:1},{name:"About",id:2},{name:"Contact",id:3}];let n;const s=function(a,i){if(i.path[0].classList.contains("active"))return;document.querySelector(`#floor-${a}`);const u=document.querySelector(".doors");u.style.setProperty("--door-percent","0%"),i.path[0].classList.add("active"),setTimeout(()=>{location.href=`#floor-${a}`},500),setTimeout(()=>i.path[0].classList.remove("active"),1200),n&&clearTimeout(n),n=setTimeout(()=>{u.style.setProperty("--door-percent","-100%")},1200)};return[t,s,(a,i)=>s(a.id,i)]}class me extends fe{constructor(t){super(),ae(this,t,_e,de,F,{})}}export{me as default};