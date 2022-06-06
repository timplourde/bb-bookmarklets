# Gradebook Calculator

* Drag the link below to your browser's bookmark bar.
* Navigate to the "Gradebook" page in Blackboard for the relevant mod.  
* Click the bookmark you will see an alert message appear. The bookmarklet will attempt to calculate your points as a percentage of the total.  It is not perfect and does not include points not present on that page.  

<a href="javascript:(()=>{function a(t){let e=/\d*\.?\d+/.exec(t);return e&&e.length?Number.parseFloat(e[0]):null}function u(t){let e=t.split('/').map(n=>n.trim());return e.length!==2?null:e.map(a)}function s(t){let e=t.map(u).filter(r=>r!==null&&r.length==2).reduce((r,l)=>{let o=l[0],i=l[1];return typeof o!='number'||typeof i!='number'||(r.scored+=o,r.total+=i),r},{scored:0,total:0}),n=(e.scored/e.total*100).toFixed(2);return`Points so far: ${e.scored.toFixed(2)} / ${e.total.toFixed(2)} (${n} %) This does not include ungraded assignments.`}var p=s([...document.querySelectorAll('.grade-input-display')].map(t=>t.innerText));alert(p);})(); ">Gradebook Calculator</a>

For entertainment purposes only.