function draw(){
  const cv=document.getElementById('cv'),ctx=cv.getContext('2d');
  const t=document.getElementById('text').value;
  ctx.fillStyle=document.getElementById('bg').value;
  ctx.fillRect(0,0,1080,1080);
  ctx.fillStyle=document.getElementById('color').value;
  ctx.font='bold 96px sans-serif';
  ctx.textAlign='center';
  ctx.textBaseline='middle';
  ctx.fillText(t,540,540);
  cv.toBlob(b=>{
    const a=document.createElement('a');
    a.href=URL.createObjectURL(b);
    a.download='cover.png';
    a.click();
  });
}
