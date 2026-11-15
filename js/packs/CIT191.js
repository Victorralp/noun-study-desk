// CIT191 is the same course as IFT191 (Computer Laboratory I) under another code: reuse that pack. Load after IFT191.js.
(function(){
  var src = window.COURSES.filter(function(c){ return c.code === "IFT191"; })[0];
  if (!src) return;
  var c = JSON.parse(JSON.stringify(src));
  c.code = "CIT191";
  window.COURSES.push(c);
  window.GUIDES = window.GUIDES || {};
  GUIDES.CIT191 = GUIDES.IFT191;
})();
