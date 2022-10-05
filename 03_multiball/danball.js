var c = 0,
  e = 0,
  ca = 0,
  da = 0,
  ea = 0,
  fa = 0,
  na = 0,
  oa = 15,
  sa = 0,
  ta = 0,
  va = 0,
  wa = 1,
  xa = 0,
  ya = 0,
  za = !1,
  Aa = 2,
  Ca = 0,
  Da = 2,
  Fa = new Ea(),
  Ga = new Ea(),
  Ha = Array(3),
  Ja = new Ea(),
  La = 0;
function Ma() {
  if (!La) {
    var b;
    Na(Oa);
    Pa.width = 400;
    Pa.height = 400;
    for (b = 0; 513 > b; b++) Qa[b] = Array(2);
    for (b = 0; 512 > b; b++) {
      var a = (((360 * b) / 512) * Ra) / 180;
      Qa[b][0] = Math.cos(a);
      Qa[b][1] = Math.sin(a);
    }
    Qa[b][0] = Qa[0][0];
    Qa[b][1] = Qa[0][1];
    for (b = 0; 256 > b; b++) (Sa[b] = !1), (Va[b] = !1), (Wa[b] = !1);
    Ya = gb = Date.now();
    hb = gb + mb;
    nb = gb;
    for (b = 0; 16e4 > b; b++) k[b] = 4278190080;
    r.m("font.gif", 8, 16);
    Ga.m("duck.gif");
    Ha[0] = new Ea();
    ob(Ha[0], 351, 261);
    Ha[1] = new Ea();
    Ha[1].m("bg0.jpg");
    Ha[2] = new Ea();
    Ha[2].m("bg1.jpg");
    Ja.m("bg0.gif");
    pb() ? La-- : La++;
  }
  1 == La &&
    (qb(r.u), qb(Ga), qb(Ha[1]), qb(Ha[2]), qb(Ja), rb ? sb(Ma, tb()) : La++);
  if (2 == La) {
    for (a = b = 0; 261 > a; a++)
      for (var d = (a % Ja.u) * Ja.i, g = 0; 351 > g; g++)
        Ha[0].c[b++] = Ja.c[d + (g % Ja.i)];
    ub.m();
    b = 8;
    a = 300;
    vb();
    B(r, b, a + 0, "R", 0, 4294901760);
    B(r, b, a + 20, "G", 0, 4278255360);
    B(r, b, a + 40, "B", 0, 4278190335);
    for (d = 0; 16 > d; d++)
      wb(b + 10 + 10 * d, a + 0, 8, 16, ((16 * d + 8) << 16) | -16777216);
    for (d = 0; 16 > d; d++)
      wb(b + 10 + 10 * d, a + 20, 8, 16, ((16 * d + 8) << 8) | -16777216);
    for (d = 0; 16 > d; d++)
      wb(b + 10 + 10 * d, a + 40, 8, 16, -16777216 | (16 * d + 8));
    B(r, b, a + 60, "Mix:", 0, 4278190080);
    B(r, b, a + 60, "    non RGB HSV", 0, 4286611584);
    b = 220;
    a = 300;
    B(r, b, a + 0, " Water", 4294967295, 4278190080);
    B(r, b, a + 16, " Paint", 4294967295, 4278190080);
    B(r, b, a + 32, " Cloud", 4294967295, 4278190080);
    B(r, b, a + 48, " Magma", 4294967295, 4278190080);
    B(r, b, a + 64, " Ice", 4294967295, 4278190080);
    B(r, b, a + 80, " Wall", 4294967295, 4278190080);
    B(r, b + 56, a + 0, " Bomb", 4294967295, 4278190080);
    B(r, b + 56, a + 16, " TBomb", 4294967295, 4278190080);
    B(r, b + 56, a + 32, " Duck", 4294967295, 4278190080);
    B(r, b + 56, a + 48, " Clear", 4294967295, 4278190080);
    B(r, b + 112, a + 0, " Hit", 4294967295, 4278190080);
    B(r, b + 112, a + 16, " BH", 4294967295, 4278190080);
    B(r, b + 112, a + 32, " BG", 4294967295, 4278190080);
    B(r, b + 112, a + 48, " AB", 4294967295, 4278190080);
    d = r;
    d.i = -1;
    B(d, b + 112, a + 64, " Line", 4294967295, 4278190080);
    d.i = 0;
    B(r, b + 112, a + 80, " Reset", 4294967295, 4278190080);
    B(r, 8, 380, Oa, 4290570231, 4280714208);
    wb(50, 4, 12, 12, -16776961);
    wb(100, 4, 12, 12, -3618561);
    wb(150, 4, 12, 12, -7468539);
    wb(200, 4, 12, 12, -256);
    yb(250, 4, 11, 11, 4278190080);
    ob(Fa, 400, 400);
    for (d = 0; 16e4 > d; d++) Fa.c[d] = k[d];
    zb();
  }
}
function Ab() {
  this.a = new D();
  this.g = new D();
  this.dir = new D();
  this.w = new D();
  this.b = this.r = 0;
  this.f = 0.96875;
  this.j = this.time = this.state = this.o = this.s = this.v = 0;
}
Ab.prototype.set = function (b, a, d, g, n, h, p) {
  this.a.set(b);
  this.g.set(a);
  Bb(this.dir, b.x, b.y + 1);
  this.w.set(this.dir);
  this.r = d;
  this.b = g;
  this.f = n;
  this.state = h;
  this.time = p;
  this.j = 0;
};
function Cb(b) {
  var a = E[--K];
  b.a.set(a.a);
  b.g.set(a.g);
  b.dir.set(a.dir);
  b.w.set(a.w);
  b.r = a.r;
  b.b = a.b;
  b.f = a.f;
  b.v = a.v;
  b.s = a.s;
  b.o = a.o;
  b.state = a.state;
  b.time = a.time;
  b.j = a.j;
}
var ub = new Db(),
  K = 160,
  E = Array(999),
  L = Array(1200),
  M = Array(1200),
  T = Array(1200),
  U = Array(1200),
  Eb = Array(1200);
function Db() {}
Db.prototype.m = function () {
  var b;
  K = 160;
  for (b = 0; 999 > b; b++) E[b] = new Ab();
  for (b = 0; b < K; b++) Bb(E[b].a, b % 40, 29 - X(b / 40));
  for (b = 0; b < K; b++) E[b].g.set(E[b].a);
  for (b = 0; 1200 > b; b++) Eb[b] = 0;
  for (b = 0; 30 > b; b++) Eb[40 * b + 40 - 1] = 1;
  for (b = 0; 40 > b; b++) Eb[1160 + b] = 1;
};
function Mb(b, a) {
  switch (wa) {
    case 1:
      var d = b.r,
        g = b.b,
        n = b.f;
      b.r = 0.9 * b.r + 0.1 * a.r;
      b.b = 0.9 * b.b + 0.1 * a.b;
      b.f = 0.9 * b.f + 0.1 * a.f;
      a.r = 0.9 * a.r + 0.1 * d;
      a.b = 0.9 * a.b + 0.1 * g;
      a.f = 0.9 * a.f + 0.1 * n;
      break;
    case 2:
      var d = Nb(b.r, b.b, b.f),
        g = Rb(b.r, b.b, b.f),
        n = Sb(b.r, b.b, b.f),
        h = Nb(a.r, a.b, a.f),
        p = Rb(a.r, a.b, a.f),
        v = Sb(a.r, a.b, a.f),
        Q = 0.9 * d + 0.1 * h,
        R = 0.9 * g + 0.1 * p,
        O = 0.9 * n + 0.1 * v,
        h = 0.9 * h + 0.1 * d,
        p = 0.9 * p + 0.1 * g,
        v = 0.9 * v + 0.1 * n;
      b.r = Tb(Q, R, O);
      b.b = Ub(Q, R, O);
      b.f = Vb(Q, R, O);
      a.r = Tb(h, p, v);
      a.b = Ub(h, p, v);
      a.f = Vb(h, p, v);
  }
}
function Wb(b, a, d) {
  return (
    -16777216 |
    (X(85 * (M[b] + M[a] + M[d])) << 16) |
    (X(85 * (T[b] + T[a] + T[d])) << 8) |
    X(85 * (U[b] + U[a] + U[d]))
  );
}
function Xb(b, a) {
  return (
    -16777216 |
    (X(127.5 * (M[b] + M[a])) << 16) |
    (X(127.5 * (T[b] + T[a])) << 8) |
    X(127.5 * (U[b] + U[a]))
  );
}
function Yb(b) {
  return (
    -16777216 | (X(255 * M[b]) << 16) | (X(255 * T[b]) << 8) | X(255 * U[b])
  );
}
var Zb = document,
  $b = window,
  Pa = Zb.getElementById("cv"),
  ac = Pa.getContext("2d"),
  bc = ac.createImageData(400, 400),
  cc = new Uint32Array(bc.data.buffer),
  dc = $b.console,
  Y = String.fromCharCode,
  sb = setTimeout,
  ec = location.hostname;
$b.fff = fc;
function fc(b, a, d) {
  Pa = Zb.getElementById("cv");
  ac = Pa.getContext("2d");
  ac.putImageData(b, a, d);
}
$b.fff = Na;
function Na(b) {
  try {
    dc.log(b);
  } catch (a) {}
}
$b.Init = Ma;
var Oa = Y(
    67,
    111,
    112,
    121,
    114,
    105,
    103,
    104,
    116,
    40,
    67,
    41,
    32,
    50,
    48,
    48,
    54,
    32,
    104,
    97,
    53,
    53,
    105,
    105
  ),
  gc = Y(46, 47, 100, 97, 116, 97, 47),
  hc = Y(102, 112, 115),
  ic = Y(99, 97, 110, 118, 97, 115),
  jc = Y(50, 100),
  kc = 0,
  lc = Y(100, 97, 110, 45, 98, 97, 108, 108, 46, 106, 112),
  k = Array(16e4),
  qc = Array(400),
  Ec = Array(400),
  Ic = Array(400),
  Jc = Array(400),
  Kc = Array(400),
  Lc = Array(400);
function zb() {
  Mc = 0 == Nc && 1 == Oc;
  Pc = 1 == Nc && 0 == Oc;
  Qc = 0 == Rc && 1 == Sc;
  Nc = Oc;
  Rc = Sc;
  Tc = Mc ? 1 : Qc ? -1 : 0;
  Oc ? Uc++ : (Uc = 0);
  Vc = Wc;
  kd = ld;
  Wc = md;
  ld = nd;
  od = pd;
  qd = rd;
  pd = (Wc - 24) / 9;
  rd = (ld - 20) / 9;
  for (var b = 0; 256 > b; b++) (Sa[b] = Va[b]), (Va[b] = !1);
  if (0 < sd) sd++;
  else {
    vb();
    yb(23, 19, 353, 263, 4278190080);
    var a,
      d,
      g,
      n,
      h = new D(),
      p;
    if (!za)
      for (a = 0; a < K; a++)
        if (0 == E[a].state) td(E[a].a, E[a].g, 0.01, 0.999);
        else if (2 == E[a].state) {
          if (
            (td(E[a].a, E[a].g, -0.01, 0.9),
            E[a].a.y < e && E[a].time--,
            0 > E[a].time)
          ) {
            var v = ud(E[a].r - 0.3, 0.03125),
              Q = ud(E[a].b - 0.3, 0.03125),
              R = ud(E[a].f - 0.3, 0.03125);
            E[a].set(E[a].a, E[a].a, v, Q, R, 0, 0);
          }
        } else if (1 == E[a].state) {
          td(E[a].a, E[a].g, 0.01, 0.99);
          td(E[a].dir, E[a].w, 0.01, 0.99);
          var O = E[a].a,
            pa = E[a].dir,
            Xa = 1,
            Fb = 0.1,
            Xc = 0.5;
          vd(wd, O, pa);
          Xa -= xd(wd);
          Fb *= Xa;
          Xc *= Xa;
          O.x += wd.x * Fb;
          O.y += wd.y * Fb;
          pa.x -= wd.x * Xc;
          pa.y -= wd.y * Xc;
          0 < E[a].time && E[a].time--;
          0 > E[a].time && E[a].time++;
          p = E[a].a.x - E[a].g.x;
          0 == E[a].j && 0.15 < p
            ? (E[a].j = 1)
            : 1 == E[a].j && -0.15 > p && (E[a].j = 0);
        } else if (3 == E[a].state)
          1 > 300 * Math.random() && (E[a].time = 50),
            0 < E[a].time &&
              (E[a].time--,
              (E[a].r = yd(E[a].r + 0.06, 1)),
              (E[a].b = yd(E[a].b + 0.02, 1))),
            (E[a].r *= 0.97),
            (E[a].b *= 0.97),
            (E[a].f *= 0.97);
        else if (4 == E[a].state)
          1 > 100 * Math.random() && (E[a].time = 50),
            0 < E[a].time &&
              (E[a].time--,
              (E[a].r = 0.95 * E[a].r + 0.05 * E[a].v),
              (E[a].b = 0.95 * E[a].b + 0.05 * E[a].s),
              (E[a].f = 0.95 * E[a].f + 0.05 * E[a].o)),
            (E[a].r = 0.99 - 0.92 * (0.99 - E[a].r)),
            (E[a].b = 0.99 - 0.92 * (0.99 - E[a].b)),
            (E[a].f = 0.99 - 0.92 * (0.99 - E[a].f));
        else if (
          5 == E[a].state &&
          (td(E[a].a, E[a].g, 0.02, 0.999),
          1 > 2 * Math.random() && (E[a].r = yd(E[a].r + 1 * Math.random(), 1)),
          1 > 8 * Math.random() && (E[a].b = yd(E[a].b + 1 * Math.random(), 1)),
          (E[a].r *= 0.9),
          (E[a].b *= 0.9),
          E[a].time--,
          0 == E[a].time)
        ) {
          for (n = 0; n < K; n++)
            vd(h, E[n].a, E[a].a),
              (v = 10),
              zd(h) > v * v ||
                (4 == E[n].state &&
                  25 > zd(h) &&
                  E[n].set(E[n].a, E[n].a, E[n].v, E[n].s, E[n].o, 0, 0),
                (p = (v - xd(h)) / v),
                (p *= p),
                Ad(h, p),
                E[n].a.add(h));
          Cb(E[a--]);
        }
    if (300 > ld) {
      var ga = new D();
      Bb(ga, pd, rd);
      for (a = 0; a < K; a++)
        vd(h, E[a].a, ga),
          zd(h) >= Aa * Aa ||
            (za ||
              Nc ||
              ((p = 0.25 * (Aa - xd(h))),
              Ad(h, p),
              E[a].a.add(h),
              4 == E[a].state &&
                E[a].set(E[a].a, E[a].a, E[a].v, E[a].s, E[a].o, 0, 0)),
            1 == ea
              ? Nc && ((E[a].r = sa), (E[a].b = ta), (E[a].f = va))
              : 9 == ea && Nc && Cb(E[a--]));
      if (13 == ea && !za && Nc)
        for (a = 0; a < K; a++)
          vd(h, E[a].a, ga),
            (p = xd(h)),
            Ad(h, (1 / p) * Da * 0.1),
            E[a].a.sub(h),
            0.5 > p && Cb(E[a--]);
      ga.x = Bd(ga.x, 0, 38.9);
      ga.y = Bd(ga.y, 0, 28.9);
      switch (ea) {
        case 0:
        case 2:
        case 3:
        case 4:
          if (Nc && 999 > K)
            for (
              h.x = ga.x + (0.18 * Math.random() + -0.09),
                h.y = ga.y + (0.18 * Math.random() + -0.09),
                0 == ea
                  ? E[K].set(h, h, sa, ta, va, 0, 0)
                  : 2 == ea
                  ? E[K].set(h, h, sa, ta, va, 2, 50)
                  : 3 == ea
                  ? E[K].set(h, h, 0, 0, 0, 3, 10)
                  : 4 == ea &&
                    (E[K].set(h, h, sa, ta, va, 4, 0),
                    (E[K].v = sa),
                    (E[K].s = ta),
                    (E[K].o = va)),
                K++,
                a = 0;
              a < K;
              a++
            )
              vd(h, E[a].a, ga), 4 > zd(h) && E[a].g.set(E[a].a);
          break;
        case 9:
        case 5:
          if (Nc) {
            var mc = new D();
            Bb(mc, od - c, qd - e);
            Bb(h, pd - od, rd - qd);
            p = Cd(h) + 1;
            var Md = X(p);
            h.x /= Md;
            h.y /= Md;
            for (a = 0; a < X(p); a++)
              mc.add(h),
                (d = X(Bd(mc.x, 0, 38))),
                (g = X(Bd(mc.y, 0, 28))),
                9 == ea
                  ? (Eb[40 * g + d] = 0)
                  : 5 == ea && (Eb[40 * g + d] = 1);
          }
          break;
        case 6:
          if (Pc && !za)
            for (a = 0; a < K; a++)
              vd(h, E[a].a, ga),
                (v = 20),
                zd(h) < v * v &&
                  ((p = (v - xd(h)) / v), (p *= p), Ad(h, p), E[a].a.add(h));
          break;
        case 8:
          Mc && 999 > K && (E[K].set(ga, ga, 0, 0, 0, 1, 0), K++);
          break;
        case 7:
          Mc && 999 > K && (E[K].set(ga, ga, 0, 0, 0, 5, 100), K++);
      }
    }
    if (!za) {
      for (a = K - 1; 0 <= a; a--)
        for (n = a - 1; 0 <= n; n--)
          if (
            ((h.x = E[a].a.x - E[n].a.x),
            !(
              -1 > h.x ||
              1 < h.x ||
              ((h.y = E[a].a.y - E[n].a.y), -1 > h.y || 1 < h.y || 1 < zd(h))
            ))
          ) {
            var x = E[a],
              N = E[n];
            E[a].state > E[n].state &&
              ((x = E[n]), (N = E[a]), (h.x = -h.x), (h.y = -h.y));
            p = 0.25 * (1 - xd(h));
            Ad(h, p);
            var aa = 6 * x.state + N.state;
            0 == aa
              ? ((x.a.x += h.x),
                (x.a.y += 0 < h.y ? 0.9 * h.y : h.y),
                (N.a.x -= h.x),
                (N.a.y -= 0 > h.y ? 0.9 * h.y : h.y),
                Mb(x, N))
              : 1 == aa
              ? (x.a.add(h), 0 > h.y && (h.y = 0.005), N.a.sub(h))
              : 2 == aa
              ? (x.a.add(h), 0 > h.y && (h.y = 0.005), N.a.sub(h))
              : 3 == aa
              ? ((v = yd(x.r + 0.3, 0.96875)),
                (Q = yd(x.b + 0.3, 0.96875)),
                (R = yd(x.f + 0.3, 0.96875)),
                x.set(x.a, x.a, v, Q, R, 2, 50))
              : 4 == aa
              ? x.a.y + 0.2 < N.a.y
                ? (x.set(x.a, x.a, x.r, x.b, x.f, 4, 0),
                  (x.v = x.r),
                  (x.s = x.b),
                  (x.o = x.f))
                : x.a.add(h)
              : 5 == aa
              ? (x.a.add(h), N.a.sub(h))
              : 7 == aa
              ? (x.a.add(h), N.a.sub(h))
              : 8 == aa
              ? (x.a.add(h), N.a.sub(h))
              : 9 == aa
              ? (xd(h), Ad(h, 0.5), x.a.add(h), (x.time = 20))
              : 10 == aa
              ? (x.a.add(h), (x.time = -20))
              : 11 == aa
              ? (x.a.add(h), N.a.sub(h))
              : 14 == aa
              ? (x.a.add(h), N.a.sub(h), Mb(x, N))
              : 17 == aa
              ? (x.a.add(h), Ad(h, 0.5), N.a.sub(h))
              : 21 == aa
              ? Mb(x, N)
              : 22 == aa
              ? N.set(N.a, N.a, N.v, N.s, N.o, 0, 0)
              : 23 == aa
              ? (N.time = 1)
              : 28 == aa
              ? Mb(x, N)
              : 29 == aa && N.a.sub(h);
          }
      for (a = X(10 * Math.random()); a < K; a += 10)
        (E[a].a.x += 0.002 * Math.random() + -0.001),
          (E[a].a.y += 0.002 * Math.random() + -0.001);
      for (a = 0; a < K; a++) {
        var Yc = E[a].a,
          Zc = E[a].g,
          Nd = c - ca,
          Od = e - da,
          Za = new D();
        Za.x = Yc.x - (Zc.x + Nd);
        Za.y = Yc.y - (Zc.y + Od);
        var Pd = X(Cd(Za) / 0.24 + 1),
          nc = Za,
          Qd = Pd;
        nc.x /= Qd;
        nc.y /= Qd;
        var V = new D();
        V.set(Zc);
        V.x -= c;
        V.y -= e;
        V.x += Nd;
        V.y += Od;
        for (var oc = new D(), pc = new D(), Rd = 0; Rd < Pd; Rd++) {
          V.add(Za);
          var $a = X(Bd(V.x, 0, 39)),
            ab = X(Bd(V.y, 0, 29)),
            Gb = 0;
          0 > Za.x
            ? 1 == Eb[40 * ab + ud(0, $a - 1)] &&
              (Gb += Dd(V, Bb(oc, $a, ab), Bb(pc, 1, 0)))
            : 1 == Eb[40 * ab + yd(39, $a + 1)] &&
              (Gb += Dd(V, Bb(oc, $a + 1, ab), Bb(pc, -1, 0)));
          0 > Za.y
            ? 1 == Eb[40 * ud(0, ab - 1) + $a] &&
              (Gb += Dd(V, Bb(oc, $a, ab), Bb(pc, 0, 1)))
            : 1 == Eb[40 * yd(29, ab + 1) + $a] &&
              (Gb += Dd(V, Bb(oc, $a, ab + 1), Bb(pc, 0, -1)));
          0 != Gb && Ad(Za, 1);
        }
        V.x += c;
        V.y += e;
        Yc.set(V);
      }
      ca = c;
      da = e;
      if (Rc)
        for (c += (Wc - Vc) / 9, e += (ld - kd) / 9, a = 0; a < K; a++)
          if (3 == E[a].state || 4 == E[a].state)
            (E[a].a.x += c - ca),
              (E[a].a.y += e - da),
              (E[a].g.x = E[a].a.x),
              (E[a].g.y = E[a].a.y);
      for (a = 0; a < K; a++)
        E[a].a.x < c && ((E[a].g.x += (c - E[a].a.x) / 2), (E[a].a.x = c)),
          E[a].a.x > c + 40 - 1.1 &&
            ((E[a].g.x += (c + 40 - 1.1 - E[a].a.x) / 2),
            (E[a].a.x = c + 40 - 1.1)),
          E[a].a.y < e && ((E[a].g.y += (e - E[a].a.y) / 2), (E[a].a.y = e)),
          E[a].a.y > e + 30 - 1.1 &&
            ((E[a].g.y += (e + 30 - 1.1 - E[a].a.y) / 2),
            (E[a].a.y = e + 30 - 1.1));
    }
    var l,
      f,
      m,
      q,
      A,
      y,
      w,
      t,
      Ia = new D(),
      ba;
    for (l = 0; 1200 > l; l++) (L[l] = 0), (M[l] = 2), (T[l] = 2), (U[l] = 2);
    for (l = 0; l < K; l++)
      1 != E[l].state &&
        ((f = X(E[l].a.x - c)),
        (m = X(E[l].a.y - e)),
        (Ia.x = E[l].a.x - c - f),
        (Ia.y = E[l].a.y - e - m),
        (ba = 1.2 - Cd(Ia)),
        (q = 40 * m + f),
        0 < ba &&
          ((L[q] += ba * ba),
          (M[q] = E[l].r),
          (T[q] = E[l].b),
          (U[q] = E[l].f)),
        --Ia.x,
        (ba = 1.2 - Cd(Ia)),
        q++,
        0 < ba &&
          ((L[q] += ba * ba),
          (M[q] = E[l].r),
          (T[q] = E[l].b),
          (U[q] = E[l].f)),
        --Ia.y,
        (ba = 1.2 - Cd(Ia)),
        (q += 40),
        0 < ba &&
          ((L[q] += ba * ba),
          (M[q] = E[l].r),
          (T[q] = E[l].b),
          (U[q] = E[l].f)),
        (Ia.x += 1),
        (ba = 1.2 - Cd(Ia)),
        q--,
        0 < ba &&
          ((L[q] += ba * ba),
          (M[q] = E[l].r),
          (T[q] = E[l].b),
          (U[q] = E[l].f)));
    for (l = m = 0; 30 > m; m++, l++)
      for (f = 0; 39 > f; f++, l++)
        (L[l] += 0.1 * L[l + 1]),
          6 == M[l] + T[l] + U[l] &&
            ((M[l] = M[l + 1]), (T[l] = T[l + 1]), (U[l] = U[l + 1]));
    m = 0;
    for (l = 1199; 30 > m; m++, l--)
      for (f = 0; 39 > f; f++, l--)
        (L[l] += 0.1 * L[l - 1]),
          6 == M[l] + T[l] + U[l] &&
            ((M[l] = M[l - 1]), (T[l] = T[l - 1]), (U[l] = U[l - 1]));
    for (l = m = 0; 29 > m; m++)
      for (f = 0; 40 > f; f++, l++)
        (L[l] += 0.1 * L[l + 40]),
          6 == M[l] + T[l] + U[l] &&
            ((M[l] = M[l + 40]), (T[l] = T[l + 40]), (U[l] = U[l + 40]));
    m = 0;
    for (l = 1199; 29 > m; m++)
      for (f = 0; 40 > f; f++, l--)
        (L[l] += 0.1 * L[l - 40]),
          6 == M[l] + T[l] + U[l] &&
            ((M[l] = M[l - 40]), (T[l] = T[l - 40]), (U[l] = U[l - 40]));
    l = 0;
    y = 1;
    w = 41;
    t = 40;
    for (m = 0; 29 > m; m++) {
      for (f = 0; 39 > f; f++)
        0.3 < L[l]
          ? 0.3 < L[y]
            ? 0.3 < L[w]
              ? 0.3 < L[t]
                ? Ed(
                    f,
                    m,
                    1,
                    1,
                    -16777216 |
                      (X(63.75 * (M[l] + M[y] + M[w] + M[t])) << 16) |
                      (X(63.75 * (T[l] + T[y] + T[w] + T[t])) << 8) |
                      X(63.75 * (U[l] + U[y] + U[w] + U[t]))
                  )
                : ((A = Wb(l, y, w)),
                  Ed(f, m, 1, L[t] / 0.3, A),
                  Fd(f, m + L[t] / 0.3, f + 1 - L[t] / 0.3, m + 1, f + 1, A))
              : 0.3 < L[t]
              ? ((A = Wb(l, y, t)),
                Ed(f, m, 1, L[w] / 0.3, A),
                Gd(f + 1, m + L[w] / 0.3, f + L[w] / 0.3, m + 1, f, A))
              : ((A = Xb(l, y)),
                L[t] / 0.3 < L[w] / 0.3
                  ? (Ed(f, m, 1, L[t] / 0.3, A),
                    Fd(f, m + L[t] / 0.3, f + 1, m + L[w] / 0.3, f + 1, A))
                  : (Ed(f, m, 1, L[w] / 0.3, A),
                    Gd(f + 1, m + L[w] / 0.3, f, m + L[t] / 0.3, f, A)))
            : 0.3 < L[w]
            ? 0.3 < L[t]
              ? ((A = Wb(l, w, t)),
                Ed(f, m + 1 - L[y] / 0.3, 1, L[y] / 0.3, A),
                Gd(f + L[y] / 0.3, m, f + 1, m + 1 - L[y] / 0.3, f, A))
              : ((A = Xb(l, w)),
                Gd(f + L[y] / 0.3, m, f, m + L[t] / 0.3, f, A),
                Fd(
                  f + 1,
                  m + 1 - L[y] / 0.3,
                  f + 1 - L[t] / 0.3,
                  m + 1,
                  f + 1,
                  A
                ))
            : 0.3 < L[t]
            ? ((A = Xb(l, t)),
              Gd(f + L[y] / 0.3, m, f + L[w] / 0.3, m + 1, f, A))
            : ((A = Yb(l)), Gd(f + L[y] / 0.3, m, f, m + L[t] / 0.3, f, A))
          : 0.3 < L[y]
          ? 0.3 < L[w]
            ? 0.3 < L[t]
              ? ((A = Wb(y, w, t)),
                Ed(f, m + 1 - L[l] / 0.3, 1, L[l] / 0.3, A),
                Fd(f + 1 - L[l] / 0.3, m, f, m + 1 - L[l] / 0.3, f + 1, A))
              : ((A = Xb(y, w)),
                Fd(f + 1 - L[l] / 0.3, m, f + 1 - L[t] / 0.3, m + 1, f + 1, A))
            : 0.3 < L[t]
            ? ((A = Xb(y, t)),
              Fd(f + 1 - L[l] / 0.3, m, f + 1, m + L[w] / 0.3, f + 1, A),
              Gd(f, m + 1 - L[l] / 0.3, f + L[w] / 0.3, m + 1, f, A))
            : ((A = Yb(y)),
              Fd(f + 1 - L[l] / 0.3, m, f + 1, m + L[w] / 0.3, f + 1, A))
          : 0.3 < L[w]
          ? 0.3 < L[t]
            ? ((A = Xb(w, t)),
              L[l] / 0.3 < L[y] / 0.3
                ? (Fd(
                    f + 1,
                    m + 1 - L[y] / 0.3,
                    f,
                    m + 1 - L[l] / 0.3,
                    f + 1,
                    A
                  ),
                  Ed(f, m + 1 - L[l] / 0.3, 1, L[l] / 0.3, A))
                : (Gd(f, m + 1 - L[l] / 0.3, f + 1, m + 1 - L[y] / 0.3, f, A),
                  Ed(f, m + 1 - L[y] / 0.3, 1, L[y] / 0.3, A)))
            : ((A = Yb(w)),
              Fd(
                f + 1,
                m + 1 - L[y] / 0.3,
                f + 1 - L[t] / 0.3,
                m + 1,
                f + 1,
                A
              ))
          : 0.3 < L[t] &&
            ((A = Yb(t)),
            Gd(f, m + 1 - L[l] / 0.3, f + L[w] / 0.3, m + 1, f, A)),
          l++,
          y++,
          w++,
          t++;
      l++;
      y++;
      w++;
      t++;
    }
    if (0 != ya) {
      var S = Ha[ya - 1],
        F = 0,
        la = X(8024),
        G,
        H,
        I,
        ha,
        ia,
        ja;
      switch (xa) {
        case 0:
          for (m = 0; 261 > m; m++, la += 400)
            for (q = la, f = 0; 351 > f; f++, q++, F++)
              4294967295 == k[q] && (k[q] = S.c[F]);
          break;
        case 1:
          for (m = 0; 261 > m; m++, la += 400)
            for (q = la, f = 0; 351 > f; f++, q++, F++)
              4294967295 == k[q]
                ? (k[q] = S.c[F])
                : ((ha = (k[q] >> 16) & 255),
                  (ia = (k[q] >> 8) & 255),
                  (ja = k[q] & 255),
                  (G = (S.c[F] >> 16) & 255),
                  (H = (S.c[F] >> 8) & 255),
                  (I = S.c[F] & 255),
                  (G = X(0.5 * ha + 0.5 * G)),
                  (H = X(0.5 * ia + 0.5 * H)),
                  (I = X(0.5 * ja + 0.5 * I)),
                  (k[q] = -16777216 | (G << 16) | (H << 8) | I));
          break;
        case 2:
          for (m = 0; 261 > m; m++, la += 400)
            for (q = la, f = 0; 351 > f; f++, q++, F++)
              4294967295 == k[q]
                ? (k[q] = S.c[F])
                : ((ha = (k[q] >> 16) & 255),
                  (ia = (k[q] >> 8) & 255),
                  (ja = k[q] & 255),
                  (G = (S.c[F] >> 16) & 255),
                  (H = (S.c[F] >> 8) & 255),
                  (I = S.c[F] & 255),
                  (G = 255 < ha + G ? 255 : ha + G),
                  (H = 255 < ia + H ? 255 : ia + H),
                  (I = 255 < ja + I ? 255 : ja + I),
                  (k[q] = -16777216 | (G << 16) | (H << 8) | I));
          break;
        case 3:
          for (m = 0; 261 > m; m++, la += 400)
            for (q = la, f = 0; 351 > f; f++, q++, F++)
              4294967295 == k[q]
                ? (k[q] = S.c[F])
                : ((ha = (k[q] >> 16) & 255),
                  (ia = (k[q] >> 8) & 255),
                  (ja = k[q] & 255),
                  (G = (S.c[F] >> 16) & 255),
                  (H = (S.c[F] >> 8) & 255),
                  (I = S.c[F] & 255),
                  (G = 0 > G - ha ? 0 : G - ha),
                  (H = 0 > H - ia ? 0 : H - ia),
                  (I = 0 > I - ja ? 0 : I - ja),
                  (k[q] = -16777216 | (G << 16) | (H << 8) | I));
          break;
        case 4:
          for (m = 0; 261 > m; m++, la += 400)
            for (q = la, f = 0; 351 > f; f++, q++, F++)
              4294967295 == k[q]
                ? (k[q] = S.c[F])
                : ((ha = (k[q] >> 16) & 255),
                  (ia = (k[q] >> 8) & 255),
                  (ja = k[q] & 255),
                  (G = (S.c[F] >> 16) & 255),
                  (H = (S.c[F] >> 8) & 255),
                  (I = S.c[F] & 255),
                  (G = X((ha * G) / 255)),
                  (H = X((ia * H) / 255)),
                  (I = X((ja * I) / 255)),
                  (k[q] = -16777216 | (G << 16) | (H << 8) | I));
          break;
        case 5:
          for (m = 0; 261 > m; m++, la += 400)
            for (q = la, f = 0; 351 > f; f++, q++, F++)
              4294967295 == k[q]
                ? (k[q] = S.c[F])
                : ((ha = (k[q] >> 16) & 255),
                  (ia = (k[q] >> 8) & 255),
                  (ja = k[q] & 255),
                  (G = (S.c[F] >> 16) & 255),
                  (H = (S.c[F] >> 8) & 255),
                  (I = S.c[F] & 255),
                  (G += X((ha * G) / 255)),
                  (H += X((ia * H) / 255)),
                  (I += X((ja * I) / 255)),
                  (G = 255 < G ? 255 : G),
                  (H = 255 < H ? 255 : H),
                  (I = 255 < I ? 255 : I),
                  (k[q] = -16777216 | (G << 16) | (H << 8) | I));
          break;
        case 6:
          for (m = 0; 261 > m; m++, la += 400)
            for (q = la, f = 0; 351 > f; f++, q++, F++)
              4294967295 == k[q]
                ? (k[q] = S.c[F])
                : ((ha = (k[q] >> 16) & 255),
                  (ia = (k[q] >> 8) & 255),
                  (ja = k[q] & 255),
                  (G = (S.c[F] >> 16) & 255),
                  (H = (S.c[F] >> 8) & 255),
                  (I = S.c[F] & 255),
                  (G = X(((255 - G) * ha + G * (255 - ha)) / 255)),
                  (H = X(((255 - H) * ia + H * (255 - ia)) / 255)),
                  (I = X(((255 - I) * ja + I * (255 - ja)) / 255)),
                  (k[q] = -16777216 | (G << 16) | (H << 8) | I));
      }
    }
    if (1 == Ca)
      for (l = 0, y = 1, w = 41, t = 40, m = 0; 29 > m; m++) {
        for (f = 0; 39 > f; f++)
          0.3 < L[l]
            ? 0.3 < L[y]
              ? 0.3 < L[w]
                ? 0.3 < L[t] || Hd(f + 1 - L[t] / 0.3, m + 1, f, m + L[t] / 0.3)
                : 0.3 < L[t]
                ? Hd(f + 1, m + L[w] / 0.3, f + L[w] / 0.3, m + 1)
                : Hd(f + 1, m + L[w] / 0.3, f, m + L[t] / 0.3)
              : 0.3 < L[w]
              ? 0.3 < L[t]
                ? Hd(f + L[y] / 0.3, m, f + 1, m + 1 - L[y] / 0.3)
                : (Hd(f + L[y] / 0.3, m, f, m + L[t] / 0.3),
                  Hd(f + 1 - L[t] / 0.3, m + 1, f + 1, m + 1 - L[y] / 0.3))
              : 0.3 < L[t]
              ? Hd(f + L[y] / 0.3, m, f + L[w] / 0.3, m + 1)
              : Hd(f + L[y] / 0.3, m, f, m + L[t] / 0.3)
            : 0.3 < L[y]
            ? 0.3 < L[w]
              ? 0.3 < L[t]
                ? Hd(f, m + 1 - L[l] / 0.3, f + 1 - L[l] / 0.3, m)
                : Hd(f + 1 - L[l] / 0.3, m, f + 1 - L[t] / 0.3, m + 1)
              : 0.3 < L[t]
              ? (Hd(f + 1, m + L[w] / 0.3, f + 1 - L[l] / 0.3, m),
                Hd(f, m + 1 - L[l] / 0.3, f + L[w] / 0.3, m + 1))
              : Hd(f + 1, m + L[w] / 0.3, f + 1 - L[l] / 0.3, m)
            : 0.3 < L[w]
            ? 0.3 < L[t]
              ? Hd(f, m + 1 - L[l] / 0.3, f + 1, m + 1 - L[y] / 0.3)
              : Hd(f + 1 - L[t] / 0.3, m + 1, f + 1, m + 1 - L[y] / 0.3)
            : 0.3 < L[t] && Hd(f, m + 1 - L[l] / 0.3, f + L[w] / 0.3, m + 1),
            l++,
            y++,
            w++,
            t++;
        l++;
        y++;
        w++;
        t++;
      }
    for (m = 0; 29 > m; m++)
      for (f = 0; 39 > f; f++)
        if (((l = 40 * m + f), 0 != Eb[l])) {
          for (var Hb = 1; 39 > f + Hb && 0 != Eb[l + Hb]; Hb++);
          Ed(f, m, Hb, 1, 4278190080);
          f += Hb - 1;
        }
    for (l = 0; l < K; l++)
      if (1 == E[l].state) {
        var W = l,
          ib = new D(),
          Ta = new D(),
          Ib = new D(),
          Jb = new D();
        vd(Ta, E[W].a, E[W].dir);
        0 == E[W].j ? Bb(ib, -Ta.x, -Ta.y) : Bb(ib, Ta.x, Ta.y);
        var rc = ib,
          je = rc.x;
        rc.x = rc.y;
        rc.y = -je;
        xd(ib);
        xd(Ta);
        Ad(ib, 1.65);
        Ad(Ta, 1.65);
        vd(Ib, Ta, ib);
        var Sd = Jb,
          Td = Ta,
          Ud = ib;
        Sd.x = Td.x + Ud.x;
        Sd.y = Td.y + Ud.y;
        var Vd;
        Vd =
          0 < E[W].time ? 4294901760 : 0 > E[W].time ? 4278255615 : 4294967040;
        E[W].a.x -= c;
        E[W].a.y -= e;
        var sc = 9 * (E[W].a.x + Ib.x) + 24,
          bb = 9 * (E[W].a.y + Ib.y) + 20,
          tc = 9 * (E[W].a.x + Jb.x) + 24,
          cb = 9 * (E[W].a.y + Jb.y) + 20,
          uc = 9 * (E[W].a.x - Ib.x) + 24,
          db = 9 * (E[W].a.y - Ib.y) + 20,
          vc = 9 * (E[W].a.x - Jb.x) + 24,
          eb = 9 * (E[W].a.y - Jb.y) + 20,
          Kb = Vd,
          wc = 0,
          xc = 0,
          yc = 32,
          zc = 0,
          Ac = 32,
          Bc = 32,
          Cc = 0,
          Dc = 32,
          sc = 65535 * (sc + 0.5),
          bb = 65535 * (bb + 0.5),
          tc = 65535 * (tc + 0.5),
          cb = 65535 * (cb + 0.5),
          uc = 65535 * (uc + 0.5),
          db = 65535 * (db + 0.5),
          vc = 65535 * (vc + 0.5),
          eb = 65535 * (eb + 0.5),
          wc = X(65535 * wc),
          xc = X(65535 * xc),
          yc = X(65535 * yc),
          zc = X(65535 * zc),
          Ac = X(65535 * Ac),
          Bc = X(65535 * Bc),
          Cc = X(65535 * Cc),
          Dc = X(65535 * Dc),
          Lb = void 0,
          Z = void 0,
          xb = void 0,
          $c = void 0,
          ad = void 0,
          bd = void 0,
          Wd = void 0,
          Xd = void 0,
          Yd = void 0,
          Zd = void 0,
          $d = void 0,
          cd = void 0,
          dd = void 0,
          ed = void 0,
          fd = void 0,
          fb = void 0,
          qa = 400,
          ra = 0;
        qa > X(bb) && (qa = X(bb));
        qa > X(cb) && (qa = X(cb));
        qa > X(db) && (qa = X(db));
        qa > X(eb) && (qa = X(eb));
        ra < X(bb) && (ra = X(bb));
        ra < X(cb) && (ra = X(cb));
        ra < X(db) && (ra = X(db));
        ra < X(eb) && (ra = X(eb));
        qa >>= 16;
        ra >>= 16;
        0 > qa && (qa = 0);
        400 <= ra && (ra = 399);
        for (Z = qa; Z <= ra; Z++) (qc[Z] = 400), (Ec[Z] = -1);
        Id(X(sc), X(bb), X(wc), X(xc), X(tc), X(cb), X(yc), X(zc));
        Id(X(tc), X(cb), X(yc), X(zc), X(uc), X(db), X(Ac), X(Bc));
        Id(X(uc), X(db), X(Ac), X(Bc), X(vc), X(eb), X(Cc), X(Dc));
        Id(X(vc), X(eb), X(Cc), X(Dc), X(sc), X(bb), X(wc), X(xc));
        cd = (Kb >> 24) & 255;
        Yd = (Kb >> 16) & 255;
        Zd = (Kb >> 8) & 255;
        $d = Kb & 255;
        for (Z = qa; Z <= ra; Z++)
          for (
            xb = 400 * Z + qc[Z],
              $c = Ec[Z] - qc[Z] + 1,
              Wd = X(X(Jc[Z] - Ic[Z]) / $c),
              Xd = X(X(Lc[Z] - Kc[Z]) / $c),
              ad = X(Ic[Z]),
              bd = X(Kc[Z]),
              Lb = qc[Z];
            Lb <= Ec[Z];
            Lb++, xb++, ad += Wd, bd += Xd
          )
            0 > Lb ||
              400 <= Lb ||
              ((fb = Ga.c[(bd >> 16) * Ga.i + (ad >> 16)]),
              Jd
                ? (fb = (cd * (fb & 255)) >> 8) && (k[xb] = Kd(k[xb], Kb, fb))
                : 0 != fb &&
                  ((dd = (Yd * ((fb & 16711680) >> 16)) >> 8),
                  (ed = (Zd * ((fb & 65280) >> 8)) >> 8),
                  (fd = ($d * (fb & 255)) >> 8),
                  (k[xb] = Ld
                    ? Kd(k[xb], (dd << 16) | (ed << 8) | fd, cd)
                    : 4278190080 | (dd << 16) | (ed << 8) | fd)));
        E[W].a.x += c;
        E[W].a.y += e;
      }
    if (300 > ld && 13 == ea && !za && Nc) {
      var gd = 9 * (pd - c) + 24,
        Ob = 9 * (rd - e) + 20,
        gd = gd + 0.5,
        Ob = Ob + 0.5,
        Fc = X(Ob - 4),
        Gc = X(Ob + 4) + 1;
      0 > Fc && (Fc = 0);
      400 < Gc && (Gc = 400);
      for (var jb = Fc; jb < Gc; jb++) (qc[jb] = 400), (Ec[jb] = -1);
      var Hc = X(8 * Ra),
        Pb;
      for (Pb = 3; 9 > Pb && !(1 << Pb > Hc); Pb++);
      for (
        var Hc = 1 << Pb, le = X(512 / Hc), hd = 0, Ka, ma, jb = 0;
        jb < Hc;
        jb++, hd += le
      ) {
        var me = Ob + 4 * Qa[hd][1];
        Ka = X(gd + 4 * Qa[hd][0]);
        ma = X(me);
        1 > ma ||
          399 <= ma ||
          (qc[ma] > Ka && (qc[ma] = Ka), Ec[ma] < Ka && (Ec[ma] = Ka));
      }
      for (ma = Fc; ma < Gc; ma++) {
        var id = 400 * ma + qc[ma];
        for (Ka = qc[ma]; Ka <= Ec[ma]; Ka++, id++)
          0 > Ka || 400 <= Ka || (k[id] = Ld ? Kd(k[id], 0, 0) : 0);
      }
    }
    var ua,
      u,
      J,
      P,
      z,
      C,
      ka = Wc,
      Ba = ld;
    z = X(9 * c);
    C = X(9 * e);
    if (0 < z)
      for (P = 119999, J = 299; 0 <= J; J--) {
        for (u = 399; u >= z; u--, P--) k[P] = k[P - z];
        for (; 0 <= u; u--, P--) k[P] = 4294967295;
      }
    if (0 > z)
      for (J = P = 0; 300 > J; J++) {
        for (u = 0; u < 400 + z; u++, P++) k[P] = k[P - z];
        for (; 400 > u; u++, P++) k[P] = 4294967295;
      }
    if (0 < C) {
      P = 159999;
      ua = 400 * C;
      for (J = 399; J >= C; J--)
        for (u = 399; 0 <= u; u--, P--) k[P] = k[P - ua];
      for (; 0 <= P; P--) k[P] = 4294967295;
    }
    if (0 > C) {
      P = 0;
      ua = 400 * C;
      for (J = 0; J < 400 + C; J++)
        for (u = 0; 400 > u; u++, P++) k[P] = k[P - ua];
      for (; 16e4 > P; P++) k[P] = 4294967295;
    }
    for (var Qb = 159999; 0 <= Qb; Qb--)
      4294967295 != Fa.c[Qb] && (k[Qb] = Fa.c[Qb]);
    z = 8;
    C = 300;
    z + 9 < ka &&
      ka < z + 169 &&
      C <= Ba &&
      Ba <= C + 16 &&
      ((u = X((ka - (z + 9)) / 10)),
      wb(z + 9 + 10 * u, C - 1, 10, 18, ((16 * u + 8) << 16) | -16777216),
      Nc && (fa = u));
    z + 9 < ka &&
      ka < z + 169 &&
      C + 20 <= Ba &&
      Ba <= C + 36 &&
      ((u = X((ka - (z + 9)) / 10)),
      wb(z + 9 + 10 * u, C + 19, 10, 18, ((16 * u + 8) << 8) | -16777216),
      Nc && (na = u));
    z + 9 < ka &&
      ka < z + 169 &&
      C + 40 <= Ba &&
      Ba <= C + 56 &&
      ((u = X((ka - (z + 9)) / 10)),
      wb(z + 9 + 10 * u, C + 39, 10, 18, -16777216 | (16 * u + 8)),
      Nc && (oa = u));
    u = z + 10 + 10 * fa;
    J = C + 0;
    ae(u, J, u + 7, J + 15, 4294967295);
    ae(u + 7, J, u, J + 15, 4294967295);
    u = z + 10 + 10 * na;
    J = C + 20;
    ae(u, J, u + 7, J + 15, 4294967295);
    ae(u + 7, J, u, J + 15, 4294967295);
    u = z + 10 + 10 * oa;
    J = C + 40;
    ae(u, J, u + 7, J + 15, 4294967295);
    ae(u + 7, J, u, J + 15, 4294967295);
    wb(
      z + 170,
      C + 0,
      30,
      56,
      -16777216 | ((16 * fa + 8) << 16) | ((16 * na + 8) << 8) | (16 * oa + 8)
    );
    sa = fa / 16 + 0.03125;
    ta = na / 16 + 0.03125;
    va = oa / 16 + 0.03125;
    z = 40;
    B(r, z + 32 * wa, C + 60, ["non", "RGB", "HSV", "YUV"][wa], 0, 4278190080);
    z < ka &&
      ka < z + 88 &&
      C + 60 <= Ba &&
      Ba <= C + 76 &&
      ((u = X((ka - z) / 32)),
      yb(z + 32 * u, C + 59, 24, 15, 4294901760),
      Tc && (wa = u));
    z = 220;
    C = 300;
    B(r, z + 56, C + 80, za ? " Start" : " Stop", 4294967295, 4278190080);
    B(r, z + 112, C + 0, "     " + Aa, 4294967295, 4278190080);
    B(r, z + 112, C + 16, "    " + Da, 4294967295, 4278190080);
    B(r, z + 112, C + 32, "    " + ya, 4294967295, 4278190080);
    B(
      r,
      z + 112,
      C + 48,
      "    " + "non half add sub mul hil rev".split(" ")[xa],
      4294967295,
      4278190080
    );
    var ne = z + 112,
      oe = C + 64,
      pe = "      " + ["off", "on"][Ca],
      jd = r;
    jd.i = -1;
    B(jd, ne, oe, pe, 4294967295, 4278190080);
    jd.i = 0;
    if (
      z <= ka &&
      ka < z + 168 &&
      C <= Ba &&
      Ba < C + 96 &&
      ((u = X((ka - z) / 56)),
      (J = X((Ba - C) / 16)),
      yb(z + 56 * u, C - 1 + 16 * J, 54, 16, 4294901760),
      Tc)
    ) {
      var Ua;
      Ua = Bd(6 * u + J, 0, 17);
      11 == Ua
        ? (za = !za)
        : 17 == Ua
        ? ((da = ca = e = c = 0), (za = !1), ub.m())
        : 12 == Ua
        ? (Aa = be(Aa + Tc, 0, 3))
        : 13 == Ua && 13 == ea
        ? (Da = be(Da + Tc, 1, 5))
        : 14 == Ua
        ? (ya = be(ya + Tc, 0, 3))
        : 15 == Ua
        ? (xa = be(xa + Tc, 0, 6))
        : 16 == Ua
        ? (Ca = 1 - Ca)
        : (ea = Ua);
    }
    wb(z + 56 * X(ea / 6) + 2, C + (ea % 6) * 16 + 5, 4, 4, 4294901760);
    var kb = Array(6);
    for (ua = 0; 5 > ua; ua++) kb[ua] = 0;
    for (ua = 0; ua < K; ua++) kb[E[ua].state]++;
    B(r, 65, 2, "" + kb[0], 4294967295, 4278190080);
    B(r, 115, 2, "" + kb[2], 4294967295, 4278190080);
    B(r, 165, 2, "" + kb[3], 4294967295, 4278190080);
    B(r, 215, 2, "" + kb[1], 4294967295, 4278190080);
    B(r, 265, 2, "" + kb[4], 4294967295, 4278190080);
    B(r, 2, 2, ce + hc, 0, 4286611584);
  }
  var lb,
    qe = 11 == kc ? 16e4 : 0;
  for (lb = 0; lb < qe; lb++)
    cc[lb] =
      4278190080 |
      ((k[lb] & 255) << 16) |
      (k[lb] & 65280) |
      ((k[lb] >> 16) & 255);
  fc(bc, 0, 0);
  sb(zb, tb());
}
var sd = 1;
function pb() {
  if (ec.length != lc.length) return !0;
  for (sd = 0; kc < ec.length; kc++) if (ec[kc] != lc[kc]) return !0;
  return !1;
}
var de = 0,
  ce = 0,
  mb = 20,
  gb,
  Ya,
  hb,
  nb,
  ee = 0;
function tb() {
  gb = Date.now();
  var b = Bd(hb - gb, 5, mb);
  de++;
  ee++;
  hb += mb;
  if (gb + b >= nb || gb < Ya)
    (ce = de), (de = 0), (hb = gb + mb), (nb = gb + 1e3);
  Ya = gb;
  return b;
}
var rb = 0;
function Ea() {
  this.h = 0;
  this.l = "";
  this.j = this.c = this.u = this.i = 0;
}
function ob(b, a, d) {
  b.i = a;
  b.u = d;
  for (a = 0; 16 > a; a++);
  b.c = Array(b.i * b.u);
}
Ea.prototype.m = function (b) {
  this.l != b &&
    (rb++,
    (this.l = b),
    (this.h = new Image()),
    (this.h.src = gc + b + "?2.5"),
    delete this.c,
    (this.j = this.c = 0));
};
function qb(b) {
  if (!b.j && b.h.complete) {
    rb--;
    var a = b.h.width,
      d = b.h.height;
    if (!a || !d) throw (delete b.h, (b.l = ""), fe);
    var g = Zb.createElement(ic);
    g.width = a;
    g.height = d;
    g = g.getContext(jc);
    g.drawImage(b.h, 0, 0);
    g = g.getImageData(0, 0, a, d).data;
    ob(b, a, d);
    a = 0;
    for (d = g.length; a < d; a += 4)
      b.c[a >> 2] =
        ((g[a + 3] << 24) | (g[a + 0] << 16) | (g[a + 1] << 8) | g[a + 2]) >>>
        0;
    delete b.h;
    b.j = 1;
  }
}
var ge = [
    [
      0, 2, 0, 0, 1, 0, 0, 2, 2, 1, 1, 1, 2, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 2, 2, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 1, 1, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0,
      0, 2, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 3, 1, 0,
    ],
    [
      0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0,
      0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0,
    ],
  ],
  he = [
    [
      0, 1, 1, 0, 0, 0, 0, 2, 1, 2, 0, 0, 2, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 2, 2, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 2, 1, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2,
      0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 1, 0,
    ],
    [
      0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1,
      0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0,
    ],
  ],
  r = new ie();
function ie() {
  this.u = new Ea();
  this.h = this.i = this.A = this.l = 0;
}
ie.prototype.m = function (b, a, d) {
  this.u.m(b);
  this.l = a;
  this.A = d;
  this.h = this.i = 0;
};
function B(b, a, d, g, n, h) {
  var p,
    v,
    Q,
    R,
    O,
    pa,
    Xa,
    Fb = g.length;
  for (p = 0; p < Fb; p++, a += b.l + b.i)
    if ((O = g.charCodeAt(p) - 32)) {
      0 != b.h && (a -= ge[b.h - 1][O]);
      pa = O * b.l;
      R = 400 * d + a;
      for (Q = 0; Q < b.A; Q++, R += 400 - b.l, pa += b.u.i - b.l)
        for (v = 0; v < b.l; v++, R++, pa++)
          (Xa = b.u.c[pa]),
            0 != Xa &&
              (4294967295 == Xa
                ? 0 != n && (k[R] = n)
                : 4278190080 == Xa && 0 != h && (k[R] = h));
      0 != b.h && (a -= he[b.h - 1][O]);
    }
  b.h = 0;
}
function vb() {
  for (var b = 159999; 0 <= b; b--) k[b] = 4294967295;
}
var Ld = 0;
function Kd(b, a, d) {
  var g = Ld,
    n = 0,
    h = 0,
    p = 0;
  1 == g
    ? ((g = (b >> 16) & 255),
      (n = (((((a >> 16) & 255) - g) * d) >> 8) + g),
      (g = (b >> 8) & 255),
      (h = (((((a >> 8) & 255) - g) * d) >> 8) + g),
      (g = b & 255),
      (p = ((((a & 255) - g) * d) >> 8) + g))
    : 2 == g
    ? ((n = ((((a >> 16) & 255) * d) >> 8) + ((b >> 16) & 255)),
      255 < n && (n = 255),
      (h = ((((a >> 8) & 255) * d) >> 8) + ((b >> 8) & 255)),
      255 < h && (h = 255),
      (p = (((a & 255) * d) >> 8) + (b & 255)),
      255 < p && (p = 255))
    : 3 == g
    ? ((n = ((b >> 16) & 255) - ((((a >> 16) & 255) * d) >> 8)),
      0 > n && (n = 0),
      (h = ((b >> 8) & 255) - ((((a >> 8) & 255) * d) >> 8)),
      0 > h && (h = 0),
      (p = (b & 255) - (((a & 255) * d) >> 8)),
      0 > p && (p = 0))
    : 4 == g
    ? ((n = (((a >> 16) & 255) * ((b >> 16) & 255)) >> 8),
      (h = (((a >> 8) & 255) * ((b >> 8) & 255)) >> 8),
      (p = ((a & 255) * (b & 255)) >> 8))
    : 5 == g
    ? ((g = (b >> 16) & 255),
      (n = g + ((((a >> 16) & 255) * g * d) >> 16)),
      255 < n && (n = 255),
      (g = (b >> 8) & 255),
      (h = g + ((((a >> 8) & 255) * g * d) >> 16)),
      255 < h && (h = 255),
      (g = b & 255),
      (p = g + (((a & 255) * g * d) >> 16)),
      255 < p && (p = 255))
    : 6 == g &&
      ((g = (b >> 16) & 255),
      (n = g + (d - ((2 * g * d) >> 8))),
      (g = (b >> 8) & 255),
      (h = g + (d - ((2 * g * d) >> 8))),
      (g = b & 255),
      (p = g + (d - ((2 * g * d) >> 8))));
  return (4278190080 | (n << 16) | (h << 8) | p) >>> 0;
}
var Jd = 0;
function ae(b, a, d, g, n) {
  d -= b;
  g -= a;
  var h, p;
  ke(d) >= ke(g)
    ? ((p = ke(d)),
      0 != p && (g = X((65536 * g) / p)),
      (d = 0 <= d ? 65536 : -65536))
    : ((p = ke(g)),
      0 != p && (d = X((65536 * d) / p)),
      (g = 0 <= g ? 65536 : -65536));
  b = 65536 * b + 32768;
  for (a = 65536 * a + 32768; 0 <= p; p--, b += d, a += g)
    1 > b ||
      400 <= b >> 16 ||
      1 > a ||
      400 <= a >> 16 ||
      ((h = 400 * (a >> 16) + (b >> 16)),
      (k[h] = Ld ? Kd(k[h], n, (n >> 24) & 255) : n));
}
function yb(b, a, d, g, n) {
  d--;
  g--;
  ae(b, a, b + d, a, n);
  ae(b, a + g, b + d, a + g, n);
  ae(b, a, b, a + g, n);
  ae(b + d, a, b + d, a + g, n);
}
function wb(b, a, d, g, n) {
  var h, p, v;
  d = 400 < b + d ? 400 : X(b + d);
  g = 400 < a + g ? 400 : X(a + g);
  b = 0 > b ? 0 : X(b);
  a = 0 > a ? 0 : X(a);
  p = 400 * a + b;
  for (v = 400 - (d - b); a < g; a++) {
    for (h = b; h < d; h++) (k[p] = Ld ? Kd(k[p], n, (n >> 24) & 255) : n), p++;
    p += v;
  }
}
function Id(b, a, d, g, n, h, p, v) {
  var Q = ud(ke((n - b) >> 16), ke((h - a) >> 16)) + 1;
  n = X((n - b) / Q);
  h = X((h - a) / Q);
  p = X((p - d) / Q);
  v = X((v - g) / Q);
  for (var R, O, pa = 0; pa < Q; pa++, b += n, a += h, d += p, g += v)
    (R = b >> 16),
      (O = a >> 16),
      0 > O ||
        400 <= O ||
        (qc[O] > R && ((qc[O] = R), (Ic[O] = d), (Kc[O] = g)),
        Ec[O] < R && ((Ec[O] = R), (Jc[O] = d), (Lc[O] = g)));
}
function Ed(b, a, d, g, n) {
  wb(9 * b + 24.5, 9 * a + 20.5, 9 * d, 9 * g, n);
}
function Fd(b, a, d, g, n, h) {
  b = 9 * b + 24.5;
  a = 9 * a + 20.5;
  n = X(9 * n + 24.5);
  d = 9 * d + 24.5 - b;
  g = 9 * g + 20.5 - a;
  var p = ke(d),
    v = ke(g),
    Q;
  p > v
    ? ((Q = X(p) + 1), (g /= p), (d = 0 > d ? -1 : 1))
    : ((Q = X(v) + 1), (d /= v), (g = 0 > g ? -1 : 1));
  for (var R, v = 0; v < Q; v++) {
    R = 400 * X(a) + X(b);
    for (p = X(b); p < n; p++) k[R++] = h;
    b += d;
    a += g;
  }
}
function Gd(b, a, d, g, n, h) {
  b = 9 * b + 24.5;
  a = 9 * a + 20.5;
  n = X(9 * n + 24.5);
  d = 9 * d + 24.5 - b;
  g = 9 * g + 20.5 - a;
  var p = ke(d),
    v = ke(g),
    Q;
  p > v
    ? ((Q = X(p) + 1), (g /= p), (d = 0 > d ? -1 : 1))
    : ((Q = X(v) + 1), (d /= v), (g = 0 > g ? -1 : 1));
  for (var R, v = 0; v < Q; v++) {
    R = 400 * X(a) + X(b);
    for (p = X(b); p >= n; p--) k[R--] = h;
    b += d;
    a += g;
  }
}
function Hd(b, a, d, g) {
  ae(9 * b + 24, 9 * a + 20, 9 * d + 24, 9 * g + 20, 4278190080);
}
function Sb(b, a, d) {
  return b < a ? (a < d ? d : a) : b < d ? d : b;
}
function Nb(b, a, d) {
  var g = Sb(b, a, d),
    n = b > a ? (a > d ? d : a) : b > d ? d : b;
  if (g == n) return 0;
  var h = 0;
  g == b && (h = (a - d) / (g - n) / 6 + 0);
  g == a && (h = (d - b) / (g - n) / 6 + 2 / 6);
  g == d && (h = (b - a) / (g - n) / 6 + 4 / 6);
  return 0 > h ? h + 1 : 1 < h ? h - 1 : h;
}
function Rb(b, a, d) {
  var g = Sb(b, a, d);
  return 0 == g ? 0 : (g - (b > a ? (a > d ? d : a) : b > d ? d : b)) / g;
}
function Tb(b, a, d) {
  if (0 == a) return d;
  a = d - a * d;
  return b < 1 / 6
    ? d
    : b < 2 / 6
    ? d - (d - a) * (6 * b - 1)
    : 0.5 > b
    ? a
    : b < 4 / 6
    ? a
    : b < 5 / 6
    ? a + (d - a) * (6 * b - 4)
    : d;
}
function Ub(b, a, d) {
  if (0 == a) return d;
  a = d - a * d;
  return b < 1 / 6
    ? a + (d - a) * b * 6
    : b < 2 / 6
    ? d
    : 0.5 > b
    ? d
    : b < 4 / 6
    ? d - (d - a) * (6 * b - 3)
    : a;
}
function Vb(b, a, d) {
  if (0 == a) return d;
  a = d - a * d;
  return b < 1 / 6
    ? a
    : b < 2 / 6
    ? a
    : 0.5 > b
    ? a + (d - a) * (6 * b - 2)
    : b < 4 / 6
    ? d
    : b < 5 / 6
    ? d
    : d - (d - a) * (6 * b - 5);
}
var wd = new D();
function td(b, a, d, g) {
  vd(wd, b, a);
  a.set(b);
  wd.y += d;
  Ad(wd, g);
  b.add(wd);
}
function Dd(b, a, d) {
  vd(wd, b, a);
  a = wd;
  a = d.x * a.x + d.y * a.y;
  if (0.24 <= a) return 0;
  a = 0.24 - a;
  var g = wd;
  g.x = d.x * a;
  g.y = d.y * a;
  b.add(wd);
  return 1;
}
var Mc = !1,
  Pc = !1,
  Nc = !1,
  Oc = !1,
  Qc = !1,
  Rc = !1,
  Sc = !1,
  Tc = 0,
  Uc = 0,
  Wc = 0,
  ld = 0,
  Vc = 0,
  kd = 0,
  md = 0,
  nd = 0,
  re = 0,
  pd,
  rd,
  od,
  qd;
function se(b) {
  var a = Pa.getBoundingClientRect(),
    d = a.right - a.left,
    g = a.bottom - a.top,
    n = yd(d / 400, g / 400),
    g = X(g / 2 - (400 * n) / 2);
  md = X((b.clientX - a.left - X(d / 2 - (400 * n) / 2)) / n);
  nd = X((b.clientY - a.top - g) / n);
}
Zb.onmousemove = se;
Zb.onmousedown = function (b) {
  se(b);
  te = !1;
  if (
    !(0 > md || 400 <= md || 0 > nd || 400 <= nd) &&
    ((te = !0), 0 == b.button && (Oc = !0), 2 == b.button && (Sc = !0), te)
  )
    return !1;
};
Zb.onmouseup = function (b) {
  se(b);
  0 == b.button && (Oc = !1);
  2 == b.button && (Sc = !1);
};
Zb.oncontextmenu = function () {
  if (te) return !1;
};
function ue(b) {
  var a = Pa.getBoundingClientRect(),
    d = a.right - a.left,
    g = a.bottom - a.top,
    n = yd(d / 400, g / 400),
    d = X(d / 2 - (400 * n) / 2),
    g = X(g / 2 - (400 * n) / 2);
  b = b.touches;
  re = b.length;
  1 == re
    ? ((md = X((b[0].clientX - a.left - d) / n)),
      (nd = X((b[0].clientY - a.top - g) / n)))
    : 2 == re &&
      ((md = X((b[0].clientX - a.left - d) / n)),
      (nd = X((b[0].clientY - a.top - g) / n)),
      (g = X((b[1].clientY - a.top - g) / n)),
      (md = X((md + X((b[1].clientX - a.left - d) / n)) / 2)),
      (nd = X((nd + g) / 2)));
}
Pa.ontouchstart = function (b) {
  ue(b);
  1 == re
    ? ((Oc = !0), (Wc = Vc = md), (ld = kd = nd))
    : 2 == re && ((Oc = !1), (Wc = Vc = md), (ld = kd = nd));
  return !1;
};
Pa.ontouchmove = function (b) {
  ue(b);
  return !1;
};
Pa.ontouchend = function (b) {
  ue(b);
  0 == re
    ? (Oc = !1)
    : 1 == re
    ? ((Wc = Vc = md), (ld = kd = nd))
    : 2 == re && ((Wc = Vc = md), (ld = kd = nd));
  return !1;
};
Pa.ontouchcancel = function () {
  re = 0;
  Sc = Oc = !1;
};
var Sa = Array(256),
  Va = Array(256),
  Wa = Array(256);
Zb.onkeydown = function (b) {
  b = b.keyCode;
  0 <= b && 256 > b && ((Wa[b] = !0), (Va[b] = !0));
  if (37 <= b && 40 >= b && te) return !1;
};
Zb.onkeyup = function (b) {
  b = b.keyCode;
  0 <= b && 256 > b && (Wa[b] = !1);
};
var te = !1;
Y(80, 79, 83, 84);
Y(38, 98, 61);
Y(38, 99, 61);
Y(38, 100, 61);
Y(38, 101, 61);
Y(38, 102, 61);
Y(38, 103, 61);
Y(38, 104, 61);
Y(38, 105, 61);
Y(38, 106, 61);
Y(38, 107, 61);
Y(111, 107);
var fe = Y(69, 82, 82, 79, 82);
Y(61);
Y(10);
function D() {
  this.y = this.x = 0;
}
D.prototype.set = function (b) {
  this.x = b.x;
  this.y = b.y;
  return this;
};
function Bb(b, a, d) {
  b.x = a;
  b.y = d;
  return b;
}
D.prototype.add = function (b) {
  this.x += b.x;
  this.y += b.y;
  return this;
};
D.prototype.sub = function (b) {
  this.x -= b.x;
  this.y -= b.y;
  return this;
};
function vd(b, a, d) {
  b.x = a.x - d.x;
  b.y = a.y - d.y;
}
function Ad(b, a) {
  b.x *= a;
  b.y *= a;
}
function Cd(b) {
  return Math.sqrt(b.x * b.x + b.y * b.y);
}
function zd(b) {
  return b.x * b.x + b.y * b.y;
}
function xd(b) {
  var a = Cd(b);
  if (0 == a) return 0;
  b.x /= a;
  b.y /= a;
  return a;
}
var Qa = Array(513),
  Ra = 3.1415927;
function ke(b) {
  return 0 > b ? -b : b;
}
function ud(b, a) {
  return b > a ? b : a;
}
function yd(b, a) {
  return b < a ? b : a;
}
function Bd(b, a, d) {
  return b < a ? a : b > d ? d : b;
}
function be(b, a, d) {
  return b < a ? d : b > d ? a : b;
}
function X(b) {
  return Math.floor(b);
}
