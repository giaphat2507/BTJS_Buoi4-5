document.addEventListener("contextmenu",function(e){e.preventDefault()},!1),
document.onkeydown=function(e){return 123!=(e=e||window.event).keyCode&&(!e.ctrlKey||!e.shiftKey||73!=e.keyCode)&&void 0},
document.getElementById("sortNumber").onclick=function()
{
    var e=Number(document.getElementById("inputNum1").value),
    t=Number(document.getElementById("inputNum2").value),
    n=Number(document.getElementById("inputNum3").value),
    a=document.getElementById("txtSortNumber");
    a.innerHTML=e>t?t>n?n+" < "+t+" < "+e:e>n?t+" < "+n+" < "+e:t+" < "+e+" < "+n:t>n?e>n?n+" < "+e+" < "+t:e+" < "+n+" < "+t:e+" < "+t+" < "+n
}
,document.getElementById("btnHello").onclick=function()
    {
        var e=document.getElementById("selUser").value,
        t=document.getElementById("txtHello");
        t.innerHTML="B"==e?"Xin chào Bố!":"M"==e?"Xin chào Mẹ!":"A"==e?"Xin chào Anh Trai!":"E"==e?"Xin chào Em gái!":"Xin chào Người lạ ơi!"
    }
,document.getElementById("btnCount").onclick=function()
        {
            var e=document.getElementById("inputCount1").value,
            t=document.getElementById("inputCount2").value,
            n=document.getElementById("inputCount3").value,a=0;e%2==0&&a++,t%2==0&&a++,n%2==0&&a++,
            document.getElementById("txtCount").innerHTML="Có "+a+" số chẵn,"+(3-a)+" số lẻ"
        },
document.getElementById("btnEdge").onclick=function()
            {
                var e=document.getElementById("inputEdge1").value,
                t=document.getElementById("inputEdge2").value,
                n=document.getElementById("inputEdge3").value,
                a=document.getElementById("txtEdge"),
                c=Math.sqrt(Math.pow(t,2)+Math.pow(n,2)),
                u=Math.sqrt(Math.pow(e,2)+Math.pow(n,2)),
                m=Math.sqrt(Math.pow(e,2)+Math.pow(t,2));
                a.innerHTML=e==t&&t==n?"Hình tam giác đều":e==t||t==n||e==n?"Hình tam giác cân":e==c||t==u||n==m?"Hình tam giác vuông":"Một loại tam giác nào đó"
            }