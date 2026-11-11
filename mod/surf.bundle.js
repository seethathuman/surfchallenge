
var Surf = {
   58387: (e, t, object) => {
      var React = object(89526);
      var n = object(73961);
      var o = object(30291);
      const r = React.createContext({});
      const {
         Provider: a,
         Consumer: l
      } = r;
      class SurfComponent extends React.Component {
         constructor(e, t) {
            super(e);
            this.updateDownstreamDesignSystem();
         }
         render() {
            this.updateDownstreamDesignSystem();
            return React.createElement(a, {
               value: this.downstreamDesignSystem
            }, this.props.children);
         }
         updateDownstreamDesignSystem() {
            let e = false;
            if (this.upstreamDesignSystem !== this.context) {
               this.upstreamDesignSystem = this.context;
               e = true;
            }
            if (this.designSystemOverrides !== this.props.designSystem) {
               this.designSystemOverrides = this.props.designSystem;
               e = true;
            }
            if (e) {
               this.downstreamDesignSystem = this.createDesignSystem();
            }
         }
         createDesignSystem() {
            if (typeof this.props.designSystemMergingFunction == "function") {
               return this.props.designSystemMergingFunction(this.upstreamDesignSystem, this.designSystemOverrides);
            } else {
               e = this.upstreamDesignSystem;
               t = this.designSystemOverrides;
               return o.Z({}, e, t, (e, t) => {
                  if (Array.isArray(t)) {
                     return t;
                  }
               });
            }
            var e;
            var t;
         }
      }
      SurfComponent.contextType = r;
      var h = object(87958);
      let d = function (e) {
         e[e.ENUM_START = 1] = "ENUM_START";
         e[e.MESSAGE_BAR = 2] = "MESSAGE_BAR";
         e[e.CANVAS = 3] = "CANVAS";
         e[e.PAGE_HEADER_ITEMS = 4] = "PAGE_HEADER_ITEMS";
         e[e.CARD = 5] = "CARD";
         e[e.DIALOG_NOTIFICATION = 6] = "DIALOG_NOTIFICATION";
         e[e.SEARCH_BUBBLE = 7] = "SEARCH_BUBBLE";
         e[e.INFO_BUBBLE = 8] = "INFO_BUBBLE";
         e[e.SELECT_MENU = 9] = "SELECT_MENU";
         e[e.HEADER_FOOTER = 10] = "HEADER_FOOTER";
         e[e.CONTEXT_MENU = 11] = "CONTEXT_MENU";
         e[e.DND_PREVIEW = 12] = "DND_PREVIEW";
         e[e.MODAL = 13] = "MODAL";
         e[e.FRE = 14] = "FRE";
         e[e.SPLASH_SCREEN = 15] = "SPLASH_SCREEN";
         e[e.ENUM_END = 16] = "ENUM_END";
         return e;
      }({});
      function u(e) {
         return {
            zIndex: e.toString()
         };
      }
      class p extends React.Component {
         componentDidMount() {
            this.props.rootElement.style.zIndex = d.MODAL.toString();
         }
         render() {
            if (this.props.modal) {
               return n.createPortal(this.props.modal, this.props.rootElement);
            } else {
               return null;
            }
         }
      }
      h.$j(function (e) {
         return {
            modal: e.modal
         };
      })(p);
      var b = object(9791);
      var g = object(59997);
      var f = object(2619);
      var m = object(52502);
      const y = "#FFFFFF";
      const v = "#000000";
      const w = {
         steps: 94,
         clipLight: 0,
         clipDark: 0
      };
      Object.assign({}, w);
      Object.assign(Object.assign({}, w), {
         baseColor: m.in("#0078D4")
      });
      const themeOptions = {
         backgroundColor: y,
         contrast: 0,
         density: 0,
         designUnit: 4,
         baseHeightMultiplier: 8,
         baseHorizontalSpacingMultiplier: 3,
         direction: g.N.ltr,
         cornerRadius: 2,
         elevatedCornerRadius: 4,
         focusOutlineWidth: 2,
         fontWeight: {
            light: 100,
            semilight: 200,
            normal: 400,
            semibold: 600,
            bold: 700
         },
         disabledOpacity: 0.3,
         outlineWidth: 1,
         neutralPalette: ["#FFFFFF", "#FCFCFC", "#FAFAFA", "#F7F7F7", "#F5F5F5", "#F2F2F2", "#EFEFEF", "#EDEDED", "#EAEAEA", "#E8E8E8", "#E5E5E5", "#E2E2E2", "#E0E0E0", "#DDDDDD", "#DBDBDB", "#D8D8D8", "#D6D6D6", "#D3D3D3", "#D0D0D0", "#CECECE", "#CBCBCB", "#C9C9C9", "#C6C6C6", "#C3C3C3", "#C1C1C1", "#BEBEBE", "#BCBCBC", "#B9B9B9", "#B6B6B6", "#B4B4B4", "#B1B1B1", "#AFAFAF", "#ACACAC", "#A9A9A9", "#A7A7A7", "#A4A4A4", "#A2A2A2", "#9F9F9F", "#9D9D9D", "#9A9A9A", "#979797", "#959595", "#929292", "#909090", "#8D8D8D", "#8A8A8A", "#888888", "#858585", "#838383", "#808080", "#7D7D7D", "#7B7B7B", "#787878", "#767676", "#737373", "#717171", "#6E6E6E", "#6B6B6B", "#696969", "#666666", "#646464", "#616161", "#5F5F5F", "#5C5C5C", "#5A5A5A", "#575757", "#545454", "#525252", "#4F4F4F", "#4D4D4D", "#4A4A4A", "#484848", "#454545", "#424242", "#404040", "#3D3D3D", "#3B3B3B", "#383838", "#363636", "#333333", "#313131", "#2E2E2E", "#2B2B2B", "#292929", "#262626", "#242424", "#212121", "#1E1E1E", "#1B1B1B", "#181818", "#151515", "#121212", "#101010", "#000000"],
         accentPalette: ["#FFFFFF", "#FBFDFE", "#F6FAFE", "#F2F8FD", "#EEF6FC", "#E9F4FB", "#E5F1FB", "#E1EFFA", "#DCEDF9", "#D8EAF8", "#D4E8F8", "#CFE6F7", "#CBE4F6", "#C7E1F6", "#C2DFF5", "#BEDDF4", "#BADAF3", "#B6D8F3", "#B1D6F2", "#ADD4F1", "#A9D1F0", "#A4CFF0", "#A0CDEF", "#9CCAEE", "#97C8EE", "#93C6ED", "#8FC4EC", "#8AC1EB", "#86BFEB", "#82BDEA", "#7DBAE9", "#79B8E8", "#75B6E8", "#70B3E7", "#6CB1E6", "#68AFE5", "#63ADE5", "#5FAAE4", "#5BA8E3", "#56A6E3", "#52A3E2", "#4EA1E1", "#499FE0", "#459DE0", "#419ADF", "#3D98DE", "#3896DD", "#3493DD", "#3091DC", "#2B8FDB", "#278DDB", "#238ADA", "#1E88D9", "#1A86D8", "#1683D8", "#1181D7", "#0D7FD6", "#097DD5", "#047AD5", "#0078D4", "#0075CF", "#0072C9", "#006FC4", "#006CBE", "#0069B9", "#0066B4", "#0063AE", "#0060A9", "#005CA3", "#00599E", "#005699", "#005393", "#00508E", "#004D88", "#004A83", "#00477D", "#004478", "#004173", "#003E6D", "#003B68", "#003862", "#00355D", "#003258", "#002F52", "#002B4D", "#002847", "#002542", "#00223C", "#001F36", "#001B30", "#00182B", "#001525", "#00121F", "#000000"],
         accentBaseColor: "#0078D4",
         accentFillRestDelta: 0,
         accentFillHoverDelta: 4,
         accentFillActiveDelta: -5,
         accentFillFocusDelta: 0,
         accentFillSelectedDelta: 12,
         accentForegroundRestDelta: 0,
         accentForegroundHoverDelta: 6,
         accentForegroundActiveDelta: -4,
         accentForegroundFocusDelta: 0,
         neutralFillRestDelta: 7,
         neutralFillHoverDelta: 10,
         neutralFillActiveDelta: 5,
         neutralFillFocusDelta: 0,
         neutralFillSelectedDelta: 7,
         neutralFillInputRestDelta: 0,
         neutralFillInputHoverDelta: 0,
         neutralFillInputActiveDelta: 0,
         neutralFillInputFocusDelta: 0,
         neutralFillInputSelectedDelta: 0,
         neutralFillStealthRestDelta: 0,
         neutralFillStealthHoverDelta: 5,
         neutralFillStealthActiveDelta: 3,
         neutralFillStealthFocusDelta: 0,
         neutralFillStealthSelectedDelta: 7,
         neutralFillToggleHoverDelta: 8,
         neutralFillToggleActiveDelta: -5,
         neutralFillToggleFocusDelta: 0,
         baseLayerLuminance: -1,
         neutralFillCardDelta: 3,
         neutralForegroundDarkIndex: 93,
         neutralForegroundLightIndex: 0,
         neutralForegroundHoverDelta: 0,
         neutralForegroundActiveDelta: 0,
         neutralForegroundFocusDelta: 0,
         neutralDividerRestDelta: 8,
         neutralOutlineRestDelta: 25,
         neutralOutlineHoverDelta: 40,
         neutralOutlineActiveDelta: 16,
         neutralOutlineFocusDelta: 25
      };
      function S(e, t) {
         if (f.Z(e)) {
            return e(t);
         } else {
            return e;
         }
      }
      const M = themeOptions;
      const k = Object.assign({}, M, {
         glyphFontFamily: ""
      });
      function getProperty(property) {
         return t => t && t[property] !== undefined ? t[property] : M[property];
      }
      const C = getProperty("backgroundColor");
      const V = getProperty("accentBaseColor");
      const _ = getProperty("cornerRadius");
      const O = getProperty("elevatedCornerRadius");
      const E = getProperty("neutralPalette");
      const T = getProperty("accentPalette");
      getProperty("contrast");
      const P = getProperty("designUnit");
      const j = getProperty("baseHeightMultiplier");
      const D = getProperty("baseHorizontalSpacingMultiplier");
      getProperty("direction");
      const I = getProperty("outlineWidth");
      const A = getProperty("focusOutlineWidth");
      const L = getProperty("disabledOpacity");
      getProperty("accentFillRestDelta");
      const Z = getProperty("accentFillHoverDelta");
      const F = getProperty("accentFillActiveDelta");
      const B = getProperty("accentFillFocusDelta");
      const R = getProperty("accentFillSelectedDelta");
      const N = getProperty("accentForegroundRestDelta");
      const z = getProperty("accentForegroundHoverDelta");
      const $ = getProperty("accentForegroundActiveDelta");
      const G = getProperty("accentForegroundFocusDelta");
      const q = getProperty("neutralFillRestDelta");
      const U = getProperty("neutralFillHoverDelta");
      const K = getProperty("neutralFillActiveDelta");
      const W = getProperty("neutralFillFocusDelta");
      const J = getProperty("neutralFillSelectedDelta");
      const X = getProperty("neutralFillInputRestDelta");
      const Y = getProperty("neutralFillInputHoverDelta");
      const Q = getProperty("neutralFillInputActiveDelta");
      const ee = getProperty("neutralFillInputFocusDelta");
      const te = getProperty("neutralFillInputSelectedDelta");
      const se = getProperty("neutralFillStealthRestDelta");
      const ie = getProperty("neutralFillStealthHoverDelta");
      const ne = getProperty("neutralFillStealthActiveDelta");
      const oe = getProperty("neutralFillStealthFocusDelta");
      const re = getProperty("neutralFillStealthSelectedDelta");
      getProperty("neutralFillToggleHoverDelta");
      getProperty("neutralFillToggleActiveDelta");
      getProperty("neutralFillToggleFocusDelta");
      const ae = getProperty("baseLayerLuminance");
      const le = getProperty("neutralFillCardDelta");
      getProperty("neutralForegroundDarkIndex");
      getProperty("neutralForegroundLightIndex");
      const ce = getProperty("neutralForegroundHoverDelta");
      const he = getProperty("neutralForegroundActiveDelta");
      const de = getProperty("neutralForegroundFocusDelta");
      const ue = getProperty("neutralDividerRestDelta");
      const pe = getProperty("neutralOutlineRestDelta");
      const be = getProperty("neutralOutlineHoverDelta");
      const ge = getProperty("neutralOutlineActiveDelta");
      const fe = getProperty("fontWeight");
      const me = getProperty("neutralOutlineFocusDelta");
      var ye;
      var ve = object(81562);
      function we(e) {
         const t = b.Z(e);
         return function (e) {
            if (typeof e == "function") {
               return s => t(Object.assign({}, s, {
                  backgroundColor: e(s)
               }));
            } else {
               return t(e);
            }
         };
      }
      function xe(e, t) {
         const s = b.Z(t);
         return t => typeof t == "function" ? i => s(Object.assign({}, i, {
            backgroundColor: t(i)
         }))[e] : s(t)[e];
      }
      (function (e) {
         e.rest = "rest";
         e.hover = "hover";
         e.active = "active";
         e.focus = "focus";
         e.selected = "selected";
      })(ye ||= {});
      const Se = b.Z(e => {
         let t = m.in(e);
         if (t !== null) {
            return t;
         }
         t = m.hg(e);
         if (t !== null) {
            return t;
         }
         throw new Error(`${e} cannot be converted to a ColorRGBA64. Color strings must be one of the following formats: "#RGB", "#RRGGBB", or "rgb(r, g, b)"`);
      });
      function Me(e) {
         return m.pJ(e) || m.b4(e);
      }
      const ke = b.Z((e, t) => ve.wo(Se(e), Se(t)), (e, t) => e + t);
      function He(e) {
         return ve.hM(Se(e));
      }
      function Ce(...e) {
         return t => Math.max.apply(null, e.map(e => e(t)));
      }
      const Ve = (e, t, s) => Math.min(Math.max(e, t), s);
      var _e;
      function Oe(e, t) {
         return s => {
            if (!Me(t)) {
               return -1;
            }
            const i = S(e, s);
            const n = i.indexOf(t);
            if (n !== -1) {
               return n;
            } else {
               return i.findIndex(e => {
                  return Me(e) && (s = e, Se(t).equalValue(Se(s)));
                  var s;
               });
            }
         };
      }
      function Ee(e, t) {
         return s => {
            const i = S(e, s);
            const n = S(t, s);
            const o = Oe(i, n)(s);
            let r;
            if (o !== -1) {
               return o;
            }
            try {
               r = He(n);
            } catch (e) {
               r = -1;
            }
            if (r === -1) {
               return 0;
            } else {
               return i.map((e, t) => ({
                  luminance: He(e),
                  index: t
               })).reduce((e, t) => Math.abs(t.luminance - r) < Math.abs(e.luminance - r) ? t : e).index;
            }
         };
      }
      function Te(e) {
         return He(C(e)) <= (-0.1 + Math.sqrt(0.21)) / 2;
      }
      function Pe(e, t) {
         if (typeof e == "function") {
            return s => t(s)[Ve(e(s), 0, t(s).length - 1)];
         } else {
            return t[Ve(e, 0, t.length - 1)];
         }
      }
      function je(e) {
         return (t, s) => i => Pe(Te(i) ? S(s, i) : S(t, i), e(i));
      }
      function De(e, t, s = 0, i = e.length - 1) {
         if (i === s) {
            return e[s];
         }
         const n = Math.floor((i - s) / 2) + s;
         if (t(e[n])) {
            return De(e, t, s, n);
         } else {
            return De(e, t, n + 1, i);
         }
      }
      function Ie(e) {
         return t => s => i => n => o => {
            const r = S(e, o);
            const a = S(t, o);
            const l = a.length;
            const c = Ve(s(r, a, o), 0, l - 1);
            const h = i(c, a, o);
            const d = [].concat(a);
            const u = l - 1;
            let p = c;
            if (h === -1) {
               d.reverse();
               p = u - p;
            }
            return De(d, function (e) {
               return n(ke(r, e));
            }, p, u);
         };
      }
      function Ae(e, t, s) {
         return Ee(t, e)(s);
      }
      function Le(e) {
         return Ee(E, C(e))(e);
      }
      (function (e) {
         e.neutral = "neutral";
         e.accent = "accent";
      })(_e ||= {});

      const LoadTimeData = window.loadTimeData;
      const Chrome = window.chrome;

      function defaultStats() {
         return {
            endless_bestScore: -1,
            zigzag_bestScore: -1,
            timetrial_bestScore: -1,
            currentCharacter: 1,
            theme: "surf",
            mode: "endless",
            highVisibilityMode: false,
            reducedSpeedMode: false
         }
      }

      //# chrome.send stub
      Chrome.send = function (command, args = []) {
         const callbackId = args[0];
         setTimeout(() => {
            console.log(`send: "${command}" `, args);
            let response;
            let stats = JSON.parse(localStorage.getItem("surfstats")) || defaultStats();
            switch (command) {
               case "get-stats":
                  response = stats;
                  break;
               case "reset-stats":
                  stats = "";
                  break;
               case "set-high-score":
                  (args[0] === "timetrial") && (e > 0) && (t *= 1e3)
                  stats[args[0] + "_bestScore"] = Math.floor(args[1])
                  break;
               case "save-game-mode":
                  stats["mode"] = args[0]
                  break;
               case "save-high-visibility-mode":
                  stats["highVisibilityMode"] = args[0];
                  break;
               case "save-reduced-speed-mode":
                  stats["reducedSpeedMode"] = args[0];
                  break;
               case "save-selected-character":
                  stats["currentCharacter"] = args[0];
                  break;
               case "save-selected-theme":
                  stats["theme"] = args[0]
                  break;
               case "get-percentage":
                  response = { "percentage": 67.67}
                  break;
               case "record-game-end":
               case "record-unload":
               case "record-share-popup":
                  break; // yell0wsuit's implementation seems to ignore these, and I can't figure out what these do
               default:
                  console.warn(`invalid command!!`);
                  break;
            }
            localStorage.setItem("surfstats", JSON.stringify(stats));
            if (response) {
               if (pendingEvents[callbackId]) {
                  pendingEvents[callbackId].resolve(response);
                  delete pendingEvents[callbackId];
                  console.log(`Completed promise ID ${callbackId}, returning`, response)
               } else {
                  console.error(`Invalid promise ID ${callbackId}`)
               }
            }
         }, 0);
      };

      var Controller1Mapping;
      var Controller2Mapping;
      (function (mp) {
         mp[mp.L1 = 0] = "L1";
         mp[mp.L1Alt = 3] = "L1Alt";
         mp[mp.L2 = 10] = "L2";
         mp[mp.L3 = 13] = "L3";
         mp[mp.L4 = 16] = "L4";
      })(Controller1Mapping ||= {});
      (function (mp) {
         mp[mp.L1 = 76] = "L1";
         mp[mp.L1Alt = 76] = "L1Alt";
         mp[mp.L2 = 79] = "L2";
         mp[mp.L3 = 82] = "L3";
         mp[mp.L4 = 85] = "L4";
      })(Controller2Mapping ||= {});

      var Ne = object(90351);
      var ze = object(44199);
      var $e = object(25514);
      var Ge = object(97406);

      class baseComponent extends React.Component {
         constructor() {
            super(...arguments);
            this.referenceResolverStore = {};
            this.referenceStore = {};
         }
         setRef(...e) {
            const t = this.processStorageKey(e);
            let s = Ne.Z(this.referenceResolverStore, t);
            if (t && !ze.Z(s) && !Array.isArray(s)) {
               if (typeof s != "function") {
                  s = e => {
                     $e.Z(this.referenceStore, t, e);
                  };
                  $e.Z(this.referenceResolverStore, t, s);
               }
               return s;
            }
         }
         getRef(...e) {
            return Ne.Z(this.referenceStore, this.processStorageKey(e));
         }
         unhandledProps() {
            const e = Object.keys(this.props).filter(e => !(baseComponent.defaultHandledProps.indexOf(e) > -1) && this.handledProps && !this.handledProps.hasOwnProperty(e));
            return Ge.Z(this.props, e);
         }
         generateClassNames(e = "") {
            return e.concat(` ${this.props.className || ""}`).trim().replace(/(\s){2,}/g, " ") || null;
         }
         withSlot(e, t = this.props.children) {
            return React.Children.map(t, t => this.hasSlot(e, t) ? t : null);
         }
         withoutSlot(e, t = this.props.children) {
            return React.Children.map(t, t => this.hasSlot(e, t) ? null : t);
         }
         hasSlot(e, t) {
            const s = Ne.Z(t, "props.slot");
            if (Array.isArray(e)) {
               return e.indexOf(s) !== -1;
            } else {
               return e === s;
            }
         }
         processStorageKey(e) {
            return e.filter(e => typeof e == "string" || typeof e == "number").map((e, t) => t === 0 ? e : `[${e}]`).join("");
         }
      }

      baseComponent.defaultHandledProps = ["children"];

      function Ke(e) {
         return (...t) => s => {
            const i = t[0];
            let n = typeof i == "function" ? i(s) : i;
            for (let i = 1; i < t.length; i++) {
               const o = t[i];
               n = e(n, typeof o == "function" ? o(s) : o);
            }
            return n;
         };
      }
      const We = Ke((e, t) => e + t);
      const Je = Ke((e, t) => e - t);
      const Xe = Ke((e, t) => e * t);
      const Ye = Ke((e, t) => e / t);
      function Qe(...e) {
         return We.apply(this, e);
      }
      function et(...e) {
         return Je.apply(this, e);
      }
      function tt(...e) {
         return Xe.apply(this, e);
      }
      var nt;
      var ot = object(57653);
      var rt = object(92764);
      function at(e, t) {
         return s => ae(s) === -1 ? t(s) : e(s);
      }

      const lt = Ee(E, e => {
         const t = ae(e);
         return new ot.h(t, t, t, 1).toStringHexRGB();
      });

      const ct = e => rt.uZ(et(lt, le)(e), 0, E(e).length - 1);
      const ht = Ce(q, U, K);
      const dt = Ce(Qe(lt, le), ht);
      const ut = e => {
         const t = 0.14;
         const s = new ot.h(t, t, t, 1);
         return Ee(E, s.toStringHexRGB())(e);
      };

      const pt = we(at(Pe(et(ct, le), E), je(E)(0, et(ut, tt(le, 5)))));
      we(at(Pe(ct, E), je(E)(0, et(ut, tt(le, 4)))));
      we(at(Pe(Qe(ct, le), E), je(E)(le, et(ut, tt(le, 3)))));
      const bt = we(at(Pe(lt, E), je(E)(0, et(ut, tt(le, 3)))));
      we(at(Pe(dt, E), je(E)(ht, et(ut, tt(le, 2)))));
      we(at(Pe(Qe(dt, le), E), je(E)(Qe(ht, le), et(ut, le))));
      we(at(Pe(Qe(dt, tt(le, 2)), E), je(E)(Qe(ht, tt(le, 2)), ut)));
      var gt = object(759);

      class ft extends baseComponent {
         constructor() {
            super(...arguments);
            this.handledProps = {
               tag: undefined,
               value: undefined,
               drawBackground: undefined,
               designSystemMergingFunction: undefined
            };
            this.getDesignSystemOverrides = b.Z(e => ({
               backgroundColor: e
            }));
            this.withContext = e => {
               const t = this.props.value;
               const s = typeof t == "string" ? t : typeof t == "function" ? t(e) : gt.Z(e.neutralPalette, t) ? Ne.Z(e.neutralPalette, t) : M.neutralPalette[t] || ft.defaultProps.value(M);
               const n = Object.assign({}, this.props.style, this.props.drawBackground ? {
                  backgroundColor: s
               } : undefined);
               return React.createElement(SurfComponent, {
                  designSystem: this.getDesignSystemOverrides(s),
                  designSystemMergingFunction: this.props.designSystemMergingFunction
               }, this.tag && React.createElement(this.tag, Object.assign({}, this.unhandledProps(), {
                  style: n
               }), this.props.children) || this.props.children);
            };
         }
         render() {
            return React.createElement(l, null, this.withContext);
         }
         get tag() {
            return this.props.tag;
         }
      }
      ft.defaultProps = {
         tag: "div",
         value: bt,
         drawBackground: true
      };
      let mt = Controller1Mapping.L1Alt;
      let yt = Controller1Mapping.L1;
      let vt = Controller1Mapping.L2;
      let wt = Controller1Mapping.L1;
      let xt = Controller1Mapping.L1Alt;
      const St = window.matchMedia("(prefers-color-scheme: dark)");
      if (St.matches) {
         mt = Controller2Mapping.L2;
         yt = Controller2Mapping.L1;
         vt = Controller2Mapping.L3;
         wt = Controller2Mapping.L3;
         xt = Controller2Mapping.L1Alt;
      }
      let Mt = function (e) {
         e[e.Primary = 0] = "Primary";
         e[e.Secondary = 1] = "Secondary";
         e[e.Tertiary = 2] = "Tertiary";
         e[e.TextInput = 3] = "TextInput";
         e[e.CardContainer = 4] = "CardContainer";
         return e;
      }({});
      function kt(e, t = Mt.Primary, s = {}, n) {
         var o;
         (o = class extends React.Component {
            constructor(e) {
               super(e);
               this.backgroundListener = () => {
                  const e = St.matches;
                  mt = e ? Controller2Mapping.L2 : Controller1Mapping.L1Alt;
                  yt = e ? Controller2Mapping.L1 : Controller1Mapping.L1;
                  vt = e ? Controller2Mapping.L3 : Controller1Mapping.L2;
                  wt = e ? Controller2Mapping.L3 : Controller1Mapping.L1;
                  xt = e ? Controller2Mapping.L1Alt : Controller1Mapping.L1Alt;
                  this.setState({
                     primarySurfaceBackground: mt,
                     secondarySurfaceBackground: yt,
                     tertiarySurfaceBackground: vt,
                     textInputSurfaceBackground: wt,
                     cardContainerSurfaceBackground: xt
                  });
               };
               this.state = {
                  primarySurfaceBackground: mt,
                  secondarySurfaceBackground: yt,
                  tertiarySurfaceBackground: vt,
                  textInputSurfaceBackground: wt,
                  cardContainerSurfaceBackground: xt
               };
            }
            componentDidMount() {
               St.addEventListener("change", this.backgroundListener);
            }
            componentWillUnmount() {
               St.removeEventListener("change", this.backgroundListener);
            }
            render() {
               let o;
               switch (t) {
                  case Mt.Secondary:
                     o = this.state.secondarySurfaceBackground;
                     break;
                  case Mt.Tertiary:
                     o = this.state.tertiarySurfaceBackground;
                     break;
                  case Mt.TextInput:
                     o = this.state.textInputSurfaceBackground;
                     break;
                  case Mt.CardContainer:
                     o = this.state.cardContainerSurfaceBackground;
                     break;
                  case Mt.Primary:
                  default:
                     o = this.state.primarySurfaceBackground;
               }
               return React.createElement(ft, {
                  drawBackground: n,
                  value: o,
                  style: s
               }, React.createElement(e, this.props));
            }
         }).displayName = `ResponsiveBackground(${e.displayName})`;
         return o;
      }
      const Ht = {
         uiColor: {
            searchHighlight: "#FFEB3B",
            searchText: "#101010",
            translucentSearchHighlight: "rgba(255, 235, 59, 0.9)",
            defaultShadow: "#000",
            dangerRedDark: "#F28B82",
            dangerRedLight: "#CC0000",
            warningYellowLight: "#9D6600",
            warningYellowDark: "#FFB833",
            healthyGreenDark: "#98C698",
            healthyGreenLight: "#107C10",
            warningRedBackgroundLight: "#F9DFD5",
            warningRedBackgroundDark: "#5F1A00",
            black: "#000000",
            white: "#FFFFFF",
            warningYellowBackplateLight: "#FFF7E3",
            warningYellowBackplateDark: "#514935",
            grayBackplateLight: "#EBEBEB",
            grayBackplateDark: "#515151",
            accentBackplateLight: "#E8F5FF",
            accentBackplateDark: "#4C5963",
            invalidSignatureLight: "#996F00",
            invalidSignatureDark: "#FFB900",
            blueTintLight: "#E8F5FF",
            darkBlueTint: "#003B68",
            unknownOrangeSignatureTextLight: "#B65626",
            unknownOrangeSignatureTextDark: "#DCB298",
            unknownOrangeSignatureIconLight: "#D56C2D",
            unknownOrangeSignatureIconDark: "#C36329",
            highlightBackgroundLight: "#E3F0FA",
            highlightBackgroundDark: "#4C5963",
            profileAlertLight: "#0069B9",
            edgeDarkGray: "#333333",
            safetyTipWarningYellowBackground: "#FFD976",
            translucentHoverFocusBackgroundLight: "rgba(0, 0, 0, 0.07)",
            translucentHoverFocusBackgroundDark: "rgba(255, 255, 255, 0.07)",
            noErrorColor: "#0078D4",
            hyperLinkColorDark: "#63ADE5",
            walletBlueBackgroundLight: "rgba(235, 255, 242, 0.6)",
            walletGreenBackgroundLight: "rgba(227, 246, 255, 0.6)",
            walletBlueBackgroundrDark: "rgba(18, 78, 39, 0.6)",
            walletGreenBackgroundrDark: "rgba(14, 51, 68, 0.6)"
         },
         direction: LoadTimeData && LoadTimeData.valueExists("textdirection") && LoadTimeData.getString("textdirection") === "rtl" ? g.N.rtl : g.N.ltr
      };
      const Ct = Object.assign({}, k, Ht);
      function Vt(e) {
         if (Te(e)) {
            return Ct.uiColor.dangerRedDark;
         } else {
            return Ct.uiColor.dangerRedLight;
         }
      }
      Ct.backgroundColor = Ct.neutralPalette[mt];
      b.Z(e => Object.assign({}, k, Ht, e));
      function _t(e) {
         const t = new Map();
         for (const i of e) {
            var s;
            const e = i.getFileName();
            const n = (s = i.getScriptHash) === null || s === undefined ? undefined : s.call(i);
            if (e && n) {
               t.set(e, n);
            }
         }
         if (t.size) {
            const e = ["", "Source modules:"];
            for (const [s, i] of t.entries()) {
               e.push(`    ${s} ${i}`);
            }
            return e.join("\n");
         }
      }
      let Ot;
      function Et(e, t) {
         let s;
         s = Ot ? Ot.apply(Error, [e, t]) : e.stack;
         if (_t(t)) {
            return s + "\n" + _t(t);
         } else {
            return s;
         }
      }
      var Tt = object(67514);
      var Pt = object(54716);
      const jt = Tt.create(Pt.Z());
      new Tt.SheetsManager();
      const Dt = new Tt.SheetsRegistry();
      function It(e, t) {
         if (typeof e == "string" && typeof t == "string") {
            return e.concat(" ", t);
         } else if (typeof e == "string") {
            return e;
         } else if (typeof t == "string") {
            return t;
         } else {
            return undefined;
         }
      }
      class At extends React.Component {
         constructor(e, t) {
            super(e, t);
            this.hasCreatedIntialStyleSheets = false;
            this.index = At.index -= 1;
            this.designSystem = t;
         }
         static set jss(e) {
            At.sheetManager.jss = e;
         }
         static get jss() {
            return At.sheetManager.jss;
         }
         static subscribe(e) {
            return At.sheetManager.subscribe(e);
         }
         static unsubscribe(e) {
            At.sheetManager.unsubscribe(e);
         }
         render() {
            if (!this.hasCreatedIntialStyleSheets) {
               if (this.styles) {
                  const e = {
                     meta: this.managedComponent.displayName || this.managedComponent.name,
                     index: this.index
                  };
                  if (typeof At.createGenerateClassName == "function") {
                     e.generateClassName = At.createGenerateClassName(this.designSystem);
                  }
                  At.sheetManager.add(this.styles, this.designSystem, e);
               }
               if (this.props.jssStyleSheet) {
                  this.createPropStyleSheet();
               }
               this.hasCreatedIntialStyleSheets = true;
            }
            return React.createElement(this.managedComponent, this.managedComponentProps());
         }
         componentDidUpdate(e) {
            const t = !!this.props.jssStyleSheet;
            const s = !!e.jssStyleSheet;
            if (this.designSystem !== this.context) {
               if (this.styles) {
                  At.sheetManager.update(this.styles, this.designSystem, this.context);
                  this.forceUpdate();
               }
               if (s && t) {
                  if (e.jssStyleSheet === this.props.jssStyleSheet) {
                     At.sheetManager.update(this.props.jssStyleSheet, this.designSystem, this.context);
                  } else {
                     At.sheetManager.remove(e.jssStyleSheet, this.designSystem);
                     this.createPropStyleSheet(this.context);
                  }
                  this.forceUpdate();
               } else if (s && !t) {
                  At.sheetManager.remove(e.jssStyleSheet, this.designSystem);
               } else if (!s && t) {
                  this.createPropStyleSheet(this.context);
                  this.forceUpdate();
               }
               this.designSystem = this.context;
            } else if (s && t && e.jssStyleSheet !== this.props.jssStyleSheet) {
               At.sheetManager.remove(e.jssStyleSheet, this.designSystem);
               this.createPropStyleSheet();
               this.forceUpdate();
            }
            if (s && !t) {
               At.sheetManager.remove(e.jssStyleSheet, this.designSystem);
            } else if (!s && t) {
               this.createPropStyleSheet();
               this.forceUpdate();
            }
         }
         componentWillUnmount() {
            if (this.styles) {
               At.sheetManager.remove(this.styles, this.designSystem);
            }
            if (this.props.jssStyleSheet) {
               At.sheetManager.remove(this.props.jssStyleSheet, this.designSystem);
            }
            At.index++;
            this.hasCreatedIntialStyleSheets = false;
         }
         primaryStyleSheet() {
            if (this.styles) {
               return At.sheetManager.get(this.styles, this.designSystem);
            }
         }
         secondaryStyleSheet() {
            if (this.props.jssStyleSheet) {
               return At.sheetManager.get(this.props.jssStyleSheet, this.designSystem);
            }
         }
         managedComponentProps() {
            const e = Object.assign(Object.assign({}, this.props), {
               managedClasses: this.getManagedClassNames(),
               ref: this.props.innerRef
            });
            delete e.jssStyleSheet;
            delete e.innerRef;
            return e;
         }
         getManagedClassNames() {
            let e = {};
            let t = {};
            const s = this.primaryStyleSheet();
            const i = this.secondaryStyleSheet();
            if (s && s.hasOwnProperty("classes")) {
               e = Object.assign({}, s.classes);
            }
            if (i && i.hasOwnProperty("classes")) {
               t = Object.assign({}, i.classes);
            }
            return o.Z(e, t, It);
         }
         createPropStyleSheet(e = this.designSystem) {
            const t = this.primaryStyleSheet();
            const s = {
               meta: `${this.managedComponent.displayName || this.managedComponent.name} - jssStyleSheet`,
               index: t ? t.options.index + 1 : this.index + 1
            };
            if (typeof At.createGenerateClassName == "function") {
               s.generateClassName = At.createGenerateClassName(e);
            }
            At.sheetManager.add(this.props.jssStyleSheet, e, s);
         }
      }
      At.contextType = r;
      At.index = -1000;
      At.sheetManager = new class {
         constructor() {
            this.jss = jt;
            this.registry = new WeakMap();
         }
         add(e, t, s) {
            const i = this.getTracker(e, t);
            if (Array.isArray(i)) {
               i[1]++;
               return;
            }
            let n = this.registry.get(e);
            if (n === undefined) {
               n = new WeakMap();
               this.registry.set(e, n);
            }
            this.registry.get(e).set(t, [this.createStyleSheet(e, t, s), 1]);
         }
         get(e, t) {
            const s = this.getTracker(e, t);
            if (Array.isArray(s) && s[0]) {
               return s[0];
            }
         }
         update(e, t, s) {
            const i = this.getTracker(e, t);
            if (i) {
               if (i[1] === 1 && !this.get(e, s) && e && typeof e == "object") {
                  const n = i[0];
                  n.update(s);
                  this.notify("update", n);
                  this.registry.get(e).delete(t);
                  this.registry.get(e).set(s, i);
               } else {
                  this.remove(e, t);
                  this.add(e, s, i[0].options);
               }
            }
         }
         remove(e, t) {
            const s = this.getTracker(e, t);
            if (Array.isArray(s) && (s[1]--, s[1] === 0)) {
               const i = s[0];
               this.jss.removeStyleSheet(i);
               Dt.remove(i);
               this.notify("remove", i);
               this.registry.get(e).delete(t);
            }
         }
         count(e, t) {
            const s = this.getTracker(e, t);
            if (Array.isArray(s)) {
               return s[1];
            } else {
               return -1;
            }
         }
         clean() {
            this.registry = new WeakMap();
         }
         getTracker(e, t) {
            const s = this.registry.get(e);
            if (s instanceof WeakMap) {
               const e = s.get(t);
               if (Array.isArray(e)) {
                  return e;
               }
            }
         }
         createStyleSheet(e, t, s = {}) {
            const i = typeof e == "function" ? e(t) : e;
            const n = this.jss.createStyleSheet(i, Object.assign({
               link: true
            }, s));
            n.update(t).attach();
            Dt.add(n);
            this.notify("add", n);
            return n;
         }
         notify(e, t) {
            if (Array.isArray(this.subscribers)) {
               this.subscribers.forEach(s => s({
                  type: e,
                  sheet: t
               }));
            }
         }
         subscribe(e) {
            if (!Array.isArray(this.subscribers)) {
               this.subscribers = [];
            }
            if (this.subscribers.indexOf(e) === -1) {
               this.subscribers.push(e);
            }
            return () => {
               this.unsubscribe(e);
            };
         }
         unsubscribe(e) {
            if (Array.isArray(this.subscribers)) {
               const t = this.subscribers.indexOf(e);
               if (t !== -1) {
                  this.subscribers.splice(t, 1);
               }
            }
         }
      }();
      const Lt = object(41281);
      const ApplyStyle = function (styles) {
         return function (t) {
            class s extends At {
               constructor() {
                  super(...arguments);
                  this.styles = styles;
                  this.managedComponent = t;
               }
            }
            s.displayName = `withJSS(${t.displayName || t.name})`;
            return Lt(s, t);
         };
      };
      var Ft;
      function Bt(e, t) {
         return s => {
            const i = (s && s.direction ? s.direction : Ft.ltr) === Ft.rtl ? t : e;
            if (typeof i == "function") {
               return i(s);
            } else {
               return i;
            }
         };
      }
      function Rt(e, t, s, i, n, o) {
         return r => {
            const a = S(e, r);
            const l = Te(r) ? -1 : 1;
            const c = Ie(C)(a)(Ae)(() => l)((h = S(t, r), e => e >= h))(r);
            var h;
            const d = Oe(e, c)(r);
            const u = S(s, r);
            const p = S(i, r);
            const b = S(n, r);
            const g = S(o, r);
            return function (e, t, s, i, n, o, r) {
               const a = e + s * Math.abs(i - n);
               const l = s === 1 ? i < n : s * i > s * n;
               const c = l ? e : a;
               const h = l ? a : e;
               const d = c + s * o;
               const u = c + s * r;
               return {
                  rest: Pe(c, t),
                  hover: Pe(h, t),
                  active: Pe(d, t),
                  focus: Pe(u, t)
               };
            }(d, a, l, u, p, b, g);
         };
      }
      (function (e) {
         e.ltr = "ltr";
         e.rtl = "rtl";
      })(Ft ||= {});
      const Nt = we(Rt(E, 14, 0, ce, he, de));
      const zt = xe(ye.rest, Nt);
      xe(ye.hover, Nt);
      xe(ye.active, Nt);
      xe(ye.focus, Nt);
      var $t;
      var Gt;
      var qt;
      var Ut;
      var Kt;
      function Wt(e = "px") {
         return t => t + e;
      }
      (function (e) {
         e.small = "small";
         e.large = "large";
      })($t ||= {});
      (function (e) {
         e[e._1 = 1] = "_1";
         e[e._2 = 2] = "_2";
         e[e._3 = 3] = "_3";
         e[e._4 = 4] = "_4";
         e[e._5 = 5] = "_5";
         e[e._6 = 6] = "_6";
         e[e._7 = 7] = "_7";
      })(Gt ||= {});
      (function (e) {
         e.h1 = "h1";
         e.h2 = "h2";
         e.h3 = "h3";
         e.h4 = "h4";
         e.h5 = "h5";
         e.h6 = "h6";
         e.p = "p";
      })(qt ||= {});
      (function (e) {
         e[e._1 = 1] = "_1";
         e[e._2 = 2] = "_2";
         e[e._3 = 3] = "_3";
         e[e._4 = 4] = "_4";
         e[e._5 = 5] = "_5";
         e[e._6 = 6] = "_6";
         e[e._7 = 7] = "_7";
      })(Ut ||= {});
      (function (e) {
         e.h1 = "h1";
         e.h2 = "h2";
         e.h3 = "h3";
         e.h4 = "h4";
         e.h5 = "h5";
         e.h6 = "h6";
         e.p = "p";
      })(Kt ||= {});
      const Jt = Wt();
      function Xt(e) {
         if (f.Z(e)) {
            return t => Jt(e(t));
         } else {
            return Jt(e);
         }
      }
      qt.h2;
      Gt._5;
      Kt.h3;
      Ut._5;
      const Yt = 28;
      Xt(1035);
      Xt(1134);
      Xt(755);
      const Qt = {
         select_menu: {
            ...u(d.SELECT_MENU),
            backgroundColor: "inherit"
         }
      };
      function es(e, t, s) {
         const n = kt(() => React.createElement(React.Fragment, null, s), Mt.Secondary);
         return React.createElement(n, null);
      }
      var ts = object(79022);
      function ss(e, ...t) {
         return s => t.reduce((e, t, i) => e.replace(new RegExp(`\\{${i}\\}`, "g"), t(s)), e);
      }
      function is(e) {
         if (ts.Z(e)) {
            return `${e} !important`;
         } else {
            return t => is(e(t));
         }
      }
      var ns = object(7986);
      const os = "@media (-ms-high-contrast:active)";
      var rs;
      (function (e) {
         e.text = "WindowText";
         e.forcedColorLink = "LinkText";
         e.msLink = "-ms-hotlight";
         e.disabledText = "GrayText";
         e.selectedText = "HighlightText";
         e.selectedBackground = "Highlight";
         e.buttonText = "ButtonText";
         e.buttonBackground = "ButtonFace";
         e.background = "Window";
      })(rs ||= {});
      const as = {
         "-ms-high-contrast-adjust": "none"
      };
      const ls = ns.B7() ? "LinkText !important" : "-ms-hotlight !important";
      const cs = {
         [os]: Object.assign({
            background: rs.buttonBackground,
            "border-color": rs.buttonBackground,
            color: rs.buttonText,
            fill: rs.buttonText
         }, as)
      };
      const hs = {
         [os]: Object.assign({
            background: rs.buttonBackground,
            "border-color": rs.buttonText,
            color: rs.buttonText,
            fill: rs.buttonText
         }, as)
      };
      const ds = {
         [os]: Object.assign({
            background: rs.selectedBackground,
            "border-color": rs.selectedBackground,
            color: rs.selectedText,
            fill: rs.selectedText
         }, as)
      };
      const us = {
         [os]: {
            background: rs.background,
            "border-color": ls,
            color: ls,
            fill: ls
         }
      };
      is(rs.buttonBackground);
      is(rs.disabledText);
      is(rs.disabledText);
      const ps = {
         [os]: {
            opacity: "1",
            background: is(rs.buttonBackground),
            color: is(rs.disabledText),
            fill: is(rs.disabledText),
            "border-color": is(rs.disabledText)
         }
      };
      const bs = {
         [os]: {
            opacity: "1",
            color: is(rs.disabledText),
            fill: is(rs.disabledText)
         }
      };
      is(rs.disabledText);
      const gs = {
         [os]: {
            "border-color": rs.buttonText,
            "box-shadow": ss("0 0 0 {0} inset {1}", Xt(I), () => rs.buttonText)
         }
      };
      const fs = {
         [os]: {
            "box-shadow": ss("0 0 0 2px {2}, 0 0 0 {0} {1}", Xt(Qe(A, 2)), () => rs.buttonText, () => rs.buttonBackground)
         }
      };
      const ms = {
         [os]: {
            "border-color": is(rs.buttonText),
            "box-shadow": ss("0 0 0 {0} inset {1}", Xt(A), () => rs.buttonBackground)
         }
      };
      const ys = {
         [os]: {
            background: rs.selectedBackground,
            color: rs.selectedText,
            fill: rs.selectedText
         }
      };
      const vs = {
         [os]: {
            background: rs.selectedText,
            "border-color": rs.selectedBackground,
            color: rs.selectedBackground,
            fill: rs.selectedBackground
         }
      };
      const ws = {
         [os]: {
            color: is(rs.text),
            fill: is(rs.text)
         }
      };
      const xs = {
         [os]: {
            color: is(rs.buttonText),
            fill: is(rs.buttonText)
         }
      };
      const Ss = {
         [os]: {
            color: is(rs.selectedText),
            fill: is(rs.selectedText)
         }
      };
      const Ms = {
         [os]: {
            color: is(rs.selectedBackground),
            fill: is(rs.selectedBackground)
         }
      };
      const ks = {
         [os]: {
            color: ls,
            fill: ls
         }
      };
      const Hs = {
         [os]: {
            border: ss("{0} solid {1}", Xt(I), () => rs.text)
         }
      };
      const Cs = {
         [os]: {
            "border-color": rs.buttonText
         }
      };
      const Vs = {
         [os]: {
            background: rs.buttonBackground,
            "box-shadow": ss("0 0 0 {0} inset {1}", Xt(I), () => ls)
         }
      };
      rs.background;
      rs.buttonText;
      rs.buttonBackground;
      rs.selectedText;
      const _s = {
         [os]: {
            background: rs.selectedBackground
         }
      };
      rs.buttonBackground;
      rs.selectedText;
      rs.selectedBackground;
      rs.selectedText;
      function Os(e, t = 28, s = 28) {
         return {
            "min-width": `${t}px`,
            "max-width": "unset",
            height: `${s}px`,
            width: `${t}px`,
            padding: "0",
            margin: "0",
            transition: "none",
            background: "transparent",
            "&:hover:not([disabled])": {
               [os]: {
                  "forced-color-adjust": "none",
                  fill: rs.selectedText + " !important"
               }
            },
            "&:focus-visible": {
               [os]: {
                  "forced-color-adjust": "none",
                  "border-color": rs.buttonText + " !important",
                  fill: rs.buttonText + " !important",
                  background: "transparent"
               }
            },
            "& > *": {
               display: "flex !important"
            },
            "&:disabled": {
               [os]: {
                  "forced-color-adjust": "none",
                  fill: rs.disabledText
               }
            },
            [os]: {
               "forced-color-adjust": "none",
               fill: rs.buttonText
            }
         };
      }
      const Es = {
         toggle_toggleButton: {
            float: Bt("right", "left"),
            marginInlineStart: "5px"
         },
         toggle_statusMessage: {
            paddingInlineStart: "0px"
         }
      };
      const Ts = {
         button: {
            height: "fit-content",
            overflow: "visible",
            marginBottom: "16px"
         }
      };
      const Ps = {
         button: {
            height: "28px",
            width: "fit-content"
         }
      };
      const js = {
         settingsHamburgerMenu: {
            display: "block",
            marginInlineStart: "auto",
            marginBottom: "4px",
            backgroundColor: "transparent"
         },
         settingsHamburgerMenu_settingsButton: {
            height: "20px",
            width: "20px",
            color: "currentColor",
            fill: "currentColor"
         },
         settingsHamburgerMenu_closeButton: {
            ...Os(0, Yt, Yt),
            position: "absolute",
            top: "0",
            margin: "6px",
            [(Ds = "right", Is = "left", As = Ct.direction, As === Ft.ltr ? Ds : Is)]: "0",
            "& $settingsHamburgerMenu_closeButton_icon": {
               height: "20px",
               width: "20px"
            }
         },
         settingsHamburgerMenu_closeButton_icon: {},
         settingsHamburgerMenu_flyout_buttonSection: {
            display: "flex",
            flexDirection: "column"
         },
         settingsHamburgerMenu_flyout_divider: {
            margin: "4px -16px"
         },
         settingsHamburgerMenu_flyout: {
            padding: "16px"
         },
         settingsHamburgerMenu_flyout_label: {
            margin: "0 0 0.5em",
            display: "block"
         },
         settingsHamburgerMenu_flyout_score: {
            marginTop: "8px",
            display: "flex",
            alignItems: "center"
         },
         settingsHamburgerMenu_flyout_scoreStar: {
            height: "16px",
            width: "16px",
            color: "currentColor",
            fill: "currentColor",
            marginInlineEnd: "4px"
         },
         settingsHamburgerMenu_flyout_shareRow: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "6px 0"
         },
         settingsHamburgerMenu_flyout_toggleRow: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            padding: "6px 0"
         },
         settingsHamburgerMenu_centered: {
            margin: "0 auto"
         },
         settingsHamburgerMenu_icon: {
            color: zt,
            fill: "currentColor"
         },
         settingsHamburgerMenu_creditsTable: {
            margin: "0 auto",
            color: zt
         },
         settingsHamburgerMenu_creditsTable_specialThanks: {
            marginTop: "8px",
            marginBottom: "4px"
         }
      };
      var Ds;
      var Is;
      var As;
      function Ls(e) {
         return t => fe(t)[e].toString();
      }
      function Zs(e) {
         return {
            "font-weight": e
         };
      }
      function Fs() {
         return Zs(Ls("normal"));
      }
      function Bs() {
         return Zs(Ls("semibold"));
      }
      function Rs(e) {
         return {
            cursor: e
         };
      }
      function Ns() {
         return Rs("default");
      }
      function zs() {
         return Rs("not-allowed !important");
      }
      function $s() {
         return Rs("pointer");
      }
      const Gs = {
         paragraph: Object.assign(Object.assign({}, Ns()), Fs()),
         paragraph__1: {},
         paragraph__2: {},
         paragraph__3: {}
      };
      var qs;
      var Us;
      (function (e) {
         e.caption = "caption";
         e.h1 = "h1";
         e.h2 = "h2";
         e.h3 = "h3";
         e.h4 = "h4";
         e.h5 = "h5";
         e.h6 = "h6";
         e.p = "p";
         e.span = "span";
         e.figcaption = "figcaption";
      })(qs ||= {});
      (function (e) {
         e[e._1 = 1] = "_1";
         e[e._2 = 2] = "_2";
         e[e._3 = 3] = "_3";
         e[e._4 = 4] = "_4";
         e[e._5 = 5] = "_5";
         e[e._6 = 6] = "_6";
         e[e._7 = 7] = "_7";
         e[e._8 = 8] = "_8";
         e[e._9 = 9] = "_9";
      })(Us ||= {});
      var Ks = object(54256);
      const Ws = "Base";
      class Js extends baseComponent {
         constructor() {
            super(...arguments);
            this.handledProps = {
               managedClasses: undefined,
               tag: undefined,
               size: undefined
            };
         }
         get tag() {
            return this.generateHTMLTag();
         }
         render() {
            return React.createElement(this.tag, Object.assign({}, this.unhandledProps(), {
               className: this.generateClassNames()
            }), this.props.children);
         }
         generateClassNames() {
            const e = this.props.managedClasses;
            return super.generateClassNames(Ks.A(e.typography, e[`typography__${this.props.size}`]));
         }
         generateHTMLTag() {
            return qs[this.props.tag] || qs.p;
         }
      }
      Js.defaultProps = {
         tag: qs.p,
         size: Us._1,
         managedClasses: {}
      };
      Js.displayName = `${Ws}Typography`;
      const Xs = Js;
      var Ys;
      var Qs = object(45766);
      function ei(e = 1) {
         return t => (j(t) + getProperty("density")(t)) * P(t) * e;
      }
      function ti(e = 1, t) {
         return s => Wt(t)(ei(e)(s));
      }
      function si(e, t, s) {
         return i => {
            const n = function (e) {
               const t = getProperty("density")(e);
               if (t >= 2) {
                  return Ys.spacious;
               } else if (t <= -2) {
                  return Ys.compact;
               } else {
                  return Ys.normal;
               }
            }(i);
            return S(n === Ys.compact ? e : n === Ys.spacious ? s : t, i);
         };
      }
      function ii(e = 0, t) {
         return s => Wt(t)(function (e = 0) {
            return t => (D(t) + si(-1, 0, 1)(t)) * P(t) - e;
         }(S(e, s))(s));
      }
      (function (e) {
         e.compact = "compact";
         e.normal = "normal";
         e.spacious = "spacious";
      })(Ys ||= {});
      const ni = [[60, 72], [46, 56], [34, 44], [28, 36], [20, 28], [16, 24], [14, 20], [12, 16], [10, 16]].reduce((e, t, s) => Object.assign(e, {
         [`t${s + 1}`]: {
            fontSize: t[0],
            lineHeight: t[1]
         }
      }), {});
      function oi(e) {
         if (ni.hasOwnProperty(e)) {
            return e;
         } else {
            return "t7";
         }
      }
      function ri(e) {
         return t => {
            const s = parseInt(e.replace("t", ""), 10);
            const i = si(-1, 0, 1)(t);
            const n = Qs.Z(s - i, 1, 9);
            return oi(`t${n.toString()}`);
         };
      }
      function ai(e) {
         return ni[oi(e)].fontSize;
      }
      function li(e) {
         return ni[oi(e)].lineHeight;
      }
      function ci(e) {
         return Xt(ai(e));
      }
      function hi(e) {
         return Xt(li(e));
      }
      function di(e, t) {
         return s => ({
            "font-size": e(s),
            "line-height": t(s)
         });
      }
      di(ci, hi);
      const ui = di(function (e) {
         return t => ci(ri(e)(t));
      }, function (e) {
         return t => hi(ri(e)(t));
      });
      const pi = ApplyStyle({
         typography: {
            color: zt,
            "margin-top": "0",
            "margin-bottom": "0",
            transition: "all 0.2s ease-in-out"
         },
         typography__1: Object.assign({}, ui("t1")),
         typography__2: Object.assign({}, ui("t2")),
         typography__3: Object.assign({}, ui("t3")),
         typography__4: Object.assign({}, ui("t4")),
         typography__5: Object.assign({}, ui("t5")),
         typography__6: Object.assign({}, ui("t6")),
         typography__7: Object.assign({}, ui("t7")),
         typography__8: Object.assign({}, ui("t8")),
         typography__9: Object.assign({}, ui("t9"))
      })(Xs);
      const bi = "MSFT";
      var gi;
      (function (e) {
         e[e._1 = 1] = "_1";
         e[e._2 = 2] = "_2";
         e[e._3 = 3] = "_3";
      })(gi ||= {});
      class fi extends baseComponent {
         constructor() {
            super(...arguments);
            this.handledProps = {
               size: undefined,
               managedClasses: undefined
            };
         }
         render() {
            return React.createElement(pi, Object.assign({}, this.unhandledProps(), {
               tag: qs.p,
               size: this.size,
               className: this.generateClassNames()
            }), this.props.children);
         }
         generateClassNames() {
            const e = this.props.managedClasses;
            return super.generateClassNames(Ks.A(e.paragraph, e[`paragraph__${this.props.size}`]));
         }
         get size() {
            switch (this.props.size) {
               case gi._1:
                  return Us._5;
               case gi._2:
                  return Us._6;
               default:
                  return Us._7;
            }
         }
      }
      fi.defaultProps = {
         size: gi._3,
         managedClasses: {}
      };
      fi.displayName = `${bi}Paragraph`;
      const mi = fi;
      const yi = ApplyStyle(Gs)(mi);
      const vi = {
         heading: {
            "&$heading__1, &$heading__2, &$heading__3, &$heading__4, &$heading__5, &$heading__6, &$heading__7": Object.assign(Object.assign({}, Ns()), Bs())
         },
         heading__1: {},
         heading__2: {},
         heading__3: {},
         heading__4: {},
         heading__5: {},
         heading__6: {},
         heading__7: {}
      };
      class wi extends baseComponent {
         constructor() {
            super(...arguments);
            this.handledProps = {
               size: undefined,
               managedClasses: undefined,
               tag: undefined
            };
         }
         get tag() {
            if (this.props.tag) {
               return qs[this.props.tag];
            } else {
               return qs.h1;
            }
         }
         get size() {
            return Us[`_${this.props.size}`];
         }
         render() {
            return React.createElement(pi, Object.assign({}, this.unhandledProps(), {
               tag: this.tag,
               size: this.size,
               className: this.generateClassNames()
            }), this.props.children);
         }
         generateClassNames() {
            const e = this.props.managedClasses;
            return super.generateClassNames(Ks.A(e.heading, e[`heading__${this.props.size}`]));
         }
      }
      wi.displayName = `${bi}Heading`;
      wi.defaultProps = {
         size: Gt._1,
         managedClasses: {}
      };
      const xi = wi;
      const Si = ApplyStyle(vi)(xi);
      function Mi(e = "") {
         return `&:focus-visible${e}`;
      }
      function ki(e = "") {
         return `body:not(.js-focus-visible) &:focus${e}, .js-focus-visible &.focus-visible${e}, .js-focus-visible [data-focus-visible-added]&${e}`;
      }
      function Hi(e, t) {
         let s;
         let i;
         if (typeof e == "object" && e !== null) {
            i = "";
            s = e;
         } else {
            if (typeof e != "string") {
               return {};
            }
            i = e;
            s = t;
         }
         return Object.assign({
            "&:focus": {
               outline: "none"
            }
         }, ns.Zm() ? {
            [Mi(i)]: s
         } : {
            [ki(i)]: s
         });
      }
      const Ci = Ce(q, U, K, W, se, ie, ne, oe);
      function Vi(e) {
         return t => {
            const s = Le(t);
            return Pe(s + (s >= Ci(t) ? -1 : 1) * e(t), E(t));
         };
      }
      const _i = we(Vi(se));
      const Oi = we(Vi(ie));
      const Ei = we(Vi(ne));
      const Ti = we(Vi(oe));
      const Pi = we(Vi(re));
      we(e => ({
         rest: _i(e),
         hover: Oi(e),
         active: Ei(e),
         focus: Ti(e),
         selected: Pi(e)
      }));
      const ji = 3.5;
      function Di(e) {
         return e > ji;
      }
      const Ii = we(Ie(C)(E)(function (e, t, s) {
         return Ee(E, e)(s);
      })(function (e, t, s) {
         if (Te(s)) {
            return -1;
         } else {
            return 1;
         }
      })(Di));
      function Ai(e, t, s) {
         if (Te(s)) {
            return 1;
         } else {
            return -1;
         }
      }
      function Li(e) {
         return Ie(Ii)(T)(function (e) {
            return (t, s, i) => s.indexOf(e(i));
         }(e))(Ai)(Di);
      }
      function Zi(e) {
         return {
            "border-radius": e
         };
      }
      function Fi() {
         return Zi(Xt(_));
      }
      function Bi() {
         return Zi(Xt(O));
      }
      function Ri() {
         return Bi();
      }
      function Ni(e) {
         return {
            border: ss("{0} solid transparent", Xt(A))
         };
      }
      function zi(e) {
         return Object.assign(Object.assign({
            opacity: (t = L, e => String(t(e)))
         }, zs()), {
            [os]: {
               opacity: "1",
               color: rs.disabledText
            }
         });
         var t;
      }
      function $i() {
         return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, ui("t7")), $s()), Ni()), Fi()), {
            "font-family": "inherit",
            "box-sizing": "border-box",
            "max-width": "374px",
            "min-width": ti(),
            padding: ss("0 {0}", ii(Qe(A, 2))),
            display: "inline-flex",
            "justify-content": "center",
            "align-items": "center",
            height: ti(),
            "line-height": "1",
            overflow: "hidden",
            "text-decoration": "none",
            "white-space": "nowrap",
            transition: "all 0.1s ease-in-out",
            "&::-moz-focus-inner": {
               border: "0"
            }
         });
      }
      const Gi = {
         button_contentRegion: {
            position: "relative",
            "&::before": {
               content: "''",
               display: "block",
               height: Xt(I),
               position: "absolute",
               bottom: "-3px",
               width: "100%",
               left: Bt("0", ""),
               right: Bt("", "0")
            },
            "& svg": {}
         },
         button__disabled: Object.assign({}, zi()),
         button_beforeOrAfterContainer: {
            display: "flex",
            "align-items": "center",
            "justify-content": "center",
            "min-width": "20px",
            "min-height": "20px"
         },
         button_beforeContainer: {},
         button_afterContainer: {},
         button_beforeContent: {},
         button_afterContent: {},
         button__hasBeforeOrAfterAndChildren: {
            "& $button_beforeContainer": {
               "margin-right": Bt(ii(2), ""),
               "margin-left": Bt("", ii(2))
            },
            "& $button_afterContainer": {
               "margin-right": Bt("", ii(2)),
               "margin-left": Bt(ii(2), "")
            }
         }
      };
      const qi = Object.assign(Object.assign({}, Gi), {
         button: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, $i()), {
            color: zt,
            fill: zt,
            background: _i,
            "&:hover:enabled": Object.assign({
               "background-color": Oi
            }, ys),
            "&:active:enabled": {
               "background-color": Ei
            }
         }), Hi({
            "border-color": Ii,
            [os]: {
               background: rs.selectedBackground,
               color: is(rs.selectedText),
               fill: is(rs.selectedText),
               "box-shadow": "none"
            }
         })), {
            "&:disabled": Object.assign({}, ps)
         }), cs), {
            "a&": Object.assign(Object.assign(Object.assign(Object.assign({}, us), {
               "&:not($button__disabled):hover": {
                  "background-color": Oi,
                  [os]: {
                     background: ls,
                     color: is(rs.selectedText),
                     fill: is(rs.selectedText)
                  }
               },
               "&:not($button__disabled):active": {
                  "background-color": Ei
               }
            }), Hi({
               "border-color": Ii,
               [os]: {
                  background: ls
               }
            })), {
               "&$button__disabled": Object.assign({}, ps),
               "&$button__disabled:focus-visible": {
                  "border-color": "transparent",
                  [os]: {
                     background: is(rs.buttonBackground),
                     "box-shadow": "none"
                  }
               }
            })
         })
      });
      var Ui;
      (function (e) {
         e.a = "a";
         e.button = "button";
      })(Ui ||= {});
      class Ki extends baseComponent {
         constructor() {
            super(...arguments);
            this.handledProps = {
               disabled: undefined,
               href: undefined,
               managedClasses: undefined
            };
         }
         render() {
            return React.createElement(this.tag, Object.assign({}, this.unhandledProps(), {
               className: this.generateClassNames(),
               href: this.props.href || null
            }, this.renderDisabledAttribute()), this.props.children);
         }
         generateClassNames() {
            const {
               button: e,
               button__disabled: t
            } = this.props.managedClasses;
            return super.generateClassNames(Ks.A(e, [t, this.props.disabled]));
         }
         renderDisabledAttribute() {
            if (this.props.disabled === true) {
               if (this.tag === Ui.a) {
                  return {
                     "aria-disabled": true
                  };
               } else {
                  return {
                     disabled: true
                  };
               }
            }
         }
         get tag() {
            if (typeof this.props.href == "string") {
               return Ui.a;
            } else {
               return Ui.button;
            }
         }
      }
      Ki.displayName = `${Ws}Button`;
      Ki.defaultProps = {
         managedClasses: {}
      };
      const Wi = Ki;
      var Ji = object(85857);
      class Xi extends baseComponent {
         constructor() {
            super(...arguments);
            this.handledProps = {
               beforeContent: undefined,
               afterContent: undefined,
               disabled: undefined,
               href: undefined,
               managedClasses: undefined
            };
         }
         render() {
            const e = this.props.managedClasses;
            return React.createElement(Wi, Object.assign({}, this.unhandledProps(), {
               managedClasses: e,
               className: this.generateClassNames(),
               href: this.props.href,
               disabled: this.props.disabled
            }), this.generateBeforeContent(), React.createElement("span", {
               className: Ks.A(e.button_contentRegion)
            }, this.props.children), this.generateAfterContent());
         }
         generateClassNames() {
            return super.generateClassNames(Ks.A([this.props.managedClasses.button__hasBeforeOrAfterAndChildren, this.hasBeforeOrAfterAndChildren()]));
         }
         generateBeforeContent() {
            if (typeof this.props.beforeContent == "function") {
               return React.createElement("div", {
                  className: Ks.A(this.props.managedClasses.button_beforeOrAfterContainer, this.props.managedClasses.button_beforeContainer)
               }, this.props.beforeContent(Ks.A(this.props.managedClasses.button_beforeContent)));
            }
         }
         generateAfterContent() {
            if (typeof this.props.afterContent == "function") {
               return React.createElement("div", {
                  className: Ks.A(this.props.managedClasses.button_beforeOrAfterContainer, this.props.managedClasses.button_afterContainer)
               }, this.props.afterContent(Ks.A(this.props.managedClasses.button_afterContent)));
            }
         }
         hasBeforeOrAfterAndChildren() {
            return !Ji.Z(this.props.children) && (!Ji.Z(this.props.beforeContent) || !Ji.Z(this.props.afterContent));
         }
      }
      Xi.displayName = `${bi}ButtonBase`;
      Xi.defaultProps = {
         managedClasses: {}
      };
      const Yi = Xi;
      const Qi = ApplyStyle(qi)(Yi);
      function en(e) {
         return t => {
            const s = T(t);
            const i = V(t);
            const n = Ee(T, i)(t);
            const o = {
               rest: N(t),
               hover: z(t),
               active: $(t),
               focus: G(t)
            };
            const r = Te(t) ? -1 : 1;
            const a = n + (r === 1 ? Math.min(o.rest, o.hover) : Math.max(r * o.rest, r * o.hover));
            const l = Ie(C)(T)(() => a)(() => r)(t => t >= e)(t);
            const c = Oe(T, l)(t);
            const h = c + r * Math.abs(o.rest - o.hover);
            const d = r === 1 ? o.rest < o.hover : r * o.rest > r * o.hover;
            const u = d ? c : h;
            const p = d ? h : c;
            const b = u + r * o.active;
            const g = u + r * o.focus;
            return {
               rest: Pe(u, s),
               hover: Pe(p, s),
               active: Pe(b, s),
               focus: Pe(g, s)
            };
         };
      }
      Qi.displayName = `${bi}StealthButton`;
      const tn = we(en(4.5));
      const sn = we(en(3));
      const nn = xe(ye.rest, tn);
      const on = xe(ye.hover, tn);
      const rn = xe(ye.active, tn);
      xe(ye.focus, tn);
      xe(ye.rest, sn);
      xe(ye.hover, sn);
      xe(ye.active, sn);
      xe(ye.focus, sn);
      const an = ApplyStyle(Object.assign(Object.assign({}, Gi), {
         button: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, $i()), {
            padding: "0",
            border: "0",
            "justify-content": "flex-start",
            "background-color": "transparent",
            color: nn,
            fill: nn
         }), Hi(Object.assign(Object.assign({
            "border-color": "transparent",
            "box-shadow": "none"
         }, Ms), {
            "& $button_contentRegion::before": Object.assign({
               background: zt,
               height: Xt(A)
            }, _s)
         }))), {
            "a&, button&": {},
            "& $button_contentRegion::before": {
               [os]: {
                  background: rs.buttonText
               }
            },
            "&:hover $button_contentRegion::before": Object.assign({
               background: on
            }, _s),
            "&:hover$button__disabled $button_contentRegion::before": {
               display: "none"
            },
            "&:active $button_contentRegion::before": Object.assign({
               background: rn
            }, _s),
            "&$button__disabled, &$button__disabled $button_contentRegion::before": Object.assign({
               "background-color": "transparent"
            }, bs),
            "&:hover:enabled, a&:not($button__disabled):hover": Object.assign({
               color: on,
               fill: on,
               "background-color": "transparent"
            }, Ms),
            "&:active:enabled, a&:not($button__disabled):active": {
               color: rn,
               fill: rn,
               "background-color": "transparent"
            }
         }), cs), {
            "a&:not($button__disabled)": {
               [os]: {
                  background: rs.background,
                  color: ls,
                  fill: ls
               },
               "&:not($button__disabled):hover": Object.assign({}, ks),
               "&:hover $button_contentRegion::before": {
                  [os]: {
                     background: ls
                  }
               },
               "& $button_contentRegion::before": {
                  [os]: {
                     background: "transparent"
                  }
               }
            }
         })
      }))(Yi);
      var ln;
      an.displayName = `${bi}LightweightButton`;
      (function (e) {
         e.presentation = "presentation";
         e.separator = "separator";
      })(ln ||= {});
      class cn extends baseComponent {
         constructor() {
            super(...arguments);
            this.handledProps = {
               managedClasses: undefined,
               role: undefined
            };
         }
         render() {
            return React.createElement("hr", Object.assign({}, this.unhandledProps(), this.generateAttributes(), {
               className: this.generateClassNames()
            }));
         }
         generateAttributes() {
            if (this.props.role && this.props.role !== ln.separator) {
               return {
                  role: ln[this.props.role]
               };
            }
         }
         generateClassNames() {
            return super.generateClassNames(Ks.A(this.props.managedClasses.divider));
         }
      }
      cn.displayName = `${Ws}Divider`;
      cn.defaultProps = {
         managedClasses: {}
      };
      const hn = cn;
      const dn = we(e => {
         const t = E(e);
         const s = Le(e);
         const i = ue(e);
         return Pe(s + (Te(e) ? -1 : 1) * i, t);
      });
      const un = ApplyStyle({
         divider: Object.assign({
            "box-sizing": "content-box",
            height: "0",
            margin: "0",
            border: "none",
            "border-top": ss("{0} solid {1}", Xt(I), dn),
            transition: "all 0.2s ease-in-out"
         }, Cs)
      })(hn);
      var pn;
      var bn = object(81492);
      (function (e) {
         e.label = "label";
         e.legend = "legend";
      })(pn ||= {});
      class gn extends baseComponent {
         constructor() {
            super(...arguments);
            this.handledProps = {
               hidden: undefined,
               managedClasses: undefined,
               tag: undefined
            };
         }
         get tag() {
            if (bn.Z(pn[this.props.tag])) {
               return pn.label;
            } else {
               return pn[this.props.tag];
            }
         }
         render() {
            return React.createElement(this.tag, Object.assign({}, this.unhandledProps(), {
               className: this.generateClassNames()
            }), this.props.children);
         }
         generateClassNames() {
            const {
               label: e,
               label__hidden: t
            } = this.props.managedClasses;
            return super.generateClassNames(Ks.A(e, [t, this.props.hidden]));
         }
      }
      gn.displayName = `${Ws}Label`;
      gn.defaultProps = {
         tag: pn.label,
         managedClasses: {}
      };
      const fn = gn;
      const mn = ApplyStyle({
         label: Object.assign(Object.assign({}, ui("t7")), {
            display: "inline-block",
            color: zt,
            padding: "0"
         }),
         label__hidden: Object.assign({}, {
            position: "absolute",
            overflow: "hidden",
            clip: "rect(1px, 1px, 1px, 1px)",
            width: "1px",
            height: "1px",
            border: "0",
            padding: "0",
            margin: "0"
         })
      })(fn);
      class yn extends baseComponent {
         constructor(e) {
            super(e);
            this.handledProps = {
               managedClasses: undefined,
               disabled: undefined,
               inputId: undefined,
               labelId: undefined,
               name: undefined,
               selected: undefined,
               selectedMessage: undefined,
               statusMessageId: undefined,
               unselectedMessage: undefined,
               onChange: undefined
            };
            this.handleToggleChange = e => {
               if (typeof this.props.selected != "boolean") {
                  this.setState({
                     selected: !this.state.selected
                  });
               }
               if (this.props.onChange) {
                  this.props.onChange(e);
               }
            };
            this.state = {
               selected: this.props.selected || false
            };
         }
         static getDerivedStateFromProps(e, t) {
            if (typeof e.selected == "boolean" && e.selected !== t.selected) {
               return {
                  selected: e.selected
               };
            } else {
               return null;
            }
         }
         render() {
            const {
               toggle_toggleButton: e,
               toggle_input: t,
               toggle_stateIndicator: s
            } = this.props.managedClasses;
            return React.createElement("div", Object.assign({}, this.unhandledProps(), {
               className: this.generateClassNames(),
               "aria-disabled": this.props.disabled || null
            }), this.generateLabel(), React.createElement("div", {
               className: Ks.A(e)
            }, React.createElement("input", {
               className: Ks.A(t),
               type: "checkbox",
               id: this.props.inputId,
               "aria-describedby": this.props.statusMessageId,
               disabled: this.props.disabled,
               name: this.props.name,
               value: this.generateToggleStateLabel(),
               onChange: this.handleToggleChange,
               checked: this.state.selected
            }), React.createElement("span", {
               className: Ks.A(s)
            })), this.renderStatusMessage());
         }
         generateClassNames() {
            const {
               toggle: e,
               toggle__disabled: t,
               toggle__checked: s
            } = this.props.managedClasses;
            return super.generateClassNames(Ks.A(e, [t, this.props.disabled], [s, this.state.selected]));
         }
         generateToggleStateLabel() {
            if (this.state.selected) {
               return this.props.selectedMessage;
            } else {
               return this.props.unselectedMessage;
            }
         }
         generateLabel() {
            if (this.props.labelId || this.props.children) {
               return React.createElement("label", {
                  className: Ks.A(this.props.managedClasses.toggle_label),
                  id: this.props.labelId,
                  htmlFor: this.props.inputId
               }, this.props.children);
            }
         }
         renderStatusMessage() {
            if (this.props.selectedMessage || this.props.unselectedMessage) {
               return React.createElement("span", {
                  id: this.props.statusMessageId,
                  className: Ks.A(this.props.managedClasses.toggle_statusMessage)
               }, this.generateToggleStateLabel());
            }
         }
      }
      yn.displayName = `${Ws}Toggle`;
      yn.defaultProps = {
         managedClasses: {}
      };
      const vn = yn;
      function wn(e) {
         return t => {
            const s = Te(t) ? -1 : 1;
            return Pe(Le(t) - e(t) * s, E(t));
         };
      }
      const xn = we(wn(X));
      const Sn = we(wn(Y));
      const Mn = we(wn(Q));
      const kn = we(wn(ee));
      const Hn = we(wn(te));
      we(e => ({
         rest: xn(e),
         hover: Sn(e),
         active: Mn(e),
         focus: kn(e),
         selected: Hn(e)
      }));
      const Cn = we(Rt(E, 3, 0, et(be, pe), et(ge, pe), et(me, pe)));
      const Vn = we(Cn);
      const _n = xe(ye.rest, Vn);
      const On = xe(ye.hover, Vn);
      const En = xe(ye.active, Vn);
      xe(ye.focus, Vn);
      var Tn = object(26269);
      const Pn = (e, t) => ke(y, e) >= t ? y : v;
      function jn(e) {
         return function (t) {
            if (typeof t == "function") {
               return s => Pn(t(s), e);
            } else {
               return Pn(V(t), e);
            }
         };
      }
      const Dn = jn(4.5);
      jn(3);
      const In = Ce(q, U, K);
      function An(e) {
         return t => {
            const s = T(t);
            const i = s.length;
            const n = V(t);
            const o = Dn(Object.assign({}, t, {
               backgroundColor: n
            }));
            const r = Z(t);
            const a = Le(t) >= In(t) ? -1 : 1;
            const l = i - 1;
            const c = Ee(T, n)(t);
            let h = 0;
            while (h < a * r && Tn.Z(c + h + a, 0, i) && ke(s[c + h + a], o) >= e && Tn.Z(c + h + a + a, 0, l)) {
               h += a;
            }
            const d = c + h;
            const u = d + a * -1 * r;
            const p = u + a * F(t);
            const b = u + a * B(t);
            return {
               rest: Pe(u, s),
               hover: Pe(d, s),
               active: Pe(p, s),
               focus: Pe(b, s),
               selected: Pe(u + (Te(t) ? R(t) * -1 : R(t)), s)
            };
         };
      }
      const Ln = we(An(4.5));
      const Zn = we(An(3));
      const Fn = xe(ye.rest, Ln);
      const Bn = xe(ye.hover, Ln);
      const Rn = xe(ye.active, Ln);
      xe(ye.focus, Ln);
      xe(ye.selected, Ln);
      xe(ye.rest, Zn);
      xe(ye.hover, Zn);
      xe(ye.active, Zn);
      xe(ye.focus, Zn);
      xe(ye.selected, Zn);
      const Nn = we(e => {
         const t = E(e);
         const s = Le(e);
         const i = Te(e) ? -1 : 1;
         const n = pe(e);
         const o = s + i * n;
         const r = o + i * (be(e) - n);
         const a = o + i * (ge(e) - n);
         const l = o + i * (me(e) - n);
         return {
            rest: Pe(o, t),
            hover: Pe(r, t),
            active: Pe(a, t),
            focus: Pe(l, t)
         };
      });
      const zn = xe(ye.rest, Nn);
      const $n = xe(ye.hover, Nn);
      const Gn = xe(ye.active, Nn);
      xe(ye.focus, Nn);
      function qn(e) {
         return Rt(E, e, 0, 0, 0, 0);
      }
      const Un = xe(ye.rest, we(qn(4.5)));
      xe(ye.rest, we(qn(3)));
      function Kn(e) {
         return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, ui("t7")), Fs()), {
            background: xn,
            border: ss("{0} solid {1}", Xt(I), zn),
            color: zt,
            "font-family": "inherit",
            "box-sizing": "border-box",
            padding: ss("0 {0}", ii(I))
         }), Fi()), {
            margin: "0",
            transition: "all 0.2s ease-in-out",
            "&:hover:enabled": {
               background: Sn,
               "border-color": $n,
               [os]: {
                  background: rs.buttonBackground,
                  border: ss("{0} solid {1}", Xt(I), () => rs.selectedBackground)
               }
            },
            "&:active:enabled": {
               background: Mn,
               "border-color": Gn
            },
            "&:focus:enabled": Object.assign({
               "box-shadow": ss("0 0 0 1px {0} inset", Ii),
               "border-color": Ii,
               outline: "none"
            }, gs),
            "&:disabled": Object.assign(Object.assign({}, zi()), ps),
            "&::placeholder": {
               color: Un(xn),
               [os]: {
                  color: rs.disabledText
               }
            },
            [os]: Object.assign(Object.assign({}, as), {
               background: rs.buttonBackground,
               "border-color": rs.buttonText,
               color: rs.buttonText
            })
         });
      }
      const Wn = {
         "box-shadow": ss("0 0 0 2px {0}, 0 0 0 {2} {1}", C, Ii, Xt(Qe(A, 2)))
      };
      const Jn = Qe(function (...e) {
         return Ye.apply(this, e);
      }(ei(), 2), P);
      const Xn = tt(Jn, 2);
      const Yn = Qe(P, si(0, 1, 2));
      const Qn = et(Jn, tt(Yn, 2));
      const eo = et(Xn, Yn, Qn);
      const to = ApplyStyle({
         toggle: {
            display: "inline-block",
            color: zt,
            transition: "all 0.2s ease-in-out",
            [os]: Object.assign({}, as)
         },
         toggle_label: Object.assign(Object.assign(Object.assign({}, $s()), ui("t7")), {
            display: "block",
            "padding-bottom": "7px",
            clear: "both"
         }),
         toggle_toggleButton: Object.assign(Object.assign({}, $s()), {
            position: "relative",
            "margin-top": "0",
            float: Bt("left", "right")
         }),
         toggle_stateIndicator: {
            position: "absolute",
            "pointer-events": "none",
            top: Xt(Yn),
            left: Bt(Xt(Yn), "unset"),
            right: Bt("unset", Xt(Yn)),
            transition: "all .1s ease",
            "border-radius": Xt(Qn),
            width: Xt(Qn),
            height: Xt(Qn),
            background: zt
         },
         toggle_input: Object.assign(Object.assign(Object.assign(Object.assign({}, $s()), {
            display: "block",
            position: "relative",
            margin: "0",
            width: Xt(Xn),
            height: Xt(Jn),
            background: xn,
            border: ss("{0} solid {1}", Xt(I), _n),
            "border-radius": Xt(Jn),
            appearance: "none",
            "-webkit-appearance": "none",
            "-moz-appearance": "none",
            outline: "none",
            "&:active": {
               background: Mn,
               "border-color": En,
               [os]: {
                  background: rs.selectedBackground,
                  "border-color": rs.selectedText,
                  "& + span": {
                     background: rs.selectedText
                  }
               }
            },
            "&:hover": {
               background: Sn,
               "border-color": On,
               [os]: {
                  background: rs.background,
                  "border-color": rs.selectedBackground,
                  "& + span": {
                     background: rs.selectedBackground
                  }
               }
            }
         }), Hi(Object.assign(Object.assign({}, Wn), fs))), {
            [os]: {
               background: rs.background,
               "border-color": rs.buttonText,
               "& + span": {
                  background: rs.buttonText
               }
            }
         }),
         toggle__checked: {
            "& $toggle_input": {
               background: Fn,
               "border-color": Fn,
               "&:disabled": {
                  "& $toggle_input, & $toggle_label, & $toggle_statusMessage": {
                     [os]: {
                        background: "transparent",
                        "border-color": is(rs.disabledText),
                        color: is(rs.disabledText),
                        "& + span": {
                           background: is(rs.disabledText)
                        }
                     }
                  }
               },
               "&:hover": {
                  [os]: {
                     background: rs.selectedText,
                     "border-color": rs.selectedBackground,
                     "& + span": {
                        background: rs.selectedBackground
                     }
                  }
               },
               "&:active": {
                  [os]: {
                     background: is(rs.selectedBackground),
                     "border-color": is(rs.selectedBackground),
                     "& + span": {
                        background: is(rs.selectedText)
                     }
                  }
               },
               [os]: {
                  background: rs.selectedBackground,
                  "border-color": rs.selectedBackground,
                  "& + span": {
                     background: rs.selectedText
                  }
               }
            },
            "& $toggle_stateIndicator": {
               left: Bt(Xt(eo), "unset"),
               right: Bt("unset", Xt(eo)),
               background: Dn
            }
         },
         toggle__disabled: Object.assign(Object.assign({}, zi()), {
            "& $toggle_input, & $toggle_label, & $toggle_statusMessage": Object.assign(Object.assign({}, zs()), {
               [os]: {
                  background: "transparent",
                  "border-color": is(rs.disabledText),
                  color: is(rs.disabledText),
                  "& + span": {
                     background: is(rs.disabledText)
                  }
               }
            })
         }),
         toggle_statusMessage: Object.assign(Object.assign(Object.assign({}, ui("t7")), {
            "line-height": Xt(Jn),
            float: Bt("left", "right"),
            "padding-left": Bt("6px", ""),
            "padding-right": Bt("", "6px"),
            "user-select": "none",
            "margin-top": "0",
            "padding-bottom": "0"
         }), ws)
      })(vn);
      const so = Ce(q, U, K, W);
      function io(e) {
         return t => {
            const s = Le(t);
            return Pe(s + (s >= so(t) ? -1 : 1) * e(t), E(t));
         };
      }
      const no = we(io(q));
      const oo = we(io(U));
      const ro = we(io(K));
      const ao = we(io(W));
      const lo = we(io(J));
      we(e => ({
         rest: no(e),
         hover: oo(e),
         active: ro(e),
         focus: ao(e),
         selected: lo(e)
      }));
      const co = ApplyStyle(Object.assign(Object.assign({}, Gi), {
         button: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, $i()), {
            color: zt,
            fill: zt,
            background: no,
            "&:hover:enabled, a&:not($button__disabled):hover": Object.assign({
               background: oo
            }, ys),
            "&:active:enabled, a&:not($button__disabled):active": {
               background: ro
            }
         }), Hi(Object.assign({
            "border-color": Ii
         }, gs))), {
            "&:disabled": Object.assign({}, ps),
            "&::-moz-focus-inner": {
               border: "0"
            }
         }), hs), {
            "a&:not($button__disabled)": Object.assign(Object.assign({}, us), {
               "&:not($button__disabled):hover": Object.assign({}, Vs),
               "&$button__disabled": Object.assign({}, ps)
            })
         })
      }))(Yi);
      co.displayName = `${bi}NeutralButton`;
      var ho;
      var uo = object(5171);
      (function (e) {
         e[e.e1 = 1] = "e1";
         e[e.e2 = 2] = "e2";
         e[e.e3 = 3] = "e3";
         e[e.e4 = 4] = "e4";
         e[e.e5 = 6] = "e5";
         e[e.e6 = 8] = "e6";
         e[e.e7 = 9] = "e7";
         e[e.e8 = 12] = "e8";
         e[e.e9 = 16] = "e9";
         e[e.e10 = 24] = "e10";
         e[e.e11 = 32] = "e11";
         e[e.e12 = 40] = "e12";
         e[e.e13 = 48] = "e13";
         e[e.e14 = 64] = "e14";
         e[e.e15 = 80] = "e15";
         e[e.e16 = 96] = "e16";
         e[e.e17 = 192] = "e17";
      })(ho ||= {});
      const po = {
         blurMultiplier: 0.225,
         blurBase: 2,
         xOffsetMultiplier: 0,
         yOffsetMultiplier: 0,
         opacity: 0.11
      };
      const bo = {
         blurMultiplier: 0.9,
         blurBase: 0,
         xOffsetMultiplier: 0,
         yOffsetMultiplier: 0.4,
         opacity: 0.13
      };
      function go(e, t, s) {
         return i => {
            const {
               r: n,
               g: o,
               b: r
            } = Se(t);
            const {
               xOffsetMultiplier: a,
               yOffsetMultiplier: l,
               opacity: c,
               blurMultiplier: h,
               blurBase: d = 0
            } = s;
            const u = 2 - ve.hM(Se(C(i)));
            return [a, l].map(t => parseFloat((t * e).toFixed(1))).concat(d + h * e).map(Xt).concat(new ot.h(n, o, r, c * u).toStringWebRGBA()).join(" ");
         };
      }
      function fo(e, t = v) {
         return s => {
            const i = go.bind(null, e, t);
            return [bo, po].map(e => i(e)(s)).join(", ");
         };
      }
      function mo(e) {
         return {
            "box-shadow": fo(e)
         };
      }
      const yo = {
         flyout: Object.assign(Object.assign(Object.assign(Object.assign({
            background: C
         }, Bi()), mo(ho.e14)), {
            "z-index": "1"
         }), Hs),
         flyout__top: {},
         flyout__bottom: {},
         flyout__left: {},
         flyout__right: {},
         flyout__horizontalInset: {},
         flyout__verticalInset: {}
      };
      function vo(e) {
         if (e instanceof HTMLElement) {
            return e;
         }
         if (!Ji.Z(e.current)) {
            if (e.current instanceof HTMLElement) {
               return e.current;
            }
            const t = n.findDOMNode(e.current);
            if (t instanceof HTMLElement || t instanceof Text) {
               return t;
            }
         }
         return null;
      }
      var wo;
      var xo;
      var So;
      var Mo = object(9453);
      (function (e) {
         e.left = "left";
         e.right = "right";
         e.uncontrolled = "uncontrolled";
      })(wo ||= {});
      (function (e) {
         e.top = "top";
         e.bottom = "bottom";
         e.uncontrolled = "uncontrolled";
      })(xo ||= {});
      (function (e) {
         e.uncontrolled = "uncontrolled";
         e.adjacent = "adjacent";
         e.inset = "inset";
      })(So ||= {});
      const ko = React.createContext({
         viewport: null
      });
      var Ho;
      var Co;
      (function (e) {
         e.left = "left";
         e.insetLeft = "insetLeft";
         e.insetRight = "insetRight";
         e.right = "right";
         e[undefined] = "undefined";
      })(Ho ||= {});
      (function (e) {
         e.top = "top";
         e.insetTop = "insetTop";
         e.insetBottom = "insetBottom";
         e.bottom = "bottom";
         e[undefined] = "undefined";
      })(Co ||= {});
      class Vo extends baseComponent {
         constructor(e) {
            super(e);
            this.handledProps = {
               managedClasses: undefined,
               anchor: undefined,
               viewport: undefined,
               horizontalPositioningMode: undefined,
               defaultHorizontalPosition: undefined,
               horizontalThreshold: undefined,
               horizontalAlwaysInView: undefined,
               horizontalLockToDefault: undefined,
               verticalPositioningMode: undefined,
               defaultVerticalPosition: undefined,
               verticalThreshold: undefined,
               verticalAlwaysInView: undefined,
               verticalLockToDefault: undefined,
               fixedAfterInitialPlacement: undefined,
               scaleToFit: undefined,
               delayContentInstanciation: undefined,
               disabled: undefined
            };
            this.rootElement = React.createRef();
            this.openRequestAnimationFrame = null;
            this.anchorTop = 0;
            this.anchorRight = 0;
            this.anchorBottom = 0;
            this.anchorLeft = 0;
            this.anchorHeight = 0;
            this.anchorWidth = 0;
            this.scrollTop = 0;
            this.scrollLeft = 0;
            this.baseHorizontalOffset = 0;
            this.baseVerticalOffset = 0;
            this.getPositioningStyles = () => {
               const e = Ne.Z(this.props, "style");
               return Object.assign(Object.assign(Object.assign({}, this.props.scaleToFit ? {
                  height: `${this.state.verticalSelectedPositionHeight}px`,
                  width: `${this.state.horizontalSelectedPositionWidth}px`
               } : {}), {
                  opacity: this.props.disabled || this.state.initialLayoutComplete ? undefined : 0,
                  position: "relative",
                  transformOrigin: `${this.state.xTransformOrigin} ${this.state.yTransformOrigin}`,
                  transform: `translate(\n                ${Math.floor(this.state.xTranslate)}px, \n                ${Math.floor(this.state.yTranslate)}px\n            )`,
                  top: this.state.top === null ? null : `${this.state.top}px`,
                  right: this.state.right === null ? null : `${this.state.right}px`,
                  bottom: this.state.bottom === null ? null : `${this.state.bottom}px`,
                  left: this.state.left === null ? null : `${this.state.left}px`
               }), e);
            };
            this.updateDisabledState = () => {
               if (Mo.N() && this.props.disabled !== true) {
                  if ((this.getAnchorElement() === null || this.getViewportElement(this.props.viewport) === null) && this.state.validRefChecksRemaining > 0) {
                     this.setState({
                        validRefChecksRemaining: this.state.validRefChecksRemaining - 1,
                        initialLayoutComplete: this.state.validRefChecksRemaining <= 1
                     });
                  } else {
                     this.enableComponent();
                  }
               } else {
                  this.disable();
               }
            };
            this.enableComponent = () => {
               const e = this.getViewportElement(this.props.viewport);
               const t = this.getAnchorElement();
               if (!!this.state.disabled && !this.props.disabled && !Ji.Z(t) && !Ji.Z(e) && !Ji.Z(this.rootElement.current)) {
                  if (window.IntersectionObserver && window.ResizeObserver && !this.props.shouldUseNoObserverMode) {
                     this.setState({
                        disabled: false,
                        noObserverMode: false,
                        validRefChecksRemaining: 0
                     });
                     this.collisionDetector = new window.IntersectionObserver(this.handleCollision, {
                        root: e,
                        rootMargin: "0px",
                        threshold: [0, 1]
                     });
                     this.collisionDetector.observe(this.rootElement.current);
                     this.collisionDetector.observe(t);
                     this.resizeDetector = new window.ResizeObserver(this.handleResize);
                     this.resizeDetector.observe(t);
                     this.resizeDetector.observe(this.rootElement.current);
                     e.addEventListener("scroll", this.handleScroll);
                  } else {
                     this.setNoObserverMode();
                  }
               }
            };
            this.setNoObserverMode = () => {
               const e = this.getViewportElement(this.props.viewport);
               const t = this.getAnchorElement();
               if (Ji.Z(e) || Ji.Z(t)) {
                  return;
               }
               const s = this.rootElement.current.getBoundingClientRect();
               this.positionerDimension = {
                  height: s.height,
                  width: s.width
               };
               this.viewportRect = e.getBoundingClientRect();
               const i = t.getBoundingClientRect();
               this.anchorTop = i.top;
               this.anchorRight = i.right;
               this.anchorBottom = i.bottom;
               this.anchorLeft = i.left;
               this.anchorWidth = i.width;
               this.anchorHeight = i.height;
               this.updatePositionerOffset(s);
               this.setState({
                  validRefChecksRemaining: 0,
                  disabled: false,
                  noObserverMode: true
               });
               this.requestFrame();
            };
            this.disable = () => {
               if (!this.state.disabled) {
                  this.detachListeners(this.props.viewport);
                  this.setState({
                     disabled: true,
                     validRefChecksRemaining: 0
                  });
               }
            };
            this.detachListeners = e => {
               const t = this.getViewportElement(e);
               if (!Ji.Z(t)) {
                  t.removeEventListener("scroll", this.handleScroll);
               }
               if (this.collisionDetector && typeof this.collisionDetector.disconnect == "function") {
                  this.collisionDetector.disconnect();
                  this.collisionDetector = null;
               }
               if (this.resizeDetector && typeof this.resizeDetector.disconnect == "function") {
                  this.resizeDetector.disconnect();
                  this.resizeDetector = null;
               }
            };
            this.getHorizontalPositioningOptions = () => {
               switch (this.props.horizontalPositioningMode) {
                  case So.inset:
                     return [Ho.insetLeft, Ho.insetRight];
                  case So.adjacent:
                     return [Ho.left, Ho.right];
               }
            };
            this.getVerticalPositioningOptions = () => {
               switch (this.props.verticalPositioningMode) {
                  case So.inset:
                     return [Co.insetTop, Co.insetBottom];
                  case So.adjacent:
                     return [Co.top, Co.bottom];
               }
            };
            this.getAvailableWidth = e => {
               const t = this.anchorLeft - this.viewportRect.left;
               const s = this.viewportRect.right - (this.anchorLeft + this.anchorWidth);
               switch (e) {
                  case Ho.left:
                     return t;
                  case Ho.insetLeft:
                     return t + this.anchorWidth;
                  case Ho.insetRight:
                     return s + this.anchorWidth;
                  case Ho.right:
                     return s;
               }
            };
            this.getAvailableHeight = e => {
               const t = this.anchorTop - this.viewportRect.top;
               const s = this.viewportRect.bottom - (this.anchorTop + this.anchorHeight);
               switch (e) {
                  case Co.top:
                     return t;
                  case Co.insetTop:
                     return t + this.anchorHeight;
                  case Co.insetBottom:
                     return s + this.anchorHeight;
                  case Co.bottom:
                     return s;
               }
            };
            this.handleScroll = () => {
               this.requestFrame();
            };
            this.handleResize = e => {
               e.forEach(e => {
                  if (e.target === this.rootElement.current) {
                     this.handlePositionerResize(e);
                  } else {
                     this.handleAnchorResize(e);
                  }
               });
            };
            this.handlePositionerResize = e => {
               if (!this.props.scaleToFit) {
                  this.positionerDimension = {
                     height: e.contentRect.height,
                     width: e.contentRect.width
                  };
                  this.requestFrame();
               }
            };
            this.handleAnchorResize = e => {
               this.anchorHeight = e.contentRect.height;
               this.anchorWidth = e.contentRect.width;
               if (this.state.currentVerticalPosition === Co.top || this.state.currentVerticalPosition === Co.insetTop) {
                  this.anchorBottom = this.anchorTop + this.anchorHeight;
               } else {
                  this.anchorTop = this.anchorBottom - this.anchorHeight;
               }
               if (this.state.currentHorizontalPosition === Ho.left || this.state.currentHorizontalPosition === Ho.insetLeft) {
                  this.anchorRight = this.anchorLeft + this.anchorWidth;
               } else {
                  this.anchorLeft = this.anchorRight - this.anchorWidth;
               }
               this.requestFrame();
            };
            this.handleCollision = (e, t) => {
               let s = null;
               e.forEach(t => {
                  if (t.target === this.rootElement.current) {
                     this.handlePositionerCollision(t, e.length === 1);
                     s = t.boundingClientRect;
                  } else {
                     this.handleAnchorCollision(t);
                  }
               });
               const i = this.getViewportElement(this.props.viewport);
               if (!Ji.Z(i)) {
                  this.scrollTop = i.scrollTop;
                  this.scrollLeft = i.scrollLeft;
               }
               if (e.length === 2 && s !== null) {
                  this.updatePositionerOffset(s);
               }
               this.requestFrame();
            };
            this.handleAnchorCollision = e => {
               this.viewportRect = e.rootBounds;
               this.anchorTop = e.boundingClientRect.top;
               this.anchorRight = e.boundingClientRect.right;
               this.anchorBottom = e.boundingClientRect.bottom;
               this.anchorLeft = e.boundingClientRect.left;
               this.anchorHeight = e.boundingClientRect.height;
               this.anchorWidth = e.boundingClientRect.width;
            };
            this.handlePositionerCollision = (e, t) => {
               this.viewportRect = e.rootBounds;
               const s = e.boundingClientRect;
               this.positionerDimension = {
                  height: s.height,
                  width: s.width
               };
               if (t) {
                  switch (this.state.currentVerticalPosition) {
                     case Co.top:
                        this.anchorTop = s.bottom - this.state.yTranslate;
                        this.anchorBottom = this.anchorTop + this.anchorHeight;
                        break;
                     case Co.insetTop:
                        this.anchorBottom = s.bottom - this.state.yTranslate;
                        this.anchorTop = this.anchorBottom - this.anchorHeight;
                        break;
                     case Co.insetBottom:
                        this.anchorTop = s.top - this.state.yTranslate;
                        this.anchorBottom = this.anchorTop + this.anchorHeight;
                        break;
                     case Co.bottom:
                        this.anchorBottom = s.top - this.state.yTranslate;
                        this.anchorTop = this.anchorBottom - this.anchorHeight;
                  }
                  switch (this.state.currentHorizontalPosition) {
                     case Ho.left:
                        this.anchorLeft = s.right - this.state.xTranslate;
                        this.anchorRight = this.anchorLeft + this.anchorWidth;
                        break;
                     case Ho.insetLeft:
                        this.anchorRight = s.right - this.state.xTranslate;
                        this.anchorLeft = this.anchorRight - this.anchorWidth;
                        break;
                     case Ho.insetRight:
                        this.anchorLeft = s.left - this.state.xTranslate;
                        this.anchorRight = this.anchorLeft + this.anchorWidth;
                        break;
                     case Ho.right:
                        this.anchorRight = s.left - this.state.xTranslate;
                        this.anchorLeft = this.anchorRight - this.anchorWidth;
                  }
               }
            };
            this.updatePositionerOffset = e => {
               if (this.props.horizontalPositioningMode === So.uncontrolled) {
                  this.baseHorizontalOffset = this.anchorLeft - e.left;
               } else {
                  switch (this.state.currentHorizontalPosition) {
                     case Ho.undefined:
                        this.baseHorizontalOffset = this.anchorLeft + this.state.xTranslate - e.left;
                        break;
                     case Ho.left:
                        this.baseHorizontalOffset = this.baseHorizontalOffset + (this.anchorLeft + this.state.xTranslate - e.right);
                        break;
                     case Ho.insetLeft:
                        this.baseHorizontalOffset = this.baseHorizontalOffset + (this.anchorRight + this.state.xTranslate - e.right);
                        break;
                     case Ho.insetRight:
                        this.baseHorizontalOffset = this.baseHorizontalOffset + (this.anchorLeft + this.state.xTranslate - e.left);
                        break;
                     case Ho.right:
                        this.baseHorizontalOffset = this.baseHorizontalOffset + (this.anchorRight + this.state.xTranslate - e.left);
                  }
               }
               if (this.props.verticalPositioningMode === So.uncontrolled) {
                  this.baseVerticalOffset = this.anchorBottom - e.top;
               } else {
                  switch (this.state.currentVerticalPosition) {
                     case Co.undefined:
                        this.baseVerticalOffset = this.anchorBottom + this.state.yTranslate - e.top;
                        break;
                     case Co.top:
                        this.baseVerticalOffset = this.baseVerticalOffset + (this.anchorTop + this.state.yTranslate - e.bottom);
                        break;
                     case Co.insetTop:
                        this.baseVerticalOffset = this.baseVerticalOffset + (this.anchorBottom + this.state.yTranslate - e.bottom);
                        break;
                     case Co.insetBottom:
                        this.baseVerticalOffset = this.baseVerticalOffset + (this.anchorTop + this.state.yTranslate - e.top);
                        break;
                     case Co.bottom:
                        this.baseVerticalOffset = this.baseVerticalOffset + (this.anchorBottom + this.state.yTranslate - e.top);
                  }
               }
            };
            this.updateForScrolling = () => {
               const e = this.getViewportElement(this.props.viewport);
               if (Ji.Z(e) || isNaN(e.scrollTop)) {
                  return;
               }
               const t = e.scrollTop;
               const s = e.scrollLeft;
               if (this.scrollTop !== t) {
                  const e = this.scrollTop - t;
                  this.scrollTop = t;
                  this.anchorTop = this.anchorTop + e;
                  this.anchorBottom = this.anchorBottom + e;
               }
               if (this.scrollLeft !== s) {
                  const e = this.scrollLeft - s;
                  this.scrollLeft = s;
                  this.anchorLeft = this.anchorLeft + e;
                  this.anchorRight = this.anchorRight + e;
               }
            };
            this.updateLayout = () => {
               this.openRequestAnimationFrame = null;
               if (this.state.disabled || Ji.Z(this.viewportRect) || Ji.Z(this.positionerDimension) || this.props.fixedAfterInitialPlacement && this.state.initialLayoutComplete || this.state.noObserverMode && this.state.initialLayoutComplete) {
                  return;
               }
               this.updateForScrolling();
               let e = Co.undefined;
               let t = Ho.undefined;
               if (this.props.horizontalPositioningMode !== So.uncontrolled) {
                  const e = this.getHorizontalPositioningOptions();
                  t = this.state.defaultHorizontalPosition;
                  const s = this.props.horizontalThreshold !== undefined ? this.props.horizontalThreshold : this.positionerDimension.width;
                  if (t === Ho.undefined || !this.props.horizontalLockToDefault && this.getAvailableWidth(t) < s) {
                     t = this.getAvailableWidth(e[0]) > this.getAvailableWidth(e[1]) ? e[0] : e[1];
                  }
               }
               if (this.props.verticalPositioningMode !== So.uncontrolled) {
                  const t = this.getVerticalPositioningOptions();
                  e = this.state.defaultVerticalPosition;
                  const s = this.props.verticalThreshold !== undefined ? this.props.verticalThreshold : this.positionerDimension.height;
                  if (e === Co.undefined || !this.props.verticalLockToDefault && this.getAvailableHeight(e) < s) {
                     e = this.getAvailableHeight(t[0]) > this.getAvailableHeight(t[1]) ? t[0] : t[1];
                  }
               }
               const s = this.getNextPositionerDimension(t, e);
               this.setState(Object.assign({
                  xTranslate: this.getHorizontalTranslate(t),
                  yTranslate: this.getVerticalTranslate(e),
                  initialLayoutComplete: true
               }, this.getHorizontalPositioningState(t, s), this.getVerticalPositioningState(e, s)));
            };
            this.getNextPositionerDimension = (e, t) => {
               const s = {
                  height: this.positionerDimension.height,
                  width: this.positionerDimension.width
               };
               if (this.props.scaleToFit) {
                  s.height = Math.max(Math.min(this.getAvailableHeight(t), this.viewportRect.height), Ji.Z(this.props.verticalThreshold) ? 0 : this.props.verticalThreshold);
                  s.width = Math.max(Math.min(this.getAvailableWidth(e), this.viewportRect.width), Ji.Z(this.props.horizontalThreshold) ? 0 : this.props.horizontalThreshold);
               }
               return s;
            };
            this.getHorizontalPositioningState = (e, t) => {
               let s = null;
               let i = null;
               let n = "left";
               switch (e) {
                  case Ho.left:
                     n = "right";
                     s = t.width - this.baseHorizontalOffset;
                     break;
                  case Ho.insetLeft:
                     n = "right";
                     s = t.width - this.anchorWidth - this.baseHorizontalOffset;
                     break;
                  case Ho.insetRight:
                     n = "left";
                     i = this.baseHorizontalOffset;
                     break;
                  case Ho.right:
                     n = "left";
                     i = this.anchorWidth + this.baseHorizontalOffset;
               }
               return {
                  xTransformOrigin: n,
                  right: s,
                  left: i,
                  currentHorizontalPosition: e,
                  horizontalSelectedPositionWidth: t.width
               };
            };
            this.getVerticalPositioningState = (e, t) => {
               let s = null;
               let i = null;
               let n = "top";
               switch (e) {
                  case Co.top:
                     n = "bottom";
                     i = t.height + this.anchorHeight - this.baseVerticalOffset;
                     break;
                  case Co.insetTop:
                     n = "bottom";
                     i = t.height - this.baseVerticalOffset;
                     break;
                  case Co.insetBottom:
                     n = "top";
                     s = this.baseVerticalOffset - this.anchorHeight;
                     break;
                  case Co.bottom:
                     n = "top";
                     s = this.baseVerticalOffset;
               }
               return {
                  yTransformOrigin: n,
                  top: s,
                  bottom: i,
                  currentVerticalPosition: e,
                  verticalSelectedPositionHeight: t.height
               };
            };
            this.getHorizontalTranslate = e => {
               if (!this.props.horizontalAlwaysInView || this.state.disabled) {
                  return 0;
               }
               let t = 0;
               switch (e) {
                  case Ho.left:
                     t = this.viewportRect.right - this.anchorLeft;
                     t = t < 0 ? t - 1 : 0;
                     break;
                  case Ho.insetLeft:
                     t = this.viewportRect.right - this.anchorRight;
                     t = t < 0 ? t - 1 : 0;
                     break;
                  case Ho.insetRight:
                     t = this.viewportRect.left - this.anchorLeft;
                     t = t > 0 ? t + 1 : 0;
                     break;
                  case Ho.right:
                     t = this.viewportRect.left - this.anchorRight;
                     t = t > 0 ? t + 1 : 0;
               }
               return t;
            };
            this.getVerticalTranslate = e => {
               if (!this.props.verticalAlwaysInView || this.state.disabled) {
                  return 0;
               }
               let t = 0;
               switch (e) {
                  case Co.top:
                     t = this.viewportRect.bottom - this.anchorTop;
                     t = t < 0 ? t - 1 : 0;
                     break;
                  case Co.insetTop:
                     t = this.viewportRect.bottom - this.anchorBottom;
                     t = t < 0 ? t - 1 : 0;
                     break;
                  case Co.insetBottom:
                     t = this.viewportRect.top - this.anchorTop;
                     t = t < 0 ? 0 : t + 1;
                     break;
                  case Co.bottom:
                     t = this.viewportRect.top - this.anchorBottom;
                     t = t < 0 ? 0 : t + 1;
               }
               return t;
            };
            this.requestFrame = () => {
               if (this.openRequestAnimationFrame === null) {
                  this.openRequestAnimationFrame = window.requestAnimationFrame(this.updateLayout);
               }
            };
            this.getAnchorElement = () => Ji.Z(this.props.anchor) ? null : this.extractElement(this.props.anchor);
            this.getViewportElement = e => {
               if (!Ji.Z(e)) {
                  const t = this.extractElement(e);
                  if (t !== null) {
                     return t;
                  } else {
                     return null;
                  }
               }
               if (!Ji.Z(this.context.viewport)) {
                  const e = this.extractElement(this.context.viewport);
                  if (e !== null) {
                     return e;
                  } else {
                     return null;
                  }
               }
               if (document.scrollingElement instanceof HTMLElement) {
                  return document.scrollingElement;
               } else {
                  return null;
               }
            };
            this.extractElement = e => {
               const t = vo(e);
               if (t instanceof HTMLElement) {
                  return t;
               } else {
                  return null;
               }
            };
            this.getHorizontalPositionToLabel = (e, t) => {
               switch (e) {
                  case So.inset:
                     if (t === wo.left) {
                        return Ho.insetLeft;
                     }
                     if (t === wo.right) {
                        return Ho.insetRight;
                     }
                  case So.adjacent:
                     if (t === wo.left) {
                        return Ho.left;
                     }
                     if (t === wo.right) {
                        return Ho.right;
                     }
                  case So.uncontrolled:
                     return Ho.undefined;
               }
            };
            this.getVerticalPositionToLabel = (e, t) => {
               switch (e) {
                  case So.inset:
                     if (t === xo.top) {
                        return Co.insetTop;
                     }
                     if (t === xo.bottom) {
                        return Co.insetBottom;
                     }
                  case So.adjacent:
                     if (t === xo.top) {
                        return Co.top;
                     }
                     if (t === xo.bottom) {
                        return Co.bottom;
                     }
                  case So.uncontrolled:
                     return Co.undefined;
               }
            };
            this.generateInitialState = () => ({
               disabled: true,
               noObserverMode: false,
               xTransformOrigin: "left",
               yTransformOrigin: "top",
               xTranslate: 0,
               yTranslate: 0,
               top: null,
               right: null,
               bottom: null,
               left: null,
               currentHorizontalPosition: Ho.undefined,
               currentVerticalPosition: Co.undefined,
               defaultHorizontalPosition: this.getHorizontalPositionToLabel(this.props.horizontalPositioningMode, this.props.defaultHorizontalPosition),
               defaultVerticalPosition: this.getVerticalPositionToLabel(this.props.verticalPositioningMode, this.props.defaultVerticalPosition),
               horizontalSelectedPositionWidth: null,
               verticalSelectedPositionHeight: null,
               initialLayoutComplete: false,
               validRefChecksRemaining: 2
            });
            this.state = this.generateInitialState();
         }
         componentDidMount() {
            this.updateDisabledState();
            this.requestFrame();
         }
         componentWillUnmount() {
            if (!this.state.disabled) {
               this.detachListeners(this.props.viewport);
            }
         }
         componentDidUpdate(e) {
            if (e !== this.props) {
               if (e.anchor !== this.props.anchor || e.viewport !== this.props.viewport) {
                  this.detachListeners(e.viewport);
                  this.setState(this.generateInitialState());
                  return;
               }
               this.requestFrame();
            }
            if (e.disabled !== this.props.disabled || this.state.validRefChecksRemaining > 0) {
               this.updateDisabledState();
            }
         }
         render() {
            return React.createElement("div", Object.assign({}, this.unhandledProps(), {
               ref: this.rootElement,
               className: this.generateClassNames(),
               style: this.getPositioningStyles()
            }), this.props.disabled || this.state.initialLayoutComplete || !this.props.delayContentInstanciation ? this.props.children : null);
         }
         generateClassNames() {
            const {
               viewportPositioner: e,
               viewportPositioner__left: t,
               viewportPositioner__right: s,
               viewportPositioner__top: i,
               viewportPositioner__bottom: n,
               viewportPositioner__horizontalInset: o,
               viewportPositioner__verticalInset: r
            } = this.props.managedClasses;
            const a = this.state.currentHorizontalPosition;
            const l = this.state.currentVerticalPosition;
            const c = l === Co.insetTop || l === Co.insetBottom;
            const h = a === Ho.insetLeft || a === Ho.insetRight;
            return super.generateClassNames(Ks.A(e, [t, a === Ho.left || a === Ho.insetLeft], [s, a === Ho.right || a === Ho.insetRight], [o, h], [i, l === Co.top || l === Co.insetTop], [n, l === Co.bottom || l === Co.insetBottom], [r, c]));
         }
      }
      Vo.displayName = `${Ws}ViewportPositioner`;
      Vo.contextType = ko;
      Vo.defaultProps = {
         horizontalPositioningMode: So.uncontrolled,
         defaultHorizontalPosition: wo.uncontrolled,
         verticalPositioningMode: So.adjacent,
         defaultVerticalPosition: xo.bottom,
         horizontalAlwaysInView: false,
         verticalAlwaysInView: false,
         verticalLockToDefault: false,
         horizontalLockToDefault: false,
         fixedAfterInitialPlacement: false,
         scaleToFit: false,
         delayContentInstanciation: false,
         managedClasses: {}
      };
      Vo.contextType = ko;
      const _o = Vo;
      var Oo = object(94537);
      const Eo = "MSFT";
      let To = function (e) {
         e[e.left = wo.left] = "left";
         e[e.right = wo.right] = "right";
         e[e.uncontrolled = wo.uncontrolled] = "uncontrolled";
         return e;
      }({});
      let Po = function (e) {
         e[e.top = xo.top] = "top";
         e[e.bottom = xo.bottom] = "bottom";
         e[e.uncontrolled = xo.uncontrolled] = "uncontrolled";
         return e;
      }({});
      let jo = function (e) {
         e[e.uncontrolled = So.uncontrolled] = "uncontrolled";
         e[e.adjacent = So.adjacent] = "adjacent";
         e[e.inset = So.inset] = "inset";
         return e;
      }({});
      function Do() {
         Do = Object.assign ? Object.assign.bind() : function (e) {
            for (var t = 1; t < arguments.length; t++) {
               var s = arguments[t];
               for (var i in s) {
                  if (Object.prototype.hasOwnProperty.call(s, i)) {
                     e[i] = s[i];
                  }
               }
            }
            return e;
         };
         return Do.apply(this, arguments);
      }
      class Io extends baseComponent {
         constructor(e) {
            super(e);
            this.handledProps = {
               anchor: undefined,
               children: undefined,
               defaultHorizontalPosition: undefined,
               defaultVerticalPosition: undefined,
               describedBy: undefined,
               visible: undefined,
               fixedAfterInitialPlacement: undefined,
               height: undefined,
               horizontalAlwaysInView: undefined,
               horizontalLockToDefault: undefined,
               horizontalPositioningMode: undefined,
               horizontalThreshold: undefined,
               label: undefined,
               labelledBy: undefined,
               managedClasses: undefined,
               onDismiss: undefined,
               verticalAlwaysInView: undefined,
               verticalLockToDefault: undefined,
               verticalPositioningMode: undefined,
               verticalThreshold: undefined,
               viewport: undefined,
               width: undefined,
               delayContentInstanciation: undefined,
               scaleToFit: undefined
            };
            this.rootEl = undefined;
            this.handleWindowClick = e => {
               const t = this.props.anchor instanceof HTMLElement ? this.props.anchor : this.props.anchor.current;
               if (typeof this.props.onDismiss == "function" && !!this.props.visible && !n.findDOMNode(this.rootEl.current).contains(e.target) && !n.findDOMNode(t).contains(e.target)) {
                  this.props.onDismiss(e);
               }
            };
            this.handleWindowKeyDown = e => {
               if (typeof this.props.onDismiss == "function" && this.props.visible && e.key === Oo.CX) {
                  this.props.onDismiss(e);
               }
            };
            this.rootEl = React.createRef();
         }
         render() {
            return React.createElement(_o, Do({}, this.unhandledProps(), {
               ref: this.rootEl,
               role: "dialog",
               "aria-label": this.props.label,
               "aria-labelledby": this.props.labelledBy,
               "aria-describedby": this.props.describedBy,
               "aria-hidden": !this.props.visible,
               anchor: this.props.anchor,
               defaultHorizontalPosition: wo[To[this.props.defaultHorizontalPosition]],
               defaultVerticalPosition: xo[Po[this.props.defaultVerticalPosition]],
               disabled: !this.props.visible,
               fixedAfterInitialPlacement: this.props.fixedAfterInitialPlacement,
               horizontalAlwaysInView: this.props.horizontalAlwaysInView,
               horizontalPositioningMode: So[jo[this.props.horizontalPositioningMode]],
               horizontalThreshold: this.props.horizontalThreshold,
               horizontalLockToDefault: this.props.horizontalLockToDefault,
               managedClasses: this.generateManagedClassNames(),
               verticalAlwaysInView: this.props.verticalAlwaysInView,
               verticalPositioningMode: So[jo[this.props.verticalPositioningMode]],
               verticalThreshold: this.props.verticalThreshold,
               verticalLockToDefault: this.props.verticalLockToDefault,
               viewport: this.props.viewport,
               delayContentInstanciation: this.props.delayContentInstanciation,
               style: {
                  height: this.props.height,
                  width: this.props.width,
                  display: this.props.visible ? "block" : "none"
               }
            }), this.props.children);
         }
         componentDidMount() {
            if (Mo.N() && this.props.onDismiss) {
               window.addEventListener("keydown", this.handleWindowKeyDown);
               window.addEventListener("click", this.handleWindowClick);
            }
         }
         componentDidUpdate(e) {
            if (Mo.N()) {
               if (!e.onDismiss && this.props.onDismiss) {
                  window.addEventListener("keydown", this.handleWindowKeyDown);
                  window.addEventListener("click", this.handleWindowClick);
               } else if (e.onDismiss && !this.props.onDismiss) {
                  window.removeEventListener("keydown", this.handleWindowKeyDown);
                  window.removeEventListener("click", this.handleWindowClick);
               }
            }
         }
         componentWillUnmount() {
            if (Mo.N() && this.props.onDismiss) {
               window.removeEventListener("keydown", this.handleWindowKeyDown);
               window.removeEventListener("click", this.handleWindowClick);
            }
         }
         generateManagedClassNames() {
            const {
               flyout: e,
               flyout__left: t,
               flyout__right: s,
               flyout__top: i,
               flyout__bottom: n,
               flyout__horizontalInset: o,
               flyout__verticalInset: r
            } = this.props.managedClasses;
            return {
               viewportPositioner: e,
               viewportPositioner__left: t,
               viewportPositioner__right: s,
               viewportPositioner__top: i,
               viewportPositioner__bottom: n,
               viewportPositioner__horizontalInset: o,
               viewportPositioner__verticalInset: r
            };
         }
      }
      Io.displayName = `${Eo}Flyout`;
      Io.defaultProps = {
         visible: false,
         horizontalPositioningMode: jo.uncontrolled,
         defaultHorizontalPosition: To.uncontrolled,
         verticalPositioningMode: jo.adjacent,
         defaultVerticalPosition: Po.bottom,
         horizontalAlwaysInView: false,
         verticalAlwaysInView: false,
         fixedAfterInitialPlacement: false,
         height: "128px",
         width: "280px",
         managedClasses: {}
      };
      const Ao = Io;
      const Lo = ApplyStyle(yo)(Ao);
      const Zo = {
         select: {
            "max-width": "374px",
            height: ti()
         },
         select_button: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, $s()), {
            height: ti(),
            width: "100%"
         }), Kn()), hs), {
            "&:disabled > span > svg": Object.assign({}, bs)
         }),
         select_buttonContentRegion: {
            display: "grid",
            "grid-template-columns": "1fr auto",
            "align-items": "center",
            "justify-items": "start"
         },
         select_buttonDisplayText: Object.assign(Object.assign({}, {
            "white-space": "nowrap",
            overflow: "hidden",
            "text-overflow": "ellipsis"
         }), {
            "text-align": Bt("left", "right"),
            width: "100%"
         }),
         select_toggleGlyph: Object.assign({
            margin: e => function (e) {
               return t => {
                  if (typeof t != "string") {
                     return "";
                  }
                  const s = t.split(" ");
                  if (s.length !== 4) {
                     return t;
                  } else if (e === Ft.rtl) {
                     return [s[0], s[3], s[2], s[1]].join(" ");
                  } else {
                     return t;
                  }
               };
            }(e && e.direction || M.direction)(ss("0 0 0 {0}", ii(2))(e)),
            fill: zt,
            "grid-column-start": "2"
         }, xs),
         select_menu: Object.assign(Object.assign(Object.assign({
            background: pt
         }, Ri()), mo(ho.e11)), {
            position: "relative",
            width: "100%",
            margin: "0",
            padding: ss("{0} 0", Xt(P)),
            "max-height": "328px",
            overflow: "auto",
            [os]: Object.assign(Object.assign({}, as), {
               background: rs.buttonBackground,
               border: ss("{0} solid {1}", Xt(I), () => rs.buttonText)
            })
         }),
         select__multiSelectable: {
            "& $select_menu": {
               position: "static",
               "box-shadow": "none",
               border: "1px solid",
               "border-color": zn
            }
         },
         select__menuPositioningRegion: {
            display: "grid",
            "grid-template-columns": "1fr",
            "grid-template-rows": "1fr"
         },
         select__menuPositionLeft: {
            "grid-template-columns": "1fr auto",
            "& $select_menu": {
               "grid-column": "2"
            }
         },
         select__menuPositionRight: {
            "grid-template-columns": "auto 1fr",
            "& $select_menu": {
               "grid-column": "1"
            }
         },
         select__menuPositionTop: {
            "grid-template-rows": "1fr auto",
            "& $select_menu": {
               "grid-row": "2"
            }
         },
         select__menuPositionBottom: {
            "grid-template-rows": "auto 1fr",
            "& $select_menu": {
               "grid-row": "1"
            }
         }
      };
      const Fo = Zo;
      var Bo = object(8114);
      var Ro = object(16614);
      var No = object(62512);
      const zo = "Base";
      const $o = React.createContext({
         listboxItemInvoked: null,
         listboxItemFocused: null,
         listboxSelectedItems: [],
         listboxMultiselectable: false
      });
      function Go() {
         Go = Object.assign ? Object.assign.bind() : function (e) {
            for (var t = 1; t < arguments.length; t++) {
               var s = arguments[t];
               for (var i in s) {
                  if (Object.prototype.hasOwnProperty.call(s, i)) {
                     e[i] = s[i];
                  }
               }
            }
            return e;
         };
         return Go.apply(this, arguments);
      }
      class qo extends baseComponent {
         static getListboxItemDataFromIds(e, t) {
            return qo.validateSelection(e, t);
         }
         static getItemIndexById(e, t) {
            return React.Children.toArray(t).findIndex(t => {
               if (!React.isValidElement(t)) {
                  return false;
               }
               const s = t;
               return s.props[qo.idPropertyKey] !== undefined && s.props[qo.idPropertyKey] === e;
            });
         }
         static isValidSelectedItem(e) {
            return e !== undefined && e.props[qo.disabledPropertyKey] !== true && e.props[qo.valuePropertyKey] !== undefined;
         }
         static getNodeById(e, t) {
            return React.Children.toArray(t).find(t => {
               if (!React.isValidElement(t)) {
                  return false;
               }
               const s = t;
               return s.props[qo.idPropertyKey] !== undefined && s.props[qo.idPropertyKey] === e;
            });
         }
         static getItemPropsById(e, t) {
            const s = this.getNodeById(e, t);
            if (s !== undefined) {
               return s.props;
            } else {
               return null;
            }
         }
         static validateSelection(e, t) {
            return e.map(e => {
               let s = typeof e == "string" ? e : e.id;
               const i = this.getNodeById(s, t);
               if (qo.isValidSelectedItem(i)) {
                  return i.props;
               } else {
                  return null;
               }
            }).filter(e => e !== null);
         }
         constructor(e) {
            super(e);
            this.handledProps = {
               children: undefined,
               defaultSelection: undefined,
               disabled: undefined,
               labelledBy: undefined,
               describedBy: undefined,
               managedClasses: undefined,
               multiselectable: undefined,
               onItemInvoked: undefined,
               onSelectedItemsChanged: undefined,
               selectedItems: undefined,
               typeAheadEnabled: undefined,
               typeAheadPropertyKey: undefined,
               focusItemOnMount: undefined,
               selectOnFocus: undefined,
               tabbableItems: undefined
            };
            this.rootElement = React.createRef();
            this.typeAheadString = "";
            this.typeAheadTimer = undefined;
            this.shiftRangeSelectStartIndex = -1;
            this.renderChild = (e, t) => {
               if (!React.isValidElement(e)) {
                  return null;
               }
               const s = e;
               return React.cloneElement(s, {
                  tabIndex: this.props.tabbableItems && t === this.state.focusIndex ? 0 : -1
               });
            };
            this.isFocusableElement = e => e instanceof HTMLElement && e.getAttribute("role") === "option" && !this.isDisabledElement(e) && !this.props.disabled;
            this.isDisabledElement = e => e instanceof HTMLElement && e.getAttribute("aria-disabled") === "true";
            this.setInitialFocus = (e, t) => {
               let s = -1;
               for (let t = 0; t < e.length; t++) {
                  s = qo.getItemIndexById(e[t].id, this.props.children);
               }
               if (s === -1) {
                  s = this.domChildren().findIndex(this.isFocusableElement);
               }
               if (this.props.focusItemOnMount && t && s !== -1) {
                  this.setFocus(s, 1);
               } else {
                  this.setState({
                     focusIndex: s
                  });
               }
            };
            this.getInitialSelection = () => {
               let e;
               e = this.props.selectedItems !== undefined ? qo.getListboxItemDataFromIds(this.props.selectedItems, this.props.children) : qo.getListboxItemDataFromIds(this.props.defaultSelection, this.props.children);
               if (!this.props.multiselectable && e.length > 1) {
                  e = e.slice(0, 1);
               }
               return e;
            };
            this.listboxItemfocused = (e, t) => {
               if (this.props.disabled) {
                  return;
               }
               const s = t.currentTarget;
               const i = this.domChildren().indexOf(s);
               if (this.isDisabledElement(s)) {
                  s.blur();
               } else {
                  this.setState({
                     focusIndex: i,
                     focussedItemId: e.id
                  });
                  if (!this.props.multiselectable && this.props.selectOnFocus) {
                     this.updateSelection([e]);
                  }
               }
            };
            this.handleMenuKeyDown = e => {
               if (typeof this.props.onKeyDown == "function") {
                  this.props.onKeyDown(e);
               }
               if (e.defaultPrevented || this.props.disabled) {
                  return;
               }
               let t;
               switch (e.key) {
                  case Oo.CX:
                  case Oo.kL:
                  case Oo.BI:
                  case Oo.oM:
                     return;
                  case Oo.iF:
                  case Oo.mr:
                     t = this.setFocus(this.state.focusIndex + 1, 1);
                     if (this.props.multiselectable && e.shiftKey && t !== "") {
                        const e = qo.getItemPropsById(t, this.props.children);
                        if (e !== null) {
                           this.toggleItem(e);
                        }
                     }
                     e.preventDefault();
                     break;
                  case Oo.SB:
                  case Oo.BE:
                     t = this.setFocus(this.state.focusIndex - 1, -1);
                     if (this.props.multiselectable && e.shiftKey && t !== "") {
                        const e = qo.getItemPropsById(t, this.props.children);
                        if (e !== null) {
                           this.toggleItem(e);
                        }
                     }
                     e.preventDefault();
                     break;
                  case Oo.Kh:
                     if (this.props.multiselectable && e.shiftKey && e.ctrlKey) {
                        this.selectRange(this.state.focusIndex, this.domChildren().length - 1);
                     }
                     this.setFocus(this.domChildren().length - 1, -1);
                     e.preventDefault();
                     break;
                  case Oo.tU:
                     if (this.props.multiselectable && e.shiftKey && e.ctrlKey) {
                        this.selectRange(0, this.state.focusIndex);
                     }
                     this.setFocus(0, 1);
                     e.preventDefault();
                     break;
                  default:
                     if (e.key === "A") {
                        this.selectRange(0, this.domChildren().length);
                     } else if (!e.ctrlKey && this.props.typeAheadEnabled) {
                        this.processTypeAhead(e);
                     }
               }
            };
            this.processTypeAhead = e => {
               clearTimeout(this.typeAheadTimer);
               this.typeAheadString = this.typeAheadString + e.key.toLowerCase();
               let t = -1;
               React.Children.toArray(this.props.children).some((e, s) => {
                  if (!React.isValidElement(e)) {
                     return false;
                  }
                  const n = e;
                  return n.props[this.props.typeAheadPropertyKey] !== undefined && !!No.Ny(n.props[this.props.typeAheadPropertyKey].toLowerCase(), this.typeAheadString) && (t = s, true);
               });
               if (t !== -1) {
                  this.typeAheadTimer = window.setTimeout(() => {
                     this.typeAheadTimerExpired();
                  }, 1000);
                  this.setFocus(t, 1);
               } else {
                  this.typeAheadString = "";
               }
            };
            this.typeAheadTimerExpired = () => {
               this.typeAheadString = "";
               clearTimeout(this.typeAheadTimer);
            };
            this.listboxItemInvoked = (e, t) => {
               if (this.props.disabled) {
                  return;
               }
               if (typeof this.props.onItemInvoked == "function") {
                  this.props.onItemInvoked(e);
               }
               const s = t.currentTarget;
               const i = this.domChildren().indexOf(s);
               if (this.props.multiselectable && t.type === "click") {
                  if (!t.shiftKey || this.shiftRangeSelectStartIndex === -1) {
                     this.shiftRangeSelectStartIndex = i;
                  }
                  if (t.ctrlKey) {
                     this.toggleItem(e);
                  } else if (t.shiftKey) {
                     this.selectRange(this.shiftRangeSelectStartIndex, i);
                  } else {
                     this.updateSelection([e]);
                  }
               } else if (this.props.multiselectable && t.type === "keydown") {
                  if (t.shiftKey) {
                     this.selectRange(this.shiftRangeSelectStartIndex, i);
                  } else {
                     this.toggleItem(e);
                  }
               } else {
                  this.updateSelection([e]);
               }
            };
            this.toggleItem = e => {
               const t = this.state.selectedItems.filter(t => t.id !== e.id);
               if (t.length < this.state.selectedItems.length) {
                  this.updateSelection(t);
               } else {
                  const t = this.state.selectedItems.concat([e]);
                  this.updateSelection(t);
               }
            };
            this.selectRange = (e, t) => {
               const s = React.Children.toArray(this.props.children).slice(e >= t ? t : e, e >= t ? e + 1 : t + 1).map(e => {
                  if (!React.isValidElement(e)) {
                     throw new Error("Invalid child element");
                  }
                  return e.props;
               });
               this.updateSelection(s);
            };
            this.updateSelection = e => {
               const t = qo.validateSelection(e, this.props.children);
               if (!Ro.Z(t, this.state.selectedItems)) {
                  if (this.props.selectedItems === undefined) {
                     this.setState({
                        selectedItems: t
                     });
                  }
                  if (this.props.onSelectedItemsChanged) {
                     this.props.onSelectedItemsChanged(t);
                  }
               }
               return t;
            };
            this.state = {
               focusIndex: -1,
               focussedItemId: "",
               selectedItems: this.getInitialSelection()
            };
         }
         render() {
            return React.createElement("div", Go({}, this.unhandledProps(), {
               ref: this.rootElement,
               role: "listbox",
               "aria-disabled": this.props.disabled || null,
               "aria-multiselectable": this.props.multiselectable || null,
               "aria-activedescendant": this.state.focussedItemId,
               "aria-labelledby": this.props.labelledBy || null,
               "aria-describedby": this.props.describedBy || null,
               className: this.generateClassNames(),
               onKeyDown: this.handleMenuKeyDown
            }), React.createElement($o.Provider, {
               value: {
                  listboxSelectedItems: this.state.selectedItems,
                  listboxItemFocused: this.listboxItemfocused,
                  listboxItemInvoked: this.listboxItemInvoked,
                  listboxMultiselectable: this.props.multiselectable
               }
            }, this.renderChildren()));
         }
         componentDidUpdate(e) {
            let t = null;
            if (!Ro.Z(e.defaultSelection, this.props.defaultSelection) && this.props.selectedItems === undefined) {
               t = this.updateSelection(this.getInitialSelection());
            }
            if (e.children !== this.props.children) {
               t = t === null ? this.updateSelection(this.state.selectedItems.slice(0)) : t;
               const e = this.domChildren();
               if (!Ji.Z(this.rootElement.current) && this.rootElement.current.contains(document.activeElement)) {
                  this.setState({
                     focusIndex: e.indexOf(document.activeElement)
                  });
                  return;
               }
               if (e.length <= this.state.focusIndex || !this.isFocusableElement(e[this.state.focusIndex])) {
                  this.setInitialFocus(t, false);
               }
            }
         }
         componentDidMount() {
            this.setInitialFocus(this.state.selectedItems, true);
         }
         componentWillUnmount() {
            clearTimeout(this.typeAheadTimer);
         }
         generateClassNames() {
            const {
               listbox: e,
               listbox__disabled: t
            } = this.props.managedClasses;
            return super.generateClassNames(Ks.A(e, [t, this.props.disabled]));
         }
         renderChildren() {
            return React.Children.map(this.props.children, this.renderChild);
         }
         domChildren() {
            if (Mo.N() && this.rootElement.current instanceof HTMLElement) {
               return Array.from(this.rootElement.current.children);
            } else {
               return [];
            }
         }
         setFocus(e, t) {
            const s = this.domChildren();
            let i = "";
            while (Tn.Z(e, s.length)) {
               const n = s[e];
               i = n.id;
               if (this.isFocusableElement(n)) {
                  if (!this.props.disabled) {
                     n.focus();
                  }
                  break;
               }
               e += t;
            }
            return i;
         }
      }
      qo.displayName = `${zo}Listbox`;
      qo.defaultProps = {
         multiselectable: false,
         defaultSelection: [],
         typeAheadPropertyKey: "displayString",
         typeAheadEnabled: true,
         focusItemOnMount: false,
         managedClasses: {},
         selectOnFocus: true,
         tabbableItems: true
      };
      qo.getFirstValidOptionInRange = (e, t, s, i) => {
         for (let n = e; n !== t + i; n += i) {
            const e = s[n];
            if (qo.isValidSelectedItem(e)) {
               return e;
            } else {
               return null;
            }
         }
         return null;
      };
      qo.getValidOptions = e => e.filter(e => qo.isValidSelectedItem(e));
      qo.valuePropertyKey = "value";
      qo.idPropertyKey = "id";
      qo.disabledPropertyKey = "disabled";
      const Uo = qo;
      function Ko() {
         Ko = Object.assign ? Object.assign.bind() : function (e) {
            for (var t = 1; t < arguments.length; t++) {
               var s = arguments[t];
               for (var i in s) {
                  if (Object.prototype.hasOwnProperty.call(s, i)) {
                     e[i] = s[i];
                  }
               }
            }
            return e;
         };
         return Ko.apply(this, arguments);
      }
      class Wo extends baseComponent {
         constructor(e) {
            super(e);
            this.handledProps = {
               isMenuOpen: undefined,
               disabled: undefined,
               displayStringFormatter: undefined,
               form: undefined,
               labelledBy: undefined,
               describedBy: undefined,
               multiselectable: undefined,
               trigger: undefined,
               menu: undefined,
               required: undefined,
               managedClasses: undefined,
               selectedItems: undefined,
               defaultSelection: undefined,
               onValueChange: undefined,
               placeholder: undefined,
               autoFocus: undefined,
               menuFlyoutConfig: undefined,
               onMenuSelectionChange: undefined
            };
            this.rootElement = React.createRef();
            this.triggerId = Bo.Z(Wo.triggerUniqueIdPrefix);
            this.checkPropsForMenuState = () => {
               let e = false;
               if (this.props.isMenuOpen !== undefined) {
                  e = this.props.isMenuOpen;
               } else if (this.props.multiselectable === true) {
                  e = true;
               }
               return e;
            };
            this.onSelectValueChange = e => null;
            this.menuSelectionChange = e => {
               if (typeof this.props.onMenuSelectionChange == "function") {
                  this.props.onMenuSelectionChange(e);
               }
               this.updateSelection(e);
            };
            this.updateSelection = e => {
               e = this.trimSelection(e);
               const t = this.getValueFromSelection(e);
               if (this.state.value === t) {
                  return;
               }
               const s = this.getFormattedDisplayString(e);
               if (typeof this.props.onValueChange == "function" && !Ro.Z(e, this.state.selectedItems)) {
                  this.props.onValueChange(t, e, s);
               }
               if (this.props.selectedItems === undefined) {
                  const i = this.getValidOptions();
                  this.setState({
                     selectedItems: e,
                     value: t,
                     displayString: s,
                     selectedItemIndex: this.getSelectedItemPosInSet(i, e),
                     selectableItemCount: i.length
                  });
               }
            };
            this.updateSelectionFromProps = () => {
               const e = this.trimSelection(Uo.getListboxItemDataFromIds(this.props.selectedItems, this.props.children));
               this.setState({
                  selectedItems: e,
                  value: this.getValueFromSelection(e),
                  displayString: this.getFormattedDisplayString(e)
               });
            };
            this.trimSelection = e => this.props.multiselectable === false && e.length > 1 ? [this.state.selectedItems[0]] : e;
            this.getValueFromSelection = e => this.props.multiselectable ? e.map(e => e.value) : e.length === 0 ? [] : e[0].value;
            this.getSelectedItemPosInSet = (e, t) => {
               if (!this.props.multiselectable && t.length === 1) {
                  const s = t[0].id;
                  const i = e.length;
                  for (let t = 0; t < i; t++) {
                     if (e[t].props[Wo.idPropertyKey] === s) {
                        return t + 1;
                     }
                  }
               }
               return 0;
            };
            this.defaultTriggerRenderFunction = (e, t, s) => {
               if (e.multiselectable) {
                  return null;
               }
               const n = `${Ji.Z(this.props.labelledBy) ? "" : `${this.props.labelledBy} `}${s}`;
               const o = "" + (Ji.Z(this.props.describedBy) ? "" : `${this.props.describedBy}`);
               return React.createElement("button", {
                  disabled: e.disabled,
                  id: s,
                  "aria-haspopup": "listbox",
                  "aria-labelledby": n,
                  "aria-describedby": o,
                  "aria-expanded": t.isMenuOpen
               }, t.displayString);
            };
            this.defaultDisplayStringFormatter = (e, t) => {
               const s = e.map(e => e.displayString || e.value);
               if (e.length > 0) {
                  return s.join(", ");
               } else {
                  return t;
               }
            };
            this.handleClick = e => {
               if (typeof this.props.onClick == "function") {
                  this.props.onClick(e);
               }
               if (!this.props.disabled && !e.defaultPrevented) {
                  e.preventDefault();
                  this.toggleMenu(!this.state.isMenuOpen);
                  if (this.validateMenuState(!this.state.isMenuOpen) === false) {
                     this.focusTriggerElement();
                  }
               }
            };
            this.handleKeydown = e => {
               if (typeof this.props.onKeyDown == "function") {
                  this.props.onKeyDown(e);
               }
               if (!this.props.disabled && !e.defaultPrevented) {
                  switch (e.key) {
                     case Oo.kL:
                     case Oo.BI:
                        e.preventDefault();
                        this.toggleMenu(!this.state.isMenuOpen);
                        if (this.validateMenuState(!this.state.isMenuOpen) === false) {
                           this.focusTriggerElement();
                        }
                        break;
                     case Oo.CX:
                        if (this.state.isMenuOpen) {
                           e.preventDefault();
                           this.toggleMenu(false);
                           this.focusTriggerElement();
                        }
                        break;
                     case Oo.iF:
                     case Oo.mr:
                        e.preventDefault();
                        if (!this.props.multiselectable && !this.state.isMenuOpen) {
                           this.incrementSelectedOption(1);
                        }
                        break;
                     case Oo.SB:
                     case Oo.BE:
                        e.preventDefault();
                        if (!this.props.multiselectable && !this.state.isMenuOpen) {
                           this.incrementSelectedOption(-1);
                        }
                  }
               }
            };
            this.incrementSelectedOption = e => {
               const t = React.Children.toArray(this.props.children);
               if (this.state.selectedItems.length === 1) {
                  const s = Uo.getItemIndexById(this.state.selectedItems[0].id, this.props.children);
                  if (s !== -1) {
                     const i = s + e;
                     const n = e > -1 ? t.length - 1 : 0;
                     this.selectItemInRange(i, n, t, e);
                  }
               } else {
                  const s = e > -1;
                  const i = t.length - 1;
                  this.selectItemInRange(s ? 0 : i, s ? i : 0, t, e);
               }
            };
            this.selectItemInRange = (e, t, s, i) => {
               const n = Uo.getFirstValidOptionInRange(e, t, s, i);
               if (!Ji.Z(n)) {
                  this.updateSelection([n.props]);
               }
            };
            this.toggleMenu = e => {
               const t = this.validateMenuState(e);
               if (t !== this.state.isMenuOpen) {
                  this.setState({
                     isMenuOpen: t
                  });
               }
            };
            this.validateMenuState = e => {
               let t = e;
               if (this.props.isMenuOpen !== undefined) {
                  t = this.props.isMenuOpen;
               } else if (this.props.multiselectable === true) {
                  t = true;
               }
               return t;
            };
            this.handleMenuBlur = e => {
               if (this.state.isMenuOpen && !this.props.multiselectable && this.rootElement.current !== null && (!this.rootElement.current.contains(e.relatedTarget) || ns.Re(e.relatedTarget) && e.relatedTarget.id === this.triggerId)) {
                  this.toggleMenu(false);
               }
            };
            this.getFormattedDisplayString = e => this.props.displayStringFormatter === undefined ? this.defaultDisplayStringFormatter(e, this.props.placeholder) : this.props.displayStringFormatter(e, this.props.placeholder);
            this.isFocusableButton = e => e instanceof HTMLButtonElement && e.getAttribute("aria-disabled") !== "true";
            this.focusTriggerElement = () => {
               const e = this.getTriggerButton();
               if (e !== null) {
                  e.focus();
               }
            };
            this.getValidOptions = () => Uo.getValidOptions(React.Children.toArray(this.props.children));
            let t = this.trimSelection(Uo.getListboxItemDataFromIds(this.props.selectedItems !== undefined ? this.props.selectedItems : this.props.defaultSelection, this.props.children));
            if (!this.props.multiselectable && t.length > 1) {
               t = t.slice(0, 1);
            }
            const s = this.getValidOptions();
            this.state = {
               selectedItems: t,
               value: this.getValueFromSelection(t),
               displayString: this.getFormattedDisplayString(t),
               isMenuOpen: this.validateMenuState(false),
               selectedItemIndex: this.getSelectedItemPosInSet(s, t),
               selectableItemCount: s.length
            };
         }
         componentDidUpdate(e) {
            let t = false;
            let s = this.state.isMenuOpen;
            if (e.multiselectable !== this.props.multiselectable) {
               t = true;
               s = this.checkPropsForMenuState();
            }
            if (e.isMenuOpen !== this.props.isMenuOpen) {
               s = this.checkPropsForMenuState();
            }
            if (s !== this.state.isMenuOpen) {
               this.toggleMenu(s);
            }
            if (e.selectedItems === this.props.selectedItems) {
               if (t) {
                  this.updateSelection(this.state.selectedItems.map(e => e));
               }
            } else {
               this.updateSelectionFromProps();
            }
         }
         componentDidMount() {
            this.toggleMenu(this.checkPropsForMenuState());
            if (!!this.props.autoFocus && !this.state.isMenuOpen && !this.props.multiselectable) {
               this.focusTriggerElement();
            }
         }
         render() {
            return React.createElement("div", Ko({}, this.unhandledProps(), {
               ref: this.rootElement,
               className: this.generateClassNames(),
               onKeyDown: this.handleKeydown,
               onClick: this.handleClick
            }), this.renderTrigger(), this.renderHiddenSelectElement(), this.renderMenu());
         }
         generateClassNames() {
            const {
               select: e,
               select__scaleToFit: t,
               select__disabled: s,
               select_menu__open: i,
               select__multiSelectable: n
            } = this.props.managedClasses;
            return super.generateClassNames(Ks.A(e, [t, !Ji.Z(this.props.menuFlyoutConfig) && this.props.menuFlyoutConfig.scaleToFit], [s, this.props.disabled], [i, this.state.isMenuOpen], [n, this.props.multiselectable]));
         }
         renderHiddenSelectElement() {
            return React.createElement("select", {
               required: this.props.required || null,
               name: this.props.name || null,
               form: this.props.form || null,
               value: this.state.value,
               multiple: this.props.multiselectable || null,
               disabled: this.props.disabled || null,
               onChange: this.onSelectValueChange,
               style: {
                  display: "none"
               }
            });
         }
         renderTrigger() {
            if (this.props.trigger !== undefined) {
               return this.props.trigger(this.props, this.state, this.triggerId);
            } else {
               return this.defaultTriggerRenderFunction(this.props, this.state, this.triggerId);
            }
         }
         renderMenu() {
            if (!this.state.isMenuOpen) {
               return null;
            }
            let e = !this.props.multiselectable;
            if (this.props.multiselectable && this.props.autoFocus) {
               e = this.props.multiselectable;
            }
            const t = React.createElement(Uo, {
               labelledBy: this.props.labelledBy,
               describedBy: this.props.describedBy,
               disabled: this.props.disabled,
               focusItemOnMount: e,
               multiselectable: this.props.multiselectable,
               defaultSelection: this.state.selectedItems,
               selectedItems: this.props.selectedItems,
               onSelectedItemsChanged: this.menuSelectionChange,
               onBlur: this.handleMenuBlur,
               selectOnFocus: false,
               tabIndex: -1,
               managedClasses: {
                  listbox: Ne.Z(this.props.managedClasses, "select_menu", ""),
                  listbox__disabled: Ne.Z(this.props.managedClasses, "select_menuDisabled", "")
               }
            }, this.props.children);
            const s = typeof this.props.menu == "function" ? this.props.menu(this.props, this.state, t) : t;
            if (Ji.Z(this.props.menuFlyoutConfig)) {
               return s;
            } else {
               return React.createElement(_o, Ko({
                  anchor: this.rootElement
               }, this.props.menuFlyoutConfig, {
                  managedClasses: this.generateViewportPositionerClassNames()
               }), s);
            }
         }
         generateViewportPositionerClassNames() {
            const {
               select__menuPositioningRegion: e,
               select__menuPositionLeft: t,
               select__menuPositionRight: s,
               select__menuPositionTop: i,
               select__menuPositionBottom: n,
               select__menuPositionHorizontalInset: o,
               select__menuPositionVerticalInset: r
            } = this.props.managedClasses;
            return {
               viewportPositioner: e,
               viewportPositioner__left: t,
               viewportPositioner__right: s,
               viewportPositioner__top: i,
               viewportPositioner__bottom: n,
               viewportPositioner__horizontalInset: o,
               viewportPositioner__verticalInset: r
            };
         }
         getTriggerButton() {
            const e = Mo.N() && this.rootElement.current instanceof HTMLElement ? Array.from(this.rootElement.current.children) : [];
            const t = e.findIndex(this.isFocusableButton);
            if (t !== -1) {
               return e[t];
            } else {
               return null;
            }
         }
      }
      Wo.displayName = `${zo}Select`;
      Wo.defaultProps = {
         multiselectable: false,
         disabled: false,
         defaultSelection: [],
         placeholder: "",
         managedClasses: {}
      };
      Wo.idPropertyKey = "id";
      Wo.triggerUniqueIdPrefix = "selecttrigger-";
      function Jo() {
         Jo = Object.assign ? Object.assign.bind() : function (e) {
            for (var t = 1; t < arguments.length; t++) {
               var s = arguments[t];
               for (var i in s) {
                  if (Object.prototype.hasOwnProperty.call(s, i)) {
                     e[i] = s[i];
                  }
               }
            }
            return e;
         };
         return Jo.apply(this, arguments);
      }
      class Xo extends baseComponent {
         constructor(...e) {
            super(...e);
            this.handledProps = {
               disabled: undefined,
               managedClasses: undefined,
               menu: undefined
            };
            this.defaultTriggerRenderFunction = (e, t, s) => {
               if (e.multiselectable) {
                  return null;
               }
               const {
                  select_button: n,
                  select_buttonContentRegion: o,
                  select_buttonDisplayText: r
               } = this.props.managedClasses;
               const a = `${Ji.Z(this.props.labelledBy) ? "" : `${this.props.labelledBy} `}${s}`;
               const l = "" + (Ji.Z(this.props.describedBy) ? "" : `${this.props.describedBy}`);
               return React.createElement("button", {
                  id: s,
                  disabled: e.disabled,
                  className: Ks.A(n),
                  "aria-haspopup": "listbox",
                  "aria-labelledby": a,
                  "aria-describedby": l,
                  "aria-expanded": t.isMenuOpen
               }, React.createElement("span", {
                  className: Ks.A(o)
               }, React.createElement("div", {
                  className: Ks.A(r)
               }, t.displayString), this.generateGlyph()));
            };
            this.defaultMenuRenderFunction = (e, t, s) => React.createElement(ft, {
               value: pt,
               tag: null
            }, s);
            this.generateGlyph = () => React.createElement("svg", {
               width: "20",
               height: "20",
               viewBox: "0 0 20 20",
               className: Ks.A(this.props.managedClasses.select_toggleGlyph),
               "aria-hidden": true,
               xmlns: "http://www.w3.org/2000/svg"
            }, React.createElement("path", {
               d: "M15.85 7.65c.2.2.2.5 0 .7l-5.46 5.49a.55.55 0 01-.78 0L4.15 8.35a.5.5 0 01.7-.7L10 12.8l5.15-5.16c.2-.2.5-.2.7 0z"
            }));
         }
         render() {
            return React.createElement(Wo, Jo({}, this.unhandledProps(), {
               managedClasses: this.props.managedClasses,
               disabled: this.props.disabled,
               menu: typeof this.props.menu == "function" ? this.props.menu : this.defaultMenuRenderFunction,
               trigger: typeof this.props.trigger == "function" ? this.props.trigger : this.defaultTriggerRenderFunction
            }), this.props.children);
         }
      }
      Xo.displayName = `${Eo}Select`;
      Xo.defaultProps = {
         managedClasses: {}
      };
      const Yo = Xo;
      const Qo = ApplyStyle(Fo)(Yo);
      const er = {
         selectOption: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({
            "list-style-type": "none",
            "box-sizing": "border-box",
            height: ti(),
            display: "flex",
            "align-items": "center",
            padding: ss("0 {0}", ii(A)),
            margin: ss("0 {0}", Xt(P)),
            color: zt,
            fill: zt,
            "white-space": "nowrap",
            overflow: "hidden"
         }, Ns()), ui("t7")), {
            background: _i
         }), $s()), Fi()), Ni()), Hi(Object.assign({
            "border-color": Ii
         }, gs))), {
            "&:hover": Object.assign({
               background: Oi
            }, ys)
         }), cs),
         selectOption_contentRegion: Object.assign({
            overflow: "hidden"
         }, {
            "white-space": "nowrap",
            overflow: "hidden",
            "text-overflow": "ellipsis"
         }),
         selectOption_glyphContainer: {
            display: "flex",
            "align-items": "center",
            "justify-content": "center",
            position: "relative",
            "min-width": "20px",
            "min-height": "20px",
            "flex-shrink": "0",
            margin: Bt(ss("0 {0} 0 0", ii(2)), ss("0 0 0 {0}", ii(2)))
         },
         selectOption_glyph: {
            display: "inline-block"
         },
         selectOption__disabled: Object.assign(Object.assign(Object.assign({}, zi()), ps), {
            "&, &:hover": {
               background: _i
            }
         }),
         selectOption__selected: {
            [os]: Object.assign({
               background: is(rs.selectedBackground),
               "border-color": is(rs.selectedBackground),
               color: is(rs.selectedText),
               fill: is(rs.selectedText)
            }, Hi(Object.assign({}, ms))),
            background: Pi,
            "&:hover": {
               background: Pi
            }
         }
      };
      function tr() {
         tr = Object.assign ? Object.assign.bind() : function (e) {
            for (var t = 1; t < arguments.length; t++) {
               var s = arguments[t];
               for (var i in s) {
                  if (Object.prototype.hasOwnProperty.call(s, i)) {
                     e[i] = s[i];
                  }
               }
            }
            return e;
         };
         return tr.apply(this, arguments);
      }
      class sr extends baseComponent {
         constructor(...e) {
            super(...e);
            this.handledProps = {
               disabled: undefined,
               displayString: undefined,
               managedClasses: undefined,
               id: undefined,
               onInvoke: undefined,
               value: undefined
            };
            this.isItemSelected = () => {
               let e = false;
               if (this.context.listboxSelectedItems !== undefined) {
                  e = this.context.listboxSelectedItems.filter(e => e.id === this.props.id).length === 1;
               }
               return e;
            };
            this.handleKeyDown = e => {
               if (!this.props.disabled && (typeof this.props.onKeyDown == "function" && this.props.onKeyDown(e), !e.defaultPrevented)) {
                  switch (e.key) {
                     case Oo.kL:
                     case Oo.BI:
                        this.invokeOption(e);
                  }
               }
            };
            this.handleClick = e => {
               if (!this.props.disabled) {
                  if (typeof this.props.onClick == "function") {
                     this.props.onClick(e);
                  }
                  if (!e.defaultPrevented) {
                     this.invokeOption(e);
                  }
               }
            };
            this.handleFocus = e => {
               if (!this.props.disabled) {
                  if (typeof this.context.listboxItemFocused == "function") {
                     this.context.listboxItemFocused(this.props, e);
                  }
                  if (typeof this.props.onFocus == "function") {
                     this.props.onFocus(e);
                  }
               }
            };
         }
         render() {
            return React.createElement("div", tr({}, this.unhandledProps(), {
               className: this.generateClassNames(),
               role: "option",
               id: this.props.id,
               "aria-selected": this.isItemSelected(),
               "aria-disabled": this.props.disabled,
               onClick: this.handleClick,
               onFocus: this.handleFocus,
               onKeyDown: this.handleKeyDown
            }), this.props.children);
         }
         generateClassNames() {
            const {
               listboxItem: e,
               listboxItem__disabled: t,
               listboxItem__selected: s
            } = this.props.managedClasses;
            return super.generateClassNames(Ks.A(e, [t, this.props.disabled], [s, this.isItemSelected()]));
         }
         invokeOption(e) {
            if (this.context.listboxItemInvoked) {
               this.context.listboxItemInvoked(this.props, e);
            }
            if (typeof this.props.onInvoke == "function") {
               this.props.onInvoke(e, this.props);
            }
         }
      }
      sr.displayName = `${zo}ListboxItem`;
      sr.contextType = $o;
      sr.defaultProps = {
         disabled: false,
         managedClasses: {}
      };
      sr.contextType = $o;
      function ir() {
         ir = Object.assign ? Object.assign.bind() : function (e) {
            for (var t = 1; t < arguments.length; t++) {
               var s = arguments[t];
               for (var i in s) {
                  if (Object.prototype.hasOwnProperty.call(s, i)) {
                     e[i] = s[i];
                  }
               }
            }
            return e;
         };
         return ir.apply(this, arguments);
      }
      class nr extends baseComponent {
         constructor(...e) {
            super(...e);
            this.handledProps = {
               glyph: undefined,
               value: undefined,
               id: undefined,
               managedClasses: undefined
            };
         }
         render() {
            const {
               selectOption: e,
               selectOption__disabled: t,
               selectOption__selected: s,
               selectOption_contentRegion: n
            } = this.props.managedClasses;
            return React.createElement(sr, ir({}, this.unhandledProps(), {
               id: this.props.id,
               displayString: this.props.displayString,
               value: this.props.value,
               managedClasses: {
                  listboxItem: e,
                  listboxItem__disabled: t,
                  listboxItem__selected: s
               }
            }), this.renderGlyph(), React.createElement("span", {
               className: Ks.A(n)
            }, this.props.displayString, this.props.children));
         }
         renderGlyph() {
            if (typeof this.props.glyph == "function") {
               return React.createElement("div", {
                  className: this.props.managedClasses.selectOption_glyphContainer
               }, this.props.glyph(Ks.A(this.props.managedClasses.selectOption_glyph)));
            } else {
               return null;
            }
         }
      }
      nr.displayName = `${Eo}SelectOption`;
      nr.defaultProps = {
         managedClasses: {}
      };
      const or = nr;
      const rr = ApplyStyle(er)(or);
      const ar = {
         "background-color": "transparent"
      };
      const lr = getProperty("density");
      const cr = Object.assign(Object.assign(Object.assign(Object.assign({
         color: nn,
         fill: nn
      }, ar), Hi(Object.assign(Object.assign({
         "border-color": "transparent",
         "box-shadow": "none"
      }, Ms), {
         "& $button_contentRegion::before": Object.assign({
            background: zt,
            height: Xt(A)
         }, _s)
      }))), {
         "& $button_contentRegion::before": {
            [os]: {
               background: rs.buttonText
            }
         },
         "&:hover $button_contentRegion::before": Object.assign({
            background: on
         }, _s),
         "&:hover$button__disabled $button_contentRegion::before": {
            display: "none"
         },
         "&:active $button_contentRegion::before": {
            background: rn
         },
         "&$button__disabled, &$button__disabled $button_contentRegion::before": Object.assign({}, ar),
         "&:hover:enabled, a&:not($button__disabled):hover": Object.assign(Object.assign(Object.assign({
            color: on
         }, ar), Ms), {
            "& $button_beforeContent, & $button_afterContent": Object.assign({
               fill: on
            }, Ms)
         }),
         "&:active:enabled, a&:not($button__disabled):active": Object.assign({
            color: rn,
            fill: rn
         }, ar)
      }), cs);
      const hr = {
         button: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, ui("t7")), {
            "font-family": "inherit"
         }), $s()), {
            "box-sizing": "border-box",
            "max-width": "374px",
            "min-width": e => lr(e) <= -2 ? "28px" : "32px",
            padding: ss("0 {0}", ii(Qe(A, 2))),
            display: "inline-flex",
            "justify-content": "center",
            "align-items": "center",
            height: ti()
         }), Ni()), Fi()), {
            "line-height": "1",
            overflow: "hidden",
            "text-decoration": "none",
            "white-space": "nowrap",
            transition: "all 0.1s ease-in-out",
            color: zt,
            fill: zt,
            background: no,
            "&:hover:enabled, a&:not($button__disabled):hover": Object.assign(Object.assign({
               background: oo
            }, ys), {
               "& $button_beforeContent, & $button_afterContent": Object.assign({}, Ss)
            }),
            "&:active:enabled, a&:not($button__disabled):active": {
               background: ro
            }
         }), Hi(Object.assign(Object.assign({}, gs), {
            "border-color": Ii
         }))), {
            "&:disabled": Object.assign({}, ps),
            "&::-moz-focus-inner": {
               border: "0"
            }
         }), hs), {
            "a&:not($button__disabled)": Object.assign(Object.assign({}, us), {
               "&:not($button__disabled):hover": Object.assign(Object.assign({}, Vs), {
                  "& $button_beforeContent, & $button_afterContent": Object.assign({}, ks)
               }),
               "&$button__disabled": Object.assign(Object.assign({}, ps), {
                  "&:hover": {
                     [os]: {
                        "box-shadow": "none !important"
                     }
                  }
               })
            })
         }),
         button__primary: Object.assign(Object.assign(Object.assign(Object.assign({
            color: Dn,
            fill: Dn,
            background: Fn,
            "&:hover:enabled, a&:not($button__disabled):hover": Object.assign({
               background: Bn
            }, vs),
            "&:active:enabled, a&:not($button__disabled):active": {
               background: Rn
            }
         }, Hi(Object.assign({
            "border-color": Ii,
            "box-shadow": ss("0 0 0 {0} inset {1}", Xt(A), Li(Fn))
         }, ms))), {
            "& $button_beforeContent, & $button_afterContent": {
               fill: Dn
            }
         }), ds), {
            "a&:not($button__disabled)": {
               "& $button_beforeContent, & $button_afterContent": Object.assign({}, ks)
            }
         }),
         button__outline: Object.assign(Object.assign({
            background: "transparent",
            border: ss("{0} solid {1}", Xt(I), zn),
            padding: ss("0 {0}", ii(Qe(I, 2))),
            "&:hover:enabled, a&:not($button__disabled):hover": Object.assign({
               background: "transparent",
               border: ss("{0} solid {1}", Xt(I), $n)
            }, ys),
            "&:active:enabled, a&:not($button__disabled):active": {
               background: "transparent",
               border: ss("{0} solid {1}", Xt(I), Gn)
            }
         }, Hi(Object.assign(Object.assign({}, gs), {
            "box-shadow": ss("0 0 0 {0} {1} inset", Xt(et(A, I)), Ii),
            "border-color": Ii
         }))), hs),
         button__lightweight: Object.assign(Object.assign({}, cr), {
            "a&:not($button__disabled)": {
               "&:not($button__disabled):hover": {
                  [os]: {
                     "box-shadow": "none !important",
                     color: ls,
                     fill: ls
                  },
                  "& $button_contentRegion::before": {
                     [os]: {
                        background: ls
                     }
                  }
               },
               "&$button__disabled": Object.assign({}, ps),
               "& $button_contentRegion::before": {
                  [os]: {
                     background: "transparent"
                  }
               }
            }
         }),
         button__justified: Object.assign(Object.assign({}, cr), {
            "min-width": "74px",
            "padding-left": "0",
            "padding-right": "0",
            "border-width": "0",
            "justify-content": "flex-start",
            "a&:not($button__disabled)": {
               "&:not($button__disabled):hover": {
                  [os]: {
                     "box-shadow": "none !important",
                     color: ls,
                     fill: ls
                  },
                  "& $button_contentRegion::before": {
                     [os]: {
                        background: ls
                     }
                  }
               },
               "&$button__disabled": Object.assign({}, ps)
            }
         }),
         button__stealth: Object.assign(Object.assign({
            background: _i,
            "&:hover:enabled, a&:not($button__disabled):hover": Object.assign({
               "background-color": Oi
            }, ys),
            "&:active:enabled, a&:not($button__disabled):active": {
               "background-color": Ei
            }
         }, Hi(Object.assign(Object.assign({}, gs), {
            "border-color": Ii
         }))), cs),
         button_contentRegion: {
            position: "relative",
            "&::before": {
               content: "''",
               display: "block",
               height: Xt(I),
               position: "absolute",
               bottom: "-3px",
               width: "100%",
               left: Bt("0", ""),
               right: Bt("", "0")
            },
            "& svg": {}
         },
         button__disabled: Object.assign(Object.assign(Object.assign({}, zi()), ps), {
            "& $button_beforeContent, & $button_afterContent": Object.assign({}, bs)
         }),
         button_beforeOrAfterContainer: {
            display: "flex",
            "align-items": "center",
            "justify-content": "center",
            "min-width": "20px",
            "min-height": "20px"
         },
         button_beforeContainer: {},
         button_afterContainer: {},
         button_beforeContent: {},
         button_afterContent: {},
         button__hasBeforeOrAfterAndChildren: {
            "& $button_beforeContainer": {
               "margin-right": Bt(ii(2), ""),
               "margin-left": Bt("", ii(2))
            },
            "& $button_afterContainer": {
               "margin-right": Bt("", ii(2)),
               "margin-left": Bt(ii(2), "")
            }
         }
      };
      var dr;
      var ur;
      (function (e) {
         e.justified = "justified";
         e.lightweight = "lightweight";
         e.outline = "outline";
         e.primary = "primary";
         e.stealth = "stealth";
      })(dr ||= {});
      (function (e) {
         e.before = "before";
         e.after = "after";
      })(ur ||= {});
      class pr extends baseComponent {
         constructor() {
            super(...arguments);
            this.handledProps = {
               appearance: undefined,
               beforeContent: undefined,
               afterContent: undefined,
               disabled: undefined,
               href: undefined,
               managedClasses: undefined
            };
         }
         render() {
            const e = this.props.managedClasses;
            return React.createElement(Wi, Object.assign({}, this.unhandledProps(), {
               className: this.generateClassNames(),
               managedClasses: e,
               href: this.props.href,
               disabled: this.props.disabled
            }), this.withSlot(ur.before), this.generateBeforeContent(), React.createElement("span", {
               className: Ks.A(e.button_contentRegion)
            }, this.withoutSlot([ur.before, ur.after])), this.withSlot(ur.after), this.generateAfterContent());
         }
         generateClassNames() {
            return super.generateClassNames(Ks.A([this.props.managedClasses[`button__${dr[this.props.appearance]}`], typeof this.props.appearance == "string"], [this.props.managedClasses.button__hasBeforeOrAfterAndChildren, this.hasBeforeOrAfterAndChildren()]));
         }
         generateBeforeContent() {
            if (typeof this.props.beforeContent == "function") {
               return React.createElement("div", {
                  className: Ks.A(this.props.managedClasses.button_beforeOrAfterContainer, this.props.managedClasses.button_beforeContainer)
               }, this.props.beforeContent(Ks.A(this.props.managedClasses.button_beforeContent)));
            }
         }
         generateAfterContent() {
            if (typeof this.props.afterContent == "function") {
               return React.createElement("div", {
                  className: Ks.A(this.props.managedClasses.button_beforeOrAfterContainer, this.props.managedClasses.button_afterContainer)
               }, this.props.afterContent(Ks.A(this.props.managedClasses.button_afterContent)));
            }
         }
         hasBeforeOrAfterAndChildren() {
            return !Ji.Z(this.props.children) && (!Ji.Z(this.props.beforeContent) || !Ji.Z(this.props.afterContent));
         }
      }
      pr.displayName = `${bi}Button`;
      pr.defaultProps = {
         managedClasses: {}
      };
      const br = pr;
      const gr = ApplyStyle(hr)(br);
      function fr() {
         fr = Object.assign ? Object.assign.bind() : function (e) {
            for (var t = 1; t < arguments.length; t++) {
               var s = arguments[t];
               for (var i in s) {
                  if (Object.prototype.hasOwnProperty.call(s, i)) {
                     e[i] = s[i];
                  }
               }
            }
            return e;
         };
         return fr.apply(this, arguments);
      }
      const mr = ApplyStyle({
         buttonSection_container: {
            display: "flex",
            "justify-content": "space-between",
            "& > *": {
               width: "calc(50% - 4px)"
            },
            width: "100%"
         },
         buttonSection_singleContainer: {
            display: "flex",
            "justify-content": "flex-end",
            "& > *": {
               width: "calc(50% - 4px)"
            },
            width: "100%"
         },
         buttonSection_tripleContainer: {
            display: "flex",
            "justify-content": "space-between",
            "& > *": {
               width: "calc(33% - 4px)"
            },
            width: "100%"
         }
      })(class extends baseComponent {
         constructor(...e) {
            super(...e);
            this.handledProps = {
               managedClasses: undefined
            };
         }
         render() {
            const e = React.Children.toArray(this.props.children);
            if (e.length > 3) {
               console.error(`ButtonSection expected 1, 2, or 3 children, received ${e.length}`);
            }
            if (e.length === 1) {
               return React.createElement("div", fr({}, this.unhandledProps(), {
                  className: this.props.managedClasses?.buttonSection_singleContainer
               }), this.props.children);
            } else if (e.length === 2) {
               if (LoadTimeData.valueExists("is_macosx") && LoadTimeData.getBoolean("is_macosx") === true) {
                  return React.createElement("div", fr({}, this.unhandledProps(), {
                     className: this.props.managedClasses?.buttonSection_container
                  }), e[1], e[0]);
               } else {
                  return React.createElement("div", fr({}, this.unhandledProps(), {
                     className: this.props.managedClasses?.buttonSection_container
                  }), e[0], e[1]);
               }
            } else if (e.length >= 3) {
               if (LoadTimeData.valueExists("is_macosx") && LoadTimeData.getBoolean("is_macosx") === true) {
                  return React.createElement("div", fr({}, this.unhandledProps(), {
                     className: this.props.managedClasses?.buttonSection_container
                  }), e[2], e[1], e[0]);
               } else {
                  return React.createElement("div", fr({}, this.unhandledProps(), {
                     className: this.props.managedClasses?.buttonSection_tripleContainer
                  }), e[0], e[1], e[2]);
               }
            } else {
               return null;
            }
         }
      });
      const yr = (e = false) => {
         return {
            dialog_contentRegion: {
               "border-radius": e ? "0px" : "4px",
               ...mo(ho.e9),
               ...Hi({}),
               "max-height": "100%",
               overflow: e ? "hidden" : "auto",
               background: e ? "transparent" : undefined
            },
            dialog_modalOverlay: {
               ...Hi({}),
               background: e ? "transparent" : undefined
            },
            dialog_positioningRegion: {
               overflow: "auto",
               ...(t = d.MODAL, {
                  "z-index": t.toString()
               })
            }
         };
         var t;
      };
      const vr = {
         baseModal_dialogField: {
            "margin-inline-end": "4px",
            ...Bs()
         },
         baseModal_inlineLinkButton: {
            ...function (e) {
               return {
                  minWidth: "unset",
                  ...ui("t7"),
                  height: "unset",
                  borderRadius: "0px",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  color: nn,
                  fill: nn,
                  display: "block",
                  padding: "0",
                  transition: "none",
                  "&:disabled": {
                     cursor: "default !important",
                     color: Un,
                     fill: Un,
                     opacity: "unset"
                  },
                  "&:hover:enabled": {
                     background: "none",
                     color: on,
                     fill: on,
                     boxShadow: "0px 2px 0px 0px " + on(e)
                  },
                  "&:focus:enabled": {
                     background: "none",
                     outline: "none",
                     boxShadow: "0px 2px 0px 0px " + Ii(e)
                  },
                  "&:active:enabled": {
                     background: "none",
                     color: rn,
                     fill: rn,
                     boxShadow: "0px 2px 0px 0px " + rn(e)
                  },
                  [os]: {
                     forcedColorAdjust: "none",
                     color: rs.forcedColorLink,
                     fill: rs.forcedColorLink,
                     "&:hover:enabled": {
                        background: "none",
                        color: rs.forcedColorLink,
                        fill: rs.forcedColorLink,
                        boxShadow: "0px 2px 0px 0px " + rs.forcedColorLink
                     },
                     "&:focus:enabled": {
                        boxShadow: "0px 2px 0px 0px " + rs.forcedColorLink
                     },
                     "&:active:enabled": {
                        background: "none",
                        color: rs.forcedColorLink,
                        fill: rs.forcedColorLink,
                        boxShadow: "0px 2px 0px 0px " + rs.forcedColorLink
                     }
                  }
               };
            }(Ct),
            ...ui("t8"),
            display: "inline",
            "margin-inline-start": "4px"
         },
         baseModal_textFieldFlexContainer: {
            display: "flex",
            "& > :first-child": {
               "margin-inline-end": "8px"
            }
         },
         button: {
            height: "32px",
            flex: "1",
            "max-width": "calc(100% / 2 - 4px)",
            ...Bs(),
            ...ui("t7")
         },
         baseModal_content: {
            "margin-inline-end": Xt(24),
            height: "100%",
            "padding-bottom": "24px",
            "box-sizing": "border-box"
         },
         baseModal_contentContainer: {
            "padding-top": "20px"
         },
         baseModal_contentScroll: {
            height: "100%",
            "padding-inline-start": Xt(24),
            display: "flex",
            "flex-direction": "column"
         },
         baseModal_headerContainer: {
            position: "relative"
         },
         baseModal_title: {
            "margin-bottom": Xt(18),
            "padding-inline-start": Xt(24),
            "padding-inline-end": Xt(24),
            display: "flex"
         },
         baseModal_titleIcon: {
            "margin-inline-end": "20px"
         },
         baseModal_dialog: {
            ...ui("t7"),
            "margin-top": "0px",
            "margin-bottom": "18px"
         },
         baseModal_select: {
            "margin-bottom": Xt(18),
            ...u(d.SELECT_MENU)
         },
         baseModal_select__error: {
            "margin-bottom": "0px",
            "& [aria-haspopup=\"true\"]": {
               "border-color": Vt(Ct),
               ...Hi({
                  "box-shadow": `${Vt(Ct)} 0px 0px 0px 1px inset`,
                  "border-color": Vt(Ct)
               }),
               "&:hover:enabled": {
                  "border-color": Vt(Ct)
               },
               "&:active:enabled": {
                  "border-color": Vt(Ct)
               }
            }
         },
         baseModal_textArea: {
            "margin-bottom": Xt(18),
            resize: "vertical",
            "min-height": "32px"
         },
         baseModal_textField: {
            height: "32px",
            width: "100%",
            transition: "all 0.2s ease-in-out 0s, margin 0s",
            "margin-bottom": Xt(18),
            "margin-top": "0px",
            ...ui("t7")
         },
         baseModal_textField__error: {
            "border-color": Vt(Ct),
            "caret-color": Vt(Ct),
            "margin-bottom": "0px",
            ...Hi({
               "box-shadow": `${Vt(Ct)} 0px 0px 0px 1px inset`,
               "border-color": Vt(Ct)
            }),
            "&:hover:enabled": {
               "border-color": Vt(Ct)
            },
            "&:active:enabled": {
               "border-color": Vt(Ct)
            }
         },
         baseModal_textField_errorText: {
            color: Vt(Ct),
            ...ui("t8"),
            height: Xt(18)
         },
         baseModal_label: {
            ...ui("t8"),
            "margin-bottom": Xt(10)
         },
         baseModal_label__error: {
            color: Vt(Ct)
         },
         baseModal_closeIcon: {
            height: "14px",
            width: "14px"
         },
         baseModal_closeButton: {
            ...Os(0, Yt, Yt),
            position: "absolute",
            top: Xt(-22),
            margin: "6px",
            "& $baseModal_closeIcon": {
               height: "20px",
               width: "20px"
            },
            right: Bt("0", "unset"),
            left: Bt("unset", "0")
         },
         baseModal_inputRow: {
            display: "flex",
            "flex-direction": "row"
         },
         baseModal_inputRow_column: {
            display: "flex",
            "flex-direction": "column",
            "flex-grow": "1",
            "&:not(:first-child)": {
               "margin-inline-start": "8px"
            }
         }
      };
      /*!
      * tabbable 5.2.0
      * @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
      */
      var wr = ["input", "select", "textarea", "a[href]", "button", "[tabindex]", "audio[controls]", "video[controls]", "[contenteditable]:not([contenteditable=\"false\"])", "details>summary:first-of-type", "details"];
      var xr = wr.join(",");
      var Sr = typeof Element == "undefined" ? function () {} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
      function Mr(e, t, s) {
         var i = Array.prototype.slice.apply(e.querySelectorAll(xr));
         if (t && Sr.call(e, xr)) {
            i.unshift(e);
         }
         return i.filter(s);
      }
      function kr(e) {
         var t = parseInt(e.getAttribute("tabindex"), 10);
         if (isNaN(t)) {
            if (function (e) {
               return e.contentEditable === "true";
            }(e)) {
               return 0;
            } else if (e.nodeName !== "AUDIO" && e.nodeName !== "VIDEO" && e.nodeName !== "DETAILS" || e.getAttribute("tabindex") !== null) {
               return e.tabIndex;
            } else {
               return 0;
            }
         } else {
            return t;
         }
      }
      function Hr(e, t) {
         if (e.tabIndex === t.tabIndex) {
            return e.documentOrder - t.documentOrder;
         } else {
            return e.tabIndex - t.tabIndex;
         }
      }
      function Cr(e) {
         return e.tagName === "INPUT";
      }
      function Vr(e) {
         return function (e) {
            return Cr(e) && e.type === "radio";
         }(e) && !function (e) {
            if (!e.name) {
               return true;
            }
            var t;
            var s = e.form || e.ownerDocument;
            function i(e) {
               return s.querySelectorAll("input[type=\"radio\"][name=\"" + e + "\"]");
            }
            if (typeof window != "undefined" && window.CSS !== undefined && typeof window.CSS.escape == "function") {
               t = i(window.CSS.escape(e.name));
            } else {
               try {
                  t = i(e.name);
               } catch (e) {
                  console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s", e.message);
                  return false;
               }
            }
            var n = function (e, t) {
               for (var s = 0; s < e.length; s++) {
                  if (e[s].checked && e[s].form === t) {
                     return e[s];
                  }
               }
            }(t, e.form);
            return !n || n === e;
         }(e);
      }
      function _r(e, t) {
         return !t.disabled && !function (e) {
            return Cr(e) && e.type === "hidden";
         }(t) && !function (e, t) {
            if (getComputedStyle(e).visibility === "hidden") {
               return true;
            }
            var s = Sr.call(e, "details>summary:first-of-type") ? e.parentElement : e;
            if (Sr.call(s, "details:not([open]) *")) {
               return true;
            }
            if (t && t !== "full") {
               if (t === "non-zero-area") {
                  var i = e.getBoundingClientRect();
                  var n = i.width;
                  var o = i.height;
                  return n === 0 && o === 0;
               }
            } else {
               while (e) {
                  if (getComputedStyle(e).display === "none") {
                     return true;
                  }
                  e = e.parentElement;
               }
            }
            return false;
         }(t, e.displayCheck) && !function (e) {
            return e.tagName === "DETAILS" && Array.prototype.slice.apply(e.children).some(function (e) {
               return e.tagName === "SUMMARY";
            });
         }(t);
      }
      function Or(e, t) {
         return !!_r(e, t) && !Vr(t) && !(kr(t) < 0);
      }
      function Er(e, t) {
         var s = [];
         var i = [];
         Mr(e, (t = t || {}).includeContainer, Or.bind(null, t)).forEach(function (e, t) {
            var n = kr(e);
            if (n === 0) {
               s.push(e);
            } else {
               i.push({
                  documentOrder: t,
                  tabIndex: n,
                  node: e
               });
            }
         });
         return i.sort(Hr).map(function (e) {
            return e.node;
         }).concat(s);
      }
      function Tr() {
         Tr = Object.assign ? Object.assign.bind() : function (e) {
            for (var t = 1; t < arguments.length; t++) {
               var s = arguments[t];
               for (var i in s) {
                  if (Object.prototype.hasOwnProperty.call(s, i)) {
                     e[i] = s[i];
                  }
               }
            }
            return e;
         };
         return Tr.apply(this, arguments);
      }
      class Pr extends baseComponent {
         constructor(...e) {
            super(...e);
            this.handledProps = {
               describedBy: undefined,
               label: undefined,
               labelledBy: undefined,
               contentWidth: undefined,
               contentHeight: undefined,
               modal: undefined,
               managedClasses: undefined,
               onDismiss: undefined,
               visible: undefined,
               focusTargetOnClose: undefined
            };
            this.rootElement = React.createRef();
            this.shouldAddKeyListener = e => !!e.modal || !!e.onDismiss;
            this.handleDocumentKeyDown = e => {
               if (!e.defaultPrevented && this.props.visible) {
                  switch (e.key) {
                     case Oo.CX:
                        this.checkForSoftDismiss(e);
                        break;
                     case Oo.oM:
                        this.handleTabKeyDown(e);
                  }
               }
            };
            this.checkForSoftDismiss = e => {
               if (this.props.onDismiss && typeof this.props.onDismiss == "function" && this.props.visible) {
                  this.props.onDismiss(e);
               }
            };
            this.handleTabKeyDown = e => {
               if (!this.props.modal) {
                  return;
               }
               const t = Er(this.rootElement.current);
               const s = t.length;
               if (s === 0) {
                  this.tryFocusOnRootElement();
                  e.preventDefault();
                  return;
               }
               if (e.shiftKey && e.target === t[0]) {
                  t[s - 1].focus();
                  e.preventDefault();
               } else if (!e.shiftKey && e.target === t[s - 1]) {
                  t[0].focus();
                  e.preventDefault();
               }
            };
            this.handleDocumentFocus = e => {
               if (!e.defaultPrevented && this.shouldForceFocus(e.target)) {
                  this.focusOnFirstElement();
                  e.preventDefault();
               }
            };
            this.shouldForceFocus = e => this.props.visible && this.rootElement.current instanceof HTMLElement && !this.rootElement.current.contains(e);
            this.focusOnFirstElement = () => {
               if (Mo.N() && this.rootElement.current instanceof HTMLElement) {
                  const e = Er(this.rootElement.current);
                  if (e.length === 0) {
                     this.tryFocusOnRootElement();
                  } else {
                     e[0].focus();
                  }
               }
            };
            this.tryFocusOnRootElement = () => {
               if (this.rootElement.current instanceof HTMLElement) {
                  this.rootElement.current.focus();
               }
            };
            this.invokeFocusOnCloseTarget = () => {
               if (Ji.Z(this.props.focusTargetOnClose)) {
                  return;
               }
               if (f.Z(this.props.focusTargetOnClose)) {
                  this.props.focusTargetOnClose();
                  return;
               }
               const e = vo(this.props.focusTargetOnClose);
               if (e instanceof HTMLElement) {
                  e.focus();
               }
            };
         }
         render() {
            const {
               dialog_positioningRegion: e,
               dialog_contentRegion: t
            } = this.props.managedClasses;
            return React.createElement("div", Tr({
               ref: this.rootElement
            }, this.unhandledProps(), {
               className: this.generateClassNames(),
               "aria-hidden": !this.props.visible
            }), React.createElement("div", {
               className: Ks.A(e)
            }, this.renderModalOverlay(), React.createElement("div", {
               role: "dialog",
               "aria-modal": this.props.modal,
               tabIndex: -1,
               className: Ks.A(t),
               style: {
                  height: this.props.contentHeight,
                  width: this.props.contentWidth
               },
               "aria-describedby": this.props.describedBy,
               "aria-labelledby": this.props.labelledBy,
               "aria-label": this.props.label
            }, this.props.children)));
         }
         componentDidMount() {
            if (Mo.N()) {
               if (this.shouldAddKeyListener(this.props)) {
                  document.addEventListener("keydown", this.handleDocumentKeyDown);
               }
               if (this.props.modal) {
                  document.addEventListener("focusin", this.handleDocumentFocus);
                  if (this.shouldForceFocus(document.activeElement)) {
                     this.focusOnFirstElement();
                  }
               }
            }
         }
         componentDidUpdate(e) {
            if (Mo.N()) {
               if (!e.modal && this.props.modal) {
                  document.addEventListener("focusin", this.handleDocumentFocus);
                  this.focusOnFirstElement();
               } else if (e.modal && !this.props.modal) {
                  document.removeEventListener("focusin", this.handleDocumentFocus);
               }
               if (!this.shouldAddKeyListener(e) && this.shouldAddKeyListener(this.props)) {
                  document.addEventListener("keydown", this.handleDocumentKeyDown);
               } else if (this.shouldAddKeyListener(e) && !this.shouldAddKeyListener(this.props)) {
                  document.removeEventListener("keydown", this.handleDocumentKeyDown);
               }
            }
         }
         componentWillUnmount() {
            if (Mo.N()) {
               if (this.shouldAddKeyListener(this.props)) {
                  document.removeEventListener("keydown", this.handleDocumentKeyDown);
               }
               if (this.props.modal) {
                  document.removeEventListener("focusin", this.handleDocumentFocus);
               }
               this.invokeFocusOnCloseTarget();
            }
         }
         generateClassNames() {
            return super.generateClassNames(Ks.A(this.props.managedClasses.dialog));
         }
         renderModalOverlay() {
            if (this.props.modal) {
               return React.createElement("div", {
                  className: Ks.A(this.props.managedClasses.dialog_modalOverlay),
                  onClick: this.checkForSoftDismiss,
                  onTouchStart: this.checkForSoftDismiss,
                  role: "presentation",
                  tabIndex: -1,
                  style: {
                     touchAction: "none"
                  }
               });
            } else {
               return null;
            }
         }
      }
      Pr.defaultProps = {
         contentHeight: "480px",
         contentWidth: "640px",
         visible: false,
         managedClasses: {}
      };
      Pr.displayName = `${zo}Dialog`;
      const jr = ApplyStyle({
         dialog: {
            display: "none",
            "&[aria-hidden=\"false\"]": {
               display: "block"
            }
         },
         dialog_positioningRegion: {
            display: "flex",
            "justify-content": "center",
            position: "fixed",
            top: "0",
            bottom: "0",
            left: "0",
            right: "0",
            overflow: "auto"
         },
         dialog_modalOverlay: {
            position: "fixed",
            top: "0",
            left: "0",
            right: "0",
            bottom: "0",
            background: "rgba(0, 0, 0, 0.3)"
         },
         dialog_contentRegion: Object.assign(Object.assign(Object.assign(Object.assign({
            "margin-top": "auto",
            "margin-bottom": "auto",
            background: C
         }, Ri()), mo(ho.e14)), {
            "z-index": "1"
         }), Hs)
      })(Pr);
      function Dr(e) {
         return React.createElement("svg", {
            width: 20,
            height: 20,
            viewBox: "0 0 20 20",
            className: e,
            "aria-hidden": true
         }, React.createElement("path", {
            d: "M4.09 4.22l.06-.07a.5.5 0 01.63-.06l.07.06L10 9.29l5.15-5.14a.5.5 0 01.63-.06l.07.06c.18.17.2.44.06.63l-.06.07L10.71 10l5.14 5.15c.18.17.2.44.06.63l-.06.07a.5.5 0 01-.63.06l-.07-.06L10 10.71l-5.15 5.14a.5.5 0 01-.63.06l-.07-.06a.5.5 0 01-.06-.63l.06-.07L9.29 10 4.15 4.85a.5.5 0 01-.06-.63l.06-.07-.06.07z",
            fillRule: "nonzero"
         }));
      }
      let Ir = function (e) {
         e.up = "ArrowUp";
         e.down = "ArrowDown";
         e.left = "ArrowLeft";
         e.right = "ArrowRight";
         e.delete = "Delete";
         e.enter = "Enter";
         e.enter2 = "Return";
         e.enter3 = "\n";
         e.escape = "Escape";
         e.tab = "Tab";
         e.shift = "Shift";
         e[e.space = 32] = "space";
         e.spaceKey = " ";
         e[e.A = 65] = "A";
         e[e.Z = 90] = "Z";
         e[e.Y = 89] = "Y";
         e[e.X = 88] = "X";
         e[e.V = 86] = "V";
         return e;
      }({});
      const Ar = "a[href]:not([tabindex=\"-1\"]), button:enabled:not([tabindex=\"-1\"]), textarea, input[type=\"text\"], input[type=\"password\"], div[role=\"slider\"], input[type=\"radio\"]:checked, input[type=\"checkbox\"]:enabled, select:not([style*=\"display: none\"]), details, [tabindex]:not([tabindex=\"-1\"])";
      window.hubData = {};
      const Lr = window.hubData;
      let Zr = function (e) {
         e[e.minimumLevel = 0] = "minimumLevel";
         e[e.contentHeight = 0] = "contentHeight";
         e[e.contextMenuHeight = 1] = "contextMenuHeight";
         e[e.modalHeight = 2] = "modalHeight";
         e[e.maximumLevel = 2] = "maximumLevel";
         return e;
      }({});
      const Fr = {
         [Zr.contentHeight]: undefined,
         [Zr.contextMenuHeight]: undefined,
         [Zr.modalHeight]: undefined
      };
      function Br(e) {
         return typeof e == "number" && e >= Zr.minimumLevel && e <= Zr.maximumLevel;
      }
      function Rr(e, t = Zr.contentHeight) {
         if (Fr[Zr.contentHeight] === undefined) {
            Fr[Zr.contentHeight] = Xt(Lr.hubPopupHeight);
         }
         Fr[t] = e;
         let s = Zr.contentHeight;
         for (const e of Object.keys(Zr)) {
            const t = Zr[e];
            if (Br(t) && typeof Fr[t] == "string" && t > s) {
               s = t;
            }
         }
         const i = Fr[s];
         if (document.body.style.height !== i) {
            document.body.style.height = i;
         }
         if (document.documentElement.style.height !== i) {
            document.documentElement.style.height = i;
         }
      }
      const Nr = window.matchMedia("(prefers-color-scheme: dark)");
      const zr = 70;
      const $r = 0;
      const Gr = 76;
      const qr = 3;
      function Ur() {
         if (Lr.hubIsIncognito === undefined) {
            return LoadTimeData.valueExists("inprivate") && LoadTimeData.getBoolean("inprivate");
         } else {
            return Lr.hubIsIncognito;
         }
      }
      function Kr() {
         return Nr.matches || Ur();
      }
      function Wr(e) {
         if (e) {
            if (Kr()) {
               return Gr;
            } else {
               return qr;
            }
         } else if (Kr()) {
            return zr;
         } else {
            return $r;
         }
      }
      function Jr() {
         Jr = Object.assign ? Object.assign.bind() : function (e) {
            for (var t = 1; t < arguments.length; t++) {
               var s = arguments[t];
               for (var i in s) {
                  if (Object.prototype.hasOwnProperty.call(s, i)) {
                     e[i] = s[i];
                  }
               }
            }
            return e;
         };
         return Jr.apply(this, arguments);
      }
      const Xr = ApplyStyle(vr)(class extends baseComponent {
         componentDidMount() {
            this.node = n.findDOMNode(this);
            this.trapFocus(this.node);
            if (this.props.isHubPopup) {
               if (this.props.contentElement) {
                  this.props.contentElement.style.display = "none";
               }
               Rr(Xt(this.contentContainerRef.current.offsetHeight), Zr.modalHeight);
               this.prevDocumentTitle = document.title;
               document.title = this.props.label;
            }
         }
         componentDidUpdate() {
            if (this.props.isHubPopup && this.contentContainerRef.current) {
               Rr(Xt(this.contentContainerRef.current.offsetHeight), Zr.modalHeight);
            }
            const e = this.node.querySelectorAll(Ar);
            const t = e[e.length - 1];
            if (t !== null && t !== this.state.lastElement) {
               this.setState({
                  lastElement: t
               });
            }
         }
         componentWillUnmount() {
            this.node.removeEventListener("keydown", this.keydownListener);
            this.returnFocus();
            if (this.props.isHubPopup) {
               Rr(undefined, Zr.modalHeight);
               if (this.props.contentElement) {
                  this.props.contentElement.style.display = "block";
               }
               document.title = this.prevDocumentTitle;
            }
         }
         render() {
            let r;
            if (this.props.heading) {
               r = React.createElement(React.Fragment, null, this.props.heading);
            } else {
               r = React.createElement(React.Fragment, null, this.props.beforeTitleIcon ? React.createElement("span", {
                  className: this.props.managedClasses?.baseModal_titleIcon
               }, this.props.beforeTitleIcon) : [], this.props.title);
            }
            let l = this.props.contentWidth || Xt(400);
            let c = this.props.contentHeight || "auto";
            if (this.props.isHubPopup) {
               l = c = "100%";
            }
            return React.createElement(jr, Jr({}, this.unhandledProps(), {
               onKeyDown: this.handleKeyDown,
               jssStyleSheet: this.props.dialogStyleSheet || yr(this.props.isHubPopup),
               contentHeight: c,
               contentWidth: l,
               modal: this.props.modal === undefined || this.props.modal,
               visible: true,
               label: this.props.label
            }), React.createElement("div", {
               className: this.props.managedClasses?.baseModal_contentContainer,
               ref: this.contentContainerRef
            }, React.createElement("div", {
               className: this.props.managedClasses?.baseModal_headerContainer
            }, (this.props.title || this.props.heading) && React.createElement(Si, {
               className: this.props.managedClasses?.baseModal_title,
               tag: qt.h1,
               size: Gt._5
            }, r), this.renderCloseButton()), React.createElement("div", {
               className: this.props.managedClasses?.baseModal_contentScroll,
               style: {
                  maxHeight: this.getMaximumHeight()
               }
            }, React.createElement("div", {
               className: this.props.managedClasses?.baseModal_content
            }, this.props.children))));
         }
         returnFocus() {
            if (this.lastFocusedElement && this.lastFocusedElement.focus) {
               // TOLOOK
               setTimeout(() => this.lastFocusedElement.focus(), 0);
            }
         }
         trapFocus(e) {
            const t = e.querySelectorAll(Ar);
            const s = t[0];
            const i = t[t.length - 1];
            if (i !== null) {
               this.setState({
                  lastElement: i
               });
            }
            e.addEventListener("keydown", this.keydownListener = e => {
               if (e.key === Ir.tab && !e.ctrlKey) {
                  if (this.state.lastElement !== null) {
                     if (e.shiftKey) {
                        if (document.activeElement === s) {
                           this.state.lastElement.focus();
                           e.preventDefault();
                        }
                     } else if (document.activeElement === this.state.lastElement) {
                        s.focus();
                        e.preventDefault();
                     }
                  }
               }
            });
         }
         constructor(e) {
            super(e);
            this.getMaximumHeight = () => this.props.maximumHeight ? this.props.maximumHeight : Xt(560);
            this.renderCloseButton = () => {
               if (this.props.isHubPopup || typeof this.props.onCloseButtonClick != "function") {
                  return null;
               } else {
                  return React.createElement(Qi, {
                     className: `${this.props.managedClasses?.baseModal_closeButton} ${this.closeButtonStyle}`,
                     title: this.props.closeButtonTooltip,
                     onClick: this.props.onCloseButtonClick,
                     ref: this.props.closeButtonRef
                  }, Dr(this.props.managedClasses?.baseModal_closeIcon));
               }
            };
            this.handleKeyDown = e => {
               if (e.key === Ir.escape && typeof this.props.onCloseButtonClick == "function") {
                  e.preventDefault();
                  this.props.onCloseButtonClick(null);
               }
               if (typeof this.props.onKeyDown == "function") {
                  this.props.onKeyDown(e);
               }
            };
            this.state = {
               lastElement: undefined
            };
            this.contentContainerRef = React.createRef();
            this.handledProps = {
               title: undefined,
               beforeTitleIcon: undefined,
               heading: undefined,
               label: undefined,
               onCloseButtonClick: undefined,
               closeButtonTooltip: undefined,
               contentHeight: undefined,
               modal: undefined,
               lastFocusedElement: undefined,
               isHubPopup: undefined,
               closeButtonRef: undefined,
               managedClasses: undefined,
               dialogStyleSheet: undefined,
               contentElement: undefined,
               contentWidth: undefined,
               isHub: undefined,
               maximumHeight: undefined
            };
            this.node = undefined;
            this.keydownListener = undefined;
            this.lastFocusedElement = undefined;
            this.closeButtonStyle = undefined;
            this.prevDocumentTitle = undefined;
            this.lastFocusedElement = e.lastFocusedElement || document.activeElement;
         }
      });
      class Yr extends React.Component {
         constructor(...e) {
            super(...e);
            this.getBackgroundValue = e => {
               if (e && e.neutralPalette) {
                  if (this.props.isHub) {
                     return e.neutralPalette[Wr(false)];
                  } else {
                     return e.neutralPalette[yt];
                  }
               }
            };
         }
         render() {
            return React.createElement(ft, {
               value: this.getBackgroundValue,
               drawBackground: !this.props.isHubPopup
            }, React.createElement(Xr, this.props));
         }
      }
      const Qr = Yr;
      function ea() {
         ea = Object.assign ? Object.assign.bind() : function (e) {
            for (var t = 1; t < arguments.length; t++) {
               var s = arguments[t];
               for (var i in s) {
                  if (Object.prototype.hasOwnProperty.call(s, i)) {
                     e[i] = s[i];
                  }
               }
            }
            return e;
         };
         return ea.apply(this, arguments);
      }
      const ta = {
         ...vr,
         dialogElement_textContent: {
            color: zt,
            ...ui("t7"),
            marginTop: "0px",
            marginBottom: "18px"
         }
      };
      const sa = ApplyStyle(ta)(class extends baseComponent {
         constructor(...e) {
            super(...e);
            this.handledProps = {
               children: undefined,
               dialogText: undefined,
               dialogTextLine2: undefined,
               dialogTextElement: undefined,
               confirmText: undefined,
               confirmTextElement: undefined,
               rejectText: undefined,
               handleConfirm: undefined,
               handleReject: undefined,
               handleClose: undefined,
               closeButtonTooltip: undefined,
               isHubPopup: undefined,
               isHub: undefined,
               contentElement: undefined,
               isConfirmButtonDisabled: undefined
            };
         }
         render() {
            return React.createElement(Qr, ea({}, this.unhandledProps(), {
               onCloseButtonClick: this.props.handleClose || this.props.handleReject,
               closeButtonTooltip: this.props.closeButtonTooltip || this.props.rejectText,
               label: this.props.title,
               describedBy: this.props.dialogText ? "dialogTextId" : this.props.dialogTextElement ? "dialogTextElementId" : "",
               isHubPopup: this.props.isHubPopup,
               isHub: this.props.isHub,
               contentElement: this.props.contentElement
            }), this.props.dialogText && React.createElement(yi, {
               id: "dialogTextId",
               className: this.props.managedClasses?.baseModal_dialog
            }, this.props.dialogText), this.props.dialogTextLine2 && React.createElement(yi, {
               id: "dialogTextLine2Id",
               className: this.props.managedClasses?.baseModal_dialog
            }, this.props.dialogTextLine2), !!this.props.dialogTextElement && React.createElement(yi, {
               id: "dialogTextElementId",
               className: this.props.managedClasses?.dialogElement_textContent
            }, this.props.dialogTextElement), this.props.children, React.createElement(mr, null, React.createElement(gr, {
               id: "confirmModalPrimaryButton",
               type: "button",
               jssStyleSheet: vr,
               onClick: this.props.handleConfirm,
               appearance: dr.primary,
               tabIndex: 0,
               autoFocus: true,
               disabled: this.props.isConfirmButtonDisabled || false
            }, !!this.props.confirmText && this.props.confirmText, !!this.props.confirmTextElement && this.props.confirmTextElement), React.createElement(gr, {
               id: "confirmModalSecondaryButton",
               type: "button",
               jssStyleSheet: vr,
               onClick: this.props.handleReject,
               tabIndex: 0
            }, this.props.rejectText)));
         }
      });
      function ia(e) {
         return React.createElement("svg", {
            "aria-hidden": "true",
            width: 20,
            height: 20,
            viewBox: "0 0 20 20",
            className: e
         }, React.createElement("path", {
            d: "M3.37 10.17a.5.5 0 00-.74.66l4 4.5c.19.22.52.23.72.02l10.5-10.5a.5.5 0 00-.7-.7L7.02 14.27l-3.65-4.1z"
         }));
      }
      function na(e) {
         return React.createElement("svg", {
            width: 20,
            height: 20,
            viewBox: "0 0 20 20",
            className: e
         }, React.createElement("path", {
            d: "M8 6a.5.5 0 01.09 1H6a3 3 0 00-.2 6H8a.5.5 0 01.09 1H6a4 4 0 01-.22-8H8zm6 0a4 4 0 01.22 8H12a.5.5 0 01-.09-1H14a3 3 0 00.2-6H12a.5.5 0 01-.09-1H14zM6 9.5h8a.5.5 0 01.09 1H6a.5.5 0 01-.09-1H14 6z",
            fillRule: "nonzero"
         }));
      }
      function ResolveGameModeID(e) {
         switch (e) {
            case "timetrial":
            case "SPEED":
               return GameModeIDs.TimeTrial;
            case "BUOY":
            case "zigzag":
               return GameModeIDs.ZigZag;
            default:
               return GameModeIDs.Endless;
         }
      }
      const GameModeIDs = {
         ZigZag: "zigzag",
         Endless: "endless",
         TimeTrial: "timetrial",
      };

      function aa(e, t) {
         if (!e) {
            throw new Error("Assertion failed" + (t ? `: ${t}` : ""));
         }
      }
      class Deferred {
         constructor() {
            this.resolve_ = () => {};
            this.reject_ = () => {};
            this.isFulfilled_ = false;
            this.promise_ = undefined;
            this.promise_ = new Promise((e, t) => {
               this.resolve_ = t => {
                  e(t);
                  this.isFulfilled_ = true;
               };
               this.reject_ = e => {
                  t(e);
                  this.isFulfilled_ = true;
               };
            });
         }
         get isFulfilled() {
            return this.isFulfilled_;
         }
         get promise() {
            return this.promise_;
         }
         get resolve() {
            return this.resolve_;
         }
         get reject() {
            return this.reject_;
         }
      }
      let eventCount = 1;
      function incEventCounter() {
         return eventCount++;
      }
      const pendingEvents = {};
      function SendEvent(id, ...args) {
         const event = new Deferred();
         const promiseID = id + "_" + incEventCounter();
         pendingEvents[promiseID] = event;
         Chrome.send(id, [promiseID].concat(args));
         return event.promise;
      }
      const pa = {};
      Object.assign(window, {
         cr: {
            webUIResponse: function (e, t, s) {
               const i = pendingEvents[e];
               aa(i, `webUIResponse resolver id: ${e}`);
               delete pendingEvents[e];
               if (t) {
                  i.resolve(s);
               } else {
                  i.reject(s);
               }
            },
            webUIListenerCallback: function (e, ...t) {
               const s = pa[e];
               if (s) {
                  for (const e in s) {
                     s[e].apply(null, t);
                  }
               }
            }
         }
      });
      const ba = {
         ski: {
            gradient: {
               start: [244, 244, 244],
               end: [222, 222, 222]
            },
            hitbox: {
               crash: "#000000",
               boost: "#00FF00",
               avoid: "#FF0000"
            },
            boundary: [0, 0, 0, 0.1],
            accent: [216, 140, 249],
            folder: "ski"
         },
         surf: {
            gradient: {
               start: [56, 194, 238],
               end: [46, 195, 208]
            },
            hitbox: {
               crash: "#000000",
               boost: "#00FF00",
               avoid: "#FF0000"
            },
            boundary: [255, 255, 255, 0.2],
            accent: [141, 249, 196],
            folder: "surf"
         }
      };
      function ga(e) {
         if (e in ba) {
            return e;
         } else {
            return "surf";
         }
      }
      var fa = object(27670);
      function ma(e) {
         if (typeof e != "number") {
            return "----";
         }
         let t = 14;
         let s = 8;
         if (e < 0) {
            e = 3599;
         }
         if (e >= 3600) {
            t = 12;
            s = 10;
         }
         return new Date(e * 1000).toISOString().substr(t, s);
      }
      function ya(e) {
         navigator.clipboard.writeText(e);
      }
      class va {
         constructor() {
            this.localData = undefined;
            if (va.offline) {
               return va.offline;
            }
            va.offline = this;
            this.loadData();
            Ea.subscribe(this.loadData.bind(this));
         }
         loadData() {
            const e = Ea.getState();
            this.localData = {
               settings: {
                  character: e.currentCharacter,
                  theme: e.theme,
                  mode: e.mode,
                  hitbox: e.highVisibilityMode,
                  gameSpeed: e.gameSpeed
               },
               bestScore: {
                  endless: e.endless_bestScore,
                  timetrial: e.timetrial_bestScore,
                  zigzag: e.zigzag_bestScore
               }
            };
         }
         saveData(e) {
            Ea.dispatch(UpdateStatsEvent(e));
            Ta.saveZigZagHighScore(e.zigzag_bestScore);
            Ta.saveEndlessHighScore(e.endless_bestScore);
            Ta.saveTimeTrialHighScore(e.timetrial_bestScore);
            Ta.saveGameMode(e.mode);
            Ta.saveHighVisibilityMode(e.highVisibilityMode);
            Ta.saveReducedSpeedMode(e.gameSpeed < ka);
            Ta.saveDefaultCharacter(e.currentCharacter);
            Ta.saveDefaultTheme(e.theme);
         }
         resetData() {
            Ea.dispatch(ResetStatsEvent());
            Ta.resetAllStats();
         }
         getCommonStats(e, t) {
            const s = Ma.sys.game;
            return {
               gameMode: e,
               score: e === GameModeIDs.TimeTrial ? Math.floor(t * 1000) : t,
               konamiCodeUsed: s.cheat.used,
               msftCodeUsed: s.cheat.lives,
               edgeCodeUsed: s.cheat.boosts,
               powerUpsUsed: s.boosts.numUsed,
               powerUpsCollected: s.boosts.numCollected
            };
         }
         storeEndlessStats() {
            const e = Ma.sys.getCurrentScore();
            const t = Ma.sys.session.bestScore.endless;
            const s = Ma.sys.game;
            Ta.recordGameEnd({
               ...this.getCommonStats(GameModeIDs.Endless, e),
               loseCondition: s.caught ? "kraken" : "lives",
               dogCollected: s.friend
            });
            if (!s.cheat.used && e > t) {
               Ma.sys.session.bestScore.endless = e;
               s.highScore = true;
               this.saveData({
                  ...Ea.getState(),
                  endless_bestScore: e
               });
            }
         }
         storeTimeTrialStats() {
            const e = Ma.sys.getCurrentScore();
            const t = Ma.sys.session.bestScore.timetrial;
            const s = Ma.sys.game;
            Ta.recordGameEnd({
               ...this.getCommonStats(GameModeIDs.TimeTrial, e),
               livesCollected: s.lives.numCollected
            });
            if (!s.cheat.used && (e < t || t < 0) && s.finish) {
               Ma.sys.session.bestScore.timetrial = e;
               s.highScore = true;
               this.saveData({
                  ...Ea.getState(),
                  timetrial_bestScore: e
               });
            }
         }
         storeZigZagStreak() {
            const e = Ma.sys.getCurrentScore();
            const t = Ma.sys.session.bestScore.zigzag;
            const s = Ma.sys.game;
            Ta.recordGameEnd(this.getCommonStats(GameModeIDs.ZigZag, e));
            if (!s.cheat.used && e > t) {
               Ma.sys.session.bestScore.zigzag = e;
               s.highScore = true;
               this.saveData({
                  ...Ea.getState(),
                  zigzag_bestScore: e
               });
            }
         }
      }
      function wa() {
         return /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
      }
      va.offline = undefined;
      let xa = function (e) {
         e.Menu = "menu";
         e.Play = "play";
         e.Pause = "pause";
         e.Over = "over";
         return e;
      }({});
      let Sa = function (e) {
         e.Keyboard = "keyboard";
         e.Mouse = "mouse";
         e.Touch = "touch";
         e.Xbox = "xbox";
         e.Ps = "ps";
         return e;
      }({});
      class Ma {
         constructor() {
            this.session = undefined;
            this.game = undefined;
            if (Ma.sys) {
               return Ma.sys;
            }
            Ma.sys = this;
            this.defineSessionSettings();
            this.resetGameData();
            Ea.subscribe(this.loadSessionSettings.bind(this));
         }
         defineSessionSettings() {
            const e = Ea.getState();
            this.session = {
               settings: {
                  mode: e.mode,
                  theme: e.theme,
                  character: e.currentCharacter,
                  hitbox: e.highVisibilityMode,
                  gameSpeed: e.gameSpeed
               },
               bestScore: {
                  endless: e.endless_bestScore,
                  timetrial: e.timetrial_bestScore,
                  zigzag: e.zigzag_bestScore
               },
               state: xa.Menu,
               flyoutActive: false,
               forcedColors: false,
               inputType: wa() ? Sa.Touch : Sa.Keyboard,
               w: 0,
               h: 0,
               x: 0,
               y: 0
            };
         }
         saveSessionSettings() {
            va.offline.saveData({
               mode: this.session.settings.mode,
               theme: this.session.settings.theme,
               currentCharacter: this.session.settings.character,
               highVisibilityMode: this.session.settings.hitbox,
               gameSpeed: this.session.settings.gameSpeed,
               endless_bestScore: this.session.bestScore.endless,
               zigzag_bestScore: this.session.bestScore.zigzag,
               timetrial_bestScore: this.session.bestScore.timetrial,
               gameState: this.session.state
            });
         }
         loadSessionSettings() {
            const e = Ea.getState();
            this.session.settings.mode = e.mode;
            this.session.settings.theme = e.theme;
            this.session.settings.character = e.currentCharacter;
            this.session.settings.hitbox = e.highVisibilityMode;
            this.session.settings.gameSpeed = e.gameSpeed;
            this.session.bestScore.endless = e.endless_bestScore;
            this.session.bestScore.timetrial = e.timetrial_bestScore;
            this.session.bestScore.zigzag = e.zigzag_bestScore;
         }
         saveGameStats() {
            switch (this.session.settings.mode) {
               case GameModeIDs.Endless:
                  va.offline.storeEndlessStats();
                  break;
               case GameModeIDs.TimeTrial:
                  va.offline.storeTimeTrialStats();
                  break;
               case GameModeIDs.ZigZag:
                  va.offline.storeZigZagStreak();
            }
         }
         getCurrentScore() {
            switch (this.session.settings.mode) {
               case GameModeIDs.Endless:
                  return Math.floor(this.game.dist.unit);
               case GameModeIDs.TimeTrial:
                  return this.game.time.elapsed - this.game.coins * 2;
               case GameModeIDs.ZigZag:
                  return this.game.gates;
            }
         }
         getCurrentScoreFormatted() {
            const e = this.getCurrentScore();
            switch (this.session.settings.mode) {
               case GameModeIDs.Endless:
               case GameModeIDs.ZigZag:
                  return e.toString();
               case GameModeIDs.TimeTrial:
                  return ma(e);
            }
         }
         getHighScore(e) {
            switch (e) {
               case GameModeIDs.Endless:
                  return Math.max(this.session.bestScore.endless, 0).toString();
               case GameModeIDs.TimeTrial:
                  return ma(this.session.bestScore.timetrial);
               case GameModeIDs.ZigZag:
                  return Math.max(this.session.bestScore.zigzag, 0).toString();
            }
         }
         resetGameData() {
            this.game = {
               time: {
                  loop: 0,
                  elapsed: 0,
                  scale: 0
               },
               dist: {
                  unit: 0,
                  x: 0,
                  y: 0
               },
               lives: {
                  current: 3,
                  max: 3,
                  numCollected: 0
               },
               boosts: {
                  current: 0,
                  max: 3,
                  numCollected: 0,
                  numUsed: 0
               },
               shields: {
                  current: 0,
                  max: 3
               },
               gates: 0,
               coins: 0,
               finish: false,
               friend: false,
               caught: false,
               highScore: false,
               cheat: {
                  used: false,
                  lives: false,
                  boosts: false,
                  safety: false
               }
            };
         }
         update(e) {
            this.game.time.loop = e / 1000;
            this.game.time.elapsed += this.game.time.loop;
            this.game.time.scale = this.game.time.loop * 60 * this.session.settings.gameSpeed;
         }
         updateDistances(e, t) {
            this.game.dist.x += e;
            this.game.dist.y += t;
            this.game.dist.unit += t / 10;
         }
         rand(e, t) {
            return Math.floor(e + (t + 1 - e) * Math.random());
         }
         randIndex(e) {
            if (!Array.isArray(e)) {
               return e;
            }
            return e[Math.floor(Math.random() * e.length)];
         }
      }
      Ma.sys = undefined;
      const ka = 1;
      const Ha = {
         currentCharacter: IntFromSave("lastSelectedPlayer"),
         highVisibilityMode: LoadTimeData.getBoolean("highVisibilityActive"),
         gameSpeed: LoadTimeData.getBoolean("reducedSpeedActive") ? 0.5 : ka,
         mode: ResolveGameModeID(LoadTimeData.getString("lastSelectedMode")),
         theme: ga(LoadTimeData.getString("lastSelectedTheme")),
         gameState: xa.Menu,
         endless_bestScore: IntFromSave("endlessBestScore"),
         timetrial_bestScore: IntFromSave("timetrialBestScore") < 0 ? -1 : IntFromSave("timetrialBestScore") / 1000,
         zigzag_bestScore: IntFromSave("zigzagBestScore")
      };
      var Ca = function (e) {
         e.RESET_STATS = "RESET_STATS";
         e.UPDATE_GAME_STATE = "UPDATE_GAME_STATE";
         e.UPDATE_STATS = "UPDATE_STATS";
         return e;
      }(Ca || {});

      function UpdateStatsEvent(e) {
         return {
            type: Ca.UPDATE_STATS,
            ...e
         };
      }
      function ResetStatsEvent() {
         return {
            type: Ca.RESET_STATS,
            endless_bestScore: -1,
            zigzag_bestScore: -1,
            timetrial_bestScore: -1,
            currentCharacter: 1,
            theme: "surf"
         };
      }
      function IntFromSave(string) {
         return parseInt(LoadTimeData.getValue(string));
      }
      const Ea = fa.MT(function (e = Ha, t) {
         switch (t.type) {
            case Ca.UPDATE_STATS:
            {
               const s = t;
               return {
                  ...e,
                  currentCharacter: t.currentCharacter,
                  mode: s.mode,
                  highVisibilityMode: s.highVisibilityMode,
                  gameSpeed: s.gameSpeed,
                  theme: s.theme,
                  endless_bestScore: Math.max(e.endless_bestScore, s.endless_bestScore),
                  zigzag_bestScore: Math.max(e.zigzag_bestScore, s.zigzag_bestScore),
                  timetrial_bestScore: e.timetrial_bestScore < 0 ? s.timetrial_bestScore : Math.min(e.timetrial_bestScore, s.timetrial_bestScore)
               };
            }
            case Ca.UPDATE_GAME_STATE:
               return {
                  ...e,
                  gameState: t.gameState
               };
            case Ca.RESET_STATS:
               return {
                  ...e,
                  endless_bestScore: t.endless_bestScore,
                  zigzag_bestScore: t.zigzag_bestScore,
                  timetrial_bestScore: t.timetrial_bestScore,
                  currentCharacter: t.currentCharacter,
                  theme: t.theme
               };
            default:
               return e;
         }
      }, Ha);
      class Ta {
         static recordNewGame(e) {
            switch (e) {
               case GameModeIDs.ZigZag:
                  Ta.numZigZagGames += 1;
                  break;
               case GameModeIDs.Endless:
                  Ta.numEndlessGames += 1;
                  break;
               case GameModeIDs.TimeTrial:
                  Ta.numTimeTrialGames += 1;
            }
         }
         static async getAllStats() {
            const e = await SendEvent("get-stats");
            return {
               ...e,
               timetrial_bestScore: e.timetrial_bestScore < 0 ? -1 : e.timetrial_bestScore / 1000,
               gameSpeed: e.reducedSpeedMode ? 0.5 : ka,
               mode: ResolveGameModeID(e.mode),
               theme: ga(e.theme)
            };
         }
         static resetAllStats() {
            Chrome.send("reset-stats");
         }
         static saveEndlessHighScore(e) {
            Chrome.send("set-high-score", [GameModeIDs.Endless, Math.floor(e)]);
         }
         static saveZigZagHighScore(e) {
            Chrome.send("set-high-score", [GameModeIDs.ZigZag, Math.floor(e)]);
         }
         static saveTimeTrialHighScore(e) {
            let t = e;
            if (e > 0) {
               t *= 1000;
            }
            Chrome.send("set-high-score", [GameModeIDs.TimeTrial, Math.floor(t)]);
         }
         static saveGameMode(e) {
            Chrome.send("save-game-mode", [e]);
         }
         static saveHighVisibilityMode(e) {
            Chrome.send("save-high-visibility-mode", [e]);
         }
         static saveReducedSpeedMode(e) {
            Chrome.send("save-reduced-speed-mode", [e]);
         }
         static saveDefaultCharacter(e) {
            Chrome.send("save-selected-character", [e]);
         }
         static saveDefaultTheme(e) {
            Chrome.send("save-selected-theme", [e]);
         }
         static recordUnload() {
            const e = Math.floor(Date.now() - Ta.sessionStartTime) || 0;
            const t = {
               zigzagGamesPlayed: Ta.numZigZagGames,
               endlessGamesPlayed: Ta.numEndlessGames,
               timetrialGamesPlayed: Ta.numTimeTrialGames
            };
            Chrome.send("record-unload", [t, e]);
            Ta.numZigZagGames = 0;
            Ta.numEndlessGames = 0;
            Ta.numTimeTrialGames = 0;
            Ta.sessionStartTime = Date.now();
         }
         static recordGameEnd(e) {
            const t = {
               ...e,
               score: Math.floor(e.score)
            };
            Chrome.send("record-game-end", [t]);
         }
         static recordSharePopup() {
            Chrome.send("record-share-popup");
         }
         static recordShareClick() {
            Chrome.send("record-share-click");
         }
         static startShare(e, t, s, i) {
            Chrome.send("start-share", [e, t, s, i]);
         }
         static async getPercentage(mode, score) {
            return (await SendEvent("get-percentage", [mode, score])).percentage;
         }
      }
      Ta.numTimeTrialGames = 0;
      Ta.numEndlessGames = 0;
      Ta.numZigZagGames = 0;
      Ta.sessionStartTime = Date.now();
      class Pa {
         constructor() {
            this.legend = undefined;
            this.spawnSingle = undefined;
            this.library = undefined;
            if (Pa.sys) {
               return Pa.sys;
            }
            Pa.sys = this;
            this.defineLegend();
            this.defineClusters();
         }
         defineLegend() {
            this.legend = {
               wall: {
                  sw: ["sw"],
                  s: ["s"],
                  se: ["se"],
                  w: ["w"],
                  e: ["e"],
                  n: ["n"],
                  b: ["b"],
                  f1: ["f1"],
                  f2: ["f2"],
                  f3: ["f3"],
                  f: ["f1", "f2", "f3"]
               },
               snag: {
                  b1: ["side1", "side2"],
                  b2: ["hurdle1", "hurdle2"],
                  b3: ["vehicle1", "vehicle2"],
                  b4: ["common1", "common2", "common3", "common4", "common5"],
                  b5: ["warn1"],
                  b6: ["isle1", "isle2", "isle3"],
                  b7: ["special1", "special2", "special3", "special4"]
               },
               snagsml: {
                  c1: ["debris1", "debris2"],
                  c2: ["beacon1"],
                  c3: ["point1"],
                  c4: ["rare1"],
                  c5: ["decor1", "decor2", "decor3", "decor4"]
               },
               snagtall: {
                  t1: ["tall1", "tall2"],
                  t2: ["tall3"],
                  t3: ["tall4", "tall5", "tall6", "tall7", "tall8"]
               },
               spin: {
                  o: ["spin1", "spin2", "spin3", "spin4", "spin5"]
               },
               ramp: {
                  i1: ["ramp"]
               },
               lure: {
                  i2: ["lure"]
               },
               boost: {
                  i3: ["boost"]
               },
               life: {
                  i4: ["life"]
               },
               coin: {
                  i5: ["coin"]
               },
               friend: {
                  i6: ["friend"]
               },
               ambient: {
                  a: ["ambient1", "ambient2", "ambient3"]
               },
               slow: {
                  s1: ["slow1", "slow2", "slow3"]
               },
               bump: {
                  s2: ["bump1", "bump2", "bump3"]
               },
               slowbig: {
                  s3: ["slowbig1"]
               },
               bumpbig: {
                  s4: ["bumpbig1"]
               },
               spiral: {
                  s5: ["spiral1"]
               },
               block: {
                  m1: ["block1", "block2", "block3"]
               },
               blockbig: {
                  m2: ["blockbig1", "blockbig2", "blockbig3"]
               },
               marker: {
                  z1: ["default"]
               },
               guide: {
                  z2: ["default"]
               },
               gate: {
                  z3: [""]
               },
               swap: {
                  z4: [""]
               },
               finish: {
                  f1: ["default"]
               },
               checkpoint: {
                  p1: ["default"]
               }
            };
            this.spawnSingle = {
               snag: ["side1", "side2", "hurdle1", "hurdle2", "common1", "common2", "common3", "common4", "common5", "isle1", "isle2", "isle3", "vehicle1", "vehicle2"],
               ambient: ["ambient1", "ambient2", "ambient3"],
               slow: ["slow1", "slow2", "slow3"],
               bump: ["bump1", "bump2", "bump3"],
               slowbig: ["slowbig1"],
               bumpbig: ["bumpbig1"],
               spiral: ["spiral1"],
               block: ["block1", "block2", "block3"],
               snagsml: ["rare1", "point1", "decor1", "decor2", "decor3", "decor4"],
               snagtall: ["tall3", "tall4", "tall5", "tall6", "tall7", "tall8"],
               spin: ["spin1", "spin2", "spin3", "spin4", "spin5"]
            };
         }
         defineClusters() {
            this.library = {
               endlessStarts: {
                  start1: {
                     snagtall: [[14, 21, "t2"], [-14, 14, "t1"], [24, 6, "t1"], [-32, 6, "t1"]],
                     bump: [[31, 11], [-34, 22], [-12, 18], [14, 18], [28, 18], [40, 16], [22, 10], [40, 8], [-40, 4], [-42, 10], [-24, 18], [-33, 12]],
                     slow: [[14, 10], [-14, 10]],
                     snagsml: [[-12, 27, "c3"], [8, 20, "c3"], [9, 11, "c3"], [-8, 20, "c3"], [-9, 11, "c3"], [12, 27, "c3"]],
                     boost: [[-4, 2], [4, 2]],
                     slowbig: [[22, 26], [35, 21], [-20, 21], [-36, 16], [26, 2], [-26, 3]],
                     wall: [[36, 8, "se"], [-26, 16, "sw"], [-22, 16, "s"], [-10, 16, "se"], [10, 16, "sw"], [18, 16, "s"], [-18, 16, "f"], [14, 16, "f"], [22, 16, "f"], [26, 16, "se"], [-26, 12, "n"], [26, 12, "n"], [-36, 8, "sw"], [-24, 8, "s"], [-20, 8, "se"], [20, 8, "sw"], [32, 8, "s"], [28, 8, "f"], [-36, 4, "n"], [36, 4, "n"], [-28, 8, "f"]],
                     snag: [[15, 11, "b2"], [37, 12, "b1"], [41, 11, "b4"], [-31, 13, "b4"], [-22, 12, "b4"], [-40, 12, "b2"], [-17, 22, "b4"], [-22, 24, "b4"], [-32, 20, "b1"], [36, 17, "b4"], [20, 12, "b4"], [-39, 18, "b4"], [31, 14, "b4"], [18, 21, "b4"]]
                  },
                  start2: {
                     block: [[-28, 13]],
                     bump: [[-35, 7], [-12, 12], [12, 6], [32, 4], [-37, 14], [-17, 22], [-32, 23], [38, 9], [37, 14], [-12, 19]],
                     wall: [[34, 12, "se"], [22, 8, "s"], [14, 8, "w"], [14, 16, "se"], [30, 12, "sw"], [14, 12, "n"], [-34, 20, "sw"], [-26, 20, "s"], [-14, 16, "f"], [10, 16, "sw"], [-10, 16, "se"], [-22, 16, "w"], [-22, 20, "se"], [-30, 20, "s"], [-34, 16, "n"], [30, 8, "e"], [26, 8, "f"]],
                     boost: [[4, 2], [-4, 2]],
                     blockbig: [[-19, 8], [22, 11]],
                     snagtall: [[-42, 8, "t2"], [-18, 14, "t1"], [18, 6, "t1"], [-31, 6, "t3"], [-27, 8, "t3"], [28, 13, "t3"]],
                     slowbig: [[39, 28], [45, 16], [23, 3], [-28, 3], [-36, 28], [-20, 31], [22, 32]],
                     bumpbig: [[-24, 24]],
                     snag: [[18, 15, "b6"], [33, 15, "b4"], [-34, 11, "b6"], [-16, 19, "b1"], [28, 3, "b6"], [40, 11, "b3"], [-25, 26, "b2"], [-36, 23, "b4"], [-39, 19, "b3"], [-14, 21, "b4"], [-41, 17, "b4"], [35, 7, "b1"], [-18, 4, "b6"], [37, 17, "b4"], [-39, 8, "b4"]],
                     slow: [[-47, 15], [-44, 23], [42, 6], [-40, 5], [41, 22]],
                     snagsml: [[33, 22, "c5"], [32, 26, "c5"], [21, 20, "c5"], [30, 19, "c5"], [-12, 27, "c3"], [9, 11, "c3"], [8, 20, "c3"], [-8, 20, "c3"], [-9, 11, "c3"], [12, 27, "c3"], [26, 23, "c4"], [25, 18, "c5"]]
                  },
                  start3: {
                     snagtall: [[35, 7, "t3"], [-33, 4, "t3"], [-39, 17, "t3"], [-17, 20, "t3"], [21, 14, "t3"], [30, 17, "t3"]],
                     slowbig: [[30, 5], [37, 22], [22, 25], [-43, 25], [-28, 20]],
                     bump: [[13, 21], [15, 12], [-39, 13], [-32, 26], [-41, 20], [-30, 7], [43, 16]],
                     snag: [[17, 19, "b6"], [-17, 5, "b5"], [-41, 10, "b4"], [31, 11, "b3"], [-44, 17, "b4"], [-42, 15, "b4"], [-29, 8, "b4"], [19, 13, "b6"], [-27, 5, "b4"], [-36, 8, "b4"], [-43, 12, "b4"], [-37, 16, "b4"], [-31, 24, "b5"], [-23, 13, "b4"], [43, 18, "b1"], [-12, 20, "b6"], [-13, 9, "b4"], [-40, 7, "b6"], [-25, 7, "b4"], [27, 17, "b4"]],
                     bumpbig: [[-18, 12], [31, 15]],
                     blockbig: [[-15, 16], [23, 9]],
                     snagsml: [[12, 27, "c3"], [9, 11, "c3"], [-9, 11, "c3"], [-8, 20, "c3"], [8, 20, "c3"], [-12, 27, "c3"]],
                     slow: [[47, 14], [-48, 11], [-30, 15], [23, 20], [-22, 25]],
                     wall: [[38, 17, "b"]],
                     block: [[14, 15], [40, 11]],
                     lure: [[-34, 11]],
                     boost: [[-4, 2], [4, 2]]
                  }
               },
               endlessSwap: {
                  swap: {
                     swap: [[0, 26]],
                     spiral: [[2, 22], [-6, 26], [6, 30]],
                     block: [[-32, 24], [25, 38]],
                     blockbig: [[-25, 13]],
                     lure: [[18, 26, ["lure"]], [-2, 14, ["lure"]], [-10, 16, ["lure"]], [-16, 20, ["lure"]], [-18, 26, ["lure"]], [16, 32, ["lure"]], [10, 36, ["lure"]], [-16, 33, ["lure"]]],
                     slowbig: [[30, 19], [-11, 2], [-26, 42], [34, 44], [-29, 8], [20, 53], [13, 7], [-3, 51]],
                     bump: [[-37, 37], [15, 44], [30, 32], [-17, 15], [-30, 32], [-28, 21], [31, 39], [35, 25], [22, 47], [10, 49]],
                     snag: [[-33, 19, "b4"], [-23, 32, "b4"], [-29, 38, "b3"], [9, 51, "b4"], [26, 46, "b4"], [11, 3, "b5"], [-3, 5, "b4"], [-6, 10, "b4"], [-15, 11, "b4"], [29, 24, "b4"], [11, 43, "b4"], [27, 30, "b4"], [-21, 17, "b4"], [-26, 30, "b4"], [16, 47, "b4"], [-35, 15, "b6"], [-11, 5, "b4"], [-12, 9, "b6"], [35, 37, "b4"], [36, 28, "b4"], [-26, 24, "b4"], [-38, 26, "b4"], [-40, 28, "b4"], [-36, 30, "b4"], [37, 32, "b4"], [-16, 6, "b4"], [-25, 18, "b4"], [26, 34, "b4"], [-18, 8, "b4"], [2, 9, "b4"], [31, 15, "b5"], [31, 35, "b4"], [24, 43, "b4"], [5, 48, "b4"], [33, 30, "b6"], [19, 44, "b6"]],
                     wall: [[-33, 36, "b"]],
                     snagtall: [[-24, 33, "t3"], [-9, 6, "t3"], [20, 40, "t3"], [-31, 16, "t3"], [31, 26, "t3"], [25, 19, "t2"], [-20, 35, "t2"]],
                     slow: [[6, 17], [2, 36], [-21, 23], [14, 24], [40, 36], [-10, 32], [-8, 20], [-38, 19]],
                     bumpbig: [[7, 46], [-1, 8], [-29, 29]],
                     snagsml: [[-29, 34, "c1"], [-35, 32, "c1"], [29, 21, "c1"], [25, 23, "c1"]]
                  }
               },
               endlessLives: {
                  life1: {
                     bump: [[10, 12], [-5, 14], [0, 1]],
                     snag: [[17, 8, "b6"], [-1, 3, "b6"], [-16, 13, "b6"], [-11, 15, "b6"]],
                     slow: [[-20, 8], [-4, 6], [-3, 19], [7, 17], [12, 5]],
                     blockbig: [[-11, 9]],
                     life: [[1, 12]],
                     snagtall: [[-8, 16, "t3"], [-10, 4, "t3"], [-3, 0, "t3"], [14, 9, "t3"]],
                     slowbig: [[-19, 18]],
                     block: [[9, 7]]
                  },
                  life2: {
                     snagtall: [[-4, 0, "t3"], [-15, 6, "t3"], [-9, 15, "t3"], [10, 9, "t3"]],
                     bump: [[-11, 23]],
                     snagsml: [[-8, 20, "c1"]],
                     slowbig: [[7, 23], [13, 8], [-21, 20]],
                     slow: [[18, 15], [-22, 8], [-12, 5]],
                     spin: [[-4, 20]],
                     wall: [[-12, 20, "b"]],
                     life: [[-2, 13]],
                     blockbig: [[9, 15], [-14, 11]],
                     snag: [[-20, 15, "b6"], [3, 2, "b6"]],
                     block: [[-1, 5]]
                  }
               },
               endlessFriends: {
                  friend1: {
                     snag: [[20, 5, "b6"], [11, 15, "b1"], [-8, 14, "b4"], [6, 12, "b4"], [15, 13, "b2"]],
                     slow: [[-18, 3], [7, 19]],
                     bump: [[-10, 4], [-11, 16], [10, 13], [-15, 8]],
                     spin: [[4, 9]],
                     snagtall: [[6, 5, "t3"], [-20, 10, "t1"]],
                     wall: [[-12, 12, "se"], [-16, 12, "f"], [-8, 8, "se"], [-12, 8, "w"]],
                     blockbig: [[14, 8]],
                     bumpbig: [[11, 4]],
                     snagsml: [[-18, 15, "c1"]],
                     friend: [[-1, 12]]
                  },
                  friend2: {
                     slow: [[-11, 18], [13, 2]],
                     snag: [[-1, 1, "b4"], [-18, 14, "b1"], [18, 10, "b4"], [14, 6, "b4"], [8, 8, "b4"], [-10, 11, "b6"], [-7, 13, "b4"], [17, 14, "b4"]],
                     slowbig: [[-18, 3], [12, 19]],
                     bump: [[-16, 12], [15, 11], [-7, 8], [2, 2]],
                     snagtall: [[11, 9, "t2"], [-20, 8, "t3"]],
                     snagsml: [[8, 12, "c1"]],
                     block: [[-13, 7]],
                     friend: [[1, 9]]
                  }
               },
               endlessBoosts: {
                  boost1: {
                     spin: [[-15, 8]],
                     spiral: [[-2, 12]],
                     boost: [[-4, 19]],
                     slowbig: [[8, 8]],
                     blockbig: [[9, 14], [-7, 4]],
                     snagsml: [[-20, 14, "c1"], [-14, 20, "c1"]],
                     bump: [[5, 22], [-10, 13], [-11, 19], [2, 3], [-15, 5], [16, 19]],
                     snag: [[-13, 14, "b4"], [-10, 16, "b4"], [-13, 1, "b6"], [-9, 8, "b6"], [4, 18, "b6"]],
                     snagtall: [[-16, 15, "t2"], [17, 14, "t3"], [8, 18, "t3"]]
                  },
                  boost2: {
                     boost: [[-9, 16]],
                     snagsml: [[-10, 9, "c1"]],
                     bumpbig: [[-3, 2]],
                     snagtall: [[-7, 4, "t1"]],
                     bump: [[-5, 22], [15, 20], [17, 12], [-15, 6], [15, 4]],
                     wall: [[5, 22, "se"], [1, 22, "sw"], [1, 18, "e"], [-3, 18, "sw"], [13, 16, "b"], [13, 12, "n"], [9, 8, "sw"], [-3, 6, "se"], [-11, 6, "sw"], [13, 8, "e"]],
                     snag: [[11, 3, "b1"], [18, 15, "b2"], [-6, 8, "b4"], [-14, 14, "b4"], [-6, 24, "b2"]]
                  },
                  boost3: {
                     slowbig: [[-10, 3]],
                     snag: [[-14, 5, "b2"], [7, 5, "b6"], [-6, 12, "b1"], [4, 2, "b4"], [-10, 8, "b4"], [10, 14, "b4"], [8, 22, "b4"], [-8, 22, "b4"], [7, 19, "b4"], [-17, 7, "b4"]],
                     bump: [[-12, 22], [12, 20], [16, 2], [8, 2], [-14, 10], [-10, 14], [14, 13], [12, 3]],
                     slow: [[16, 8], [-2, 23], [-3, 9]],
                     block: [[10, 8]],
                     boost: [[4, 14]],
                     bumpbig: [[-10, 18]],
                     wall: [[-4, 16, "b"]]
                  },
                  boost4: {
                     bumpbig: [[7, 19]],
                     snagsml: [[6, 6, "c1"]],
                     boost: [[4, 10], [-4, 10]],
                     snagtall: [[7, 14, "t3"]],
                     snag: [[-10, 5, "b4"], [8, 8, "b4"], [-6, 16, "b1"], [-4, 4, "b4"], [-8, 8, "b4"], [-8, 13, "b2"], [4, 4, "b4"], [9, 12, "b4"], [-6, 6, "b6"]],
                     bump: [[12, 8], [-12, 18], [-8, 20], [8, 23]],
                     slow: [[-15, 15], [14, 15], [16, 10], [-14, 9]],
                     spin: [[-7, 2], [10, 3]]
                  },
                  boost5: {
                     boost: [[-1, 12]],
                     bump: [[11, 8], [-8, 22], [14, 16], [-6, 16], [-6, 8], [-14, 6], [-2, 4]],
                     wall: [[13, 12, "f"], [-4, 20, "se"], [-8, 20, "f"], [-16, 20, "sw"], [-12, 20, "s"], [-12, 16, "n"], [-8, 12, "se"], [-12, 12, "w"], [-10, 6, "b"], [-2, 2, "se"], [9, 12, "sw"], [-10, 2, "w"]],
                     snag: [[-16, 10, "b4"], [-12, 8, "b4"], [-6, 4, "b2"], [5, 10, "b4"], [-1, 23, "b4"]],
                     spin: [[9, 17], [7, 7], [15, 5], [1, 2]],
                     snagtall: [[17, 10, "t1"], [-6, 0, "t1"]]
                  },
                  boost6: {
                     snagtall: [[-6, 10, "t1"]],
                     spin: [[6, 0], [-4, 2], [6, 16], [-2, 18]],
                     boost: [[2, 14]],
                     snag: [[-18, 11, "b1"], [-12, 4, "b4"], [14, 12, "b1"], [-4, 7, "b4"]],
                     wall: [[14, 4, "n"], [-14, 8, "sw"], [-10, 8, "e"], [6, 8, "w"], [14, 8, "se"], [-10, 12, "sw"], [-2, 12, "se"], [6, 12, "b"], [-14, 18, "b"], [10, 8, "f"]],
                     bump: [[-16, 2], [18, 6], [10, 14], [-12, 22], [-14, 13]]
                  },
                  boost7: {
                     boost: [[4, 14]],
                     snagtall: [[-6, 4, "t3"], [11, 1, "t3"]],
                     snag: [[10, 7, "b4"], [-9, 8, "b2"], [4, 0, "b4"], [-8, 14, "b4"], [-4, 12, "b6"], [6, 4, "b1"]],
                     bump: [[-3, 9], [-8, 12], [5, 7]]
                  },
                  boost8: {
                     spin: [[0, 3], [7, 13]],
                     snag: [[10, 4, "b4"], [-6, 4, "b4"], [-10, 6, "b4"], [4, 14, "b4"], [-10, 2, "b2"]],
                     bump: [[-4, 8], [6, 8], [-8, 12]],
                     boost: [[-2, 14]]
                  },
                  boost9: {
                     snagtall: [[10, 0, "t1"]],
                     boost: [[0, 10]],
                     bump: [[-13, 6], [-4, 14], [4, 6]],
                     snag: [[12, 12, "b3"], [6, 12, "b4"], [-8, 4, "b4"]],
                     wall: [[-10, 12, "sw"], [-6, 12, "se"], [8, 10, "b"], [-10, 8, "n"], [2, 2, "sw"], [6, 2, "f"]],
                     snagsml: [[-8, 15, "c1"]]
                  },
                  boost10: {
                     bumpbig: [[10, 6]],
                     snag: [[5, 11, "b1"], [11, 9, "b4"], [-8, 14, "b4"], [-4, 12, "b4"], [-10, 12, "b4"], [8, 13, "b4"]],
                     bump: [[8, 10], [11, 1], [4, 3]],
                     spiral: [[-7, 4]],
                     boost: [[0, 9]]
                  },
                  boost11: {
                     snag: [[-14, 8, "b6"], [-12, 6, "b4"]],
                     snagtall: [[13, 3, "t3"]],
                     boost: [[2, 8]],
                     wall: [[-4, 10, "se"], [-8, 10, "sw"], [8, 6, "b"], [-8, 6, "n"], [8, 2, "e"], [4, 2, "sw"]],
                     spin: [[-5, 1]],
                     snagsml: [[-5, 13, "c1"]],
                     bump: [[11, 8], [-4, 6], [-12, 11]]
                  }
               },
               endlessRamps: {
                  ramp1: {
                     boost: [[-2, 11]],
                     slowbig: [[-3, 2]],
                     wall: [[-6, 21, "b"], [6, 17, "se"], [-6, 17, "e"], [-10, 17, "f"], [-14, 17, "sw"], [2, 17, "sw"], [10, 13, "f"], [6, 13, "w"]],
                     snag: [[12, 8, "b4"], [-10, 19, "b4"], [3, 19, "b1"], [-16, 13, "b4"], [-3, 4, "b1"]],
                     snagtall: [[14, 11, "t1"]],
                     bump: [[-16, 20], [16, 5], [11, 17], [-17, 7]],
                     spin: [[-15, 5], [14, 3]],
                     ramp: [[8, 9], [-12, 13], [-2, 16]]
                  },
                  ramp2: {
                     snagtall: [[11, 10, "t3"], [-11, 6, "t3"]],
                     spin: [[-2, 2], [2, 10]],
                     slow: [[3, 2], [16, 13], [-4, 13], [6, 17]],
                     block: [[-6, 4]],
                     slowbig: [[-17, 8], [-11, 18]],
                     blockbig: [[9, 7]],
                     snag: [[-6, 9, "b4"], [8, 13, "b4"], [-13, 3, "b6"], [9, 2, "b6"]],
                     bump: [[-10, 13], [10, 16]],
                     ramp: [[0, 17]]
                  },
                  ramp3: {
                     slow: [[14, 6], [-18, 8], [17, 16]],
                     snag: [[11, 8, "b3"], [13, 11, "b1"], [16, 9, "b6"]],
                     snagtall: [[-15, 9, "t3"], [0, 21, "t3"], [-4, 10, "t1"]],
                     bump: [[0, 12], [-12, 13], [-5, 20]],
                     wall: [[-8, 16, "sw"], [-4, 16, "s"], [0, 16, "f"], [4, 16, "s"], [8, 16, "f"], [-8, 12, "w"], [12, 16, "se"]],
                     slowbig: [[0, 2], [-12, 19]],
                     blockbig: [[-8, 6], [8, 19]],
                     ramp: [[6, 12]]
                  },
                  ramp4: {
                     slow: [[3, 22], [14, 10], [-15, 8], [-12, 4], [14, 2], [-7, 20]],
                     snag: [[-9, 7, "b3"], [-8, 15, "b4"], [13, 14, "b4"], [-10, 12, "b4"], [4, 12, "b4"], [-4, 12, "b4"], [6, 8, "b4"], [8, 4, "b4"], [-8, 4, "b4"], [-6, 8, "b1"], [11, 11, "b6"], [8, 14, "b2"]],
                     bump: [[5, 17], [-4, 16], [-12, 14], [8, 12], [-10, 10]],
                     snagtall: [[10, 5, "t3"]],
                     ramp: [[0, 14]]
                  },
                  ramp5: {
                     snagtall: [[-4, 11, "t3"]],
                     ramp: [[-8, 4], [8, 2]],
                     bump: [[9, 6], [-5, 5], [-11, 6], [5, 11]],
                     slowbig: [[-1, 9]],
                     snag: [[8, 10, "b4"], [-10, 8, "b4"], [6, 5, "b4"], [-1, 4, "b6"]]
                  },
                  ramp6: {
                     bump: [[-8, 6], [-13, 14], [9, 14]],
                     snagtall: [[-13, 9, "t3"], [5, 13, "t3"], [-9, 12, "t2"]],
                     slow: [[8, 8], [-8, 3]],
                     blockbig: [[-2, 9]],
                     snag: [[1, 13, "b4"], [6, 11, "b4"], [3, 5, "b6"], [-11, 8, "b4"]],
                     ramp: [[-2, 3]],
                     slowbig: [[-4, 18]]
                  },
                  ramp7: {
                     snag: [[10, 8, "b4"], [-1, 4, "b4"], [1, 1, "b6"], [0, 11, "b1"], [-3, 2, "b4"]],
                     wall: [[8, 12, "w"], [-8, 14, "se"], [8, 16, "b"], [12, 12, "se"]],
                     snagsml: [[14, 14, "c1"]],
                     ramp: [[4, 13], [-4, 13]],
                     slow: [[14, 4], [-10, 4]],
                     bump: [[-14, 11], [-9, 17], [1, 15], [10, 18]],
                     snagtall: [[-12, 12, "t1"]]
                  },
                  ramp8: {
                     slowbig: [[0, 19]],
                     snagsml: [[8, 12, "c1"]],
                     wall: [[6, 10, "b"]],
                     slow: [[-7, 12], [5, 4]],
                     ramp: [[-1, 13]],
                     snag: [[-9, 6, "b4"], [-8, 3, "b4"], [-4, 0, "b4"], [10, 9, "b4"], [8, 6, "b2"], [-10, 1, "b2"]],
                     bump: [[10, 4], [-4, 4], [-11, 7]]
                  }
               },
               endlessLures: {
                  lure1: {
                     slowbig: [[10, 13], [-17, 9], [0, 7]],
                     snag: [[-1, 3, "b4"], [-3, 0, "b4"], [2, 1, "b5"]],
                     slow: [[-8, 14], [16, 2]],
                     spiral: [[11, 7], [-13, 3]],
                     lure: [[-2, 11]]
                  },
                  lure2: {
                     bump: [[21, 6], [7, 21], [-1, 12], [21, 18], [8, 13], [-20, 16]],
                     wall: [[12, 10, "w"], [12, 14, "w"], [12, 18, "b"], [4, 14, "b"], [16, 14, "f"], [4, 10, "n"], [16, 10, "se"]],
                     snag: [[-17, 14, "b4"], [-18, 7, "b4"], [-14, 16, "b5"], [-16, 10, "b1"], [1, 20, "b4"], [18, 17, "b4"], [0, 8, "b5"], [-20, 12, "b6"], [13, 6, "b4"], [18, 4, "b4"]],
                     snagtall: [[-21, 8, "t3"], [20, 12, "t1"]],
                     slow: [[-10, 9]],
                     slowbig: [[4, 5], [-16, 22]],
                     bumpbig: [[1, 17]],
                     snagsml: [[14, 3, "c1"]],
                     lure: [[-8, 13]]
                  },
                  lure3: {
                     snagtall: [[-8, 9, "t3"], [15, 2, "t2"]],
                     slow: [[0, 7]],
                     bump: [[21, 7], [12, 2], [-16, 13]],
                     snagsml: [[17, 6, "c1"]],
                     snag: [[9, 4, "b4"], [-7, 0, "b4"], [-5, 3, "b5"], [-16, 9, "b4"], [-17, 6, "b4"], [-11, 8, "b3"], [-2, 1, "b1"], [7, 1, "b5"], [19, 3, "b4"], [-12, 12, "b4"]],
                     spin: [[6, 10]],
                     slowbig: [[-15, 3], [-4, 17], [16, 13]],
                     lure: [[2, 11]]
                  },
                  lure4: {
                     snagtall: [[-12, 5, "t3"]],
                     slowbig: [[0, 5]],
                     lure: [[2, 9]],
                     snag: [[13, 12, "b2"], [10, 7, "b4"], [9, 3, "b5"], [-7, 7, "b4"], [-10, 9, "b6"], [-15, 8, "b1"], [-7, 2, "b5"], [12, 5, "b4"]],
                     bump: [[-14, 12], [-6, 11], [14, 9]],
                     slow: [[8, 12], [-1, 15]]
                  },
                  lure5: {
                     slowbig: [[-11, 11], [-3, 2]],
                     snagtall: [[8, 5, "t2"]],
                     lure: [[-2, 7]],
                     snagsml: [[-13, 7, "c1"]],
                     snag: [[4, 3, "b5"], [-11, 2, "b5"], [-9, 6, "b4"], [11, 9, "b4"], [-17, 5, "b2"]],
                     bump: [[-14, 5], [8, 11], [5, 6]],
                     slow: [[0, 13]]
                  }
               },
               endlessCheckpoints: {
                  checkpoint1: {
                     snag: [[25, 16, "b4"], [22, 9, "b4"], [17, 4, "b4"], [-24, 14, "b4"], [-25, 18, "b4"], [-22, 16, "b4"], [18, 7, "b4"], [23, 18, "b6"]],
                     slow: [[20, 2], [-22, 22]],
                     slowbig: [[-18, 2], [16, 25], [-15, 26]],
                     snagtall: [[-24, 2, "t3"], [16, 17, "t1"], [-18, 10, "t1"], [-26, 7, "t2"], [-20, 6, "t3"], [-29, 4, "t3"], [22, 3, "t3"]],
                     boost: [[2, 19], [-2, 26], [2, 32]],
                     bump: [[19, 12], [11, 19], [-17, 16], [27, 19]],
                     wall: [[14, 16, "f"], [14, 12, "se"], [-10, 16, "se"], [-14, 16, "w"], [-14, 12, "f"], [-14, 20, "b"], [10, 16, "sw"], [18, 16, "se"]],
                     checkpoint: [[0, 8]],
                     life: [[3, 1], [-3, 1]]
                  },
                  checkpoint2: {
                     blockbig: [[19, 6]],
                     block: [[-22, 9]],
                     checkpoint: [[0, 8]],
                     slowbig: [[-23, 2], [21, 25], [-20, 26]],
                     boost: [[2, 26], [-2, 20], [-2, 33]],
                     snagtall: [[-14, 10, "t1"], [18, 18, "t1"], [-20, 5, "t3"], [14, 2, "t3"], [22, 9, "t3"]],
                     wall: [[10, 20, "sw"], [-18, 20, "b"], [-14, 16, "f"], [10, 16, "n"], [14, 12, "se"], [-10, 16, "se"], [-18, 16, "w"], [14, 20, "f"]],
                     life: [[3, 1], [-3, 1]],
                     snag: [[-24, 14, "b4"], [22, 18, "b4"], [-15, 3, "b4"], [22, 1, "b6"], [-26, 5, "b6"], [-29, 8, "b4"], [24, 15, "b4"]],
                     bump: [[-27, 11], [16, 15], [-13, 19], [12, 23], [26, 19]],
                     slow: [[28, 9], [-29, 15]],
                     snagsml: [[-23, 17, "c1"]]
                  },
                  checkpoint3: {
                     wall: [[14, 20, "se"], [-18, 12, "sw"], [-14, 20, "f"], [-10, 16, "n"], [-14, 8, "n"], [18, 8, "n"], [18, 12, "se"], [10, 20, "sw"], [10, 16, "n"], [14, 12, "f"], [-14, 12, "s"], [-10, 20, "se"], [-26, 8, "b"]],
                     snagsml: [[-21, 6, "c1"]],
                     snag: [[23, 8, "b6"], [-28, 4, "b4"], [-31, 7, "b4"], [-27, 13, "b6"], [-32, 11, "b6"], [21, 3, "b4"], [16, 4, "b2"]],
                     snagtall: [[21, 14, "t3"], [-24, 9, "t3"], [-18, 18, "t1"]],
                     slowbig: [[-22, 4], [19, 25]],
                     life: [[-3, 1], [3, 1]],
                     checkpoint: [[0, 8]],
                     boost: [[0, 19]],
                     ramp: [[4, 27], [0, 25], [-4, 27]],
                     bump: [[-14, 16], [17, 16], [-28, 10]],
                     slow: [[-22, 17], [27, 7]],
                     block: [[26, 11]]
                  }
               },
               allNormal: {
                  large1: {
                     slowbig: [[7, 21]],
                     blockbig: [[10, 3], [-16, 12]],
                     wall: [[-12, 8, "f"], [13, 8, "n"], [-8, 8, "se"], [5, 12, "sw"], [13, 12, "se"], [9, 12, "f"], [-6, 14, "n"], [-6, 18, "b"]],
                     bumpbig: [[11, 15]],
                     snagtall: [[-22, 8, "t3"], [17, 5, "t3"], [-16, 6, "t1"]],
                     bump: [[-19, 7], [3, 9], [-5, 11], [-15, 18], [-12, 4], [18, 10]],
                     snag: [[19, 4, "b6"], [7, 8, "b1"], [-11, 17, "b1"], [-19, 17, "b6"]],
                     slow: [[-23, 20], [22, 16], [-26, 6], [23, 8]],
                     snagsml: [[18, 12, "c1"], [-6, 1, "c2"]]
                  },
                  large2: {
                     blockbig: [[-6, 8]],
                     bumpbig: [[-7, 18]],
                     wall: [[1, 20, "b"], [1, 16, "e"], [-3, 16, "f"], [9, 12, "se"], [5, 12, "f"], [1, 12, "w"]],
                     slowbig: [[20, 10], [-15, 6]],
                     slow: [[-12, 23], [14, 17], [-22, 16], [1, 2]],
                     bump: [[15, 2], [-4, 22], [4, 20], [6, 15], [-15, 14], [-3, 12]],
                     snagtall: [[-7, 14, "t1"], [2, 6, "t3"]],
                     snag: [[18, 1, "b4"], [17, 5, "b4"], [-3, 2, "b6"], [8, 18, "b2"], [-13, 12, "b1"], [-1, 4, "b4"], [-9, 3, "b2"], [14, 3, "b4"]]
                  },
                  large3: {
                     snagtall: [[21, 5, "t3"], [-3, 7, "t3"]],
                     snag: [[8, 12, "b6"], [-10, 3, "b4"], [17, 4, "b4"], [-5, 6, "b4"], [-10, 8, "b1"], [11, 8, "b4"], [-19, 9, "b4"], [-6, 11, "b4"], [5, 14, "b4"], [-5, 14, "b2"], [-11, 18, "b4"], [9, 18, "b2"], [14, 21, "b4"]],
                     snagsml: [[12, 11, "c1"], [11, 2, "c2"], [-15, 10, "c1"]],
                     bumpbig: [[-6, 3], [-14, 7]],
                     slow: [[-22, 3], [23, 3], [-2, 22]],
                     bump: [[16, 8], [-9, 16], [5, 19], [7, 10]],
                     slowbig: [[-18, 14], [17, 15]]
                  },
                  large4: {
                     bump: [[10, 6], [-11, 11], [14, 10]],
                     snag: [[-10, 14, "b6"], [-10, 17, "b2"], [10, 15, "b4"], [12, 12, "b1"], [11, 8, "b4"], [-12, 4, "b4"], [-9, 2, "b4"], [9, 1, "b4"], [-4, 6, "b6"]],
                     slow: [[-4, 3], [-4, 22], [10, 21], [17, 15], [-17, 8]],
                     slowbig: [[-15, 17]],
                     blockbig: [[-4, 10]],
                     snagsml: [[13, 16, "c1"]],
                     snagtall: [[-15, 12, "t3"], [13, 5, "t3"]],
                     bumpbig: [[-2, 16]]
                  },
                  large5: {
                     bump: [[14, 12], [-9, 3], [-3, 5], [-10, 15]],
                     slow: [[19, 5], [-9, 9], [-17, 13], [14, 17]],
                     blockbig: [[7, 5]],
                     wall: [[4, 10, "n"], [-8, 14, "sw"], [0, 14, "f"], [8, 14, "se"], [4, 14, "s"]],
                     slowbig: [[-6, 21]],
                     snag: [[-13, 4, "b4"], [1, 2, "b6"], [-15, 2, "b4"], [10, 10, "b1"], [-2, 17, "b1"]],
                     snagtall: [[-4, 12, "t1"], [14, 7, "t3"], [-1, 8, "t3"]],
                     snagsml: [[5, 16, "c1"], [-17, 5, "c1"]]
                  },
                  large6: {
                     snagtall: [[10, 8, "t3"], [-10, 7, "t3"]],
                     spin: [[-3, 1], [5, 12]],
                     slow: [[5, 3], [-24, 6], [25, 8], [-2, 15]],
                     bump: [[-7, 7], [-12, 4], [-4, 4], [20, 6], [-14, 12], [16, 13], [6, 16], [-3, 23]],
                     bumpbig: [[10, 8]],
                     slowbig: [[-15, 19], [14, 21]],
                     snag: [[-10, 14, "b1"], [-10, 2, "b4"], [-6, 4, "b4"], [-15, 6, "b3"], [6, 6, "b4"], [16, 8, "b1"], [-19, 9, "b4"], [19, 11, "b4"], [9, 13, "b4"], [-3, 19, "b4"], [0, 22, "b1"], [-12, 11, "b6"], [12, 11, "b6"], [10, 4, "b2"]],
                     snagsml: [[-5, 8, "c1"], [-18, 4, "c1"]]
                  },
                  medium1: {
                     snagsml: [[8, 1, "c1"]],
                     bump: [[10, 14], [-10, 10]],
                     wall: [[-2, 14, "sw"], [6, 14, "se"], [2, 14, "f"], [-2, 10, "n"]],
                     slowbig: [[4, 6]],
                     slow: [[-2, 2]],
                     snagtall: [[-7, 4, "t3"]],
                     snag: [[8, 16, "b2"], [-6, 12, "b1"], [-9, 8, "b6"], [4, 10, "b4"], [5, 1, "b1"]]
                  },
                  medium2: {
                     snag: [[12, 5, "b6"], [7, 14, "b1"], [10, 3, "b2"], [-5, 3, "b4"], [-9, 4, "b4"], [-2, 7, "b4"], [2, 9, "b1"], [-8, 11, "b4"], [-10, 15, "b4"], [-4, 15, "b4"]],
                     bump: [[-1, 4], [-11, 12], [5, 15]],
                     snagsml: [[-6, 13, "c1"]],
                     snagtall: [[-7, 5, "t3"], [14, 1, "t3"]],
                     slow: [[12, 10], [0, 14]]
                  },
                  medium3: {
                     slow: [[13, 8], [-3, 16], [-15, 14]],
                     snag: [[-11, 18, "b4"], [3, 17, "b2"], [0, 10, "b4"], [-10, 10, "b6"], [7, 16, "b6"]],
                     snagtall: [[4, 0, "t3"], [-13, 7, "t3"], [-2, 4, "t1"]],
                     spin: [[11, 3], [11, 13], [9, 8]],
                     bump: [[-9, 4], [2, 9]],
                     wall: [[-11, 6, "b"], [6, 6, "e"], [2, 6, "f"], [6, 10, "n"], [2, 14, "sw"], [6, 14, "se"]],
                     snagsml: [[-9, 16, "c1"]]
                  },
                  medium4: {
                     wall: [[-8, 10, "b"], [-8, 6, "e"]],
                     snagtall: [[-12, 4, "t1"], [1, 6, "t3"]],
                     bump: [[-16, 7], [5, 11], [17, 6]],
                     snag: [[10, 7, "b1"], [12, 5, "b4"], [4, 4, "b4"], [3, 13, "b4"], [-14, 9, "b4"], [-1, 5, "b6"], [12, 9, "b2"]],
                     slow: [[9, 3], [14, 13], [-12, 14]]
                  },
                  medium5: {
                     snagsml: [[4, 16, "c1"]],
                     blockbig: [[-5, 7]],
                     slow: [[-18, 6], [14, 10]],
                     bump: [[8, 7], [-11, 10], [9, 14]],
                     wall: [[-2, 13, "sw"], [2, 13, "f"]],
                     slowbig: [[-9, 18]],
                     snagtall: [[1, 3, "t3"], [6, 11, "t1"], [-6, 10, "t3"]],
                     snag: [[-10, 14, "b4"], [6, 3, "b4"], [3, 8, "b6"]]
                  },
                  small1: {
                     spin: [[2, 1]],
                     slowbig: [[-4, 4], [11, 9]],
                     bump: [[7, 4]],
                     blockbig: [[-4, 8]],
                     slow: [[3, 14]],
                     snagtall: [[-12, 7, "t3"], [-6, 3, "t3"]],
                     snag: [[11, 3, "b4"], [-11, 11, "b6"]]
                  },
                  small2: {
                     spin: [[-11, 3]],
                     bumpbig: [[-2, 2]],
                     bump: [[4, 6]],
                     slow: [[9, 9]],
                     slowbig: [[-5, 10]],
                     snag: [[-1, 6, "b4"], [8, 3, "b4"], [1, 4, "b1"], [-6, 4, "b2"]]
                  },
                  small3: {
                     bumpbig: [[2, 10]],
                     snagtall: [[-2, 5, "t3"]],
                     snag: [[8, 4, "b4"]],
                     wall: [[-6, 8, "b"]],
                     slow: [[-11, 10]],
                     bump: [[5, 3], [-8, 5]]
                  },
                  small4: {
                     slowbig: [[7, 9]],
                     bump: [[-3, 4]],
                     slow: [[-13, 4]],
                     snag: [[0, 10, "b1"], [-10, 7, "b4"], [3, 6, "b4"], [1, 4, "b4"], [-8, 4, "b2"], [-9, 2, "b4"], [8, 2, "b4"]]
                  },
                  small5: {
                     snag: [[-7, 11, "b4"], [-10, 9, "b4"], [11, 7, "b4"], [-4, 6, "b4"]],
                     block: [[7, 4], [-7, 2]],
                     bump: [[-2, 10], [8, 8], [-8, 7], [12, 3]],
                     spin: [[2, 1]]
                  },
                  small6: {
                     slow: [[-2, 2], [2, 8], [-4, 11]],
                     snag: [[6, 2, "b4"], [-7, 3, "b4"], [-4, 4, "b1"], [4, 5, "b4"], [8, 7, "b4"], [-6, 7, "b4"], [3, 11, "b2"]],
                     bump: [[10, 4], [-10, 6]]
                  },
                  small7: {
                     snag: [[-6, 9, "b4"], [6, 8, "b4"], [0, 5, "b4"], [5, 2, "b4"], [-8, 2, "b4"]],
                     slow: [[2, 10], [-2, 8], [-8, 6], [6, 6], [-4, 2]]
                  },
                  small8: {
                     wall: [[-2, 10, "sw"], [2, 10, "se"], [2, 6, "n"]],
                     bump: [[-8, 8], [6, 4]],
                     snag: [[7, 8, "b4"], [-4, 6, "b1"], [-2, 2, "b4"]]
                  },
                  small9: {
                     snag: [[5, 9, "b4"], [-6, 2, "b4"]],
                     slow: [[-14, 8], [9, 3]],
                     wall: [[4, 2, "n"], [0, 10, "se"], [-4, 10, "s"], [-8, 10, "sw"], [-8, 6, "w"], [4, 6, "se"], [0, 6, "f"]],
                     snagtall: [[-4, 4, "t1"]],
                     bump: [[-10, 3], [8, 9]],
                     slowbig: [[-5, 16]]
                  },
                  small10: {
                     slow: [[12, 10], [-9, 9]],
                     bump: [[6, 8], [-6, 4]],
                     snag: [[2, 9, "b4"], [-3, 8, "b4"], [-3, 4, "b4"], [6, 4, "b4"], [2, 2, "b4"]],
                     snagtall: [[1, 4, "t3"]]
                  },
                  small11: {
                     snagsml: [[-6, 2, "c1"]],
                     snag: [[-7, 8, "b4"], [2, 1, "b4"]],
                     wall: [[-4, 6, "sw"], [0, 6, "f"], [4, 6, "se"]],
                     bump: [[0, 8]],
                     snagtall: [[6, 7, "t3"]]
                  },
                  small12: {
                     slowbig: [[4, 9]],
                     blockbig: [[1, 4]],
                     slow: [[-9, 4], [6, 2]],
                     snag: [[-8, 7, "b4"], [9, 2, "b4"], [-5, 1, "b4"]]
                  },
                  small13: {
                     wall: [[-4, 10, "b"], [4, 6, "se"], [0, 6, "f"], [-4, 6, "w"]],
                     snag: [[6, 9, "b4"], [0, 8, "b4"], [3, 2, "b4"]],
                     bump: [[2, 10], [-8, 8], [-2, 2]],
                     spin: [[7, 1]],
                     snagsml: [[-9, 3, "c2"]]
                  },
                  small14: {
                     snag: [[-5, 5, "b3"], [2, 6, "b4"]],
                     bump: [[-9, 8], [6, 6], [3, 2]],
                     bumpbig: [[-3, 4], [-1, 10]],
                     snagsml: [[-3, 7, "c1"]]
                  },
                  small15: {
                     snag: [[6, 1, "b4"], [-5, 2, "b4"], [10, 3, "b2"], [-5, 6, "b1"], [-6, 9, "b4"], [-8, 4, "b6"]],
                     bump: [[7, 4], [-2, 4], [-10, 8]]
                  },
                  small16: {
                     bump: [[-4, 6], [4, 4]],
                     snag: [[-6, 8, "b2"], [-1, 5, "b4"], [-9, 4, "b4"], [7, 3, "b4"]],
                     snagsml: [[4, 7, "c1"]],
                     snagtall: [[-4, 1, "t3"]]
                  },
                  tiny1: {
                     snag: [[-4, 3, "b4"], [4, 2, "b1"]],
                     bumpbig: [[1, 5]]
                  },
                  tiny2: {
                     snag: [[2, 7, "b4"], [0, 4, "b2"]],
                     bump: [[-4, 4], [4, 2]]
                  },
                  tiny3: {
                     spin: [[-3, 7]],
                     snag: [[0, 3, "b2"], [3, 5, "b4"]],
                     bumpbig: [[0, 3]]
                  },
                  tiny4: {
                     snag: [[4, 2, "b4"]],
                     bump: [[-1, 4], [4, 5]],
                     snagtall: [[-3, 3, "t3"]]
                  },
                  tiny5: {
                     spin: [[-2, 6]],
                     slow: [[-4, 4]],
                     bump: [[4, 6], [2, 2]]
                  },
                  tiny6: {
                     bumpbig: [[0, 6]],
                     wall: [[2, 4, "b"]],
                     bump: [[0, 2]]
                  },
                  tiny7: {
                     snag: [[4, 5, "b4"], [-1, 4, "b2"], [0, 1, "b4"]],
                     snagtall: [[-4, 1, "t3"]]
                  },
                  tiny8: {
                     snag: [[1, 4, "b6"], [-4, 2, "b4"], [-2, 6, "b1"], [5, 2, "b1"], [6, 6, "b4"]]
                  },
                  tiny9: {
                     snag: [[0, 2, "b4"], [-3, 3, "b2"], [5, 3, "b4"], [1, 5, "b2"]],
                     bump: [[5, 6], [-4, 6]]
                  },
                  tiny10: {
                     snagtall: [[0, 3, "t3"]],
                     snag: [[4, 2, "b4"], [2, 6, "b4"], [-3, 2, "b6"]],
                     bump: [[-3, 6]]
                  },
                  tiny11: {
                     bump: [[4, 8]],
                     wall: [[0, 6, "se"], [-4, 6, "sw"]],
                     snag: [[-5, 2, "b4"]],
                     spin: [[0, 1]],
                     snagsml: [[5, 3, "c2"]]
                  },
                  tiny12: {
                     snag: [[-4, 1, "b6"], [4, 2, "b4"], [0, 3, "b1"], [-5, 5, "b4"]],
                     bump: [[2, 6]]
                  },
                  tiny13: {
                     snag: [[3, 6, "b4"], [-4, 4, "b4"], [0, 3, "b1"], [4, 1, "b3"]],
                     snagtall: [[-3, 0, "t3"]]
                  },
                  tiny14: {
                     snag: [[-4, 1, "b4"], [4, 3, "b4"], [-7, 4, "b6"]],
                     slowbig: [[-2, 4]]
                  },
                  tiny15: {
                     bump: [[7, 9]],
                     snagsml: [[3, 9, "c1"]],
                     wall: [[4, 6, "f"], [8, 6, "se"], [-4, 6, "sw"], [8, 2, "n"]],
                     snagtall: [[0, 4, "t1"]],
                     snag: [[-5, 2, "b4"]],
                     slow: [[-8, 10]]
                  },
                  tiny16: {
                     snag: [[3, 4, "b4"], [0, 2, "b1"]],
                     slow: [[-2, 6], [4, 2], [-4, 2]]
                  },
                  tiny17: {
                     snagtall: [[-1, 3, "t3"]],
                     bump: [[1, 2]],
                     snag: [[4, 2, "b4"], [2, 6, "b1"], [-3, 1, "b4"]]
                  },
                  tiny18: {
                     bump: [[2, 6]],
                     snag: [[4, 1, "b4"], [0, 3, "b1"], [-5, 2, "b4"]],
                     snagsml: [[-2, 5, "c1"]],
                     slow: [[-3, 0]]
                  }
               },
               allPassive: {
                  passive1: {
                     spiral: [[0, 6]],
                     slow: [[6, 12], [-7, 4]],
                     spin: [[6, 7], [-1, 10], [-3, 1], [-7, 7], [4, 2]]
                  },
                  passive2: {
                     bumpbig: [[1, 7]],
                     bump: [[11, 9], [-8, 10], [5, 2], [-10, 3]],
                     spin: [[-6, 4], [10, 5]],
                     slowbig: [[3, 13]],
                     slow: [[14, 3], [-1, 2], [-13, 7]]
                  },
                  passive3: {
                     slowbig: [[-1, 14]],
                     bumpbig: [[1, 6]],
                     slow: [[9, 4], [1, 10], [-11, 10], [-9, 5]],
                     bump: [[-4, 4], [-6, 8], [7, 9], [2, 3]]
                  },
                  passive4: {
                     slowbig: [[1, 13], [4, 2]],
                     bumpbig: [[-2, 7]],
                     spin: [[10, 4], [-12, 2]],
                     bump: [[4, 5], [-3, 4], [5, 9]],
                     slow: [[-7, 3], [-9, 10], [10, 9]]
                  },
                  passive5: {
                     slow: [[-3, 7], [-10, 9]],
                     slowbig: [[-2, 13], [6, 10], [3, 2]],
                     spiral: [[-8, 4], [7, 6]]
                  }
               },
               zigzagGates: {
                  gateFirst: {
                     guide: [[-13, -10], [13, -10], [5, 8], [-9, -6], [-8, -4], [8, 2], [8, -4], [-11, -8], [7, 5], [9, -6], [-9, 2], [11, -8]],
                     marker: [[8, -1], [-8, -1]],
                     gate: [[0, 1]]
                  },
                  gateLeft: {
                     guide: [[-7, 5], [-5, -10], [-8, -4], [9, -6], [9, 2], [8, -4], [-7, -7], [-8, 2], [-5, 8], [-2, 12]],
                     marker: [[8, -1], [-8, -1]],
                     gate: [[0, 1]]
                  },
                  gateRight: {
                     guide: [[7, -7], [2, 12], [7, 5], [-9, 2], [-8, -4], [8, -4], [8, 2], [5, 8], [-9, -6], [5, -10]],
                     marker: [[8, -1], [-8, -1]],
                     gate: [[0, 1]]
                  }
               },
               zigzagGateScenes: {
                  center1: {
                     snag: [[8, 9, "b4"], [-10, 9, "b4"], [-4, 7, "b4"], [16, -1, "b4"], [-16, -3, "b4"], [0, -7, "b4"], [6, -9, "b4"], [-6, -11, "b4"]]
                  },
                  center2: {
                     snag: [[4, 10, "b4"], [-2, 8, "b4"], [-16, 6, "b4"], [16, 4, "b4"], [6, -8, "b4"], [-2, -10, "b4"]]
                  },
                  center3: {
                     snag: [[0, -11, "b4"], [6, -10, "b4"], [-4, -10, "b4"], [14, -2, "b4"], [-16, -2, "b4"], [16, 2, "b4"], [-4, 8, "b4"], [4, 10, "b4"]]
                  },
                  center4: {
                     snag: [[-2, 9, "b4"], [14, 5, "b4"], [-16, 1, "b4"], [-4, -9, "b4"], [6, -11, "b4"]]
                  },
                  center5: {
                     snag: [[-2, 10, "b4"], [6, 10, "b4"], [0, 8, "b4"], [-14, 2, "b4"], [14, 0, "b4"], [-16, -2, "b4"], [16, -4, "b4"], [2, -10, "b4"], [-4, -12, "b4"]]
                  },
                  center6: {
                     snag: [[-14, 2, "b4"], [-16, -1, "b4"], [-2, 9, "b4"], [12, 1, "b4"], [14, -5, "b4"], [-6, -9, "b4"], [2, -11, "b4"]]
                  }
               },
               timetrialScenes: {
                  start: {
                     snagtall: [[-17, 45, "t3"], [16, 47, "t3"], [-20, 22, "t1"]],
                     snag: [[22, 20, "b4"], [-14, 20, "b4"], [-28, 22, "b4"], [18, 26, "b4"], [-20, 26, "b4"], [30, 28, "b4"], [-34, 28, "b4"], [-16, 30, "b4"], [20, 32, "b4"], [30, 34, "b4"], [-30, 36, "b4"], [22, 40, "b4"], [-20, 56, "b2"]],
                     bump: [[-26, 20], [28, 24], [14, 26], [-16, 26], [-28, 28], [20, 30], [-22, 34], [26, 42], [10, 48], [22, 50], [-8, 50], [-26, 52], [-12, 56], [-16, 58]],
                     wall: [[12, 24, "sw"], [16, 24, "f"], [20, 24, "se"], [-12, 24, "se"], [-16, 24, "f"], [-24, 24, "w"], [24, 28, "n"], [-24, 28, "n"], [16, 30, "b"], [24, 32, "sw"], [28, 32, "f"], [32, 32, "se"], [-20, 32, "se"], [-24, 32, "s"], [-28, 32, "f"], [-32, 32, "sw"]],
                     ramp: [[14, 40], [-14, 40]],
                     spin: [[-12, 44], [12, 52]],
                     blockbig: [[-16, 50], [17, 44]],
                     slow: [[-28, 50], [28, 52], [-4, 52], [6, 54], [-26, 58], [-21, 45]],
                     snagsml: [[-24, 46, "c5"]],
                     coin: [[0, 60]]
                  },
                  intro: {
                     ramp: [[0, 54]],
                     coin: [[22, 44]],
                     boost: [[-22, 44]],
                     bumpbig: [[-20, 20], [18, 18]],
                     slow: [[8, 46], [-4, 44], [-34, 42], [34, 36], [8, 36], [30, 34], [-18, 24], [18, 22], [-32, 22], [-12, 20], [-30, 18], [24, 16]],
                     spin: [[20, 26], [-22, 26], [-10, 20], [32, 18], [-32, 18], [12, 14]],
                     bump: [[-8, 62], [8, 60], [-30, 48], [12, 46], [-8, 46], [-34, 46], [30, 44], [-14, 44], [32, 40], [26, 34], [-26, 34], [-14, 24], [30, 22], [12, 22], [-28, 22], [28, 18], [-2, 10], [6, 8], [-6, 6], [2, 4]],
                     block: [[-9, 38]],
                     snagtall: [[14, 37, "t3"]],
                     snagsml: [[30, 36, "c2"], [-4, 6, "c2"], [10, 42, "c4"], [-28, 38, "c1"]],
                     snag: [[-4, 60, "b2"], [1, 6, "b2"], [4, 60, "b4"], [-2, 58, "b4"], [16, 42, "b4"], [-30, 42, "b4"], [-8, 42, "b4"], [26, 40, "b4"], [-16, 40, "b4"], [12, 36, "b4"], [-14, 36, "b4"], [-10, 34, "b4"], [2, 8, "b4"], [-2, 4, "b4"], [24, 36, "b6"], [-26, 36, "b3"]]
                  },
                  act1a: {
                     snagsml: [[-18, 11, "c1"], [5, 46, "c1"]],
                     bump: [[-17, 32], [-6, 57], [-14, 56], [10, 60], [16, 56], [6, 50], [-34, 48], [30, 48], [-4, 46], [-32, 42], [-22, 40], [-12, 40], [34, 40], [10, 38], [-30, 34], [32, 34], [18, 30], [-26, 24], [30, 24], [14, 18], [-20, 16], [20, 16], [-10, 14], [14, 12], [-14, 10]],
                     snag: [[7, 55, "b6"], [12, 58, "b4"], [14, 56, "b2"], [-6, 48, "b4"], [-10, 40, "b4"], [12, 40, "b4"], [-18, 34, "b2"], [18, 28, "b4"], [16, 16, "b4"], [-16, 14, "b4"], [-12, 12, "b4"], [18, 12, "b4"], [-7, 54, "b6"], [-9, 58, "b1"], [12, 14, "b1"]],
                     wall: [[-26, 48, "b"], [-10, 52, "se"], [-14, 52, "sw"], [10, 52, "sw"], [14, 52, "se"], [-10, 48, "n"], [10, 48, "n"], [26, 48, "b"], [-26, 44, "n"], [-6, 44, "se"], [-10, 44, "w"], [6, 44, "sw"], [10, 44, "e"], [26, 44, "n"], [-26, 40, "n"], [-6, 40, "n"], [6, 40, "n"], [26, 40, "n"], [-22, 36, "se"], [-26, 36, "w"], [-6, 36, "n"], [6, 36, "n"], [22, 36, "sw"], [26, 36, "e"], [-22, 32, "n"], [-6, 32, "n"], [6, 32, "n"], [22, 32, "n"], [-18, 28, "se"], [-22, 28, "w"], [-6, 28, "n"], [6, 28, "n"], [-18, 24, "n"]],
                     life: [[-20, 48]],
                     bumpbig: [[32, 52], [-32, 30], [32, 30], [-29, 54]],
                     coin: [[24, 14]],
                     spiral: [[6, 8], [-6, 6]]
                  },
                  act1b: {
                     snag: [[4, 32, "b4"], [8, 36, "b2"], [-8, 46, "b1"], [-6, 44, "b7"], [-10, 40, "b4"], [-22, 38, "b4"], [-4, 36, "b3"], [-28, 28, "b2"], [28, 8, "b4"], [2, 6, "b4"], [0, 4, "b4"], [11, 34, "b6"], [26, 27, "b2"]],
                     bump: [[-3, 40], [0, 60], [2, 50], [-24, 48], [-32, 46], [34, 46], [-30, 42], [6, 40], [20, 40], [32, 38], [-20, 36], [-8, 34], [-32, 34], [30, 34], [8, 32], [-30, 30], [-22, 24], [24, 24], [-34, 24], [30, 10], [-28, 10], [0, 8], [32, 25]],
                     snagtall: [[-6, 37, "t3"], [10, 39, "t3"], [-22, 30, "t1"], [0, 56, "t1"]],
                     spiral: [[-2, 26], [6, 22]],
                     bumpbig: [[32, 18], [-32, 16]],
                     ramp: [[-16, 14], [16, 14]],
                     wall: [[-4, 58, "sw"], [4, 58, "se"], [4, 54, "n"], [-26, 44, "sw"], [-22, 44, "se"], [26, 44, "se"], [22, 44, "sw"], [-26, 40, "n"], [26, 40, "n"], [-26, 36, "n"], [22, 36, "sw"], [26, 36, "e"], [-18, 32, "se"], [-26, 32, "w"], [22, 32, "n"], [-18, 28, "n"], [18, 28, "s"], [14, 28, "sw"], [22, 28, "e"], [-18, 24, "w"], [-10, 24, "se"], [-14, 24, "f"], [18, 24, "n"], [-22, 20, "sw"], [-18, 20, "e"], [22, 20, "se"], [18, 20, "w"], [-22, 16, "n"], [22, 16, "n"], [-22, 12, "n"], [22, 12, "n"]],
                     coin: [[3, 36]]
                  },
                  act2a: {
                     snag: [[8, 41, "b2"], [7, 46, "b6"], [12, 54, "b2"], [28, 52, "b2"], [30, 48, "b4"], [28, 42, "b4"], [12, 42, "b4"], [24, 38, "b4"], [-6, 26, "b4"], [-13, 18, "b4"], [5, 12, "b6"], [10, 44, "b4"], [-6, 55, "b4"]],
                     snagtall: [[30, 43, "t2"], [-16, 22, "t1"], [16, 10, "t3"], [9, 47, "t3"]],
                     snagsml: [[10, 15, "c4"], [12, 12, "c5"], [9, 11, "c5"], [25, 40, "c1"]],
                     blockbig: [[10, 7]],
                     boost: [[24, 48]],
                     spin: [[10, 38], [20, 34], [6, 32], [-6, 30]],
                     wall: [[4, 40, "b"], [4, 36, "e"], [0, 36, "sw"], [-10, 36, "b"], [-10, 32, "n"], [-8, 24, "se"], [-12, 24, "f"]],
                     bumpbig: [[-18, 46], [32, 38], [-20, 38], [32, 30], [-24, 30], [-26, 22], [-28, 14]],
                     bump: [[12, 58], [8, 56], [2, 56], [34, 54], [-22, 54], [4, 52], [-20, 50], [36, 48], [34, 42], [-12, 42], [-18, 42], [0, 40], [-28, 40], [8, 36], [32, 34], [-22, 34], [-28, 34], [-14, 32], [-36, 30], [-32, 28], [32, 26], [-12, 26], [-26, 26], [28, 24], [34, 24], [34, 20], [-36, 18], [-22, 18], [-30, 18], [30, 16], [-36, 12], [-28, 10], [-22, 8], [-26, 6]],
                     coin: [[14, 19]]
                  },
                  act2b: {
                     snagtall: [[-20, 26, "t1"], [4, 6, "t1"], [6, 48, "t1"], [-8, 46, "t2"]],
                     wall: [[-4, 4, "e"], [-8, 4, "sw"], [-24, 6, "se"], [12, 8, "e"], [8, 8, "f"], [0, 8, "f"], [-4, 8, "sw"], [-32, 10, "w"], [-28, 10, "se"], [12, 12, "b"], [-32, 14, "n"], [-32, 18, "b"], [-12, 28, "se"], [-16, 28, "f"], [-4, 42, "b"], [2, 50, "f"], [-2, 50, "w"], [-26, 50, "n"], [-2, 54, "n"], [-26, 54, "b"], [-2, 58, "se"], [-6, 58, "sw"], [-28, 6, "w"]],
                     bump: [[16, 6], [-10, 8], [-36, 8], [18, 12], [6, 16], [12, 16], [-28, 18], [8, 20], [32, 20], [4, 22], [10, 24], [24, 24], [36, 28], [12, 30], [8, 32], [-16, 32], [2, 34], [0, 42], [6, 42], [-6, 52], [-30, 52], [30, 54], [4, 54], [-22, 54], [-28, 56], [32, 60], [-8, 60], [-26, 60], [24, 62]],
                     snag: [[-6, 10, "b4"], [32, 12, "b4"], [-36, 12, "b4"], [-26, 14, "b4"], [34, 16, "b4"], [32, 22, "b4"], [28, 24, "b4"], [34, 24, "b4"], [-12, 24, "b4"], [-8, 26, "b1"], [-24, 26, "b1"], [30, 26, "b4"], [32, 28, "b4"], [26, 28, "b4"], [-14, 34, "b4"], [30, 36, "b4"], [-10, 44, "b4"], [-24, 46, "b4"], [32, 56, "b4"], [30, 58, "b4"], [26, 60, "b4"]],
                     ramp: [[-16, 12], [26, 16]],
                     bumpbig: [[4, 28], [4, 38], [0, 46]],
                     coin: [[-30, 34]],
                     life: [[24, 34]]
                  },
                  act3a: {
                     blockbig: [[0, 52]],
                     block: [[-36, 34], [-14, 11]],
                     ramp: [[20, 6], [8, 6], [-18, 6], [-10, 30], [14, 54], [-24, 54]],
                     bumpbig: [[-8, 8], [24, 24], [-6, 34], [36, 42], [-36, 46], [36, 58], [-10, 58]],
                     boost: [[-10, 22], [26, 56]],
                     snagsml: [[25, 27, "c1"]],
                     snagtall: [[0, 30, "t2"], [-23, 12, "t3"], [3, 55, "t3"], [32, 30, "t3"], [30, 26, "t3"], [-31, 37, "t3"]],
                     bump: [[-26, 4], [-20, 12], [-22, 18], [-4, 26], [-34, 26], [22, 28], [-18, 32], [-32, 32], [32, 36], [-8, 38], [0, 46], [36, 54], [20, 54], [-36, 54], [-2, 60], [-10, 15], [-35, 39]],
                     snag: [[28, 30, "b6"], [-8, 51, "b6"], [-24, 2, "b4"], [-8, 6, "b4"], [-26, 8, "b4"], [-28, 10, "b4"], [-8, 12, "b4"], [-16, 14, "b4"], [28, 18, "b4"], [12, 18, "b4"], [22, 20, "b4"], [0, 24, "b4"], [-36, 28, "b4"], [-2, 28, "b4"], [2, 28, "b4"], [-34, 30, "b4"], [-20, 30, "b4"], [-6, 30, "b4"], [36, 32, "b4"], [26, 34, "b4"], [28, 36, "b4"], [-6, 36, "b4"], [-36, 42, "b4"], [32, 44, "b4"], [34, 48, "b4"], [-34, 48, "b4"], [2, 48, "b4"], [32, 50, "b4"], [18, 56, "b4"], [-8, 56, "b4"], [-4, 58, "b4"], [36, 60, "b4"], [-6, 49, "b4"], [10, 16, "b6"]]
                  },
                  act3b: {
                     snag: [[31, 50, "b6"], [-8, 34, "b3"], [-33, 32, "b6"], [-22, 60, "b4"], [-26, 58, "b4"], [32, 58, "b4"], [-28, 56, "b4"], [26, 56, "b4"], [-36, 54, "b4"], [-24, 54, "b4"], [-34, 50, "b4"], [14, 48, "b4"], [-16, 44, "b4"], [12, 44, "b4"], [36, 42, "b4"], [34, 36, "b4"], [-36, 34, "b4"], [0, 32, "b4"], [-32, 24, "b4"], [28, 24, "b4"], [32, 20, "b4"], [-34, 18, "b4"], [0, 16, "b4"], [30, 16, "b4"], [-16, 14, "b4"], [34, 14, "b4"], [26, 12, "b4"], [-24, 10, "b4"], [12, 10, "b4"], [22, 10, "b4"], [16, 8, "b4"], [30, 8, "b4"], [-20, 6, "b4"], [-26, 4, "b2"]],
                     bump: [[32, 46], [-32, 52], [8, 48], [16, 46], [-10, 38], [24, 38], [-30, 34], [-4, 32], [4, 30], [-32, 28], [30, 26], [-2, 20], [-6, 18], [28, 18], [-36, 16], [22, 16], [-18, 12], [32, 10], [34, 6]],
                     snagsml: [[18, 42, "c2"], [15, 13, "c1"]],
                     snagtall: [[-36, 27, "t3"], [10, 45, "t3"], [20, 11, "t3"], [34, 46, "t3"]],
                     life: [[-26, 46]],
                     coin: [[22, 22]],
                     bumpbig: [[-32, 62], [34, 60], [30, 54], [-16, 42], [-38, 22], [32, 18], [-20, 8]],
                     ramp: [[-18, 38], [14, 38], [-4, 14], [28, 4]]
                  },
                  act4a: {
                     snagsml: [[6, 57, "c1"], [14, 23, "c1"]],
                     snag: [[-16, 52, "b6"], [-26, 5, "b4"], [42, 52, "b4"], [38, 46, "b4"], [31, 42, "b4"], [-34, 52, "b4"], [-37, 49, "b4"], [-12, 62, "b4"], [14, 58, "b4"], [-14, 58, "b4"], [38, 54, "b4"], [-10, 50, "b4"], [42, 50, "b4"], [32, 46, "b4"], [-34, 46, "b4"], [30, 44, "b4"], [-32, 44, "b4"], [12, 42, "b4"], [-34, 42, "b4"], [-42, 42, "b4"], [34, 40, "b4"], [-36, 40, "b4"], [-40, 40, "b4"], [16, 38, "b4"], [10, 36, "b4"], [6, 34, "b4"], [18, 30, "b4"], [-8, 30, "b4"], [-10, 26, "b4"], [-32, 26, "b4"], [-14, 24, "b4"], [10, 22, "b4"], [-10, 20, "b4"], [-14, 20, "b4"], [-32, 16, "b4"], [-12, 8, "b4"], [-28, 8, "b4"], [6, 6, "b4"], [-10, 6, "b4"], [34, 4, "b4"], [30, 2, "b4"], [-12, 2, "b4"], [-41, 45, "b4"], [-39, 47, "b4"], [-32, 54, "b4"], [40, 48, "b4"], [35, 47, "b4"], [-26, 14, "b6"], [2, 8, "b6"], [8, 61, "b3"], [-13, 54, "b1"]],
                     snagtall: [[14, 33, "t3"], [-12, 27, "t3"], [-30, 5, "t3"], [7, 23, "t2"], [32, 10, "t3"]],
                     bump: [[5, 24], [-43, 42], [-34, 49], [10, 62], [4, 60], [-16, 60], [10, 56], [-10, 56], [40, 54], [-30, 54], [-12, 48], [36, 46], [-42, 46], [36, 40], [-38, 40], [14, 40], [6, 38], [18, 34], [4, 32], [10, 28], [16, 26], [-16, 26], [-34, 24], [18, 22], [-8, 22], [-30, 18], [-36, 18], [30, 10], [-14, 6], [6, 4], [-8, 4], [-28, 4], [29, 42], [-17, 55]],
                     boost: [[18, 46], [-28, 40]],
                     bumpbig: [[-10, 32], [-30, 12], [32, 6]],
                     ramp: [[24, 22], [-24, 22], [0, 4]]
                  },
                  act4b: {
                     slowbig: [[-16, 42], [-14, 32], [17, 43], [30, 39], [-32, 26], [-31, 37]],
                     ramp: [[22, 18], [0, 8], [-22, 12]],
                     snag: [[15, 34, "b4"], [-9, 58, "b6"], [-6, 10, "b4"], [34, 62, "b4"], [-32, 62, "b4"], [-30, 60, "b4"], [32, 58, "b4"], [8, 58, "b4"], [12, 56, "b4"], [-12, 56, "b4"], [-34, 56, "b4"], [36, 54, "b4"], [28, 40, ["special4"]], [18, 38, ["special3"]], [-28, 38, ["special1"]], [-16, 36, ["special2"]], [-6, 30, "b4"], [26, 28, "b4"], [-4, 28, "b4"], [-8, 28, "b4"], [-24, 28, "b3"], [16, 26, "b4"], [-12, 26, "b4"], [28, 24, "b4"], [14, 24, "b4"], [-18, 22, "b4"], [26, 20, "b4"], [12, 20, "b4"], [-16, 20, "b4"], [-20, 20, "b4"], [8, 18, "b4"], [32, 16, "b4"], [-24, 16, "b4"], [2, 14, "b4"], [-26, 14, "b4"], [30, 12, "b4"], [-2, 12, "b4"], [-28, 12, "b4"], [-30, 10, "b4"], [32, 8, "b4"], [34, 6, "b4"], [-12, 6, "b4"], [-34, 6, "b4"], [30, 4, "b4"], [-10, 4, "b4"], [16, 2, "b4"], [-14, 2, "b4"], [-30, 2, "b4"], [-34, 0, "b4"], [-8, 8, "b6"], [-1, 30, "b6"], [0, 33, "b4"]],
                     snagtall: [[-32, 57, "t3"], [18, 29, "t3"], [-14, 22, "t3"], [-28, 5, "t3"], [13, 3, "t3"], [30, 17, "t3"], [4, 14, "t3"], [-26, 17, "t3"]],
                     blockbig: [[26, 34], [-26, 32]],
                     coin: [[6, 28]],
                     friend: [[-8, 18]],
                     bumpbig: [[-32, 18], [34, 16], [32, 10], [7, 18]],
                     bump: [[30, 62], [10, 62], [-10, 62], [-36, 62], [36, 60], [-14, 58], [-30, 58], [32, 56], [10, 54], [14, 32], [-4, 32], [22, 28], [-10, 26], [-18, 26], [16, 24], [10, 22], [-22, 22], [-32, 22], [28, 18], [-20, 18], [-30, 14], [-10, 10], [16, 6], [-32, 4], [32, 2], [12, 2]],
                     snagsml: [[14, 60, "c1"]]
                  },
                  act5a: {
                     spiral: [[10, 36], [0, 32]],
                     coin: [[6, 30]],
                     slow: [[0, 36], [12, 24], [0, 24]],
                     snag: [[22, 50, "b4"], [-14, 44, "b4"], [-8, 42, "b4"], [-12, 40, "b4"], [-22, 20, "b2"]],
                     snagsml: [[-18, 50, "c5"], [16, 48, "c5"], [8, 46, "c5"], [10, 42, "c5"], [-12, 20, "c5"], [26, 16, "c5"], [16, 14, "c5"], [-6, 12, "c5"], [-18, 12, "c5"]],
                     bump: [[-18, 58], [-22, 52], [10, 50], [-10, 46], [20, 16], [-6, 16], [-28, 16], [28, 14], [-10, 14], [14, 12]],
                     blockbig: [[-14, 52], [16, 44], [-18, 16], [24, 10]],
                     spin: [[-2, 48], [18, 4]],
                     slowbig: [[32, 36], [-20, 30], [12, 28], [-2, 28], [-8, 6], [12, 2]]
                  },
                  act5b: {
                     bumpbig: [[0, 17]],
                     blockbig: [[-10, 51], [-28, 36], [17, 32]],
                     slowbig: [[-31, 52], [-22, 32], [-24, 14], [24, 16], [-10, 24], [21, 45]],
                     bump: [[-20, 37], [10, 38], [28, 2], [-30, 10], [-34, 46], [33, 41], [3, 10], [-5, 49]],
                     wall: [[20, 40, "f"], [0, 6, "se"], [-4, 6, "w"], [-4, 10, "n"], [4, 14, "se"], [-4, 14, "s"], [-8, 14, "sw"], [24, 36, "n"], [28, 40, "se"], [24, 40, "s"], [12, 40, "sw"], [-24, 40, "n"], [-28, 44, "w"], [-24, 44, "se"], [10, 46, "b"], [-8, 48, "b"], [-28, 48, "b"]],
                     snagtall: [[16, 38, "t1"], [0, 12, "t1"], [-9, 42, "t3"]],
                     snag: [[-23, 47, "b1"], [30, 4, "b4"], [-26, 4, "b4"], [-32, 6, "b4"], [26, 10, "b4"], [8, 16, "b1"], [-12, 46, "b1"], [29, 35, "b1"], [25, 6, "b6"]],
                     snagsml: [[21, 2, "c2"], [32, 38, "c1"], [10, 34, "c5"], [-26, 8, "c4"], [24, 30, "c5"], [-30, 39, "c5"], [-20, 40, "c5"], [-14, 49, "c5"], [34, 8, "c2"], [-20, 8, "c2"], [-34, 10, "c2"]],
                     life: [[2, 42]],
                     coin: [[-22, 54]]
                  },
                  act6a: {
                     snagtall: [[14, 45, "t3"], [30, 33, "t3"], [-7, 30, "t3"], [-30, 35, "t3"], [-14, 8, "t3"], [-44, 20, "t3"], [28, 27, "t2"]],
                     snag: [[12, 44, "b4"], [-20, 50, "b6"], [-25, 4, "b2"], [16, 58, "b6"], [34, 41, "b4"], [-8, 14, "b6"], [12, 60, "b4"], [-18, 54, "b4"], [12, 54, "b4"], [-12, 52, "b4"], [-16, 48, "b4"], [34, 48, "b4"], [10, 48, "b4"], [30, 44, "b4"], [18, 44, "b4"], [16, 42, "b4"], [28, 40, "b4"], [-34, 38, "b4"], [-4, 38, "b4"], [-32, 34, "b4"], [-26, 34, "b4"], [-10, 34, "b4"], [32, 32, "b4"], [8, 30, "b4"], [4, 28, "b4"], [0, 26, "b4"], [32, 26, "b4"], [14, 14, "b4"], [18, 12, "b4"], [24, 10, "b4"], [-24, 8, "b4"], [-28, 6, "b4"], [-22, 6, "b4"], [-8, 6, "b4"], [-43, 14, "b6"], [-10, 11, "b4"], [-12, 13, "b4"], [14, 56, "b3"], [-28, 39, "b6"], [16, 49, "b4"]],
                     snagsml: [[26, 22, "c1"], [6, 34, "c2"], [-8, 40, "c1"]],
                     bumpbig: [[-18, 14], [22, 16]],
                     coin: [[22, 58]],
                     life: [[-26, 48]],
                     ramp: [[4, 20]],
                     bump: [[8, 58], [-22, 54], [10, 52], [-14, 50], [30, 48], [-4, 42], [16, 40], [-24, 38], [-10, 38], [-36, 34], [36, 28], [4, 26], [30, 24], [22, 20], [-12, 18], [-28, 12], [-20, 10], [-16, 6]]
                  },
                  act6b: {
                     slowbig: [[-12, 49], [-27, 4], [31, 49], [40, 21], [16, 5], [2, 42], [4, 2], [35, 15], [-38, 13], [-18, 39], [-33, 43]],
                     block: [[-27, 12], [28, 38]],
                     slow: [[-35, 20], [-14, 24], [8, 16], [-8, 18], [14, 22], [-2, 30], [42, 42], [-24, 27]],
                     snagtall: [[15, 12, "t3"], [-14, 5, "t3"], [-19, 13, "t3"], [-42, 19, "t3"], [17, 43, "t3"]],
                     snagsml: [[-26, 22, "c1"]],
                     snag: [[-20, 4, "b4"], [-2, 4, "b4"], [-22, 6, "b2"], [-24, 8, "b4"], [-18, 8, "b4"], [-20, 10, "b4"], [-14, 10, "b4"], [-26, 16, "b4"], [-32, 16, "b2"], [-30, 20, "b4"], [32, 24, "b4"], [-38, 24, "b4"], [-40, 26, "b4"], [24, 28, "b4"], [-36, 28, "b4"], [-20, 30, "b4"], [38, 30, "b2"], [26, 32, "b4"], [-22, 32, "b4"], [30, 34, "b4"], [36, 36, "b4"], [16, 40, "b4"], [20, 42, "b4"], [12, 42, "b4"], [24, 44, "b4"], [4, 50, "b2"], [14, 52, "b4"], [28, 29, "b3"], [1, 8, "b6"], [22, 38, "b6"]],
                     bump: [[-16, 4], [4, 10], [-22, 12], [-16, 12], [-28, 18], [-24, 20], [40, 24], [-30, 24], [34, 26], [38, 28], [-32, 28], [-26, 30], [34, 32], [26, 32], [-36, 36], [34, 38], [16, 38], [20, 40], [10, 42], [20, 46], [10, 50], [0, 52], [-12, 9]],
                     bumpbig: [[0, 6], [8, 46]],
                     spiral: [[-6, 30], [6, 38], [2, 23]],
                     ramp: [[18, 34]],
                     boost: [[-14, 32]],
                     coin: [[-28, 50]]
                  },
                  act7a: {
                     snag: [[33, 39, "b6"], [-12, 12, "b4"], [12, 14, "b2"], [4, 22, "b1"], [-34, 26, "b2"], [18, 28, "b2"], [-18, 30, "b1"], [2, 56, "b4"], [-12, 58, "b2"], [28, 30, "b4"]],
                     snagsml: [[-10, 22, "c1"]],
                     snagtall: [[0, 58, "t1"], [20, 32, "t1"], [-28, 32, "t1"], [-30, 37, "t3"], [0, 18, "t1"]],
                     wall: [[24, 34, "f"], [8, 12, "n"], [8, 16, "se"], [-8, 16, "n"], [-4, 20, "f"], [-8, 20, "sw"], [8, 24, "b"], [32, 30, "n"], [-32, 30, "n"], [32, 34, "se"], [28, 34, "f"], [-20, 34, "se"], [-24, 34, "f"], [-32, 34, "sw"], [18, 38, "b"], [-12, 52, "b"], [8, 60, "se"], [4, 60, "f"], [-8, 60, "sw"], [-4, 60, "f"], [4, 16, "sw"]],
                     ramp: [[0, 10], [24, 28], [-24, 28], [6, 54], [-6, 54]],
                     bump: [[-6, 12], [-12, 16], [12, 18], [6, 20], [-4, 22], [20, 30], [-28, 30], [-36, 32], [36, 34], [16, 34], [28, 36], [-18, 36], [-10, 56], [10, 58], [0, 62]],
                     slowbig: [[-28, 12], [-2, 32], [-24, 48], [24, 56], [32, 19]]
                  },
                  act7b: {
                     snagtall: [[14, 46, "t3"], [24, 16, "t1"], [-4, 42, "t1"], [-16, 16, "t1"], [14, 13, "t3"]],
                     coin: [[0, 8]],
                     bump: [[-26, 10], [12, 16], [-32, 18], [-12, 18], [-24, 20], [28, 22], [0, 32], [2, 34], [-24, 38], [2, 42], [18, 42], [12, 46], [-4, 48], [10, 54]],
                     ramp: [[-20, 12], [20, 12], [0, 28]],
                     wall: [[-28, 14, "n"], [28, 14, "n"], [-28, 18, "sw"], [-24, 18, "f"], [28, 18, "se"], [16, 18, "w"], [16, 22, "sw"], [20, 22, "s"], [24, 22, "se"], [-30, 24, "b"], [-12, 44, "sw"], [-8, 44, "f"], [8, 44, "w"], [12, 44, "f"], [16, 44, "se"], [4, 48, "sw"], [8, 48, "se"], [-20, 18, "s"], [20, 18, "f"]],
                     snag: [[-34, 14, "b4"], [-14, 14, "b4"], [32, 16, "b4"], [30, 24, "b4"], [2, 32, "b3"], [-26, 40, "b4"], [4, 44, "b4"], [-8, 46, "b4"], [-10, 50, "b2"]],
                     slowbig: [[-14, 24], [16, 32], [-28, 44], [28, 50], [-6, 60]],
                     snagsml: [[12, 20, "c1"]]
                  },
                  finish: {
                     bumpbig: [[-28, 26], [15, 40], [26, 26]],
                     finish: [[0, 29, ["default"]]],
                     coin: [[0, 5]],
                     snagtall: [[-22, 19, "t3"], [-27, 37, "t3"], [16, 19, "t3"], [24, 45, "t3"], [19, 48, "t3"], [-31, 40, "t3"], [-14, 31, "t1"], [14, 31, "t1"], [-36, 23, "t3"]],
                     snagsml: [[41, 24, "c1"], [20, 5, "c3"], [15, 10, "c3"], [11, 19, "c3"], [-11, 19, "c3"], [12, 15, "c3"], [-12, 15, "c3"], [-15, 10, "c3"], [-20, 5, "c3"], [-36, 38, "c1"], [36, 40, "c1"]],
                     bump: [[-39, 28], [-18, 41], [29, 47], [-7, 47], [7, 43], [37, 34], [-17, 31], [33, 30], [13, 27], [35, 23], [-37, 34], [26, 38]],
                     wall: [[32, 46, "b"], [-6, 45, "se"], [-14, 45, "sw"], [-10, 45, "f"], [-10, 41, "se"], [-14, 41, "w"], [22, 41, "b"], [-10, 37, "e"], [-14, 37, "s"], [-18, 37, "f"], [30, 37, "sw"], [14, 37, "f"], [22, 37, "e"], [18, 37, "s"], [10, 37, "sw"], [-22, 37, "sw"], [34, 37, "se"], [30, 33, "f"], [-22, 33, "e"], [-30, 33, "s"], [26, 33, "s"], [22, 33, "s"], [-34, 33, "sw"], [18, 33, "f"], [34, 33, "e"], [-34, 29, "n"], [26, 29, "n"], [34, 29, "n"], [-26, 33, "f"]],
                     block: [[-23, 42], [19, 27], [-30, 20]],
                     blockbig: [[14, 43], [26, 21], [-20, 26]],
                     snag: [[-43, 22, "b3"], [-29, 28, "b2"], [28, 43, "b3"], [-18, 33, "b1"], [30, 29, "b1"], [-26, 46, "b6"], [-33, 36, "b1"], [33, 18, "b3"], [-42, 31, "b2"], [40, 30, "b2"]],
                     slow: [[-11, 52], [-10, 23], [31, 53], [-40, 16], [9, 23], [-45, 38]],
                     slowbig: [[-44, 47], [44, 28], [31, 14], [12, 52], [41, 44], [-25, 14], [-47, 28], [-27, 52]]
                  }
               }
            };
         }
      }
      Pa.sys = null;
      class ja {
         constructor() {
            this.canvas = undefined;
            this.ctx = undefined;
            this.gradient = undefined;
            this.bg = undefined;
            this.offset = undefined;
            if (ja.sys) {
               return ja.sys;
            }
            ja.sys = this;
         }
         createBackground() {
            this.canvas = Fa.sys.createNewCanvas();
            this.ctx = this.canvas.getContext("2d");
            this.gradient = Fa.sys.createNew("div", document.body, "game-gradient");
            this.bg = Fa.sys.createNew("div", document.body, "game-bg");
            this.offset = {
               x: 0,
               y: 0
            };
         }
         updateBackground(e = 0, t = 0, s) {
            this.offset.x = this.offset.x + (s.x - e);
            this.offset.y = this.offset.y + (s.y - t);
            this.bg.style.backgroundPosition = -this.offset.x + "px " + -this.offset.y + "px";
         }
         defineCanvas() {
            const e = window.getComputedStyle(this.canvas.parentNode);
            Ma.sys.session.w = parseInt(e.getPropertyValue("width"), 10);
            Ma.sys.session.h = parseInt(e.getPropertyValue("height"), 10);
            this.canvas.style.width = Ma.sys.session.w + "px";
            this.canvas.style.height = Ma.sys.session.h + "px";
            this.canvas.width = Ma.sys.session.w;
            this.canvas.height = Ma.sys.session.h;
            Ma.sys.session.x = Math.floor(Ma.sys.session.w * 0.5);
            Ma.sys.session.y = Math.floor(Ma.sys.session.h * 0.4);
            this.ctx.imageSmoothingEnabled = false;
         }
         clearCanvas() {
            this.ctx.clearRect(0, 0, Ma.sys.session.w, Ma.sys.session.h);
         }
         drawFx(e = 0, t = 0, s = 0) {
            const i = PlayerManager.sys.sheet.fx;
            const n = i.poseData.effect;
            const o = Math.floor(e * i.fps) % n.length;
            this.draw(Da.sys.objectsImg, i, t, s, n[o]);
         }
         drawPlayerSprite(e, t = 0, s = 0, i = 0, n = 1) {
            const o = PlayerManager.sys.sheet.player;
            const r = Ma.sys.game.caught ? o.poseData.end : o.poseData[e];
            const a = Math.floor(t * o.fps) % 3;
            this.drawScaled(PlayerManager.sys.playerSprite, o, s, i, {
               x: r,
               y: o.mount[a]
            }, n);
         }
         drawPlayerMenu(e, t, s = 0, i = 0, n = 1) {
            const o = PlayerManager.sys.sheet.player;
            const r = o.character[e];
            const a = o.poseData[t];
            this.drawScaled(Da.sys.playerImg, o, s, i, {
               x: a,
               y: 0
            }, n);
            this.drawScaled(Da.sys.playerImg, o, s, i, {
               x: a,
               y: r
            }, n);
         }
         drawNpc(e, t, s, i) {
            const n = PlayerManager.sys.sheet.npc;
            const o = {
               x: n.poseData[e],
               y: t * 64
            };
            this.draw(Da.sys.objectsImg, n, s, i, o);
         }
         drawLayer(e, t, s = 0, i = 0, n = 0, o = "looping", r = undefined) {
            if (o === "hidden") {
               return;
            }
            const a = PlayerManager.sys.sheet[e];
            const l = a.poseData[t] || [];
            const c = Math.floor(n * a.fps) % l.length;
            this.draw(Da.sys.objectsImg, a, s, i, l[c]);
            if ((o === "oneshot" || o === "ending") && Math.ceil(n * a.fps) > l.length - 1) {
               switch (o) {
                  case "oneshot":
                     r.anim = "paused";
                     break;
                  case "ending":
                     r.sleep = true;
               }
            }
         }
         drawShadow(e, t, s) {
            const i = ja.sys.ctx;
            i.beginPath();
            i.arc(e, t + s, 20 - s / 12, 0, Math.PI * 2);
            i.fillStyle = "rgba(0,0,0," + (0.6 - s / 200) + ")";
            i.fill();
         }
         drawBoost(e) {
            const t = ja.sys.ctx;
            t.strokeStyle = "rgba(" + Da.sys.accent + ",0.5)";
            t.lineCap = "round";
            t.setLineDash([]);
            e.forEach(e => {
               const s = 0.5 - e.time;
               t.lineWidth = s * 6;
               t.beginPath();
               t.moveTo(e.start.x, e.start.y);
               t.lineTo(e.end.x, e.end.y);
               t.stroke();
            });
         }
         drawShield(e, t) {
            const s = Ma.sys.game.shields.current / Ma.sys.game.shields.max / 2 + 0.5;
            const i = Math.cos(Ma.sys.game.time.elapsed * 4) + 3;
            const n = Math.cos((Ma.sys.game.time.elapsed + 2) * 4) + 3;
            const o = (32 + i * 4) * s;
            const r = (50 + n * 5) * s;
            const a = ja.sys.ctx;
            a.beginPath();
            a.ellipse(e, t, o, o * 0.7, 0, 0, Math.PI * 2);
            a.strokeStyle = "rgba(" + Da.sys.accent + "," + (6 - i) / 4 + ")";
            a.lineWidth = 6 - i;
            a.stroke();
            a.beginPath();
            a.ellipse(e, t, r / 2, r / 2 * 0.7, 0, 0, Math.PI * 2);
            a.fillStyle = "rgba(" + Da.sys.accent + "," + n / 8 + ")";
            a.fill();
         }
         drawPickup(e) {
            if (e.time >= 1) {
               e.pickup = false;
               e.sleep = true;
               return;
            }
            const t = e.time % 1;
            const s = e.h / 2 * (t / 1.5 + 0.5);
            const i = e.h * Math.min(t, 0.5);
            const n = ja.sys.ctx;
            n.beginPath();
            n.arc(e.x, e.y, s, 0, Math.PI * 2);
            n.strokeStyle = "rgba(" + Da.sys.accent + "," + (1 - t) + ")";
            n.lineWidth = (1 - t) * 6;
            n.stroke();
            n.beginPath();
            n.arc(e.x, e.y, i, 0, Math.PI * 2);
            n.strokeStyle = "rgba(" + Da.sys.accent + "," + (1 - t * 2) + ")";
            n.lineWidth = (1 - t * 2) * 6;
            n.stroke();
         }
         drawHitbox(e, t) {
            const s = PlayerManager.sys.sheet[e].str;
            if (s === undefined) {
               return;
            }
            const i = s !== "crash";
            let n = Da.sys.hitbox[s];
            if (Ma.sys.session.forcedColors) {
               switch (s) {
                  case "crash":
                     n = "CanvasText";
                     break;
                  case "boost":
                     n = "GrayText";
                     break;
                  case "avoid":
                     n = "LinkText";
               }
            }
            const o = ja.sys.ctx;
            o.beginPath();
            o.lineWidth = 4;
            o.strokeStyle = n + "";
            if (i) {
               o.setLineDash([8]);
            } else {
               o.setLineDash([]);
            }
            o.strokeRect(Math.floor(t.x) + 1, Math.floor(t.y) + 1, t.w - 2, t.h - 2);
         }
         drawBoundaries() {
            const e = Ma.sys.session.x - Ma.sys.game.dist.x;
            const t = PlayerManager.sys.boundary[Ma.sys.session.settings.mode];
            const s = ja.sys.ctx;
            s.beginPath();
            s.rect(0, 0, e - t, Ma.sys.session.h);
            s.rect(e + t, 0, Ma.sys.session.w, Ma.sys.session.h);
            s.fillStyle = "rgba(" + Da.sys.boundary + ")";
            s.fill();
         }
         drawScaled(e, t, s, i, n, o = 1) {
            ja.sys.ctx.drawImage(e, n.x, n.y, t.w, t.h, Math.floor(s - t.w / (2 / o)), Math.floor(i - t.h / (2 / o)), t.w * o, t.h * o);
         }
         draw(e, t, s, i, n) {
            ja.sys.ctx.drawImage(e, n.x, n.y, t.w, t.h, Math.floor(s - t.w / 2), Math.floor(i - t.h / 2), t.w, t.h);
         }
      }
      ja.sys = null;
      class Da {
         constructor() {
            this.objectsImg = null;
            this.playerImg = null;
            this.bgImg = null;
            this.bgSize = undefined;
            this.objectsTemp = null;
            this.playerTemp = null;
            this.bgTemp = null;
            this.gradient = undefined;
            this.hitbox = undefined;
            this.boundary = undefined;
            this.accent = undefined;
            if (Da.sys) {
               return Da.sys;
            }
            Da.sys = this;
            this.setupImages();
         }
         setupImages() {
            this.objectsImg = new Image();
            this.playerImg = new Image();
            this.bgImg = new Image();
            this.bgSize = 256;
         }
         loadNewTheme(e) {
            const t = Da.allThemes[e];
            this.objectsTemp = new Image();
            this.objectsTemp.src = t.folder + "/objects.png";
            this.playerTemp = new Image();
            this.playerTemp.src = t.folder + "/player.png";
            this.bgTemp = new Image();
            this.bgTemp.src = t.folder + "/bg.png";
         }
         setNewTheme(e) {
            const t = Da.allThemes[e];
            this.objectsImg.src = this.objectsTemp.src;
            this.playerImg.src = this.playerTemp.src;
            this.bgImg.src = this.bgTemp.src;
            this.gradient = t.gradient;
            this.hitbox = t.hitbox;
            this.boundary = t.boundary;
            this.accent = t.accent;
            ja.sys.bg.style.backgroundImage = "url(" + this.bgImg.src + ")";
            ja.sys.bg.style.backgroundSize = this.bgSize + "px " + this.bgSize + "px";
            const s = this.gradient.start.join(", ");
            const i = this.gradient.end.join(", ");
            ja.sys.gradient.style.background = "linear-gradient(180deg, rgb(" + s + ") 0%, rgb(" + i + ") 100%)";
            Ma.sys.session.settings.theme = e;
            PlayerManager.sys.createPlayerSprite();
            Ma.sys.saveSessionSettings();
            delete this.objectsTemp;
            delete this.playerTemp;
            delete this.bgTemp;
         }
      }
      Da.sys = null;
      Da.allThemes = {
         ...ba
      };
      class PlayerManager {
         constructor() {
            this.playerSprite = new Image();
            this.sheet = {
               player: {
                  w: 64,
                  h: 64,
                  fps: 6,
                  str: "crash",
                  hitbox: {
                     x: 20,
                     y: 32,
                     w: 24,
                     h: 24
                  },
                  poseData: {
                     stop: 0,
                     left: 64,
                     downleft: 128,
                     down: 192,
                     downright: 256,
                     right: 320,
                     crash: 384,
                     end: 448,
                     air1: 512,
                     air2: 576,
                     chase: 192
                  },
                  mount: [0, 64, 128],
                  friend: 192,
                  character: {
                     player1: 256,
                     player2: 320,
                     player3: 384,
                     player4: 448,
                     player5: 512,
                     player6: 576,
                     player7: 640,
                     konami: 704,
                     linux: 768
                  }
               },
               npc: {
                  w: 64,
                  h: 64,
                  fps: 0,
                  str: "crash",
                  group: "npc",
                  hitbox: {
                     x: 20,
                     y: 32,
                     w: 24,
                     h: 24
                  },
                  poseData: {
                     left: 1152,
                     right: 1216,
                     crash: 1280
                  }
               },
               foe: {
                  w: 128,
                  h: 128,
                  fps: 6,
                  str: "crash",
                  group: "foe",
                  hitbox: {
                     x: 32,
                     y: 80,
                     w: 64,
                     h: 40
                  },
                  poseData: {
                     chase: [{
                        x: 1152,
                        y: 256
                     }, {
                        x: 1280,
                        y: 256
                     }, {
                        x: 1408,
                        y: 256
                     }, {
                        x: 1536,
                        y: 256
                     }],
                     crash: [{
                        x: 1664,
                        y: 256
                     }, {
                        x: 1792,
                        y: 256
                     }],
                     end: [{
                        x: 1152,
                        y: 384
                     }, {
                        x: 1280,
                        y: 384
                     }, {
                        x: 1408,
                        y: 384
                     }, {
                        x: 1536,
                        y: 384
                     }, {
                        x: 1664,
                        y: 384
                     }, {
                        x: 1792,
                        y: 384
                     }]
                  }
               },
               wall: {
                  w: 64,
                  h: 64,
                  fps: 0,
                  str: "crash",
                  fx: 12,
                  group: "top",
                  hitbox: {
                     x: 6,
                     y: 16,
                     w: 52,
                     h: 32
                  },
                  poseData: {
                     sw: [{
                        x: 0,
                        y: 448
                     }],
                     s: [{
                        x: 64,
                        y: 448
                     }],
                     se: [{
                        x: 128,
                        y: 448
                     }],
                     w: [{
                        x: 192,
                        y: 448
                     }],
                     e: [{
                        x: 256,
                        y: 448
                     }],
                     n: [{
                        x: 320,
                        y: 448
                     }],
                     b: [{
                        x: 384,
                        y: 448
                     }],
                     f1: [{
                        x: 448,
                        y: 448
                     }],
                     f2: [{
                        x: 512,
                        y: 448
                     }],
                     f3: [{
                        x: 576,
                        y: 448
                     }]
                  }
               },
               wallDecor: {
                  w: 32,
                  h: 32,
                  fps: 0,
                  poseData: {
                     a: [{
                        x: 384,
                        y: 416
                     }],
                     b: [{
                        x: 416,
                        y: 416
                     }],
                     c: [{
                        x: 448,
                        y: 416
                     }],
                     d: [{
                        x: 480,
                        y: 416
                     }],
                     e: [{
                        x: 512,
                        y: 416
                     }],
                     f: [{
                        x: 544,
                        y: 416
                     }],
                     g: [{
                        x: 576,
                        y: 416
                     }],
                     h: [{
                        x: 608,
                        y: 416
                     }]
                  }
               },
               snag: {
                  w: 64,
                  h: 64,
                  fps: 6,
                  str: "crash",
                  fx: 12,
                  group: "top",
                  hitbox: {
                     x: 16,
                     y: 36,
                     w: 32,
                     h: 20
                  },
                  poseData: {
                     side1: [{
                        x: 0,
                        y: 64
                     }],
                     side2: [{
                        x: 64,
                        y: 64
                     }],
                     hurdle1: [{
                        x: 128,
                        y: 64
                     }],
                     hurdle2: [{
                        x: 192,
                        y: 64
                     }],
                     vehicle1: [{
                        x: 256,
                        y: 64
                     }],
                     vehicle2: [{
                        x: 320,
                        y: 64
                     }],
                     common1: [{
                        x: 384,
                        y: 64
                     }],
                     common2: [{
                        x: 448,
                        y: 64
                     }],
                     common3: [{
                        x: 512,
                        y: 64
                     }],
                     common4: [{
                        x: 576,
                        y: 64
                     }],
                     common5: [{
                        x: 640,
                        y: 64
                     }],
                     warn1: [{
                        x: 704,
                        y: 64
                     }],
                     isle1: [{
                        x: 768,
                        y: 64
                     }],
                     isle2: [{
                        x: 832,
                        y: 64
                     }],
                     isle3: [{
                        x: 896,
                        y: 64
                     }],
                     special1: [{
                        x: 1536,
                        y: 192
                     }],
                     special2: [{
                        x: 1600,
                        y: 192
                     }],
                     special3: [{
                        x: 1664,
                        y: 192
                     }],
                     special4: [{
                        x: 1728,
                        y: 192
                     }]
                  }
               },
               snagsml: {
                  w: 64,
                  h: 64,
                  fps: 6,
                  str: "crash",
                  fx: 12,
                  group: "top",
                  hitbox: {
                     x: 22,
                     y: 36,
                     w: 20,
                     h: 20
                  },
                  poseData: {
                     debris1: [{
                        x: 384,
                        y: 0
                     }],
                     debris2: [{
                        x: 448,
                        y: 0
                     }],
                     beacon1: [{
                        x: 512,
                        y: 0
                     }],
                     point1: [{
                        x: 576,
                        y: 0
                     }],
                     rare1: [{
                        x: 640,
                        y: 0
                     }],
                     decor1: [{
                        x: 704,
                        y: 0
                     }],
                     decor2: [{
                        x: 768,
                        y: 0
                     }],
                     decor3: [{
                        x: 832,
                        y: 0
                     }],
                     decor4: [{
                        x: 896,
                        y: 0
                     }]
                  }
               },
               snagtall: {
                  w: 64,
                  h: 128,
                  fps: 6,
                  str: "crash",
                  fx: 36,
                  group: "top",
                  hitbox: {
                     x: 12,
                     y: 88,
                     w: 40,
                     h: 24
                  },
                  poseData: {
                     tall1: [{
                        x: 640,
                        y: 384
                     }],
                     tall2: [{
                        x: 704,
                        y: 384
                     }],
                     tall3: [{
                        x: 768,
                        y: 384
                     }],
                     tall4: [{
                        x: 832,
                        y: 384
                     }],
                     tall5: [{
                        x: 896,
                        y: 384
                     }],
                     tall6: [{
                        x: 768,
                        y: 256
                     }],
                     tall7: [{
                        x: 832,
                        y: 256
                     }],
                     tall8: [{
                        x: 896,
                        y: 256
                     }]
                  }
               },
               spin: {
                  w: 32,
                  h: 32,
                  fps: 0,
                  str: "avoid",
                  fx: 4,
                  group: "top",
                  hitbox: {
                     x: 8,
                     y: 20,
                     w: 16,
                     h: 12
                  },
                  poseData: {
                     spin1: [{
                        x: 384,
                        y: 384
                     }],
                     spin2: [{
                        x: 416,
                        y: 384
                     }],
                     spin3: [{
                        x: 448,
                        y: 384
                     }],
                     spin4: [{
                        x: 480,
                        y: 384
                     }],
                     spin5: [{
                        x: 512,
                        y: 384
                     }]
                  }
               },
               spiral: {
                  w: 128,
                  h: 128,
                  fps: 6,
                  str: "avoid",
                  group: "btm",
                  hitbox: {
                     x: 16,
                     y: 32,
                     w: 96,
                     h: 64
                  },
                  poseData: {
                     spiral1: [{
                        x: 0,
                        y: 128
                     }, {
                        x: 128,
                        y: 128
                     }, {
                        x: 256,
                        y: 128
                     }]
                  }
               },
               block: {
                  w: 128,
                  h: 128,
                  fps: 0,
                  str: "crash",
                  group: "top",
                  hitbox: {
                     x: 24,
                     y: 64,
                     w: 80,
                     h: 40
                  },
                  poseData: {
                     block1: [{
                        x: 384,
                        y: 256
                     }],
                     block2: [{
                        x: 512,
                        y: 256
                     }],
                     block3: [{
                        x: 640,
                        y: 256
                     }]
                  }
               },
               blockbig: {
                  w: 192,
                  h: 128,
                  fps: 0,
                  str: "crash",
                  group: "top",
                  hitbox: {
                     x: 24,
                     y: 64,
                     w: 144,
                     h: 40
                  },
                  poseData: {
                     blockbig1: [{
                        x: 384,
                        y: 128
                     }],
                     blockbig2: [{
                        x: 576,
                        y: 128
                     }],
                     blockbig3: [{
                        x: 768,
                        y: 128
                     }]
                  }
               },
               marker: {
                  w: 64,
                  h: 64,
                  fps: 0,
                  str: "crash",
                  fx: 12,
                  group: "top",
                  hitbox: {
                     x: 20,
                     y: 36,
                     w: 24,
                     h: 20
                  },
                  poseData: {
                     default: [{
                        x: 1792,
                        y: 192
                     }],
                     pass: [{
                        x: 1856,
                        y: 192
                     }],
                     fail: [{
                        x: 1792,
                        y: 192
                     }]
                  }
               },
               guide: {
                  w: 32,
                  h: 32,
                  fps: 0,
                  str: "avoid",
                  fx: 4,
                  group: "top",
                  hitbox: {
                     x: 4,
                     y: 20,
                     w: 24,
                     h: 12
                  },
                  poseData: {
                     default: [{
                        x: 544,
                        y: 384
                     }],
                     pass: [{
                        x: 576,
                        y: 384
                     }],
                     fail: [{
                        x: 608,
                        y: 384
                     }]
                  }
               },
               slow: {
                  w: 64,
                  h: 64,
                  fps: 6,
                  str: "avoid",
                  group: "btm",
                  hitbox: {
                     x: 4,
                     y: 8,
                     w: 56,
                     h: 48
                  },
                  poseData: {
                     slow1: [{
                        x: 1536,
                        y: 0
                     }, {
                        x: 1536,
                        y: 64
                     }, {
                        x: 1536,
                        y: 128
                     }],
                     slow2: [{
                        x: 1600,
                        y: 0
                     }, {
                        x: 1600,
                        y: 64
                     }, {
                        x: 1600,
                        y: 128
                     }],
                     slow3: [{
                        x: 1664,
                        y: 0
                     }, {
                        x: 1664,
                        y: 64
                     }, {
                        x: 1664,
                        y: 128
                     }]
                  }
               },
               slowbig: {
                  w: 192,
                  h: 64,
                  fps: 6,
                  str: "avoid",
                  group: "btm",
                  hitbox: {
                     x: 8,
                     y: 8,
                     w: 176,
                     h: 48
                  },
                  poseData: {
                     slowbig1: [{
                        x: 1536,
                        y: 0
                     }, {
                        x: 1536,
                        y: 64
                     }, {
                        x: 1536,
                        y: 128
                     }]
                  }
               },
               bump: {
                  w: 64,
                  h: 64,
                  fps: 6,
                  str: "avoid",
                  group: "btm",
                  hitbox: {
                     x: 4,
                     y: 8,
                     w: 56,
                     h: 48
                  },
                  poseData: {
                     bump1: [{
                        x: 1728,
                        y: 0
                     }, {
                        x: 1728,
                        y: 64
                     }, {
                        x: 1728,
                        y: 128
                     }],
                     bump2: [{
                        x: 1792,
                        y: 0
                     }, {
                        x: 1792,
                        y: 64
                     }, {
                        x: 1792,
                        y: 128
                     }],
                     bump3: [{
                        x: 1856,
                        y: 0
                     }, {
                        x: 1856,
                        y: 64
                     }, {
                        x: 1856,
                        y: 128
                     }]
                  }
               },
               bumpbig: {
                  w: 192,
                  h: 64,
                  fps: 6,
                  str: "avoid",
                  group: "btm",
                  hitbox: {
                     x: 8,
                     y: 8,
                     w: 176,
                     h: 48
                  },
                  poseData: {
                     bumpbig1: [{
                        x: 1728,
                        y: 0
                     }, {
                        x: 1728,
                        y: 64
                     }, {
                        x: 1728,
                        y: 128
                     }]
                  }
               },
               ramp: {
                  w: 64,
                  h: 64,
                  fps: 6,
                  str: "boost",
                  fx: 12,
                  group: "top",
                  hitbox: {
                     x: 8,
                     y: 8,
                     w: 48,
                     h: 24
                  },
                  poseData: {
                     ramp: [{
                        x: 960,
                        y: 0
                     }, {
                        x: 960,
                        y: 64
                     }, {
                        x: 960,
                        y: 128
                     }, {
                        x: 960,
                        y: 192
                     }]
                  }
               },
               boost: {
                  w: 64,
                  h: 64,
                  fps: 6,
                  str: "boost",
                  fx: 12,
                  group: "top",
                  hitbox: {
                     x: 0,
                     y: 0,
                     w: 64,
                     h: 64
                  },
                  poseData: {
                     boost: [{
                        x: 1024,
                        y: 0
                     }, {
                        x: 1024,
                        y: 64
                     }, {
                        x: 1024,
                        y: 128
                     }, {
                        x: 1024,
                        y: 192
                     }]
                  }
               },
               life: {
                  w: 64,
                  h: 64,
                  fps: 6,
                  str: "boost",
                  fx: 12,
                  group: "top",
                  hitbox: {
                     x: 0,
                     y: 0,
                     w: 64,
                     h: 64
                  },
                  poseData: {
                     life: [{
                        x: 1088,
                        y: 0
                     }, {
                        x: 1088,
                        y: 64
                     }, {
                        x: 1088,
                        y: 128
                     }, {
                        x: 1088,
                        y: 192
                     }]
                  }
               },
               coin: {
                  w: 64,
                  h: 64,
                  fps: 6,
                  str: "boost",
                  fx: 12,
                  group: "top",
                  hitbox: {
                     x: 0,
                     y: 0,
                     w: 64,
                     h: 64
                  },
                  poseData: {
                     coin: [{
                        x: 960,
                        y: 256
                     }, {
                        x: 960,
                        y: 320
                     }, {
                        x: 960,
                        y: 384
                     }, {
                        x: 960,
                        y: 448
                     }]
                  }
               },
               friend: {
                  w: 64,
                  h: 64,
                  fps: 6,
                  str: "boost",
                  fx: 12,
                  group: "top",
                  hitbox: {
                     x: -32,
                     y: -32,
                     w: 128,
                     h: 128
                  },
                  poseData: {
                     friend: [{
                        x: 1024,
                        y: 256
                     }, {
                        x: 1024,
                        y: 320
                     }, {
                        x: 1024,
                        y: 384
                     }, {
                        x: 1024,
                        y: 448
                     }],
                     crash: [{
                        x: 1024,
                        y: 256
                     }]
                  }
               },
               lure: {
                  w: 64,
                  h: 64,
                  fps: 6,
                  str: "avoid",
                  fx: 12,
                  group: "top",
                  hitbox: {
                     x: -64,
                     y: -64,
                     w: 192,
                     h: 192
                  },
                  poseData: {
                     lure: [{
                        x: 1088,
                        y: 256
                     }, {
                        x: 1088,
                        y: 320
                     }, {
                        x: 1088,
                        y: 384
                     }, {
                        x: 1088,
                        y: 448
                     }]
                  }
               },
               ambient: {
                  w: 64,
                  h: 64,
                  fps: 6,
                  fx: 12,
                  group: "btm",
                  hitbox: {
                     x: 0,
                     y: 0,
                     w: 64,
                     h: 64
                  },
                  poseData: {
                     ambient1: [{
                        x: 1344,
                        y: 0
                     }, {
                        x: 1344,
                        y: 64
                     }, {
                        x: 1344,
                        y: 128
                     }, {
                        x: 1344,
                        y: 192
                     }],
                     ambient2: [{
                        x: 1408,
                        y: 0
                     }, {
                        x: 1408,
                        y: 64
                     }, {
                        x: 1408,
                        y: 128
                     }, {
                        x: 1408,
                        y: 192
                     }],
                     ambient3: [{
                        x: 1472,
                        y: 0
                     }, {
                        x: 1472,
                        y: 64
                     }, {
                        x: 1472,
                        y: 128
                     }, {
                        x: 1472,
                        y: 192
                     }]
                  }
               },
               finish: {
                  w: 384,
                  h: 192,
                  fps: 0,
                  str: "boost",
                  group: "top",
                  hitbox: {
                     x: 0,
                     y: 128,
                     w: 384,
                     h: 192
                  },
                  poseData: {
                     default: [{
                        x: 0,
                        y: 256
                     }]
                  }
               },
               checkpoint: {
                  w: 384,
                  h: 192,
                  fps: 0,
                  str: "boost",
                  group: "top",
                  hitbox: {
                     x: 64,
                     y: 128,
                     w: 256,
                     h: 64
                  },
                  poseData: {
                     default: [{
                        x: 0,
                        y: 256
                     }]
                  }
               },
               gate: {
                  w: 192,
                  h: 64,
                  str: "boost",
                  group: "btm",
                  hitbox: {
                     x: 0,
                     y: 0,
                     w: 192,
                     h: 64
                  }
               },
               swap: {
                  w: 256,
                  h: 256,
                  str: "boost",
                  group: "btm",
                  hitbox: {
                     x: 0,
                     y: 0,
                     w: 256,
                     h: 256
                  }
               },
               fx: {
                  w: 96,
                  h: 64,
                  fps: 6,
                  poseData: {
                     effect: [{
                        x: 96,
                        y: 0
                     }, {
                        x: 192,
                        y: 0
                     }, {
                        x: 288,
                        y: 0
                     }]
                  }
               }
            };
            this.boundary = {
               [GameModeIDs.ZigZag]: 960,
               [GameModeIDs.TimeTrial]: 576,
               [GameModeIDs.Endless]: undefined
            };
            this.characterList = undefined;
            this.selectionList = undefined;
            if (PlayerManager.sys) {
               return PlayerManager.sys;
            }
            PlayerManager.sys = this;
            this.characterList = Object.keys(this.sheet.player.character);
            this.selectionList = ["player1", "player2", "player3", "player4", "player5", "player6", "player7"];
            if (LoadTimeData.getBoolean("isLinuxTuxEnabled") === false) {
               this.characterList.forEach((id, index) => {
                  if (id === "linux") {
                     this.characterList.splice(index, 1);
                  }
               });
            }
            if (LoadTimeData.getBoolean("isLinuxTuxEnabled") === true) {
               this.selectionList = ["linux", "player1", "player2", "player3", "player4", "player5", "player6", "player7"];
            }
         }
         createPlayerSprite() {
            const e = 640;
            const playerCanvas = document.createElement("canvas");
            playerCanvas.width = e;
            playerCanvas.height = 192;
            const ctx = playerCanvas.getContext("2d");
            ctx.imageSmoothingEnabled = false;
            ctx.drawImage(Da.sys.playerImg, 0, 0, e, 192, 0, 0, e, 192);

            const boardCanvas = document.createElement("canvas");
            boardCanvas.width = e;
            boardCanvas.height = 64;
            boardCanvas.getContext("2d").imageSmoothingEnabled = false;

            const n = PlayerManager.sys.characterList[Ma.sys.session.settings.character];
            const o = this.sheet.player.character[n];
            this.applyLayers(ctx, Da.sys.playerImg, o, e, 64);
            if (Ma.sys.game.friend) {
               const t = this.sheet.player.friend;
               this.applyLayers(ctx, Da.sys.playerImg, t, e, 64);
            }
            const r = new Image();
            r.src = playerCanvas.toDataURL("image/png");
            (async () => {
               await r.decode();
               this.playerSprite.src = r.src;
            })();
         }
         applyLayers(e, t, s, i, n) {
            e.drawImage(t, 0, s, i, n, 0, 0, i, n);
            e.drawImage(t, 0, s, i, n, 0, n, i, n);
            e.drawImage(t, 0, s, i, n, 0, n * 2, i, n);
         }
      }
      PlayerManager.sys = null;
      const Aa = e => React.createElement("svg", {
         width: "32",
         height: "14",
         viewBox: "0 0 32 14",
         className: e.className,
         fill: "none",
         xmlns: "http://www.w3.org/2000/svg"
      }, React.createElement("g", {
         clipPath: "url(#clip0_351_34580)"
      }, React.createElement("path", {
         d: "M5.12549 5.75V4.1875H6.68799V5.75H5.12549ZM2.00049 12V1.0625H3.56299V2.625H5.12549V4.1875H3.56299V12H2.00049ZM8.25049 12V7.3125H6.68799V5.75H8.25049V1.0625H9.81299V12H8.25049ZM12.938 12V10.4375H19.188V12H12.938ZM11.3755 10.4375V5.75H12.938V7.3125H17.6255V5.75H19.188V8.875H12.938V10.4375H11.3755ZM12.938 5.75V4.1875H17.6255V5.75H12.938ZM20.7505 10.4375V4.1875H22.313V10.4375H20.7505ZM22.313 12V10.4375H23.8755V7.3125H25.438V10.4375H27.0005V4.1875H28.563V12H22.313Z",
         fill: "black"
      }), React.createElement("path", {
         d: "M5.12549 5.75H3.87549V7H5.12549V5.75ZM5.12549 4.1875V2.9375H3.87549V4.1875H5.12549ZM6.68799 4.1875H7.93799V2.9375H6.68799V4.1875ZM6.68799 5.75V7H7.93799V5.75H6.68799ZM2.00049 12H0.750488V13.25H2.00049V12ZM2.00049 1.0625V-0.1875H0.750488V1.0625H2.00049ZM3.56299 1.0625H4.81299V-0.1875H3.56299V1.0625ZM3.56299 2.625H2.31299V3.875H3.56299V2.625ZM5.12549 2.625H6.37549V1.375H5.12549V2.625ZM5.12549 4.1875V5.4375H6.37549V4.1875H5.12549ZM3.56299 4.1875V2.9375H2.31299V4.1875H3.56299ZM3.56299 12V13.25H4.81299V12H3.56299ZM8.25049 12H7.00049V13.25H8.25049V12ZM8.25049 7.3125H9.50049V6.0625H8.25049V7.3125ZM6.68799 7.3125H5.43799V8.5625H6.68799V7.3125ZM6.68799 5.75V4.5H5.43799V5.75H6.68799ZM8.25049 5.75V7H9.50049V5.75H8.25049ZM8.25049 1.0625V-0.1875H7.00049V1.0625H8.25049ZM9.81299 1.0625H11.063V-0.1875H9.81299V1.0625ZM9.81299 12V13.25H11.063V12H9.81299ZM6.37549 5.75V4.1875H3.87549V5.75H6.37549ZM5.12549 5.4375H6.68799V2.9375H5.12549V5.4375ZM5.43799 4.1875V5.75H7.93799V4.1875H5.43799ZM6.68799 4.5H5.12549V7H6.68799V4.5ZM3.25049 12V1.0625H0.750488V12H3.25049ZM2.00049 2.3125H3.56299V-0.1875H2.00049V2.3125ZM2.31299 1.0625V2.625H4.81299V1.0625H2.31299ZM3.56299 3.875H5.12549V1.375H3.56299V3.875ZM3.87549 2.625V4.1875H6.37549V2.625H3.87549ZM5.12549 2.9375H3.56299V5.4375H5.12549V2.9375ZM2.31299 4.1875V12H4.81299V4.1875H2.31299ZM3.56299 10.75H2.00049V13.25H3.56299V10.75ZM9.50049 12V7.3125H7.00049V12H9.50049ZM8.25049 6.0625H6.68799V8.5625H8.25049V6.0625ZM7.93799 7.3125V5.75H5.43799V7.3125H7.93799ZM6.68799 7H8.25049V4.5H6.68799V7ZM9.50049 5.75V1.0625H7.00049V5.75H9.50049ZM8.25049 2.3125H9.81299V-0.1875H8.25049V2.3125ZM8.56299 1.0625V12H11.063V1.0625H8.56299ZM9.81299 10.75H8.25049V13.25H9.81299V10.75ZM12.938 12H11.688V13.25H12.938V12ZM12.938 10.4375V9.1875H11.688V10.4375H12.938ZM19.188 10.4375H20.438V9.1875H19.188V10.4375ZM19.188 12V13.25H20.438V12H19.188ZM11.3755 10.4375H10.1255V11.6875H11.3755V10.4375ZM11.3755 5.75V4.5H10.1255V5.75H11.3755ZM12.938 5.75H14.188V4.5H12.938V5.75ZM12.938 7.3125H11.688V8.5625H12.938V7.3125ZM17.6255 7.3125V8.5625H18.8755V7.3125H17.6255ZM17.6255 5.75V4.5H16.3755V5.75H17.6255ZM19.188 5.75H20.438V4.5H19.188V5.75ZM19.188 8.875V10.125H20.438V8.875H19.188ZM12.938 8.875V7.625H11.688V8.875H12.938ZM12.938 10.4375V11.6875H14.188V10.4375H12.938ZM12.938 5.75H11.688V7H12.938V5.75ZM12.938 4.1875V2.9375H11.688V4.1875H12.938ZM17.6255 4.1875H18.8755V2.9375H17.6255V4.1875ZM17.6255 5.75V7H18.8755V5.75H17.6255ZM14.188 12V10.4375H11.688V12H14.188ZM12.938 11.6875H19.188V9.1875H12.938V11.6875ZM17.938 10.4375V12H20.438V10.4375H17.938ZM19.188 10.75H12.938V13.25H19.188V10.75ZM12.6255 10.4375V5.75H10.1255V10.4375H12.6255ZM11.3755 7H12.938V4.5H11.3755V7ZM11.688 5.75V7.3125H14.188V5.75H11.688ZM12.938 8.5625H17.6255V6.0625H12.938V8.5625ZM18.8755 7.3125V5.75H16.3755V7.3125H18.8755ZM17.6255 7H19.188V4.5H17.6255V7ZM17.938 5.75V8.875H20.438V5.75H17.938ZM19.188 7.625H12.938V10.125H19.188V7.625ZM11.688 8.875V10.4375H14.188V8.875H11.688ZM12.938 9.1875H11.3755V11.6875H12.938V9.1875ZM14.188 5.75V4.1875H11.688V5.75H14.188ZM12.938 5.4375H17.6255V2.9375H12.938V5.4375ZM16.3755 4.1875V5.75H18.8755V4.1875H16.3755ZM17.6255 4.5H12.938V7H17.6255V4.5ZM20.7505 10.4375H19.5005V11.6875H20.7505V10.4375ZM20.7505 4.1875V2.9375H19.5005V4.1875H20.7505ZM22.313 4.1875H23.563V2.9375H22.313V4.1875ZM22.313 10.4375V11.6875H23.563V10.4375H22.313ZM22.313 12H21.063V13.25H22.313V12ZM22.313 10.4375V9.1875H21.063V10.4375H22.313ZM23.8755 10.4375V11.6875H25.1255V10.4375H23.8755ZM23.8755 7.3125V6.0625H22.6255V7.3125H23.8755ZM25.438 7.3125H26.688V6.0625H25.438V7.3125ZM25.438 10.4375H24.188V11.6875H25.438V10.4375ZM27.0005 10.4375V11.6875H28.2505V10.4375H27.0005ZM27.0005 4.1875V2.9375H25.7505V4.1875H27.0005ZM28.563 4.1875H29.813V2.9375H28.563V4.1875ZM28.563 12V13.25H29.813V12H28.563ZM22.0005 10.4375V4.1875H19.5005V10.4375H22.0005ZM20.7505 5.4375H22.313V2.9375H20.7505V5.4375ZM21.063 4.1875V10.4375H23.563V4.1875H21.063ZM22.313 9.1875H20.7505V11.6875H22.313V9.1875ZM23.563 12V10.4375H21.063V12H23.563ZM22.313 11.6875H23.8755V9.1875H22.313V11.6875ZM25.1255 10.4375V7.3125H22.6255V10.4375H25.1255ZM23.8755 8.5625H25.438V6.0625H23.8755V8.5625ZM24.188 7.3125V10.4375H26.688V7.3125H24.188ZM25.438 11.6875H27.0005V9.1875H25.438V11.6875ZM28.2505 10.4375V4.1875H25.7505V10.4375H28.2505ZM27.0005 5.4375H28.563V2.9375H27.0005V5.4375ZM27.313 4.1875V12H29.813V4.1875H27.313ZM28.563 10.75H22.313V13.25H28.563V10.75Z",
         fill: "black"
      }), React.createElement("path", {
         d: "M5.12549 5.75V4.1875H6.68799V5.75H5.12549ZM2.00049 12V1.0625H3.56299V2.625H5.12549V4.1875H3.56299V12H2.00049ZM8.25049 12V7.3125H6.68799V5.75H8.25049V1.0625H9.81299V12H8.25049ZM12.938 12V10.4375H19.188V12H12.938ZM11.3755 10.4375V5.75H12.938V7.3125H17.6255V5.75H19.188V8.875H12.938V10.4375H11.3755ZM12.938 5.75V4.1875H17.6255V5.75H12.938ZM20.7505 10.4375V4.1875H22.313V10.4375H20.7505ZM22.313 12V10.4375H23.8755V7.3125H25.438V10.4375H27.0005V4.1875H28.563V12H22.313Z",
         fill: "black"
      }), React.createElement("path", {
         d: "M5.12549 5.75H3.87549V7H5.12549V5.75ZM5.12549 4.1875V2.9375H3.87549V4.1875H5.12549ZM6.68799 4.1875H7.93799V2.9375H6.68799V4.1875ZM6.68799 5.75V7H7.93799V5.75H6.68799ZM2.00049 12H0.750488V13.25H2.00049V12ZM2.00049 1.0625V-0.1875H0.750488V1.0625H2.00049ZM3.56299 1.0625H4.81299V-0.1875H3.56299V1.0625ZM3.56299 2.625H2.31299V3.875H3.56299V2.625ZM5.12549 2.625H6.37549V1.375H5.12549V2.625ZM5.12549 4.1875V5.4375H6.37549V4.1875H5.12549ZM3.56299 4.1875V2.9375H2.31299V4.1875H3.56299ZM3.56299 12V13.25H4.81299V12H3.56299ZM8.25049 12H7.00049V13.25H8.25049V12ZM8.25049 7.3125H9.50049V6.0625H8.25049V7.3125ZM6.68799 7.3125H5.43799V8.5625H6.68799V7.3125ZM6.68799 5.75V4.5H5.43799V5.75H6.68799ZM8.25049 5.75V7H9.50049V5.75H8.25049ZM8.25049 1.0625V-0.1875H7.00049V1.0625H8.25049ZM9.81299 1.0625H11.063V-0.1875H9.81299V1.0625ZM9.81299 12V13.25H11.063V12H9.81299ZM6.37549 5.75V4.1875H3.87549V5.75H6.37549ZM5.12549 5.4375H6.68799V2.9375H5.12549V5.4375ZM5.43799 4.1875V5.75H7.93799V4.1875H5.43799ZM6.68799 4.5H5.12549V7H6.68799V4.5ZM3.25049 12V1.0625H0.750488V12H3.25049ZM2.00049 2.3125H3.56299V-0.1875H2.00049V2.3125ZM2.31299 1.0625V2.625H4.81299V1.0625H2.31299ZM3.56299 3.875H5.12549V1.375H3.56299V3.875ZM3.87549 2.625V4.1875H6.37549V2.625H3.87549ZM5.12549 2.9375H3.56299V5.4375H5.12549V2.9375ZM2.31299 4.1875V12H4.81299V4.1875H2.31299ZM3.56299 10.75H2.00049V13.25H3.56299V10.75ZM9.50049 12V7.3125H7.00049V12H9.50049ZM8.25049 6.0625H6.68799V8.5625H8.25049V6.0625ZM7.93799 7.3125V5.75H5.43799V7.3125H7.93799ZM6.68799 7H8.25049V4.5H6.68799V7ZM9.50049 5.75V1.0625H7.00049V5.75H9.50049ZM8.25049 2.3125H9.81299V-0.1875H8.25049V2.3125ZM8.56299 1.0625V12H11.063V1.0625H8.56299ZM9.81299 10.75H8.25049V13.25H9.81299V10.75ZM12.938 12H11.688V13.25H12.938V12ZM12.938 10.4375V9.1875H11.688V10.4375H12.938ZM19.188 10.4375H20.438V9.1875H19.188V10.4375ZM19.188 12V13.25H20.438V12H19.188ZM11.3755 10.4375H10.1255V11.6875H11.3755V10.4375ZM11.3755 5.75V4.5H10.1255V5.75H11.3755ZM12.938 5.75H14.188V4.5H12.938V5.75ZM12.938 7.3125H11.688V8.5625H12.938V7.3125ZM17.6255 7.3125V8.5625H18.8755V7.3125H17.6255ZM17.6255 5.75V4.5H16.3755V5.75H17.6255ZM19.188 5.75H20.438V4.5H19.188V5.75ZM19.188 8.875V10.125H20.438V8.875H19.188ZM12.938 8.875V7.625H11.688V8.875H12.938ZM12.938 10.4375V11.6875H14.188V10.4375H12.938ZM12.938 5.75H11.688V7H12.938V5.75ZM12.938 4.1875V2.9375H11.688V4.1875H12.938ZM17.6255 4.1875H18.8755V2.9375H17.6255V4.1875ZM17.6255 5.75V7H18.8755V5.75H17.6255ZM14.188 12V10.4375H11.688V12H14.188ZM12.938 11.6875H19.188V9.1875H12.938V11.6875ZM17.938 10.4375V12H20.438V10.4375H17.938ZM19.188 10.75H12.938V13.25H19.188V10.75ZM12.6255 10.4375V5.75H10.1255V10.4375H12.6255ZM11.3755 7H12.938V4.5H11.3755V7ZM11.688 5.75V7.3125H14.188V5.75H11.688ZM12.938 8.5625H17.6255V6.0625H12.938V8.5625ZM18.8755 7.3125V5.75H16.3755V7.3125H18.8755ZM17.6255 7H19.188V4.5H17.6255V7ZM17.938 5.75V8.875H20.438V5.75H17.938ZM19.188 7.625H12.938V10.125H19.188V7.625ZM11.688 8.875V10.4375H14.188V8.875H11.688ZM12.938 9.1875H11.3755V11.6875H12.938V9.1875ZM14.188 5.75V4.1875H11.688V5.75H14.188ZM12.938 5.4375H17.6255V2.9375H12.938V5.4375ZM16.3755 4.1875V5.75H18.8755V4.1875H16.3755ZM17.6255 4.5H12.938V7H17.6255V4.5ZM20.7505 10.4375H19.5005V11.6875H20.7505V10.4375ZM20.7505 4.1875V2.9375H19.5005V4.1875H20.7505ZM22.313 4.1875H23.563V2.9375H22.313V4.1875ZM22.313 10.4375V11.6875H23.563V10.4375H22.313ZM22.313 12H21.063V13.25H22.313V12ZM22.313 10.4375V9.1875H21.063V10.4375H22.313ZM23.8755 10.4375V11.6875H25.1255V10.4375H23.8755ZM23.8755 7.3125V6.0625H22.6255V7.3125H23.8755ZM25.438 7.3125H26.688V6.0625H25.438V7.3125ZM25.438 10.4375H24.188V11.6875H25.438V10.4375ZM27.0005 10.4375V11.6875H28.2505V10.4375H27.0005ZM27.0005 4.1875V2.9375H25.7505V4.1875H27.0005ZM28.563 4.1875H29.813V2.9375H28.563V4.1875ZM28.563 12V13.25H29.813V12H28.563ZM22.0005 10.4375V4.1875H19.5005V10.4375H22.0005ZM20.7505 5.4375H22.313V2.9375H20.7505V5.4375ZM21.063 4.1875V10.4375H23.563V4.1875H21.063ZM22.313 9.1875H20.7505V11.6875H22.313V9.1875ZM23.563 12V10.4375H21.063V12H23.563ZM22.313 11.6875H23.8755V9.1875H22.313V11.6875ZM25.1255 10.4375V7.3125H22.6255V10.4375H25.1255ZM23.8755 8.5625H25.438V6.0625H23.8755V8.5625ZM24.188 7.3125V10.4375H26.688V7.3125H24.188ZM25.438 11.6875H27.0005V9.1875H25.438V11.6875ZM28.2505 10.4375V4.1875H25.7505V10.4375H28.2505ZM27.0005 5.4375H28.563V2.9375H27.0005V5.4375ZM27.313 4.1875V12H29.813V4.1875H27.313ZM28.563 10.75H22.313V13.25H28.563V10.75Z",
         fill: "black"
      }), React.createElement("path", {
         d: "M6.37549 5.75V4.1875H7.93799V5.75H6.37549ZM3.25049 12V1.0625H4.81299V2.625H6.37549V4.1875H4.81299V12H3.25049ZM9.50049 12V7.3125H7.93799V5.75H9.50049V1.0625H11.063V12H9.50049ZM14.188 12V10.4375H20.438V12H14.188ZM12.6255 10.4375V5.75H14.188V7.3125H18.8755V5.75H20.438V8.875H14.188V10.4375H12.6255ZM14.188 5.75V4.1875H18.8755V5.75H14.188ZM22.0005 10.4375V4.1875H23.563V10.4375H22.0005ZM23.563 12V10.4375H25.1255V7.3125H26.688V10.4375H28.2505V4.1875H29.813V12H23.563Z",
         fill: "black"
      }), React.createElement("path", {
         d: "M6.37549 5.75H5.12549V7H6.37549V5.75ZM6.37549 4.1875V2.9375H5.12549V4.1875H6.37549ZM7.93799 4.1875H9.18799V2.9375H7.93799V4.1875ZM7.93799 5.75V7H9.18799V5.75H7.93799ZM3.25049 12H2.00049V13.25H3.25049V12ZM3.25049 1.0625V-0.1875H2.00049V1.0625H3.25049ZM4.81299 1.0625H6.06299V-0.1875H4.81299V1.0625ZM4.81299 2.625H3.56299V3.875H4.81299V2.625ZM6.37549 2.625H7.62549V1.375H6.37549V2.625ZM6.37549 4.1875V5.4375H7.62549V4.1875H6.37549ZM4.81299 4.1875V2.9375H3.56299V4.1875H4.81299ZM4.81299 12V13.25H6.06299V12H4.81299ZM9.50049 12H8.25049V13.25H9.50049V12ZM9.50049 7.3125H10.7505V6.0625H9.50049V7.3125ZM7.93799 7.3125H6.68799V8.5625H7.93799V7.3125ZM7.93799 5.75V4.5H6.68799V5.75H7.93799ZM9.50049 5.75V7H10.7505V5.75H9.50049ZM9.50049 1.0625V-0.1875H8.25049V1.0625H9.50049ZM11.063 1.0625H12.313V-0.1875H11.063V1.0625ZM11.063 12V13.25H12.313V12H11.063ZM7.62549 5.75V4.1875H5.12549V5.75H7.62549ZM6.37549 5.4375H7.93799V2.9375H6.37549V5.4375ZM6.68799 4.1875V5.75H9.18799V4.1875H6.68799ZM7.93799 4.5H6.37549V7H7.93799V4.5ZM4.50049 12V1.0625H2.00049V12H4.50049ZM3.25049 2.3125H4.81299V-0.1875H3.25049V2.3125ZM3.56299 1.0625V2.625H6.06299V1.0625H3.56299ZM4.81299 3.875H6.37549V1.375H4.81299V3.875ZM5.12549 2.625V4.1875H7.62549V2.625H5.12549ZM6.37549 2.9375H4.81299V5.4375H6.37549V2.9375ZM3.56299 4.1875V12H6.06299V4.1875H3.56299ZM4.81299 10.75H3.25049V13.25H4.81299V10.75ZM10.7505 12V7.3125H8.25049V12H10.7505ZM9.50049 6.0625H7.93799V8.5625H9.50049V6.0625ZM9.18799 7.3125V5.75H6.68799V7.3125H9.18799ZM7.93799 7H9.50049V4.5H7.93799V7ZM10.7505 5.75V1.0625H8.25049V5.75H10.7505ZM9.50049 2.3125H11.063V-0.1875H9.50049V2.3125ZM9.81299 1.0625V12H12.313V1.0625H9.81299ZM11.063 10.75H9.50049V13.25H11.063V10.75ZM14.188 12H12.938V13.25H14.188V12ZM14.188 10.4375V9.1875H12.938V10.4375H14.188ZM20.438 10.4375H21.688V9.1875H20.438V10.4375ZM20.438 12V13.25H21.688V12H20.438ZM12.6255 10.4375H11.3755V11.6875H12.6255V10.4375ZM12.6255 5.75V4.5H11.3755V5.75H12.6255ZM14.188 5.75H15.438V4.5H14.188V5.75ZM14.188 7.3125H12.938V8.5625H14.188V7.3125ZM18.8755 7.3125V8.5625H20.1255V7.3125H18.8755ZM18.8755 5.75V4.5H17.6255V5.75H18.8755ZM20.438 5.75H21.688V4.5H20.438V5.75ZM20.438 8.875V10.125H21.688V8.875H20.438ZM14.188 8.875V7.625H12.938V8.875H14.188ZM14.188 10.4375V11.6875H15.438V10.4375H14.188ZM14.188 5.75H12.938V7H14.188V5.75ZM14.188 4.1875V2.9375H12.938V4.1875H14.188ZM18.8755 4.1875H20.1255V2.9375H18.8755V4.1875ZM18.8755 5.75V7H20.1255V5.75H18.8755ZM15.438 12V10.4375H12.938V12H15.438ZM14.188 11.6875H20.438V9.1875H14.188V11.6875ZM19.188 10.4375V12H21.688V10.4375H19.188ZM20.438 10.75H14.188V13.25H20.438V10.75ZM13.8755 10.4375V5.75H11.3755V10.4375H13.8755ZM12.6255 7H14.188V4.5H12.6255V7ZM12.938 5.75V7.3125H15.438V5.75H12.938ZM14.188 8.5625H18.8755V6.0625H14.188V8.5625ZM20.1255 7.3125V5.75H17.6255V7.3125H20.1255ZM18.8755 7H20.438V4.5H18.8755V7ZM19.188 5.75V8.875H21.688V5.75H19.188ZM20.438 7.625H14.188V10.125H20.438V7.625ZM12.938 8.875V10.4375H15.438V8.875H12.938ZM14.188 9.1875H12.6255V11.6875H14.188V9.1875ZM15.438 5.75V4.1875H12.938V5.75H15.438ZM14.188 5.4375H18.8755V2.9375H14.188V5.4375ZM17.6255 4.1875V5.75H20.1255V4.1875H17.6255ZM18.8755 4.5H14.188V7H18.8755V4.5ZM22.0005 10.4375H20.7505V11.6875H22.0005V10.4375ZM22.0005 4.1875V2.9375H20.7505V4.1875H22.0005ZM23.563 4.1875H24.813V2.9375H23.563V4.1875ZM23.563 10.4375V11.6875H24.813V10.4375H23.563ZM23.563 12H22.313V13.25H23.563V12ZM23.563 10.4375V9.1875H22.313V10.4375H23.563ZM25.1255 10.4375V11.6875H26.3755V10.4375H25.1255ZM25.1255 7.3125V6.0625H23.8755V7.3125H25.1255ZM26.688 7.3125H27.938V6.0625H26.688V7.3125ZM26.688 10.4375H25.438V11.6875H26.688V10.4375ZM28.2505 10.4375V11.6875H29.5005V10.4375H28.2505ZM28.2505 4.1875V2.9375H27.0005V4.1875H28.2505ZM29.813 4.1875H31.063V2.9375H29.813V4.1875ZM29.813 12V13.25H31.063V12H29.813ZM23.2505 10.4375V4.1875H20.7505V10.4375H23.2505ZM22.0005 5.4375H23.563V2.9375H22.0005V5.4375ZM22.313 4.1875V10.4375H24.813V4.1875H22.313ZM23.563 9.1875H22.0005V11.6875H23.563V9.1875ZM24.813 12V10.4375H22.313V12H24.813ZM23.563 11.6875H25.1255V9.1875H23.563V11.6875ZM26.3755 10.4375V7.3125H23.8755V10.4375H26.3755ZM25.1255 8.5625H26.688V6.0625H25.1255V8.5625ZM25.438 7.3125V10.4375H27.938V7.3125H25.438ZM26.688 11.6875H28.2505V9.1875H26.688V11.6875ZM29.5005 10.4375V4.1875H27.0005V10.4375H29.5005ZM28.2505 5.4375H29.813V2.9375H28.2505V5.4375ZM28.563 4.1875V12H31.063V4.1875H28.563ZM29.813 10.75H23.563V13.25H29.813V10.75Z",
         fill: "black"
      }), React.createElement("path", {
         d: "M5.12549 5.75V4.1875H6.68799V5.75H5.12549ZM2.00049 12V1.0625H3.56299V2.625H5.12549V4.1875H3.56299V12H2.00049ZM8.25049 12V7.3125H6.68799V5.75H8.25049V1.0625H9.81299V12H8.25049ZM12.938 12V10.4375H19.188V12H12.938ZM11.3755 10.4375V5.75H12.938V7.3125H17.6255V5.75H19.188V8.875H12.938V10.4375H11.3755ZM12.938 5.75V4.1875H17.6255V5.75H12.938ZM20.7505 10.4375V4.1875H22.313V10.4375H20.7505ZM22.313 12V10.4375H23.8755V7.3125H25.438V10.4375H27.0005V4.1875H28.563V12H22.313Z",
         fill: "url(#paint0_linear_351_34580)"
      }), React.createElement("path", {
         d: "M6.37549 5.75V4.1875H7.93799V5.75H6.37549ZM3.25049 12V1.0625H4.81299V2.625H6.37549V4.1875H4.81299V12H3.25049ZM9.50049 12V7.3125H7.93799V5.75H9.50049V1.0625H11.063V12H9.50049ZM14.188 12V10.4375H20.438V12H14.188ZM12.6255 10.4375V5.75H14.188V7.3125H18.8755V5.75H20.438V8.875H14.188V10.4375H12.6255ZM14.188 5.75V4.1875H18.8755V5.75H14.188ZM22.0005 10.4375V4.1875H23.563V10.4375H22.0005ZM23.563 12V10.4375H25.1255V7.3125H26.688V10.4375H28.2505V4.1875H29.813V12H23.563Z",
         fill: "url(#paint1_linear_351_34580)"
      }), React.createElement("rect", {
         x: "2.00049",
         y: "2.25",
         width: "1.25",
         height: "1.25",
         fill: "white"
      }), React.createElement("rect", {
         x: "2.00049",
         y: "3.5",
         width: "1.25",
         height: "1.25",
         fill: "white"
      }), React.createElement("rect", {
         x: "2.00049",
         y: "3.5",
         width: "1.25",
         height: "1.25",
         fill: "white"
      }), React.createElement("rect", {
         width: "1.25",
         height: "1.25",
         transform: "matrix(-1 0 0 1 7.00049 4.75)",
         fill: "white"
      }), React.createElement("rect", {
         width: "1.25",
         height: "1.25",
         transform: "matrix(-1 0 0 1 14.5005 4.75)",
         fill: "white"
      }), React.createElement("rect", {
         width: "1.25",
         height: "1.25",
         transform: "matrix(-1 0 0 1 13.2505 6)",
         fill: "white"
      }), React.createElement("rect", {
         width: "1.25",
         height: "1.25",
         transform: "matrix(-1 0 0 1 22.0005 4.75)",
         fill: "white"
      }), React.createElement("rect", {
         width: "1.25",
         height: "1.25",
         transform: "matrix(-1 0 0 1 22.0005 6)",
         fill: "white"
      }), React.createElement("rect", {
         width: "1.25",
         height: "1.25",
         transform: "matrix(-1 0 0 1 13.2505 7.25)",
         fill: "white"
      })), React.createElement("defs", null, React.createElement("linearGradient", {
         id: "paint0_linear_351_34580",
         x1: "2.00049",
         y1: "-0.950001",
         x2: "31.3485",
         y2: "13.2823",
         gradientUnits: "userSpaceOnUse"
      }, React.createElement("stop", {
         stopColor: "#D573C4"
      }), React.createElement("stop", {
         offset: "0.521932",
         stopColor: "#D573C4"
      }), React.createElement("stop", {
         offset: "1",
         stopColor: "#8B6AD4"
      })), React.createElement("linearGradient", {
         id: "paint1_linear_351_34580",
         x1: "3.25049",
         y1: "-0.950001",
         x2: "32.5985",
         y2: "13.2823",
         gradientUnits: "userSpaceOnUse"
      }, React.createElement("stop", {
         stopColor: "#D573C4"
      }), React.createElement("stop", {
         offset: "0.521932",
         stopColor: "#D573C4"
      }), React.createElement("stop", {
         offset: "1",
         stopColor: "#8B6AD4"
      })), React.createElement("clipPath", {
         id: "clip0_351_34580"
      }, React.createElement("rect", {
         width: "32",
         height: "14",
         fill: "white",
         transform: "translate(0.000488281)"
      }))));
      const La = ApplyStyle({
         shareBestScore: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
         },
         shareBestScore_iconHidden: {
            visibility: "hidden"
         },
         shareBestScore_text: {
            fontSize: "12px",
            lineHeight: "14px",
            textAlign: "center",
            color: "#4E4E4E",
            marginLeft: "8px",
            marginRight: "8px"
         },
         shareBestScore_iconPlaceHolder: {
            width: "32px",
            height: "14px"
         }
      })(e => {
         const t = LoadTimeData.getStringF("bestScoreFlyout", e.bestScoreFormatted);
         return React.createElement("div", {
            className: e.managedClasses.shareBestScore
         }, React.createElement(Aa, {
            className: e.isNewRecords ? null : e.managedClasses.shareBestScore_iconHidden
         }), React.createElement("p", {
            className: e.managedClasses.shareBestScore_text
         }, t), React.createElement("div", {
            className: e.managedClasses.shareBestScore_iconPlaceHolder
         }));
      });
      const Za = ApplyStyle({
         sharePopup: {
            backgroundColor: "rgba(255,255,255,0.6)",
            backdropFilter: "blur(32px)",
            boxShadow: "0px 16px 24px rgba(0,0,0,0.16)",
            borderRadius: "4px",
            padding: "12px 12px"
         },
         sharePopup_currentScore: {
            textAlign: "center",
            fontWeight: "500",
            fontSize: "30px",
            lineHeight: "32px",
            alignItems: "center",
            color: "#000000"
         },
         sharePopup_congrats: {
            marginTop: "4px",
            textAlign: "center",
            fontStyle: "normal",
            fontWeight: "500",
            fontSize: "14px",
            lineHeight: "16px",
            color: "#000000"
         },
         sharePopup_button: {
            marginTop: "10px"
         }
      })(e => {
         const percentage = e.percentage;
         const percentageBeat = Math.floor(percentage * 100) / 100;
         const congratsString = LoadTimeData.getStringF("congrats", percentageBeat);
         return React.createElement("div", {
            className: e.managedClasses.sharePopup
         }, React.createElement(La, {
            bestScoreFormatted: e.bestScoreFormatted,
            isNewRecords: e.isNewRecords
         }), React.createElement("p", {
            className: e.managedClasses.sharePopup_currentScore
         }, e.currentScoreFormatted), React.createElement("p", {
            className: e.managedClasses.sharePopup_congrats
         }, congratsString));
      });
      class Fa {
         constructor() {
            this.ui = undefined;
            this.tint = undefined;
            this.topui = undefined;
            this.livesDisplay = undefined;
            this.score = undefined;
            this.scoreIcon = undefined;
            this.scoreText = undefined;
            this.boostDisplay = undefined;
            this.title = undefined;
            this.subtitle = undefined;
            this.instruct = undefined;
            this.instructAction = undefined;
            this.instructContent = undefined;
            this.instructText = undefined;
            this.viewContainer = undefined;
            this.notify = undefined;
            this.notifyContent = undefined;
            this.notifyTimer = undefined;
            this.icons = undefined;
            this.share = undefined;
            this.uiContainer = undefined;
            this.selector = undefined;
            if (Fa.sys) {
               return Fa.sys;
            }
            Fa.sys = this;
            this.defineIcons();
            this.buildInterface();
            this.notifyTimer = undefined;
            Ea.subscribe(this.updateScore.bind(this));
         }
         buildInterface() {
            this.ui = this.createNew("div", document.body, "game-ui");
            this.tint = this.createNew("div", document.body, "game-tint");
            this.topui = this.createNew("div", this.ui);
            const e = this.createNew("div", this.topui, "dash-stats");
            this.livesDisplay = this.createNew("div", e, undefined, "stats-icons");
            const t = this.createNew("div", e, "stats-score");
            this.score = this.createNew("div", t);
            this.scoreIcon = this.createNew("span", this.score, "score-icon");
            this.scoreText = this.createNew("span", this.score, "score-text");
            this.boostDisplay = this.createNew("div", e, undefined, "stats-icons");
            this.title = this.createNew("p", this.ui, "ui-title");
            this.subtitle = this.createNew("p", this.ui, "ui-subtitle");
            this.selector = this.createNew("div", this.ui, "ui-selector");
            const s = this.createNew("span", this.selector, "selector-left");
            this.createIconSVG(s, "leftArrow", 44, 44);
            const i = this.createNew("span", this.selector, "selector-right");
            this.createIconSVG(i, "rightArrow", 44, 44);
            s.addEventListener("click", function () {
               Ja.sys.changeCharacter(-1);
            }, false);
            i.addEventListener("click", function () {
               Ja.sys.changeCharacter(1);
            }, false);
            this.viewContainer = this.createNew("div", this.ui, "view-container");
            this.uiContainer = this.createNew("div", this.viewContainer, "ui-container");
            this.instruct = this.createNew("div", this.uiContainer, "ui-instruct");
            this.instructContent = this.createNew("div", this.instruct, "instruct-content");
            this.instructAction = this.createNew("div", this.instructContent, "instruct-action");
            this.instructText = this.createNew("p", this.instructContent, "instruct-text");
            this.notify = this.createNew("div", this.ui, "ui-notify");
            this.notifyContent = this.createNew("div", this.notify, "notify-content");
            this.hideNotification();
            this.share = this.createNew("div", this.uiContainer, "ui-share");
            this.updateShare();
         }
         refreshDisplay() {
            this.updateIcons();
            this.updateScore();
            this.checkHighScoreIcon();
         }
         hideOverlayUI() {
            this.tintScreen();
            this.title.style.visibility = "hidden";
            this.subtitle.style.visibility = "hidden";
            this.selector.style.visibility = "hidden";
            this.instructContent.style.visibility = "hidden";
            this.hideSharePopup();
         }
         updateGameTitleUI() {
            const e = Ma.sys.session.settings.theme;
            this.title.style.removeProperty("visibility");
            this.title.textContent = LoadTimeData.getString(e + "Theme");
         }
         updateGameModeUI() {
            const e = Ma.sys.session.settings.mode;
            this.subtitle.style.removeProperty("visibility");
            this.subtitle.textContent = LoadTimeData.getString(e + "Title");
            this.updateScore();
         }
         updateInputTypeUI() {
            const e = Ma.sys.session.state;
            if (e === xa.Play) {
               return;
            }
            let t = Ma.sys.session.inputType.valueOf();
            if (t === Sa.Mouse && wa()) {
               t = Sa.Touch;
            }
            switch (t) {
               case Sa.Mouse:
               case Sa.Touch:
               case Sa.Keyboard:
                  this.instructAction.classList.add("outline");
                  this.instructAction.textContent = LoadTimeData.getString(t + "Action");
                  break;
               case Sa.Ps:
               case Sa.Xbox:
               {
                  const e = t + "Action";
                  this.instructAction.classList.remove("outline");
                  this.instructAction.textContent = "";
                  this.createIconSVG(this.instructAction, e, 32, 32);
                  break;
               }
            }
            this.instructText.textContent = LoadTimeData.getString(e + "Info");
            this.instructContent.style.removeProperty("visibility");
            if (e !== xa.Menu) {
               this.instructContent.classList.add("tinted");
            } else {
               this.instructContent.classList.remove("tinted");
            }
         }
         tintScreen() {
            if (Ma.sys.session.state === xa.Pause) {
               this.tint.classList.add("visible");
            } else {
               this.tint.classList.remove("visible");
            }
         }
         showPauseScreen() {
            this.tintScreen();
            this.updateGameTitleUI();
            this.updateGameModeUI();
            this.updateInputTypeUI();
            this.refreshDisplay();
         }
         showOverScreen() {
            this.tintScreen();
            this.updateGameTitleUI();
            this.updateInputTypeUI();
            this.refreshDisplay();
         }
         showMenuScreen() {
            this.showPauseScreen();
            this.selector.style.removeProperty("visibility");
         }
         async updateAndShowNewShare() {
            await this.updateShare();
            Ta.recordSharePopup();
            this.showSharePopup();
         }
         sendNotification(e, t = 5000) {
            const s = Ma.sys.session.settings.mode;
            const i = Ma.sys.session.settings.theme;
            const n = LoadTimeData.getBoolean("isNewShare");
            this.notifyContent.textContent = "";
            switch (e) {
               case "mode":
                  this.notifyContent.textContent = LoadTimeData.getStringF("gameMode", LoadTimeData.getString(s + "Title"));
                  break;
               case "theme":
                  this.notifyContent.textContent = LoadTimeData.getStringF("theme", LoadTimeData.getString(i + "Theme"));
                  break;
               case "score":
               {
                  const e = Ma.sys.getHighScore(s);
                  this.notifyContent.textContent = LoadTimeData.getStringF("newBestScore", LoadTimeData.getString(s + "Descriptor"), e, LoadTimeData.getString(s + "Unit"));
                  this.createIconSVG(this.notifyContent, "star", 20, 20, "0 4px 0 0");
                  break;
               }
               case "cheatcode":
                  this.notifyContent.textContent = LoadTimeData.getStringF("codeCheat", LoadTimeData.getString("codeScoring"));
                  break;
               case "code":
                  this.notifyContent.textContent = LoadTimeData.getString("code");
                  break;
               case "cheat":
                  this.notifyContent.textContent = LoadTimeData.getString("codeScoring");
                  break;
               case "share":
                  if (n) {
                     this.updateAndShowNewShare();
                     return;
                  }
                  this.notifyContent.textContent = LoadTimeData.getString("share");
                  this.createShareLink();
            }
            clearTimeout(this.notifyTimer);
            this.notifyTimer = window.setTimeout(function () {
               Fa.sys.hideNotification();
            }, t);
            this.showNotification();
         }
         createShareLink() {
            const e = this.createNew("button", this.notifyContent, "notify-shareLink");
            e.onclick = this.copyShareLink.bind(this);
            this.createNew("p", e, "notify-shareText").textContent = LoadTimeData.getString("shareCopy");
            this.createIconSVG(e, "link", 20, 20, "0 4px 0 0");
         }
         copyShareLink() {
            ya(LoadTimeData.getString("shareLinkGameOver"));
            this.notifyContent.textContent = LoadTimeData.getString("shareLinkCopied");
         }
         showNotification() {
            this.notify.classList.add("visible");
         }
         hideNotification() {
            this.notify.classList.remove("visible");
         }
         async updateShare() {
            const e = Ma.sys.session.settings.mode;
            const t = this.getHighScoreString();
            const s = Ma.sys.getCurrentScoreFormatted();
            const o = s + " " + LoadTimeData.getString(e + "Unit");
            const r = await Ta.getPercentage(e, parseInt(s));
            n.render(React.createElement(Za, {
               bestScoreFormatted: t,
               currentScoreFormatted: o,
               percentage: r,
               isNewRecords: Ma.sys.game.highScore
            }), this.share);
         }
         showSharePopup() {
            this.share.classList.add("visible");
         }
         hideSharePopup() {
            this.share.classList.remove("visible");
         }
         getHighScoreString() {
            return LoadTimeData.getStringF("bestScoreMenuDisplay", Ma.sys.getHighScore(Ma.sys.session.settings.mode), LoadTimeData.getString(Ma.sys.session.settings.mode + "Unit"));
         }
         checkHighScoreIcon() {
            const e = Ma.sys.session.state;
            this.scoreIcon.textContent = "";
            if (e === xa.Menu || Ma.sys.game.highScore) {
               this.createIconSVG(this.scoreIcon, "star", 20, 20);
            }
         }
         updateScore() {
            const e = Ma.sys.session.settings.mode;
            if (Ma.sys.session.state === xa.Menu) {
               const t = Ma.sys.getHighScore(e);
               this.scoreText.textContent = LoadTimeData.getStringF("bestScoreMenuDisplay", t, LoadTimeData.getString(e + "Unit"));
            } else {
               const t = Ma.sys.getCurrentScoreFormatted();
               this.scoreText.textContent = t + " " + LoadTimeData.getString(e + "Unit");
            }
         }
         updateIcons() {
            const e = [];
            const t = [];
            const s = Ma.sys.game.cheat;
            if (s.lives || s.safety) {
               if (s.safety) {
                  e.push("shield");
               }
               e.push("life-full");
               e.push("infinite");
            } else {
               for (let t = 1; t <= Ma.sys.game.lives.max; t++) {
                  let s = "life-empty";
                  if (t <= Ma.sys.game.shields.current) {
                     s = "shield";
                  } else if (t <= Ma.sys.game.lives.current) {
                     s = "life-full";
                  }
                  e.push(s);
               }
            }
            if (s.boosts) {
               t.push("boost-full");
               t.push("infinite");
            } else {
               for (let e = 1; e <= Ma.sys.game.boosts.max; e++) {
                  const s = e <= Ma.sys.game.boosts.current ? "boost-full" : "boost-empty";
                  t.push(s);
               }
            }
            this.livesDisplay.textContent = "";
            this.boostDisplay.textContent = "";
            const i = "url(" + Da.sys.objectsImg.src + ")";
            e.forEach(e => {
               this.createNew("div", this.livesDisplay, undefined, e).style.backgroundImage = i;
            });
            t.forEach(e => {
               this.createNew("div", this.boostDisplay, undefined, e).style.backgroundImage = i;
            });
         }
         createIconSVG(e, t, s, i, n = "0 0 0 0") {
            const o = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            o.classList.add("icon-" + t);
            o.style.margin = n;
            o.style.display = "inline-block";
            o.setAttribute("width", s + "px");
            o.setAttribute("height", i + "px");
            o.setAttribute("viewBox", this.icons[t].viewbox);
            const r = document.createElementNS("http://www.w3.org/2000/svg", "path");
            o.insertAdjacentElement("beforeend", r);
            r.classList.add("icon-fill");
            r.setAttribute("d", this.icons[t].path);
            e.insertAdjacentElement("afterbegin", o);
            o.insertAdjacentElement("afterbegin", r);
         }
         defineIcons() {
            this.icons = {
               share: {
                  path: "M15.75 9.25C16.1297 9.25 16.4435 9.53215 16.4932 9.89823L16.5 10V15.25C16.5 16.7125 15.3583 17.9084 13.9175 17.995L13.75 18H6.25C4.78747 18 3.5916 16.8583 3.50502 15.4175L3.5 15.25V10C3.5 9.58579 3.83579 9.25 4.25 9.25C4.6297 9.25 4.94349 9.53215 4.99315 9.89823L5 10V15.25C5 15.8972 5.49187 16.4295 6.12219 16.4935L6.25 16.5H13.75C14.3972 16.5 14.9295 16.0081 14.9935 15.3778L15 15.25V10C15 9.58579 15.3358 9.25 15.75 9.25ZM5.22703 6.46231L9.46967 2.21967C9.73594 1.9534 10.1526 1.9292 10.4462 2.14705L10.5303 2.21967L14.773 6.46231C15.0659 6.7552 15.0659 7.23008 14.773 7.52297C14.5067 7.78924 14.09 7.81344 13.7964 7.59559L13.7123 7.52297L10.75 4.56V12.25C10.75 12.6297 10.4678 12.9435 10.1018 12.9932L10 13C9.6203 13 9.30651 12.7178 9.25685 12.3518L9.25 12.25V4.56L6.28769 7.52297C6.02142 7.78924 5.60476 7.81344 5.31115 7.59559L5.22703 7.52297C4.96076 7.2567 4.93656 6.84004 5.15441 6.54643L5.22703 6.46231L9.46967 2.21967L5.22703 6.46231Z",
                  viewbox: "0 0 20 20"
               },
               leftArrow: {
                  path: "M12.2676 15.793C11.9677 16.0787 11.493 16.0672 11.2073 15.7672L6.20597 10.5168C5.93004 10.2271 5.93004 9.77187 6.20597 9.4822L11.2073 4.23173C11.493 3.93181 11.9677 3.92028 12.2676 4.20597C12.5676 4.49166 12.5791 4.96639 12.2934 5.26631L7.78483 9.99949L12.2934 14.7327C12.5791 15.0326 12.5676 15.5073 12.2676 15.793Z",
                  viewbox: "0 0 20 20"
               },
               rightArrow: {
                  path: "M7.73271 4.20694C8.03263 3.92125 8.50737 3.93279 8.79306 4.23271L13.7944 9.48318C14.0703 9.77285 14.0703 10.2281 13.7944 10.5178L8.79306 15.7682C8.50737 16.0681 8.03263 16.0797 7.73271 15.794C7.43279 15.5083 7.42125 15.0336 7.70694 14.7336L12.2155 10.0005L7.70694 5.26729C7.42125 4.96737 7.43279 4.49264 7.73271 4.20694Z",
                  viewbox: "0 0 20 20"
               },
               star: {
                  path: "M9.10433 2.89874C9.47114 2.15549 10.531 2.1555 10.8978 2.89874L12.8282 6.81024L17.1448 7.43748C17.9651 7.55666 18.2926 8.56464 17.699 9.14317L14.5755 12.1878L15.3129 16.487C15.453 17.3039 14.5956 17.9269 13.8619 17.5412L10.0011 15.5114L6.14018 17.5412C5.40655 17.9269 4.54913 17.3039 4.68924 16.487L5.4266 12.1878L2.30308 9.14317C1.70956 8.56463 2.03708 7.55666 2.8573 7.43748L7.17389 6.81024L9.10433 2.89874Z",
                  viewbox: "0 0 20 20"
               },
               link: {
                  path: "M14 6C16.2091 6 18 7.79086 18 10C18 12.1422 16.316 13.8911 14.1996 13.9951L14 14H12C11.5858 14 11.25 13.6642 11.25 13.25C11.25 12.8703 11.5322 12.5565 11.8982 12.5068L12 12.5H14C15.3807 12.5 16.5 11.3807 16.5 10C16.5 8.67452 15.4685 7.58996 14.1644 7.50532L14 7.5H12C11.5858 7.5 11.25 7.16421 11.25 6.75C11.25 6.3703 11.5322 6.05651 11.8982 6.00685L12 6H14ZM8 6C8.41421 6 8.75 6.33579 8.75 6.75C8.75 7.1297 8.46785 7.44349 8.10177 7.49315L8 7.5H6C4.61929 7.5 3.5 8.61929 3.5 10C3.5 11.3255 4.53154 12.41 5.83562 12.4947L6 12.5H8C8.41421 12.5 8.75 12.8358 8.75 13.25C8.75 13.6297 8.46785 13.9435 8.10177 13.9932L8 14H6C3.79086 14 2 12.2091 2 10C2 7.8578 3.68397 6.10892 5.80036 6.0049L6 6H8ZM6.25 9.25H13.75C14.1642 9.25 14.5 9.58579 14.5 10C14.5 10.3797 14.2178 10.6935 13.8518 10.7432L13.75 10.75H6.25C5.83579 10.75 5.5 10.4142 5.5 10C5.5 9.6203 5.78215 9.30651 6.14823 9.25685L6.25 9.25H13.75H6.25Z",
                  viewbox: "0 0 20 20"
               },
               xboxAction: {
                  path: "M11.5,11.5H9.7L9.2,9.9H6.7l-0.5,1.6H4.5l2.5-7H9L11.5,11.5z M8.9,8.7L8.1,6.4C8.1,6.2,8,6,8,5.7h0C8,6,7.9,6.2,7.8,6.4 L7.1,8.7H8.9z M8,16c-4.4,0-8-3.6-8-8s3.6-8,8-8s8,3.6,8,8S12.4,16,8,16z M8,1C4.1,1,1,4.1,1,8s3.1,7,7,7s7-3.1,7-7S11.9,1,8,1z",
                  viewbox: "0 0 16 16"
               },
               psAction: {
                  path: "M8,0C3.6,0,0,3.6,0,8s3.6,8,8,8s8-3.6,8-8S12.4,0,8,0z M8,15c-3.9,0-7-3.1-7-7s3.1-7,7-7s7,3.1,7,7S11.9,15,8,15z M12,5 l-3,3l3,3L11,12l-3-3l-3,3L4,11l3-3L4,5L5,4l3,3l3-3L12,5z",
                  viewbox: "0 0 16 16"
               }
            };
         }
         createNew(e, t, s, i) {
            const n = document.createElement(e);
            if (t !== undefined) {
               t.insertAdjacentElement("beforeend", n);
            }
            if (s !== undefined) {
               n.id = s;
            }
            if (i !== undefined) {
               n.classList.add(i);
            }
            return n;
         }
         createNewCanvas() {
            const e = document.createElement("canvas");
            document.body.insertAdjacentElement("beforeend", e);
            e.id = "game-canvas";
            return e;
         }
      }
      Fa.sys = null;
      class Ba {
         constructor(e, t, s) {
            this.type = undefined;
            this.x = undefined;
            this.y = undefined;
            this.w = undefined;
            this.h = undefined;
            this.hit = undefined;
            this.fx = undefined;
            this.hitbox = undefined;
            this.type = e;
            this.x = t;
            this.y = s;
            this.reset();
         }
         reset() {
            const e = PlayerManager.sys.sheet[this.type];
            this.w = e.w;
            this.h = e.h;
            this.fx = e.fx;
            this.hit = false;
            this.hitbox = {
               x: this.x - this.w / 2 + e.hitbox.x,
               y: this.y - this.h / 2 + e.hitbox.y,
               w: e.hitbox.w,
               h: e.hitbox.h
            };
         }
         move(e) {
            this.shift(-e.x, -e.y);
         }
         shift(e = 0, t = 0) {
            this.x += e;
            this.hitbox.x += e;
            this.y += t;
            this.hitbox.y += t;
         }
         update() {}
         draw() {}
      }
      class Ra extends Ba {
         constructor(e, t, s, i) {
            super(e, t, s);
            this.pose = undefined;
            this.time = undefined;
            this.sleep = undefined;
            this.anim = undefined;
            this.pickup = undefined;
            this.decor = undefined;
            this.gateId = undefined;
            this.pose = i;
            this.reset();
         }
         reset() {
            super.reset();
            this.time = 0;
            this.sleep = false;
            this.anim = "looping";
            this.pickup = false;
            this.decor = undefined;
            this.gateId = undefined;
         }
         update() {
            if (this.anim !== "paused") {
               this.time += Ma.sys.game.time.loop;
            }
         }
         draw() {
            if (this.pickup) {
               ja.sys.drawPickup(this);
            } else {
               if (this.fx !== undefined && this.anim !== "hidden") {
                  ja.sys.drawFx(this.time, this.x, this.y + this.fx);
               }
               ja.sys.drawLayer(this.type, this.pose, this.x, this.y, this.time, this.anim, this);
               if (this.decor !== undefined) {
                  ja.sys.drawLayer("wallDecor", this.decor, this.x, this.y - 24);
               }
            }
         }
      }
      class Na extends Ra {
         constructor(e, t, s, i) {
            super(e, t, s, i);
            this.angle = undefined;
            this.speed = null;
            this.objectsHit = undefined;
            this.timer = null;
            this.style = undefined;
            this.state = undefined;
            this.reset();
         }
         reset() {
            super.reset();
            this.objectsHit = [];
            this.angle = 0;
            this.speed = {
               current: 6,
               raw: 6,
               max: 13,
               accel: 0.025
            };
            this.timer = {
               crash: 0,
               dir: 0
            };
            this.style = Ma.sys.rand(0, 3);
            this.changeState("crash");
            this.resume();
         }
         update() {
            super.update();
            if (!this.isCrashed()) {
               this.updateDirection();
               this.updateSpeed();
               this.updatePosition();
            }
         }
         crash() {
            this.changeState("crash");
         }
         resume() {
            const e = Math.random() > 0.5 ? "right" : "left";
            this.timer.crash = 0;
            this.timer.dir = 1;
            this.changeState(e);
         }
         slow() {
            this.speed.raw *= 0.5;
         }
         isCrashed() {
            return !(this.timer.crash <= 0) && (this.timer.crash -= Ma.sys.game.time.loop * Ma.sys.game.time.scale, !(this.timer.crash <= 0) || (this.resume(), false));
         }
         changeState(e) {
            if (this.state === e) {
               return;
            }
            let t;
            this.state = e;
            switch (e) {
               case "left":
                  t = -65;
                  break;
               case "right":
                  t = -115;
                  break;
               case "crash":
                  t = 90;
            }
            this.pose = e;
            this.angle = t * Math.PI / 180;
            if (e === "crash") {
               this.timer.crash += 1.5;
               this.speed.raw = 0;
            }
         }
         updateDirection() {
            this.timer.dir -= Ma.sys.game.time.loop * Ma.sys.game.time.scale;
            if (this.timer.dir <= 0) {
               this.timer.dir = Ma.sys.rand(50, 200) / 100;
               const e = this.state === "left" ? "right" : "left";
               this.changeState(e);
            }
         }
         updateSpeed() {
            const e = this.speed;
            const t = e.accel * Ma.sys.game.time.scale;
            this.speed.raw = e.raw <= e.max ? e.raw += t : e.raw -= t;
            this.speed.current = e.raw * Ma.sys.game.time.scale;
         }
         updatePosition() {
            const e = this.speed.current * -Math.cos(this.angle);
            const t = this.speed.current * -Math.sin(this.angle);
            this.shift(e, t);
         }
         draw() {
            ja.sys.drawNpc(this.pose, this.style, this.x, this.y);
         }
      }
      class za extends Ra {
         constructor(e, t, s, i) {
            super(e, t, s, i);
            this.angle = undefined;
            this.dist = undefined;
            this.speed = null;
            this.objectsHit = undefined;
            this.timer = null;
            this.state = undefined;
            this.reset();
         }
         reset() {
            super.reset();
            this.objectsHit = [];
            this.angle = 0;
            this.dist = 0;
            this.speed = {
               current: 3,
               raw: 3,
               max: 9,
               accel: 0.05
            };
            this.changeState("chase");
         }
         update() {
            super.update();
            if (this.hit) {
               this.updateEnding();
            } else if (!this.isCrashed()) {
               this.updateDirection();
               this.updateSpeed();
               this.updatePosition();
            }
         }
         updateEnding() {
            const e = {
               x: Ma.sys.session.x - this.x,
               y: Ma.sys.session.y - 64 - this.y
            };
            if (Math.hypot(e.x, e.y) < 8) {
               this.shift(e.x, e.y);
               this.changeState("end");
               Ma.sys.game.caught = true;
            } else {
               const t = Math.atan2(e.y, e.x);
               const s = Math.cos(t);
               const i = Math.sin(t);
               this.shift(s, i);
            }
         }
         crash() {
            this.changeState("crash");
         }
         resume() {
            this.changeState("chase");
         }
         slow() {
            this.speed.raw *= 0.5;
         }
         ending() {
            this.hit = true;
         }
         isCrashed() {
            return !(this.timer.crash <= 0) && (this.timer.crash -= Ma.sys.game.time.loop * Ma.sys.game.time.scale, !(this.timer.crash <= 0) || (this.resume(), false));
         }
         changeState(e) {
            if (this.state !== e) {
               this.state = e;
               this.timer = {
                  crash: 0,
                  dir: 0
               };
               switch (e) {
                  case "chase":
                     break;
                  case "crash":
                     this.timer.crash += 1.25;
                     this.speed.raw = 0;
                     break;
                  case "end":
                     this.anim = "oneshot";
                     this.time = 0;
                     this.speed.current = 0;
                     this.speed.raw = 0;
                     this.speed.max = 0;
               }
               this.pose = e;
            }
         }
         updateDirection() {
            this.dist = Math.hypot(Ma.sys.session.x - this.x, Ma.sys.session.y - this.y);
            this.timer.dir -= Ma.sys.game.time.loop * Ma.sys.game.time.scale;
            if (this.timer.dir <= 0) {
               this.timer.dir += Ma.sys.rand(25, 100) / 100 * (this.dist / Ma.sys.session.y);
               const e = Ma.sys.session.x - this.x;
               const t = Ma.sys.session.y - this.y;
               const s = Math.atan2(t, e) * 180 / Math.PI;
               this.angle = s * Math.PI / 180;
            }
         }
         updateSpeed() {
            const e = this.speed;
            const t = e.accel * Ma.sys.game.time.scale;
            const s = this.y >= Ma.sys.session.y;
            if (e.raw < e.max && !s) {
               this.speed.raw += t;
            } else if (s) {
               this.speed.raw -= t;
            } else {
               this.speed.raw = e.max;
            }
            this.speed.current = e.raw * Ma.sys.game.time.scale;
         }
         updatePosition() {
            const e = this.dist / Ma.sys.session.y * 15;
            const t = Math.cos(this.time * 16) * e * Math.PI / 180;
            const s = this.speed.current * Math.cos(this.angle + t);
            const i = this.speed.current * Math.sin(this.angle + t);
            this.shift(s, i);
         }
         draw() {
            ja.sys.drawLayer(this.type, this.pose, this.x, this.y, this.time, this.anim, this);
         }
      }
      class $a {
         constructor() {
            this.pressed = undefined;
            if ($a.sys) {
               return $a.sys;
            }
            $a.sys = this;
            window.addEventListener("keydown", e => $a.sys.onKeydown(e), false);
            window.addEventListener("keyup", e => $a.sys.onKeyup(e), false);
            this.pressed = {};
         }
         onKeydown(e) {
            const t = e.key.toLowerCase();
            Ka.sys.changeInputMethod(Sa.Keyboard);
            if (!this.pressed[t]) {
               this.pressed[t] = true;
               switch (t) {
                  case "arrowdown":
                  case "s":
                     Ka.sys.routeInput(Ua.Down);
                     break;
                  case "arrowleft":
                  case "a":
                     Ka.sys.routeInput(Ua.Left);
                     break;
                  case "arrowright":
                  case "d":
                     Ka.sys.routeInput(Ua.Right);
                     break;
                  case "arrowup":
                  case "w":
                     Ka.sys.routeInput(Ua.Stop);
                     break;
                  case "enter":
                  case " ":
                     Ka.sys.routeInput(Ua.Toggle);
                     break;
                  case "escape":
                     Ka.sys.routeInput(Ua.Settings, false, false);
                     break;
                  case "f":
                     Ka.sys.routeInput(Ua.Boost, false, false);
               }
               Ka.sys.checkCheatCode(t);
            }
         }
         onKeyup(e) {
            const t = e.key.toLowerCase();
            delete this.pressed[t];
         }
      }
      $a.sys = null;
      class Ga {
         constructor() {
            this.mousePos = undefined;
            if (Ga.sys) {
               return Ga.sys;
            }
            Ga.sys = this;
            window.addEventListener("click", function (e) {
               Ga.sys.onClick(e);
            }, false);
            window.addEventListener("mousemove", function (e) {
               Ga.sys.onMouseMove(e);
            }, false);
            window.addEventListener("contextmenu", function (e) {
               Ga.sys.onContextMenu(e);
            }, false);
            this.reset();
         }
         reset() {
            this.mousePos = undefined;
         }
         onClick(e) {
            if (Ma.sys.session.flyoutActive) {
               return;
            }
            Ka.sys.changeInputMethod(Sa.Mouse);
            const t = Fa.sys.selector || null;
            if (!t || !t.contains(e.target)) {
               Ka.sys.routeInput(Ua.Toggle);
            }
         }
         onMouseMove(e) {
            if (Ma.sys.session.state === xa.Play) {
               const t = this.checkAngle(Ma.sys.session, e);
               if (this.mousePos !== t) {
                  this.mousePos = t;
                  Ka.sys.routeInput(t, true, false);
               }
            }
         }
         onContextMenu(e) {
            e.preventDefault();
            if (Ma.sys.session.state === xa.Play) {
               Ka.sys.routeInput(Ua.Boost, false, false);
            }
         }
         checkAngle(e, t) {
            const s = Math.atan2(e.y - t.clientY, e.x - t.clientX) * 180 / Math.PI;
            if (s <= 0 && s >= -55) {
               return Ua.Left;
            } else if (s >= -180 && s <= -125) {
               return Ua.Right;
            } else if (s < -55 && s > -75) {
               return Ua.DownLeft;
            } else if (s > -125 && s < -105) {
               return Ua.DownRight;
            } else if (s > 0 && s < 180) {
               return Ua.Stop;
            } else {
               return Ua.Down;
            }
         }
      }
      Ga.sys = null;
      class qa {
         constructor() {
            this.swipeStart = undefined;
            this.swipeDelta = undefined;
            this.touchData = undefined;
            this.touchPos = undefined;
            if (qa.sys) {
               return qa.sys;
            }
            qa.sys = this;
            window.addEventListener("touchstart", e => qa.sys.onTouchStart(e), false);
            window.addEventListener("touchmove", e => qa.sys.onTouchMove(e), false);
            window.addEventListener("touchend", e => qa.sys.onTouchEnd(e), false);
            this.reset();
         }
         reset() {
            this.swipeStart = 0;
            this.swipeDelta = 400;
            this.touchData = {
               down: {
                  x: 0,
                  y: 0
               },
               move: {
                  x: 0,
                  y: 0
               }
            };
         }
         onTouchStart(e) {
            if (!this.interact(e) && (Ka.sys.changeInputMethod(Sa.Touch), e.targetTouches)) {
               const t = e.targetTouches[0];
               this.swipeStart = Date.now();
               this.touchPos = undefined;
               this.touchData = {
                  down: {
                     x: t.clientX,
                     y: t.clientY
                  },
                  move: {
                     x: t.clientX,
                     y: t.clientY
                  }
               };
            }
         }
         onTouchMove(e) {
            if (this.interact(e)) {
               return;
            }
            const t = e.targetTouches[0];
            this.touchData.move = {
               x: t.clientX,
               y: t.clientY
            };
            if (Ma.sys.session.state === xa.Play && Date.now() - this.swipeStart > 80) {
               const e = this.checkAngle(Ma.sys.session, this.touchData.move);
               if (this.touchPos !== e) {
                  this.touchPos = e;
                  Ka.sys.routeInput(e, true, false);
               }
            }
         }
         onTouchEnd(e) {
            if (this.interact(e)) {
               return;
            }
            const t = this.touchData.move.x - this.touchData.down.x;
            const s = this.touchData.move.y - this.touchData.down.y;
            this.touchPos = undefined;
            if (Math.abs(t) < 10 && Math.abs(s) < 10) {
               const e = {
                  x: Ma.sys.session.x,
                  y: Ma.sys.session.y
               };
               const t = this.checkAngle(e, this.touchData.down);
               if (Ma.sys.session.state === xa.Menu) {
                  if (t === Ua.Left || t === Ua.Right) {
                     Ka.sys.routeInput(t, true, false);
                  } else {
                     Ka.sys.routeInput(Ua.Toggle);
                  }
               } else {
                  Ka.sys.routeInput(t, true, true);
               }
               Ka.sys.checkCheatCode(t);
            } else if (Date.now() - this.swipeStart <= this.swipeDelta) {
               let e = this.checkAngle(this.touchData.down, this.touchData.move);
               if (Ma.sys.session.state === xa.Menu) {
                  switch (e) {
                     case Ua.Right:
                        e = Ua.Left;
                        break;
                     case Ua.Left:
                        e = Ua.Right;
                  }
               }
               const t = e === Ua.Down;
               Ka.sys.routeInput(e, false, t);
            }
         }
         checkAngle(e, t) {
            const s = Math.atan2(e.y - t.y, e.x - t.x) * 180 / Math.PI;
            if (s <= 30 && s >= -55) {
               return Ua.Left;
            } else if (s >= 150 || s >= -180 && s <= -125) {
               return Ua.Right;
            } else if (s < -55 && s > -75) {
               return Ua.DownLeft;
            } else if (s > -125 && s < -105) {
               return Ua.DownRight;
            } else if (s > 30 && s < 150) {
               return Ua.Stop;
            } else {
               return Ua.Down;
            }
         }
         interact(e) {
            const t = e.target;
            return !!Ma.sys.session.flyoutActive || !!t.closest("button") || (e.cancelable && e.preventDefault(), false);
         }
      }
      qa.sys = null;
      let Ua = function (e) {
         e.Settings = "settings";
         e.Left = "left";
         e.Right = "right";
         e.Down = "down";
         e.Stop = "stop";
         e.DownLeft = "downleft";
         e.DownRight = "downright";
         e.Boost = "boost";
         e.Toggle = "toggle";
         e.Reset = "reset";
         return e;
      }({});
      class Ka {
         constructor() {
            this.codes = undefined;
            this.lastTime = undefined;
            this.thisTime = undefined;
            this.lastInput = undefined;
            this.lastInputTime = undefined;
            this.doubleDelta = undefined;
            this.codesPossible = undefined;
            if (Ka.sys) {
               return Ka.sys;
            }
            Ka.sys = this;
            new Wa();
            new $a();
            new Ga();
            new qa();
            this.defineCodes();
            this.reset();
         }
         reset() {
            Wa.sys.reset();
            Ga.sys.reset();
            qa.sys.reset();
            this.lastTime = 0;
            this.thisTime = 0;
            this.lastInput = undefined;
            this.lastInputTime = Date.now();
            this.doubleDelta = 300;
            this.codesPossible = [];
         }
         update() {
            Wa.sys.update();
         }
         defineCodes() {
            this.codes = {
               keyboard: [["m", "i", "c", "r", "o", "s", "o", "f", "t"], ["e", "d", "g", "e"], ["s", "a", "f", "e"], ["arrowup", "arrowup", "arrowdown", "arrowdown", "arrowleft", "arrowright", "arrowleft", "arrowright", "b", "a"], ["b", "i", "g"]],
               directional: [["left", "down", "right", "stop", "left", "down", "right", "stop"], ["stop", "down", "stop", "down"], ["stop", "right", "down", "left"], ["stop", "stop", "down", "down", "left", "right", "left", "right"], ["stop", "stop", "stop", "stop"]]
            };
         }
         routeInput(e, t = false, s = true) {
            if (Ma.sys.session.flyoutActive) {
               if (e === Ua.Settings) {
                  this.inputSettings();
               }
               return;
            }
            const i = Ma.sys.session.inputType;
            let n = false;
            if (s) {
               n = this.registerDoubleInput(e);
            }
            if (i !== Sa.Mouse && i !== Sa.Touch || e !== Ua.Toggle || n) {
               if (i !== Sa.Keyboard && i !== Sa.Touch || e !== Ua.Down || t || !n) {
                  if (i === Sa.Touch && n) {
                     e = Ua.Toggle;
                  }
               } else {
                  e = Ua.Boost;
               }
               if (Ma.sys.session.state !== xa.Menu || e !== Ua.Left && e !== Ua.Right) {
                  switch (e) {
                     case Ua.Toggle:
                        this.inputToggle();
                        break;
                     case Ua.Settings:
                        this.inputSettings();
                        break;
                     case Ua.Reset:
                        Qa.sys.changeGameState(xa.Menu);
                        break;
                     default:
                        Ja.sys.routeAction(e, t);
                  }
               } else {
                  switch (e) {
                     case Ua.Left:
                        Ja.sys.changeCharacter(-1);
                        break;
                     case Ua.Right:
                        Ja.sys.changeCharacter(1);
                  }
               }
            }
         }
         registerDoubleInput(e) {
            this.thisTime = Date.now();
            let t = false;
            if (this.thisTime - this.lastTime <= this.doubleDelta && this.lastInput === e) {
               t = true;
               e = undefined;
            }
            this.lastTime = this.thisTime;
            this.lastInput = e;
            return t;
         }
         changeInputMethod(e) {
            if (Ma.sys.session.inputType !== e && !(this.lastInputTime + 100 > Date.now())) {
               this.lastInputTime = Date.now();
               Ma.sys.session.inputType = e;
               Fa.sys.updateInputTypeUI();
            }
         }
         inputToggle() {
            const e = Ma.sys.session.state;
            if (e === xa.Play) {
               Qa.sys.changeGameState(xa.Pause);
            } else if (e === xa.Pause || e === xa.Menu) {
               Qa.sys.changeGameState(xa.Play);
            } else if (e === xa.Over) {
               Qa.sys.changeGameState(xa.Menu);
            }
         }
         inputSettings() {
            if (Ma.sys.session.state === xa.Play) {
               Qa.sys.changeGameState(xa.Pause);
            }
            document.dispatchEvent(new CustomEvent(fl));
         }
         checkCheatCode(e) {
            const t = Ma.sys.session.inputType;
            if (Ma.sys.session.state !== xa.Menu) {
               return;
            }
            const s = t === Sa.Keyboard ? this.codes.keyboard : this.codes.directional;
            this.codesPossible = this.codesPossible.filter(t => e === s[t.idx][t.pos]);
            s.filter(t => e === t[0]).forEach(e => {
               this.codesPossible.push({
                  idx: s.indexOf(e),
                  pos: 0
               });
            });
            this.codesPossible.some(e => {
               e.pos++;
               if (e.pos === s[e.idx].length) {
                  let t = "code";
                  switch (e.idx) {
                     case 0:
                        this.cheat("lives");
                        t = "cheatcode";
                        break;
                     case 1:
                        this.cheat("boosts");
                        t = "cheatcode";
                        break;
                     case 2:
                        this.cheat("safety");
                        t = "cheatcode";
                        break;
                     case 3:
                        Ja.sys.changeCharacter(7, true);
                        break;
                     case 4:
                        Ja.sys.scale = 2;
                  }
                  Fa.sys.sendNotification(t);
               }
            });
         }
         cheat(e, t = true) {
            const s = Ma.sys.game.cheat;
            if (t && Ma.sys.session.state === xa.Menu) {
               s.used = true;
               s[e] = true;
               switch (e) {
                  case "lives":
                  case "boosts":
                     Ma.sys.game[e].current = 3;
                     break;
                  case "safety":
                     Ja.sys.collectFriend();
               }
            } else {
               s[e] = false;
               switch (e) {
                  case "boosts":
                     Ma.sys.game[e].current = 0;
                     break;
                  case "safety":
                     Ja.sys.removeFriend();
               }
            }
            if (!s.lives && !s.boosts && !s.safety) {
               s.used = false;
            }
            Fa.sys.updateIcons();
         }
      }
      Ka.sys = null;
      class Wa {
         constructor() {
            this.indexList = undefined;
            this.buttonMap = undefined;
            this.last = undefined;
            this.vib = undefined;
            this.vibCurrent = undefined;
            this.timer = undefined;
            this.linkedPad = undefined;
            if (Wa.sys) {
               return Wa.sys;
            }
            Wa.sys = this;
            window.addEventListener("gamepadconnected", e => Wa.sys.onGamepadConnected(e));
            window.addEventListener("gamepaddisconnected", e => Wa.sys.onGamepadDisconnected(e));
            this.indexList = [];
            this.buttonMap = ["a", "b", "x", "y", "lb", "rb", "lt", "rt", "select", "start", "lstick", "rstick", "up", "down", "left", "right", "home", "touchpad"];
            this.linkedPad = {
               index: undefined,
               pad: undefined,
               pressed: {}
            };
            this.defineVibrations();
            this.setVibration();
            this.reset();
         }
         reset() {
            this.last = undefined;
         }
         defineVibrations() {
            this.vib = {
               default: {
                  dur: 0,
                  weak: 0.4,
                  strong: 0.4
               },
               tiny: {
                  dur: 100,
                  weak: 0.05,
                  strong: 0
               },
               small: {
                  dur: 100,
                  weak: 0.15,
                  strong: 0
               },
               big: {
                  dur: 600,
                  weak: 0.5,
                  strong: 0
               },
               boost: {
                  dur: 3000,
                  weak: 0,
                  strong: 0.25
               },
               pickup: {
                  dur: 200,
                  weak: 0.2,
                  strong: 0
               },
               ramp: {
                  dur: 200,
                  weak: 0,
                  strong: 0.15
               },
               slow: {
                  dur: 400,
                  weak: 0,
                  strong: 0.15
               },
               crash: {
                  dur: 300,
                  weak: 0.4,
                  strong: 0.4
               }
            };
         }
         setVibration(e = "default") {
            this.vibCurrent = this.vib[e];
            this.timer = this.vibCurrent.dur;
         }
         vibrateController() {
            const e = Ma.sys.session.inputType;
            if (e === Sa.Xbox || e === Sa.Ps) {
               const e = this.vibCurrent;
               const t = this.timer / e.dur;
               this.linkedPad.pad.vibrationActuator.playEffect("dual-rumble", {
                  startDelay: 0,
                  duration: e.dur,
                  weakMagnitude: t * e.weak,
                  strongMagnitude: t * e.strong
               });
            }
         }
         onGamepadConnected(e) {
            Wa.sys.indexList.push(e.gamepad.index);
         }
         onGamepadDisconnected(e) {
            const t = Wa.sys.indexList.indexOf(e.gamepad.index);
            if (t > -1) {
               Wa.sys.indexList.splice(t, 1);
            }
            this.linkedPad = {
               index: undefined,
               pad: undefined,
               pressed: {}
            };
            const s = Ma.sys.session.inputType;
            if (s === Sa.Xbox || s === Sa.Ps) {
               Ka.sys.changeInputMethod(Sa.Keyboard);
            }
         }
         setController(e, t) {
            this.linkedPad = {
               index: e,
               pad: t,
               pressed: {}
            };
            this.changeControllerType(t);
         }
         update() {
            const e = this.indexList.length;
            if (!(e <= 0)) {
               if (this.linkedPad.index === undefined) {
                  for (let t = 0; t < e; t++) {
                     const e = navigator.getGamepads()[this.indexList[t]];
                     if (e !== undefined) {
                        const s = this.checkJoysticks(e);
                        const i = this.checkButtons(e);
                        if (s !== null || i !== null) {
                           this.setController(this.indexList[t], e);
                        }
                     }
                  }
               } else {
                  if (this.timer > 0) {
                     this.checkVibrations();
                  }
                  const e = navigator.getGamepads()[this.linkedPad.index];
                  if (e !== undefined) {
                     this.checkJoysticks(e);
                     this.checkButtons(e);
                  }
               }
            }
         }
         checkVibrations() {
            this.vibrateController();
            this.timer -= Ma.sys.game.time.loop * 1000;
            if (this.timer <= 0) {
               this.setVibration();
            }
         }
         changeControllerType(e) {
            const t = e.id.toLowerCase().includes("054c") ? Sa.Ps : Sa.Xbox;
            Ka.sys.changeInputMethod(t);
         }
         checkJoysticks(e) {
            const t = 0.5;
            const s = e.axes[0] > t || e.axes[2] > t;
            const i = e.axes[0] < -0.5 || e.axes[2] < -0.5;
            const n = e.axes[1] > t || e.axes[3] > t;
            const o = e.axes[1] < -0.5 || e.axes[3] < -0.5;
            let r;
            if (s || i || o || n) {
               this.changeControllerType(e);
               if (!o || s || i) {
                  if (!n || s || i) {
                     if (!i || o || n) {
                        if (!s || o || n) {
                           if (s && o) {
                              r = Ua.Right;
                           } else if (s && n) {
                              r = Ua.DownRight;
                           } else if (i && o) {
                              r = Ua.Left;
                           } else if (i && n) {
                              r = Ua.DownLeft;
                           }
                        } else {
                           r = Ua.Right;
                        }
                     } else {
                        r = Ua.Left;
                     }
                  } else {
                     r = Ua.Down;
                  }
               } else {
                  r = Ua.Stop;
               }
            } else {
               this.last = undefined;
            }
            if (this.last === r) {
               return null;
            }
            this.last = r;
            if (r) {
               if (Ma.sys.session.flyoutActive) {
                  switch (r) {
                     case Ua.Stop:
                        this.focusNextElement(-1);
                        break;
                     case Ua.Down:
                        this.focusNextElement(1);
                  }
               } else {
                  Ka.sys.routeInput(r, true, false);
               }
            }
            return r;
         }
         checkButtons(e) {
            function t(e) {
               if (typeof e == "object") {
                  return e.pressed;
               } else {
                  return e === 1;
               }
            }
            if (t(e.buttons[4]) && t(e.buttons[5])) {
               Ka.sys.routeInput(Ua.Reset);
               this.linkedPad.pressed.lb = true;
               this.linkedPad.pressed.rb = true;
               return null;
            }
            let s;
            const i = e.buttons.length;
            for (let n = 0; n < i; n++) {
               if (t(e.buttons[n])) {
                  if (this.linkedPad.pressed[this.buttonMap[n]]) {
                     return null;
                  }
                  this.linkedPad.pressed[this.buttonMap[n]] = true;
                  this.changeControllerType(e);
                  if (Ma.sys.session.flyoutActive && ["a", "b", "up", "down"].includes(this.buttonMap[n])) {
                     switch (this.buttonMap[n]) {
                        case "a":
                           document.activeElement.click();
                           break;
                        case "b":
                           Ka.sys.routeInput(Ua.Settings, false, false);
                           break;
                        case "up":
                           this.focusNextElement(-1);
                           break;
                        case "down":
                           this.focusNextElement(1);
                     }
                     return null;
                  }
                  switch (this.buttonMap[n]) {
                     case "a":
                        s = Ua.Toggle;
                        break;
                     case "lb":
                     case "left":
                        s = Ua.Left;
                        break;
                     case "rb":
                     case "right":
                        s = Ua.Right;
                        break;
                     case "lt":
                     case "rt":
                        s = Ua.Boost;
                        break;
                     case "up":
                        s = Ua.Stop;
                        break;
                     case "down":
                        s = Ua.Down;
                        break;
                     case "select":
                     case "start":
                     case "home":
                     case "touchpad":
                        s = Ua.Settings;
                  }
                  Ka.sys.routeInput(s, false, false);
                  Ka.sys.checkCheatCode(s);
               } else {
                  this.linkedPad.pressed[this.buttonMap[n]] = false;
               }
            }
            return s;
         }
         focusNextElement(e = 1) {
            const t = Array.from(document.querySelectorAll("a:not([disabled]), select:not([disabled]), div[role=\"option\"]:not([disabled]), input:not([disabled]), button:not([disabled]), [tabindex]:not([disabled]):not([tabindex=\"-1\"])")).filter(e => e.offsetWidth > 0 || e.offsetHeight > 0 || e === document.activeElement);
            const s = t.indexOf(document.activeElement) || 0;
            (t[s + e] || t[0]).focus();
         }
      }
      Wa.sys = null;
      class Ja extends Ra {
         constructor(e, t, s, i) {
            super(e, t, s, i);
            this.speed = undefined;
            this.timer = undefined;
            this.dist = undefined;
            this.angle = undefined;
            this.dir = undefined;
            this.scale = undefined;
            this.swapped = undefined;
            this.trick = undefined;
            this.shadow = undefined;
            this.boostFx = undefined;
            this.previousGate = undefined;
            this.skins = undefined;
            if (Ja.sys) {
               return Ja.sys;
            }
            Ja.sys = this;
            this.reset();
         }
         reset() {
            super.reset();
            this.speed = {
               current: 0,
               x: 0,
               y: 0,
               raw: 0,
               min: 1,
               max: 7.5,
               base: 7.5,
               accel: 0.02,
               airAdd: 2.5,
               boostAdd: 5
            };
            this.timer = {
               crash: 0
            };
            this.dist = {};
            this.angle = 0;
            this.dir = "stop";
            this.trick = 0;
            this.shadow = 0;
            this.scale = 1;
            this.boostFx = [];
            this.swapped = false;
            this.previousGate = -1;
            this.skins = {
               render: [],
               zoom: [0.2, 0.5, 1, 0.5, 0.2],
               poses: ["left", "left", "left", "downleft", "down", "downright", "right", "right", "right", "downright", "down", "downleft"]
            };
            this.changeCharacter(Ma.sys.session.settings.character, true);
         }
         move() {}
         unlockForNewGame() {
            this.changeDirection("down");
            Wa.sys.setVibration("big");
         }
         update() {
            super.update();
            this.speed.x = this.speed.current * -Math.cos(this.angle);
            this.speed.y = this.speed.current * -Math.sin(this.angle);
            this.checkBoundaries();
            this.updateTrackers();
            this.updateBoostFx();
            if (this.dir !== "stop" && !this.timer.crash) {
               this.updateSpeed();
            }
         }
         checkBoundaries() {
            const e = Ma.sys.game.dist;
            const t = Ma.sys.session.settings.mode;
            switch (t) {
               case GameModeIDs.TimeTrial:
               case GameModeIDs.ZigZag:
                  if (Math.abs(e.x) > PlayerManager.sys.boundary[t]) {
                     this.bounce();
                  }
                  break;
               case GameModeIDs.Endless:
                  if (e.y < 8000 && e.x < -6400 && !Xa.sys.swapBuilt) {
                     Xa.sys.buildSwap();
                  }
                  if (!Ma.sys.game.highScore && e.unit > Ma.sys.session.bestScore.endless && !Ma.sys.game.cheat.used) {
                     Ma.sys.game.highScore = true;
                     Fa.sys.refreshDisplay();
                     if (e.unit > 100) {
                        Fa.sys.sendNotification("score");
                     }
                  }
            }
         }
         changeCharacter(e, t = false) {
            const s = PlayerManager.sys.characterList[Ma.sys.session.settings.character];
            let i;
            let n;
            if (t) {
               i = PlayerManager.sys.characterList[e];
               if (!PlayerManager.sys.selectionList.includes(i)) {
                  PlayerManager.sys.selectionList.push(i);
               }
               n = PlayerManager.sys.selectionList.indexOf(i);
            }
            const o = PlayerManager.sys.selectionList;
            if (!t) {
               n = (o.length + PlayerManager.sys.selectionList.indexOf(s) + e) % o.length;
               i = PlayerManager.sys.selectionList[n];
            }
            this.skins.render = [];
            const r = this.skins.zoom.length;
            for (let e = 0; e < r; e++) {
               const t = (o.length + n + (e - Math.floor(r / 2))) % o.length;
               this.skins.render[e] = PlayerManager.sys.selectionList[t];
            }
            Ma.sys.session.settings.character = PlayerManager.sys.characterList.indexOf(i);
            Ma.sys.saveSessionSettings();
            PlayerManager.sys.createPlayerSprite();
            Wa.sys.setVibration("small");
         }
         routeAction(e, t = false) {
            if (Ma.sys.session.state === xa.Play && !this.timer.crash && !("bounce" in this.dist) && (!("air" in this.dist) || e === Ua.Down)) {
               switch (e) {
                  case Ua.Stop:
                     this.stop();
                     break;
                  case Ua.Down:
                     this.down();
                     break;
                  case Ua.Left:
                  case Ua.Right:
                  case Ua.DownLeft:
                  case Ua.DownRight:
                     this.changeDirection(e, t);
                     break;
                  case Ua.Boost:
                     this.boost();
               }
            }
         }
         changeDirection(e, t = false) {
            if (this.timer.crash || "bounce" in this.dist || "air" in this.dist && e !== "down") {
               return;
            }
            let s;
            if (t || e !== "left" || this.dir === "left") {
               if (!t && e === "right" && this.dir !== "right") {
                  e = this.dir === "downright" ? "right" : "downright";
               }
            } else {
               e = this.dir === "downleft" ? "left" : "downleft";
            }
            switch (e) {
               case "left":
                  s = -42;
                  break;
               case "right":
                  s = -138;
                  break;
               case "downleft":
                  s = -60;
                  break;
               case "downright":
                  s = -120;
                  break;
               case "down":
                  s = -90;
                  break;
               case "stop":
                  s = 90;
            }
            this.dir = e;
            this.changePose(e);
            this.angle = s * Math.PI / 180;
         }
         changePose(e) {
            if (this.swapped) {
               e = e === "stop" ? "crash" : "chase";
            }
            this.pose = e;
         }
         updateTrackers() {
            if (this.timer.crash) {
               this.timer.crash -= Ma.sys.game.time.loop * Ma.sys.game.time.scale;
               if (this.timer.crash < 0) {
                  this.timer.crash = undefined;
                  this.stop();
                  Ga.sys.reset();
               }
            }
            for (const e in this.dist) {
               this.dist[e] -= this.speed.current;
               if (this.dist[e] <= 0) {
                  delete this.dist[e];
                  this.endDistTracker(e);
               }
            }
         }
         updateSpeed() {
            let e = 1;
            const t = this.speed;
            if ("air" in this.dist || "boost" in this.dist) {
               e = 8;
            }
            this.setMinPlayerSpeed();
            const s = t.accel * e * Ma.sys.game.time.scale;
            this.speed.raw = t.raw <= t.max ? t.raw += s : t.raw -= s;
            this.speed.current = t.raw * Ma.sys.game.time.scale;
         }
         stop() {
            this.changeDirection("stop");
            this.stopPlayerSpeed();
            Wa.sys.setVibration("tiny");
         }
         down() {
            if ("air" in this.dist) {
               this.trick = this.trick % 2 + 1;
               if (this.trick === 1) {
                  this.changePose("air1");
               } else {
                  this.changePose("air2");
               }
               Wa.sys.setVibration("small");
            } else {
               this.changeDirection("down");
            }
         }
         slow() {
            this.speed.raw *= 0.7;
            Wa.sys.setVibration("slow");
         }
         crash() {
            if ("immune" in this.dist) {
               return;
            }
            const e = Ma.sys.game.cheat;
            if (Ma.sys.game.friend && !e.safety) {
               this.removeFriend();
               Xa.sys.buildCrashedFriend(this.x + (Math.random() - 0.5) * 48, this.y + 32);
            }
            if (!e.lives && !e.safety) {
               Ma.sys.game.lives.current -= 1;
            }
            Fa.sys.refreshDisplay();
            if (Ma.sys.game.lives.current <= 0) {
               this.lose();
            } else {
               this.timer.crash = 1;
               this.stopPlayerSpeed();
               this.dist.immune = 96;
               this.changePose("crash");
               Wa.sys.setVibration("crash");
            }
         }
         air(e) {
            if (!this.timer.crash) {
               this.changeDirection("down");
               if ("boost" in this.dist) {
                  this.dist.boost += e;
               }
               this.dist.air = e;
               this.trick = Ma.sys.rand(1, 2);
               this.speed.max = this.speed.base + this.speed.airAdd;
               this.shadow = 0;
               this.down();
               Wa.sys.setVibration("ramp");
            }
         }
         boost(e = false) {
            if (!!e || !(Ma.sys.game.boosts.current <= 0) && !("boost" in this.dist)) {
               if (!e && !Ma.sys.game.cheat.boosts) {
                  Ma.sys.game.boosts.current -= 1;
               }
               this.dist.boost = 2000;
               this.speed.max = this.speed.base + this.speed.boostAdd;
               Fa.sys.refreshDisplay();
               Wa.sys.setVibration("boost");
            }
         }
         bounce() {
            this.spin();
            this.dist.bounce = 32;
         }
         endDistTracker(e) {
            switch (e) {
               case "air":
                  this.dist.immune = 256;
                  Ga.sys.reset();
                  if (!("boost" in this.dist)) {
                     this.speed.max = this.speed.base;
                  }
                  this.down();
                  Wa.sys.setVibration("slow");
                  break;
               case "boost":
                  this.speed.max = this.speed.base;
                  Wa.sys.setVibration("tiny");
            }
         }
         swap() {
            this.removeFriend(true);
            this.swapped = true;
            this.changePose("chase");
            this.speed.base += 3;
            this.speed.max = this.speed.base;
            this.hitbox.x -= 32;
            this.hitbox.y -= 32;
            this.hitbox.w += 64;
            this.hitbox.h += 64;
            Xa.sys.top.filter(e => e.type === "lure").forEach(e => {
               Xa.sys.buildObject("foe", e.x, e.y, "chase");
               e.sleep = true;
            });
            Ma.sys.game.cheat.used = true;
            Fa.sys.sendNotification("cheat");
            Wa.sys.setVibration("big");
         }
         spin() {
            const e = Math.random() > 0.5;
            switch (this.dir) {
               case "downright":
               case "right":
                  this.changeDirection(e ? "left" : "downleft", true);
                  break;
               case "downleft":
               case "left":
                  this.changeDirection(e ? "right" : "downright", true);
                  break;
               default:
                  this.changeDirection(e ? "left" : "right", true);
            }
            this.speed.raw *= 0.9;
            Wa.sys.setVibration("slow");
         }
         collectBoost() {
            if (Ma.sys.game.boosts.current < Ma.sys.game.boosts.max) {
               Ma.sys.game.boosts.current += 1;
               Fa.sys.refreshDisplay();
            }
            Wa.sys.setVibration("pickup");
         }
         collectLife() {
            if (Ma.sys.game.lives.current < Ma.sys.game.lives.max) {
               Ma.sys.game.lives.current += 1;
               Fa.sys.refreshDisplay();
            }
            Wa.sys.setVibration("pickup");
         }
         collectCoin() {
            Ma.sys.game.coins += 1;
            Wa.sys.setVibration("pickup");
         }
         collectFriend() {
            Ma.sys.game.friend = true;
            PlayerManager.sys.createPlayerSprite();
            if (Ma.sys.session.settings.mode === GameModeIDs.Endless) {
               Ma.sys.game.shields.current = Ma.sys.game.shields.max;
               Fa.sys.refreshDisplay();
            }
            Wa.sys.setVibration("pickup");
         }
         removeFriend(e = false) {
            if (!!Ma.sys.game.friend && !Ma.sys.game.cheat.safety && !e) {
               Ma.sys.game.friend = false;
               PlayerManager.sys.createPlayerSprite();
               Ma.sys.game.shields.current = 0;
               Fa.sys.refreshDisplay();
            }
         }
         useShield() {
            if (!Ma.sys.game.cheat.safety) {
               Ma.sys.game.shields.current -= 1;
               Fa.sys.refreshDisplay();
               Wa.sys.setVibration("small");
            }
         }
         lose() {
            Ma.sys.game.lives.current = 0;
            Ma.sys.game.shields.current = 0;
            this.dist.immune = 0;
            this.stopPlayerSpeed();
            this.changePose("crash");
            this.boostFx = [];
            Qa.sys.changeGameState(xa.Over);
            Wa.sys.setVibration("big");
         }
         finishline() {
            Ma.sys.game.finish = true;
            this.stopPlayerSpeed();
            this.changePose("stop");
            this.boostFx = [];
            Qa.sys.changeGameState(xa.Over);
            Wa.sys.setVibration("big");
         }
         passGate(e) {
            if (e - 1 === this.previousGate) {
               Ma.sys.game.gates += 1;
            }
            this.previousGate = e;
            Ma.sys.saveGameStats();
            Fa.sys.refreshDisplay();
            Wa.sys.setVibration("small");
         }
         failGate(e) {
            if (Ma.sys.game.highScore) {
               Fa.sys.sendNotification("score");
               Ma.sys.game.highScore = false;
            }
            Ma.sys.game.gates = 0;
            this.previousGate = e;
            Fa.sys.refreshDisplay();
            Wa.sys.setVibration("slow");
         }
         stopPlayerSpeed() {
            this.speed.current = 0;
            this.speed.raw = 0;
            this.speed.max = 0;
            this.speed.x = 0;
            this.speed.y = 0;
         }
         setMinPlayerSpeed() {
            this.speed.raw = Math.max(this.speed.raw, this.speed.min);
            this.speed.max = Math.max(this.speed.max, this.speed.base);
         }
         updateBoostFx() {
            if (this.boostFx.length > 0) {
               this.boostFx.forEach(e => {
                  e.start.x -= this.speed.x * 0.8;
                  e.end.x -= this.speed.x;
                  e.start.y -= this.speed.y * 0.8;
                  e.end.y -= this.speed.y;
                  e.time += Ma.sys.game.time.loop;
               });
               this.boostFx = this.boostFx.filter(e => e.time < 0.5);
            }
            if ("boost" in this.dist && this.speed.current > 0) {
               const e = 16 - Math.random() * 32;
               this.boostFx.push({
                  start: {
                     x: this.x + e,
                     y: this.y + 8
                  },
                  end: {
                     x: this.x + e - this.speed.x * 3,
                     y: this.y + 8 - this.speed.y * 3
                  },
                  time: 0.01
               });
            }
         }
         renderCharacterSelection() {
            const e = Ma.sys.game.time.elapsed;
            const t = this.skins.render.length;
            const s = Math.floor(t / 2);
            const i = Math.floor(e * PlayerManager.sys.sheet.player.fps) % this.skins.poses.length;
            const n = ja.sys.ctx;
            n.save();
            for (let o = 0; o < t; o++) {
               let t = 80;
               let r = 1;
               const a = this.skins.zoom[o];
               let l = this.skins.poses[i];
               if (o === s - 1 || o === s + 1) {
                  t = 96;
               }
               n.globalAlpha = a;
               const c = this.skins.render[o];
               if (o !== s) {
                  l = "down";
                  ja.sys.drawPlayerMenu(c, l, Ma.sys.session.x + t * (o - s), Ma.sys.session.y, r + a);
               } else {
                  r = this.scale;
                  if (Ma.sys.game.shields.current / Ma.sys.game.shields.max > 0) {
                     ja.sys.drawShield(this.x, this.y + 16);
                  }
                  ja.sys.drawPlayerSprite(l, e, Ma.sys.session.x + t * (o - s), Ma.sys.session.y, r + a);
               }
            }
            n.restore();
         }
         draw() {
            if (this.boostFx.length > 0) {
               ja.sys.drawBoost(this.boostFx);
            }
            if (this.swapped) {
               ja.sys.drawLayer("foe", this.pose, this.x, this.y, this.time, this.anim);
            } else {
               const e = Ma.sys.game.time.elapsed;
               if (Ma.sys.game.shields.current / Ma.sys.game.shields.max > 0) {
                  ja.sys.drawShield(this.x, this.y + 16);
               }
               if ("air" in this.dist) {
                  if (this.dist.air < 256) {
                     this.shadow = this.dist.air / 4;
                  } else if (this.shadow < 64) {
                     this.shadow += Ma.sys.game.time.scale * 3;
                  } else {
                     this.shadow = 64;
                  }
                  ja.sys.drawShadow(this.x, this.y + 16, this.shadow);
               }
               if ("immune" in this.dist) {
                  ja.sys.ctx.save();
                  ja.sys.ctx.globalAlpha = Math.floor(e * 4) % 2 == 0 ? 0.4 : 0.7;
               }
               ja.sys.drawPlayerSprite(this.pose, e, this.x, this.y, this.scale);
               if ("immune" in this.dist) {
                  ja.sys.ctx.restore();
               }
            }
         }
      }
      Ja.sys = null;
      class Xa {
         constructor() {
            this.all = undefined;
            this.top = undefined;
            this.btm = undefined;
            this.npc = undefined;
            this.foe = undefined;
            this.endingFoe = undefined;
            this.swapBuilt = undefined;
            this.sleeping = undefined;
            this.prevClusters = undefined;
            this.startingObjects = undefined;
            this.endless = undefined;
            this.timetrial = undefined;
            this.zigzag = undefined;
            this.grid = undefined;
            if (Xa.sys) {
               return Xa.sys;
            }
            Xa.sys = this;
            new Pa();
            new Ja("player", Ma.sys.session.x, Ma.sys.session.y, "down");
            this.reset();
            this.createSleepingObjects();
         }
         reset() {
            if (this.sleeping === undefined) {
               this.sleeping = [];
            } else {
               this.sleeping = this.sleeping.concat(this.top).concat(this.btm).concat(this.npc).concat(this.foe);
            }
            this.grid = {
               size: 16,
               gap: 1024,
               slots: 3
            };
            this.endless = {
               row: {
                  next: 0,
                  inc: 800
               },
               foe: {
                  next: 1000,
                  inc: 480
               },
               npc: {
                  next: 30,
                  inc: 100
               },
               ramp: {
                  next: 500,
                  inc: 500
               },
               boost: {
                  next: 650,
                  inc: 500
               },
               lure: {
                  next: 700,
                  inc: 500
               },
               friend: {
                  next: 3000,
                  inc: 3000
               },
               life: {
                  next: 2000,
                  inc: 1000
               },
               checkpoint: {
                  next: 5000,
                  inc: 5000
               }
            };
            this.timetrial = {
               row: {
                  next: 0,
                  inc: 1088
               },
               counter: 0,
               clusterList: ["start", "intro", "act1a", "act1b", "act2a", "act2b", "act3a", "act3b", "act4a", "act4b", "act5a", "act5b", "act6a", "act6b", "act7a", "act7b", "finish"]
            };
            this.zigzag = {
               row: {
                  next: 0,
                  inc: 1200
               },
               life: {
                  next: 1500,
                  inc: 3000
               },
               boost: {
                  next: 3000,
                  inc: 3000
               },
               counter: 0,
               clusterList: ["small1", "small2", "small3", "small4", "small5", "small6", "small7", "small8", "small9", "small10", "small11", "small12", "small13", "small14", "small15", "small16"]
            };
            this.all = [];
            this.top = [];
            this.btm = [];
            this.npc = [];
            this.foe = [];
            this.prevClusters = [];
            this.swapBuilt = false;
            this.endingFoe = undefined;
            this.calcClusterSlots();
            Ja.sys.reset();
            this.all.push(Ja.sys);
         }
         calcClusterSlots() {
            this.grid.slots = Math.ceil((Ma.sys.session.h - Ma.sys.session.y) / this.grid.gap) * 2 + 3;
         }
         createSleepingObjects() {
            this.startingObjects = {
               wall: 40,
               snag: 40,
               snagsml: 20,
               snagtall: 5,
               spin: 10,
               ramp: 6,
               lure: 3,
               slow: 20,
               slowbig: 10,
               bump: 20,
               bumpbig: 10,
               coin: 2,
               boost: 2,
               life: 1,
               spiral: 5,
               ambient: 10,
               blockbig: 6,
               block: 4,
               friend: 1,
               foe: 2,
               npc: 10
            };
            for (const e in this.startingObjects) {
               if (this.startingObjects.hasOwnProperty(e)) {
                  const t = this.startingObjects[e];
                  for (let s = 0; s < t; s++) {
                     const t = this.createObject(e, 0, 0, undefined);
                     this.sleeping.push(t);
                  }
               }
            }
         }
         createNpc() {
            const e = Ma.sys.rand(1, 13);
            const t = (Math.random() / 2 + 0.25) * Ma.sys.session.w;
            const s = e < Ja.sys.speed.raw ? Ma.sys.session.h + 24 : -24;
            this.buildObject("npc", t, s, "left").speed.max = e;
         }
         createFoe() {
            const e = (Math.random() / 2 + 0.25) * Ma.sys.session.w;
            this.buildObject("foe", e, -32, "chase").speed.raw = Ja.sys.speed.raw + 1;
         }
         buildStartScene() {
            switch (Ma.sys.session.settings.mode) {
               case GameModeIDs.Endless:
                  this.createEndlessStart();
                  break;
               case GameModeIDs.TimeTrial:
                  this.createTimeTrialAct();
                  break;
               case GameModeIDs.ZigZag:
                  this.createZigZagStart();
            }
         }
         update() {
            this.putToSleep();
            switch (Ma.sys.session.settings.mode) {
               case GameModeIDs.Endless:
                  this.updateEndlessMode();
                  break;
               case GameModeIDs.TimeTrial:
                  this.updateTimeTrialMode();
                  break;
               case GameModeIDs.ZigZag:
                  this.updateZigZagMode();
            }
            this.mergeAll();
         }
         nextReady(e, t = true) {
            let s;
            s = t ? Ma.sys.game.dist.unit : Ma.sys.game.dist.y + (Ma.sys.session.h - Ma.sys.session.y);
            return e.next < s && (e.next += e.inc, true);
         }
         calcSpawnHeight(e) {
            return e - Ma.sys.game.dist.y + Ma.sys.session.y;
         }
         updateEndlessMode() {
            if (this.nextReady(this.endless.row, false)) {
               this.createEndlessRow();
            }
            if (this.nextReady(this.endless.foe)) {
               this.createFoe();
            }
            if (this.nextReady(this.endless.npc)) {
               this.createNpc();
            }
         }
         updateTimeTrialMode() {
            if (this.nextReady(this.timetrial.row, false) && this.timetrial.counter < this.timetrial.clusterList.length) {
               this.createTimeTrialAct();
            }
         }
         updateZigZagMode() {
            if (this.nextReady(this.zigzag.row, false)) {
               this.createZigZagGate();
            }
         }
         createEndlessStart() {
            this.buildCluster("endlessStarts", Ma.sys.session.x, Ma.sys.session.y + 128);
         }
         createEndlessRow() {
            const e = Ja.sys;
            const t = this.endless;
            const s = this.calcSpawnHeight(t.row.next);
            const i = Math.floor(this.grid.slots / 2);
            let n = -i;
            for (; n <= i; n++) {
               let i;
               let o;
               let r = "allNormal";
               if (n === 0) {
                  i = 0;
                  o = 0;
                  if ("air" in e.dist) {
                     r = "allPassive";
                  } else {
                     if (this.nextReady(t.checkpoint)) {
                        this.buildCheckpoint(Ma.sys.session.x, s);
                        return;
                     }
                     if (this.nextReady(t.life)) {
                        r = "endlessLives";
                     } else if (this.nextReady(t.friend)) {
                        r = "endlessFriends";
                     } else if (this.nextReady(t.boost)) {
                        r = "endlessBoosts";
                     } else if (this.nextReady(t.ramp)) {
                        r = "endlessRamps";
                     } else if (this.nextReady(t.lure)) {
                        r = "endlessLures";
                     }
                  }
               } else {
                  i = Ma.sys.rand(-20, 20) * this.grid.size;
                  o = Ma.sys.rand(0, 32) * this.grid.size;
               }
               let a = 0;
               if (e.dir === "left" || e.dir === "downleft") {
                  a = -this.grid.gap / 4;
               } else if (e.dir === "right" || e.dir === "downright") {
                  a = this.grid.gap / 4;
               }
               const l = Ma.sys.session.x + n * this.grid.gap + i + a;
               const c = s + o;
               this.buildCluster(r, l, c);
               this.buildEndlessRandomSnags(l, c);
            }
         }
         buildEndlessRandomSnags(e, t) {
            const s = this.grid.gap;
            const i = this.endless.row.inc / 2;
            const n = [[-s / 2, 0], [-s / 4, i], [s / 4, i]];
            const o = n.length;
            for (let s = 0; s < o; s++) {
               if (Math.random() < 0.33) {
                  continue;
               }
               const i = n[s][0] + Ma.sys.rand(-8, 8) * this.grid.size;
               const o = n[s][1] + Ma.sys.rand(-8, 8) * this.grid.size;
               let r = "snag";
               if (Math.random() < 0.5) {
                  r = Ma.sys.randIndex(Object.keys(Pa.sys.spawnSingle));
               }
               const a = Pa.sys.spawnSingle[r];
               const l = Ma.sys.randIndex(a);
               this.buildObject(r, e + i, t + o, l);
            }
         }
         createTimeTrialAct() {
            const e = this.timetrial.clusterList[this.timetrial.counter];
            const t = Ma.sys.session.x - Ma.sys.game.dist.x;
            const s = this.calcSpawnHeight(this.timetrial.row.next);
            this.buildCluster("timetrialScenes", t, s, e);
            this.timetrial.counter += 1;
         }
         createZigZagStart() {
            this.buildCluster("zigzagGates", Ma.sys.session.x, Ma.sys.session.y + 512, "gateFirst");
            this.zigzag.counter += 1;
         }
         createZigZagGate() {
            const e = Ma.sys.session.x - Ma.sys.game.dist.x;
            const t = this.calcSpawnHeight(this.zigzag.row.next);
            const s = this.zigzag.counter % 2 != 0;
            if (s) {
               this.buildCluster("zigzagGates", e - 320, t, "gateLeft");
            } else {
               this.buildCluster("zigzagGates", e + 320, t, "gateRight");
            }
            this.zigzag.counter += 1;
            this.createGateClusters(e, t, s);
         }
         createGateClusters(e, t, s) {
            const i = s ? e + 64 : e - 64;
            this.buildCluster("allNormal", i, t - 128, Ma.sys.randIndex(this.zigzag.clusterList));
            const n = t + this.zigzag.row.inc * 0.5;
            this.buildCluster("zigzagGateScenes", e, n);
            if (this.nextReady(this.zigzag.life)) {
               this.buildObject("life", e, n, "life");
            } else if (this.nextReady(this.zigzag.boost)) {
               this.buildObject("boost", e, n, "boost");
            } else if (Math.random() < 0.1) {
               this.buildObject("spiral", e, n, "spiral1");
            } else if (Math.random() < 0.4) {
               const t = Math.random() > 0.5 ? "slowbig" : "bumpbig";
               this.buildObject(t, e, n, t + "1");
            }
            const o = t + this.zigzag.row.inc * 0.25;
            this.buildCluster("allNormal", e - 560, o + Ma.sys.rand(0, 32) * this.grid.size, Ma.sys.randIndex(this.zigzag.clusterList));
            this.buildCluster("allNormal", e + 560, o + Ma.sys.rand(0, 32) * this.grid.size, Ma.sys.randIndex(this.zigzag.clusterList));
         }
         confirmGate(e) {
            this.all.filter(t => t.gateId === e).forEach(e => {
               e.pose = "pass";
            });
         }
         denyGate(e) {
            this.all.filter(t => t.gateId === e).forEach(e => {
               e.pose = "fail";
            });
         }
         buildCluster(e, t, s, i = undefined) {
            if (!i) {
               const t = Object.keys(Pa.sys.library[e]).filter(e => !this.prevClusters.includes(e));
               i = Ma.sys.randIndex(t);
            }
            const n = Pa.sys.library[e][i];
            this.prevClusters.unshift(i);
            if (this.prevClusters.length > 14) {
               this.prevClusters.pop();
            }
            for (const e in n) {
               if (n.hasOwnProperty(e)) {
                  const i = n[e];
                  const o = i.length;
                  for (let n = 0; n < o; n++) {
                     const o = i[n];
                     let r;
                     if (o.length > 2) {
                        const t = o[2];
                        r = typeof t == "string" ? Ma.sys.randIndex(Pa.sys.legend[e][t]) : t[0];
                     } else {
                        const t = this.randKey(Pa.sys.legend[e], true);
                        r = Ma.sys.randIndex(Pa.sys.legend[e][t]);
                     }
                     const a = t + o[0] * this.grid.size;
                     const l = s + o[1] * this.grid.size;
                     this.buildObject(e, a, l, r);
                  }
               }
            }
         }
         randKey(e, t = false) {
            const s = Object.keys(e);
            const i = e[s[s.length * Math.random() << 0]];
            const n = s.find(t => e[t] === i);
            if (t) {
               return n;
            }
            {
               const e = {
                  [n]: i
               };
               return e;
            }
         }
         buildCrashedFriend(e, t) {
            this.buildObject("friend", e, t, "crash").hit = true;
            this.endless.friend.next = Ma.sys.game.dist.unit + this.endless.friend.inc;
         }
         buildCheckpoint(e, t) {
            this.endless.row.next += this.endless.row.inc;
            this.top = this.sleep(this.top, -64, Ma.sys.session.h + 64);
            this.buildCluster("endlessCheckpoints", e, t);
         }
         buildSwap() {
            this.swapBuilt = true;
            this.endless.row.next += 1280;
            this.top = this.sleep(this.top, -64, Ma.sys.session.h + 64);
            this.buildCluster("endlessSwap", Ma.sys.session.x - (Ma.sys.session.h - Ma.sys.session.y) - 256, Ma.sys.session.h + 256);
         }
         buildObject(e, t, s, i = undefined) {
            t = Math.floor(t) + (Ma.sys.game.dist.x - Math.floor(Ma.sys.game.dist.x));
            s = Math.floor(s) + (Ma.sys.game.dist.y - Math.floor(Ma.sys.game.dist.y));
            let n = this.wake(e, t, s, i);
            n ||= this.createObject(e, t, s, i);
            switch (n.type) {
               case "wall":
                  if (!["f1", "f2", "f3"].includes(i) && Math.random() < 0.5) {
                     n.decor = Ma.sys.randIndex(["a", "b", "c", "d", "e", "f", "g", "h"]);
                  }
                  break;
               case "ambient":
                  n.anim = "hidden";
                  break;
               case "marker":
               case "guide":
               case "gate":
                  n.gateId = this.zigzag.counter;
            }
            n.time = Math.random();
            switch (PlayerManager.sys.sheet[e].group) {
               case "top":
                  this.top.push(n);
                  break;
               case "btm":
                  this.btm.push(n);
                  break;
               case "npc":
                  this.npc.push(n);
                  break;
               case "foe":
                  this.foe.push(n);
            }
            return n;
         }
         createObject(e, t, s, i) {
            switch (e) {
               case "gate":
               case "swap":
                  return new Ba(e, t, s);
               case "foe":
                  return new za(e, t, s, i);
               case "npc":
                  return new Na(e, t, s, i);
               default:
                  return new Ra(e, t, s, i);
            }
         }
         mergeAll() {
            const e = this.top.concat(this.npc).concat(this.foe);
            function t(e, t) {
               return e.hitbox.y + e.hitbox.h - (t.hitbox.y + t.hitbox.h);
            }
            if ("air" in Ja.sys.dist) {
               e.sort((e, s) => t(e, s));
               e.push(Ja.sys);
            } else {
               e.push(Ja.sys);
               e.sort((e, s) => t(e, s));
            }
            this.all = this.btm.concat(e);
         }
         wake(e, t, s, i) {
            let n;
            const o = this.wakeFromSleep(e, i);
            if (o) {
               n = o;
               n.shift(t - n.x, s - n.y);
               n.reset();
               return n;
            } else {
               return null;
            }
         }
         wakeFromSleep(e, t) {
            let s = this.sleeping;
            const i = s.length;
            for (let n = 0; n < i; n++) {
               if (s[n].type === e) {
                  s[n].pose = t;
                  s = s.splice(n, 1);
                  return s[n];
               }
            }
            return null;
         }
         putToSleep() {
            this.top = this.sleep(this.top);
            this.btm = this.sleep(this.btm);
            this.npc = this.sleep(this.npc, -64, Ma.sys.session.h + 64);
            this.foe = this.sleep(this.foe, -256);
         }
         sleep(e, t = -64, s = 10000) {
            function i(e) {
               return e.y > t && e.y < s && !e.sleep;
            }
            const n = e.filter(e => !i(e));
            this.sleeping = this.sleeping.concat(n);
            return e.filter(e => i(e));
         }
      }
      Xa.sys = null;
      class Ya {
         constructor() {
            if (Ya.sys) {
               return Ya.sys;
            }
            Ya.sys = this;
         }
         update() {
            this.checkCollisions();
         }
         checkCollisions() {
            const e = Ja.sys;
            const t = "air" in e.dist;
            const s = "boost" in e.dist;
            const i = this.filterVisible(Xa.sys.top.concat(Xa.sys.btm));
            const n = i.length;
            function o(e, t) {
               if (!(e.y < 16) && Ya.sys.collision(t, e) && !t.objectsHit.includes(e)) {
                  t.objectsHit.push(e);
                  switch (e.type) {
                     case "wall":
                     case "snag":
                     case "snagsml":
                     case "snagtall":
                     case "block":
                     case "blockbig":
                     case "ramp":
                        t.crash();
                        return;
                     default:
                        t.slow();
                        return;
                  }
               }
            }
            for (let r = 0; r < n; r++) {
               const n = i[r];
               if (!this.collision(e, n) || n.hit || t) {
                  if (n.type === "gate" && !n.hit && n.y < e.y) {
                     e.failGate(n.gateId);
                     Xa.sys.denyGate(n.gateId);
                     n.hit = true;
                  } else if (n.type === "ambient" && n.anim === "hidden" && n.y + 32 < e.y) {
                     n.anim = "oneshot";
                     n.time = 0;
                  } else if (n.type === "lure" && n.hit && n.y + 192 < e.y) {
                     Xa.sys.buildObject("foe", n.x, n.y + 32, "chase");
                     n.sleep = true;
                  }
               } else {
                  n.hit = true;
                  if (e.swapped) {
                     if (n.type === "lure") {
                        Xa.sys.buildObject("foe", n.x, n.y, "chase");
                     }
                     n.sleep = true;
                     return;
                  }
                  switch (n.type) {
                     case "wall":
                     case "snag":
                     case "snagsml":
                     case "snagtall":
                     case "block":
                     case "blockbig":
                     case "marker":
                        e.crash();
                        break;
                     case "slow":
                     case "slowbig":
                     case "bump":
                     case "bumpbig":
                        e.slow();
                        break;
                     case "spin":
                     case "spiral":
                     case "guide":
                        e.spin();
                        break;
                     case "boost":
                        e.collectBoost();
                        this.collectAnim(n);
                        break;
                     case "ramp":
                        if (s && Ma.sys.session.settings.mode !== GameModeIDs.TimeTrial) {
                           e.air(1600);
                        } else if (Ma.sys.session.settings.mode === GameModeIDs.TimeTrial) {
                           e.air(576);
                        } else {
                           e.air(1080);
                        }
                        break;
                     case "life":
                        e.collectLife();
                        this.collectAnim(n);
                        break;
                     case "coin":
                        e.collectCoin();
                        this.collectAnim(n);
                        break;
                     case "friend":
                        e.collectFriend();
                        this.collectAnim(n);
                        break;
                     case "gate":
                     {
                        e.passGate(n.gateId);
                        const t = Xa.sys.buildObject("ambient", e.x, e.y);
                        t.hit = true;
                        this.collectAnim(t);
                        Xa.sys.confirmGate(n.gateId);
                        break;
                     }
                     case "finish":
                        e.finishline();
                        break;
                     case "checkpoint":
                        Xa.sys.npc.forEach(e => {
                           e.crash();
                        });
                        Xa.sys.foe.forEach(e => {
                           e.crash();
                        });
                        Ma.sys.saveGameStats();
                        e.boost(true);
                        break;
                     case "swap":
                        e.swap();
                  }
               }
               Xa.sys.npc.forEach(e => {
                  o(n, e);
               });
               Xa.sys.foe.forEach(e => {
                  o(n, e);
               });
            }
            const r = Xa.sys.foe.length;
            const a = Xa.sys.npc.length;
            for (let t = 0; t < r; t++) {
               const s = Xa.sys.foe[t];
               if (this.collision(s, e) && !s.hit && s.timer.crash <= 0) {
                  if (Ma.sys.game.shields.current > 0) {
                     s.crash();
                     e.useShield();
                  } else if (e.swapped) {
                     s.crash();
                  } else {
                     s.ending();
                     Xa.sys.endingFoe = s;
                     e.lose();
                  }
               }
               for (let e = 0; e < a; e++) {
                  const t = Xa.sys.npc[e];
                  if (this.collision(s, t) && t.timer.crash <= 0) {
                     t.crash();
                  }
               }
            }
            if (!t) {
               for (let t = 0; t < a; t++) {
                  const i = Xa.sys.npc[t];
                  if (this.collision(i, e) && i.timer.crash <= 0) {
                     if (s || e.swapped) {
                        i.crash();
                     } else if (Ma.sys.game.shields.current > 0) {
                        i.crash();
                        e.useShield();
                     } else {
                        e.crash();
                     }
                  }
               }
            }
         }
         filterVisible(e) {
            return e.filter(e => function (e) {
               return e.y > -64 && e.y < Ma.sys.session.h + 64 && e.x > -64 && e.x < Ma.sys.session.w + 64 || e.type === "gate";
            }(e));
         }
         collectAnim(e) {
            e.pickup = true;
            e.time = 0;
            e.anim = "ending";
            e.fx = undefined;
         }
         collision(e, t) {
            return !(t.hitbox.x + t.hitbox.w < e.hitbox.x) && !(e.hitbox.x + e.hitbox.w < t.hitbox.x) && !(t.hitbox.y + t.hitbox.h < e.hitbox.y) && !(e.hitbox.y + e.hitbox.h < t.hitbox.y);
         }
      }
      Ya.sys = null;
      class Qa {
         constructor() {
            if (Qa.sys) {
               return Qa.sys;
            }
            Qa.sys = this;
            new Ma();
            new va();
            new Ka();
            new Da();
            new PlayerManager();
            new ja();
            new Xa();
            new Ya();
            new Fa();
            ja.sys.createBackground();
            this.updateTheme(Ma.sys.session.settings.theme, false);
            this.reflowCanvas();
            this.changeGameState(xa.Menu);
         }
         gameLoop(e) {
            Ka.sys.update();
            if (Ma.sys.session.state !== xa.Pause) {
               Ma.sys.update(e);
               switch (Ma.sys.session.state) {
                  case xa.Play:
                     this.updatePlay();
                     break;
                  case xa.Menu:
                     this.updateMenu();
                     break;
                  case xa.Over:
                     this.updateOver();
               }
            }
         }
         changeGameState(e) {
            const t = Ma.sys.session.state;
            Ma.sys.session.state = e;
            switch (e) {
               case xa.Pause:
                  this.triggerPause();
                  break;
               case xa.Play:
                  this.triggerPlay(t);
                  break;
               case xa.Menu:
                  this.triggerMenu();
                  break;
               case xa.Over:
                  this.triggerOver();
            }
            this.checkForcedColors();
            Ea.dispatch(function (e) {
               return {
                  type: Ca.UPDATE_GAME_STATE,
                  gameState: e
               };
            }(e));
         }
         triggerMenu() {
            Fa.sys.hideNotification();
            Fa.sys.hideSharePopup();
            Ma.sys.saveGameStats();
            Ma.sys.resetGameData();
            ja.sys.defineCanvas();
            ja.sys.clearCanvas();
            Xa.sys.reset();
            Fa.sys.showMenuScreen();
            Ka.sys.reset();
         }
         triggerPlay(e) {
            if (e === xa.Menu) {
               this.triggerStart();
            }
            Fa.sys.hideOverlayUI();
            Fa.sys.refreshDisplay();
         }
         triggerStart() {
            Ma.sys.game.time.elapsed = 0;
            Ja.sys.unlockForNewGame();
            Xa.sys.buildStartScene();
            Fa.sys.hideNotification();
         }
         triggerPause() {
            Fa.sys.showPauseScreen();
         }
         triggerOver() {
            Xa.sys.all.forEach(e => {
               if (e.anim === "ending") {
                  e.sleep = true;
               }
            });
            Fa.sys.showOverScreen();
            if (Ma.sys.session.settings.mode !== GameModeIDs.TimeTrial || Ma.sys.game.finish) {
               Ma.sys.saveGameStats();
            }
            const e = LoadTimeData.getBoolean("isNewShare") ? "share" : Ma.sys.game.highScore ? "score" : "share";
            Fa.sys.sendNotification(e, 10000);
         }
         updateMenu() {
            this.render();
         }
         updatePlay() {
            Ya.sys.update();
            Xa.sys.update();
            Xa.sys.all.forEach(e => {
               e.update();
            });
            Xa.sys.all.forEach(e => {
               e.move(Ja.sys.speed);
            });
            Fa.sys.updateScore();
            Ma.sys.updateDistances(Ja.sys.speed.x, Ja.sys.speed.y);
            ja.sys.updateBackground(0, 0, Ja.sys.speed);
            this.render();
         }
         updateOver() {
            const e = Xa.sys.endingFoe;
            if (e && e.hit && e.anim !== "paused") {
               e.update();
               this.render();
            }
         }
         updateMode() {
            Fa.sys.updateGameModeUI();
            Fa.sys.sendNotification("mode");
         }
         updateTheme(e, t = false) {
            Da.sys.loadNewTheme(e);
            (async () => {
               await Da.sys.objectsTemp.decode();
               await Da.sys.playerTemp.decode();
               await Da.sys.bgTemp.decode();
               Da.sys.setNewTheme(e);
               Fa.sys.updateIcons();
               Fa.sys.updateGameTitleUI();
               if (t) {
                  Fa.sys.sendNotification("theme");
               }
            })();
         }
         reflowCanvas() {
            if (Ma.sys.session.state === xa.Play) {
               this.changeGameState(xa.Pause);
            }
            const e = Ma.sys.session.x;
            const t = Ma.sys.session.y;
            ja.sys.defineCanvas();
            const s = Ma.sys.session.x - e;
            const i = Ma.sys.session.y - t;
            Xa.sys.calcClusterSlots();
            Xa.sys.all.forEach(e => {
               e.shift(s, i);
            });
            ja.sys.updateBackground(s, i, {
               x: 0,
               y: 0
            });
            this.render();
         }
         checkForcedColors() {
            const e = window.matchMedia("(forced-colors:active)");
            Ma.sys.session.forcedColors = e.matches;
         }
         render() {
            ja.sys.clearCanvas();
            if (Ma.sys.session.state === xa.Menu) {
               Ja.sys.renderCharacterSelection();
               return;
            }
            const e = Xa.sys.all.filter(function (e) {
               return e.x > -96 && e.x < Ma.sys.session.w + 96 && e.y < Ma.sys.session.h + 96;
            });
            e.forEach(e => {
               e.draw();
            });
            if (Ma.sys.session.settings.hitbox) {
               e.forEach(e => {
                  ja.sys.drawHitbox(e.type, e.hitbox);
               });
            }
            if (Ma.sys.session.settings.mode !== GameModeIDs.Endless) {
               ja.sys.drawBoundaries();
            }
         }
      }
      Qa.sys = null;
      const el = {
         ...vr,
         baseModal_content: {
            ...vr.baseModal_content,
            color: zt
         },
         singleActionModal: {},
         singleActionModal_primaryButton: {
            ...Bs(),
            ...ui("t7"),
            height: "32px",
            "padding-inline-start": "12px",
            "padding-inline-end": "12px"
         }
      };
      const tl = ApplyStyle(Object.assign(Object.assign({}, Gi), {
         button: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, $i()), {
            color: Dn,
            fill: Dn,
            background: Fn,
            "&:hover:enabled, a&:not($button__disabled):hover": Object.assign(Object.assign({
               background: Bn
            }, vs), {
               "& $button_beforeContent, & $button_afterContent": Object.assign({}, Ms)
            }),
            "&:active:enabled, a&:not($button__disabled):active": {
               background: Rn
            }
         }), Hi(Object.assign({
            "border-color": Ii,
            "box-shadow": ss("0 0 0 2px inset {0}", Li(Fn))
         }, ms))), {
            "&:disabled": Object.assign(Object.assign({}, ps), {
               "& $button_beforeContent, & $button_afterContent": Object.assign({}, bs)
            }),
            "& $button_beforeContent, & $button_afterContent": Object.assign({
               fill: Dn
            }, Ss)
         }), ds), {
            "a&:not($button__disabled)": Object.assign(Object.assign({}, us), {
               "& $button_beforeContent, & $button_afterContent": Object.assign({}, ks),
               "&:not($button__disabled):hover": Object.assign(Object.assign({}, Vs), {
                  "& $button_beforeContent, & $button_afterContent": Object.assign({}, ks)
               }),
               "&$button__disabled": Object.assign(Object.assign({}, ps), {
                  "& $button_beforeContent, & $button_afterContent": Object.assign({}, bs),
                  "&:hover": {
                     [os]: {
                        "box-shadow": "none !important"
                     },
                     "& $button_beforeContent, & $button_afterContent": Object.assign({}, bs)
                  }
               })
            })
         })
      }))(Yi);
      function sl() {
         sl = Object.assign ? Object.assign.bind() : function (e) {
            for (var t = 1; t < arguments.length; t++) {
               var s = arguments[t];
               for (var i in s) {
                  if (Object.prototype.hasOwnProperty.call(s, i)) {
                     e[i] = s[i];
                  }
               }
            }
            return e;
         };
         return sl.apply(this, arguments);
      }
      tl.displayName = `${bi}AccentButton`;
      const il = kt(ApplyStyle(el)(class extends baseComponent {
         constructor(...e) {
            super(...e);
            this.handledProps = {
               accept: undefined,
               acceptMessage: undefined,
               closeButtonToolTip: undefined,
               content: undefined,
               dismiss: undefined,
               label: undefined,
               isHubPopup: undefined,
               isHub: undefined,
               contentElement: undefined
            };
         }
         render() {
            const s = typeof this.props.content == "function" ? this.props.content(this.props.managedClasses) : this.props.content;
            return React.createElement(Qr, sl({}, this.unhandledProps(), {
               title: this.props.label,
               label: this.props.label,
               closeButtonTooltip: this.props.closeButtonToolTip,
               onCloseButtonClick: this.props.dismiss,
               className: Ks.A(this.props.managedClasses?.singleActionModal),
               isHubPopup: this.props.isHubPopup,
               isHub: this.props.isHub,
               contentElement: this.props.contentElement
            }), s, React.createElement(mr, null, React.createElement(tl, {
               className: this.props.managedClasses?.singleActionModal_primaryButton,
               onClick: this.props.accept,
               autoFocus: true
            }, this.props.acceptMessage)));
         }
      }), Mt.Secondary);
      function nl(e) {
         return React.createElement("svg", {
            className: e,
            xmlns: "https://www.w3.org/2000/svg",
            viewBox: "0 0 2048 2048",
            width: "16",
            height: "16"
         }, React.createElement("path", {
            d: "M1600 896q40 0 75 15t61 41 41 61 15 75v384q0 119-45 224t-124 183-183 123-224 46q-144 0-268-55t-226-156l-472-472q-28-28-43-65t-15-76q0-42 16-78t43-64 63-42 78-16q82 0 141 59l107 106V853q-59-28-106-70t-80-95-52-114-18-126q0-93 35-174t96-143 142-96T832 0q93 0 174 35t143 96 96 142 35 175q0 93-37 178t-105 149q35 9 63 30t49 52q45-25 94-25 50 0 93 23t69 66q45-25 94-25zM512 448q0 75 34 143t94 113V448q0-40 15-75t41-61 61-41 75-15q40 0 75 15t61 41 41 61 15 75v256q60-45 94-113t34-143q0-66-25-124t-69-101-102-69-124-26q-66 0-124 25t-102 69-69 102-25 124zm1152 640q0-26-19-45t-45-19q-34 0-47 19t-16 47-1 62 0 61-16 48-48 19q-37 0-50-23t-16-60 2-77 2-77-15-59-51-24q-34 0-47 19t-16 47-1 62 0 61-16 48-48 19q-37 0-50-23t-16-60 2-77 2-77-15-59-51-24q-34 0-47 19t-16 47-1 62 0 61-16 48-48 19q-26 0-45-19t-19-45V448q0-26-19-45t-45-19q-26 0-45 19t-19 45v787q0 23-8 42t-23 35-35 23-42 9q-22 0-42-8t-37-24l-139-139q-21-21-50-21t-50 21-22 51q0 29 21 50l472 473q84 84 184 128t219 45q93 0 174-35t142-96 96-142 36-175v-384z"
         }));
      }
      function ol(e) {
         return React.createElement("svg", {
            className: e,
            xmlns: "https://www.w3.org/2000/svg",
            viewBox: "0 0 2048 2048",
            width: "16",
            height: "16"
         }, React.createElement("path", {
            d: "M1783 384q30 0 55 12t43 31 28 46 11 55v864q0 29-10 55t-29 45-43 32-55 12H137q-30 0-55-12t-43-31-28-46-11-55V528q0-28 10-54t29-46 43-32 55-12h1646zm9 144q0-11-9-16H137q-9 5-9 16v864q0 11 9 16h1646q9-5 9-16V528zM384 768H256V640h128v128zM256 896h256v128H256V896zm1152 0h256v128h-256V896zm0 256h256v128h-256v-128zm-1152 0h256v128H256v-128zm384 0h640v128H640v-128zm0-384H512V640h128v128zm0 128h128v128H640V896zm256 0h128v128H896V896zm256 0h128v128h-128V896zM896 768H768V640h128v128zm256 0h-128V640h128v128zm256 0h-128V640h128v128zm128-128h128v128h-128V640z"
         }));
      }
      function rl(e) {
         return React.createElement("svg", {
            className: e,
            xmlns: "https://www.w3.org/2000/svg",
            viewBox: "0 0 2048 2048",
            width: "16",
            height: "16"
         }, React.createElement("path", {
            d: "M1184 0q100 0 187 37t153 103 102 152 38 188v864q0 97-25 187t-71 168-110 143-142 110-169 71-187 25q-97 0-187-25t-168-71-143-110-110-142-71-169-25-187V480q0-100 37-187t103-153T548 38 736 0h448zm352 480q0-73-27-137t-76-112-112-75-137-28h-160v640H896V128H736q-73 0-137 27t-112 76-75 112-28 137v864q0 119 45 224t124 183 183 123 224 46q119 0 224-45t183-124 123-183 46-224V480z"
         }));
      }
      function al(e) {
         return React.createElement("svg", {
            className: e,
            xmlns: "https://www.w3.org/2000/svg",
            viewBox: "0 0 2048 2048",
            width: "16",
            height: "16"
         }, React.createElement("path", {
            d: "M1728 480q17 14 31 31t26 38q35 68 64 139t59 142q37 92 70 186t52 193q8 44 13 88t5 89q0 59-13 115t-45 107q-15 22-37 44t-48 39-56 28-57 11q-31 0-69-27t-77-64-71-76-54-62q-22-25-46-55t-52-49l-24-17q-20-14-42-21t-46-10-48-3-47-1H785q-24 0-47 4t-46 10-43 21l-24 17q-27 20-51 49t-47 55q-21 23-54 62t-71 76-76 64-70 27q-28 0-57-11t-55-28-49-39-37-44q-32-51-45-107T0 1386q0-45 5-89t13-88q8-46 23-100t36-114 43-120 48-119 49-110 46-96q11-20 25-37t32-33v-25q0-12 2-22t9-20 20-18q11-7 35-15t52-17 54-15 40-10q38-8 77-12t77-4q15 0 33 1t33 9h1q23 12 45 25t45 26h362q23-13 40-24t34-19 36-13 47-5q38 0 77 4t77 12q14 3 40 9t53 15 52 17 36 16q25 17 28 37t3 48zm69 1120q36-10 60-32t38-51 19-63 6-67q0-39-4-78t-12-78q-20-106-58-208t-80-202q-23-54-45-108t-50-106q-8-15-20-23t-23-18-20-20-8-32v-20q-57-20-115-32t-119-12h-11q-6 0-11 1-38 22-57 34t-37 18-38 7-61 1H897q-40 0-61-1t-38-7-37-18-57-34q-5-1-11-1t-11 0q-60 0-118 12t-116 32q0 28-5 44t-30 33q-11 6-20 15t-16 21q-28 51-50 105t-45 109q-41 99-79 201t-59 209q-8 38-12 77t-4 79q0 33 5 66t20 63 37 51 60 33q15-9 40-32t52-52 51-56 38-44q10-11 26-30t35-38 35-36 31-25q5-3 9-6t9-6q28-21 59-32t63-17 66-7 68-2h384q34 0 67 1t66 7 64 17 59 33q5 3 9 6t9 6q13 8 30 24t36 36 34 39 27 30q15 17 38 44t49 54 51 51 42 35zm-773-960q26 0 45 19t19 45q0 26-19 45t-45 19q-26 0-45-19t-19-45q0-26 19-45t45-19z"
         }));
      }
      function ll() {
         ll = Object.assign ? Object.assign.bind() : function (e) {
            for (var t = 1; t < arguments.length; t++) {
               var s = arguments[t];
               for (var i in s) {
                  if (Object.prototype.hasOwnProperty.call(s, i)) {
                     e[i] = s[i];
                  }
               }
            }
            return e;
         };
         return ll.apply(this, arguments);
      }
      function cl(e) {
         e.stopPropagation();
      }
      const hl = ApplyStyle({
         howToPlayModal: {},
         howToPlayModal_bulletedList: {
            listStyle: "none",
            color: zt
         },
         howToPlayModal_listItem: {
            ...ui("t7"),
            display: "flex",
            alignItems: "center",
            marginBottom: "0.25em"
         },
         howToPlayModal_icon: {
            color: zt,
            fill: "currentColor",
            padding: "4px",
            height: "16px",
            width: "16px"
         },
         howToPlayModal_iconContainer: {
            marginInlineEnd: "12px",
            display: "inline-block"
         },
         howToPlayModal_inputButton: {},
         howToPlayModal_inputButton__selected: {
            backgroundColor: lo
         },
         howToPlayModal_inputButtonGroup: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "12px",
            marginBottom: "8px"
         },
         howToPlayModal_paragraph: {
            marginBottom: "0.5em"
         }
      })(class extends baseComponent {
         constructor(...e) {
            super(...e);
            this.handledProps = {
               managedClasses: undefined
            };
            this.inputRefMap = new Map([["keyboard", React.createRef()], ["mouse", React.createRef()], ["touch", React.createRef()], ["controller", React.createRef()]]);
            this.state = {
               selectedInput: wa() ? "touch" : "keyboard"
            };
            this.renderHowToPlayContent = () => React.createElement(React.Fragment, null, React.createElement(yi, {
               className: this.props.managedClasses.howToPlayModal_paragraph
            }, React.createElement("strong", null, LoadTimeData.getString("endlessModeTitleInline")), " ", LoadTimeData.getString("howToPlayEndless")), React.createElement(yi, {
               className: this.props.managedClasses.howToPlayModal_paragraph
            }, React.createElement("strong", null, LoadTimeData.getString("timetrialModeTitleInline")), " ", LoadTimeData.getString("howToPlayTimeTrial")), React.createElement(yi, {
               className: this.props.managedClasses.howToPlayModal_paragraph
            }, React.createElement("strong", null, LoadTimeData.getString("zigzagModeTitleInline")), " ", LoadTimeData.getString("howToPlayZigZag")), this.renderInputSection());
            this.onInputIconKeydown = e => {
               let t = this.state.selectedInput;
               if (e.key === Oo.BE || e.key === Oo.SB) {
                  switch (this.state.selectedInput) {
                     case "keyboard":
                        return;
                     case "mouse":
                        t = "keyboard";
                        break;
                     case "touch":
                        t = "mouse";
                        break;
                     case "controller":
                        t = "touch";
                  }
               } else {
                  if (e.key !== Oo.mr && e.key !== Oo.iF) {
                     return;
                  }
                  switch (this.state.selectedInput) {
                     case "keyboard":
                        t = "mouse";
                        break;
                     case "mouse":
                        t = "touch";
                        break;
                     case "touch":
                        t = "controller";
                        break;
                     case "controller":
                        return;
                  }
               }
               e.stopPropagation();
               this.setState({
                  selectedInput: t
               });
            };
         }
         render() {
            return React.createElement(il, ll({}, this.unhandledProps(), {
               onKeyDown: cl,
               content: this.renderHowToPlayContent
            }));
         }
         componentDidUpdate(e, t) {
            if (t.selectedInput !== this.state.selectedInput) {
               const e = this.inputRefMap.get(this.state.selectedInput);
               if (e.current) {
                  const t = n.findDOMNode(e.current);
                  if (t && typeof t.focus == "function") {
                     t.focus();
                  }
               }
            }
         }
         renderInputSection() {
            return React.createElement("div", null, this.renderInputIcons(), this.getInputDescription(this.state.selectedInput));
         }
         getInputDescription(e) {
            const t = this.props.managedClasses.howToPlayModal_icon;
            const s = this.props.managedClasses.howToPlayModal_iconContainer;
            const n = this.props.managedClasses.howToPlayModal_listItem;
            let o;
            let r;
            let a;
            switch (e) {
               case "touch":
                  o = "howToPlayTouchMovement";
                  r = "howToPlayTouchBoost";
                  a = "howToPlayTouchRefresh";
                  break;
               case "mouse":
                  o = "howToPlayMouseMovement";
                  r = "howToPlayMouseBoost";
                  a = "howToPlayMouseRefresh";
                  break;
               case "controller":
                  o = "howToPlayControllerMovement";
                  r = "howToPlayControllerBoost";
                  a = "howToPlayControllerRefresh";
                  break;
               default:
                  o = "howToPlayKeyboardMovement";
                  r = "howToPlayKeyboardBoost";
                  a = "howToPlayKeyboardRefresh";
            }
            return React.createElement("ul", {
               className: this.props.managedClasses.howToPlayModal_bulletedList
            }, React.createElement("li", {
               className: n
            }, React.createElement("div", {
               "aria-hidden": true,
               className: s
            }, (l = t, React.createElement("svg", {
               width: 20,
               height: 20,
               viewBox: "0 0 20 20",
               className: l
            }, React.createElement("path", {
               d: "M7.15 4.35c.2.2.5.2.7 0L9.5 2.71V6.5a.5.5 0 001 0V2.7l1.65 1.65a.5.5 0 00.7-.7l-2.5-2.5a.5.5 0 00-.7 0l-2.5 2.5a.5.5 0 000 .7z"
            }), React.createElement("path", {
               d: "M4.35 7.85a.5.5 0 10-.7-.7l-2.5 2.5a.5.5 0 000 .7l2.5 2.5a.5.5 0 00.7-.7L2.71 10.5H6.5a.5.5 0 000-1H2.7l1.65-1.65z"
            }), React.createElement("path", {
               d: "M15.65 7.85a.5.5 0 01.7-.7l2.5 2.5c.2.2.2.5 0 .7l-2.5 2.5a.5.5 0 01-.7-.7l1.64-1.65H13.5a.5.5 0 010-1h3.8l-1.65-1.65z"
            }), React.createElement("path", {
               d: "M7.85 15.65a.5.5 0 00-.7.7l2.5 2.5c.2.2.5.2.7 0l2.5-2.5a.5.5 0 00-.7-.7l-1.65 1.64V13.5a.5.5 0 00-1 0v3.8l-1.65-1.65z"
            })))), LoadTimeData.getString(o)), React.createElement("li", {
               className: n
            }, React.createElement("div", {
               "aria-hidden": true,
               className: s
            }, function (e) {
               return React.createElement("svg", {
                  width: "28",
                  height: "28",
                  viewBox: "0 0 28 28",
                  className: e,
                  xmlns: "http://www.w3.org/2000/svg"
               }, React.createElement("path", {
                  d: "M9.28568 2.52142C9.38509 2.21078 9.67385 2 10 2H18.75C18.998 2 19.23 2.12264 19.3697 2.32761C19.5094 2.53258 19.5388 2.79337 19.4481 3.02424L17.1004 8.99999H22.25C22.5476 8.99999 22.8171 9.17598 22.9367 9.44849C23.0564 9.72101 23.0035 10.0385 22.8021 10.2576L8.55213 25.7576C8.32001 26.0101 7.94619 26.0729 7.64426 25.9102C7.34233 25.7476 7.18921 25.4008 7.2724 25.0681L9.53942 16H6C5.76052 16 5.53543 15.8856 5.39423 15.6922C5.25303 15.4987 5.2127 15.2495 5.28569 15.0214L9.28568 2.52142Z"
               }));
            }(t)), LoadTimeData.getString(r)), React.createElement("li", {
               className: n
            }, React.createElement("div", {
               "aria-hidden": true,
               className: s
            }, function (e) {
               return React.createElement("svg", {
                  width: 20,
                  height: 20,
                  viewBox: "0 0 20 20",
                  className: e
               }, React.createElement("path", {
                  d: "M3.07 9.05a7 7 0 0112.55-3.22l.13.17H12.5a.5.5 0 100 1h4a.5.5 0 00.5-.5v-4a.5.5 0 00-1 0v2.2a8 8 0 101.99 4.77.5.5 0 00-1 .08 7 7 0 11-13.92-.5z"
               }));
            }(t)), LoadTimeData.getString(a)));
            var l;
         }
         renderInputIcons() {
            const e = (wa() ? [[nl, "touch"]] : [[ol, "keyboard"], [rl, "mouse"], [nl, "touch"], [al, "controller"]]).map(e => {
               const t = e[0];
               const s = e[1];
               const n = this.state.selectedInput === s;
               let o = this.props.managedClasses.howToPlayModal_inputButton;
               if (n) {
                  o += ` ${this.props.managedClasses.howToPlayModal_inputButton__selected}`;
               }
               return React.createElement(Qi, {
                  role: "radio",
                  key: s,
                  innerRef: this.inputRefMap.get(s),
                  onClick: () => this.setState({
                     selectedInput: s
                  }),
                  onKeyDown: this.onInputIconKeydown,
                  className: o,
                  "aria-checked": n,
                  tabIndex: n ? 0 : -1
               }, t(""));
            });
            return React.createElement("div", {
               className: this.props.managedClasses.howToPlayModal_inputButtonGroup,
               role: "radiogroup"
            }, e);
         }
      });
      function dl() {
         dl = Object.assign ? Object.assign.bind() : function (e) {
            for (var t = 1; t < arguments.length; t++) {
               var s = arguments[t];
               for (var i in s) {
                  if (Object.prototype.hasOwnProperty.call(s, i)) {
                     e[i] = s[i];
                  }
               }
            }
            return e;
         };
         return dl.apply(this, arguments);
      }
      function ul(e) {
         e.stopPropagation();
      }
      const pl = "#38c2ee";
      const bl = {
         ...Ct,
         neutralPalette: (gl = m.in(pl), new uo.b({
            baseColor: gl
         }).palette.map(e => e.toStringHexRGB().toUpperCase()))
      };
      var gl;
      const fl = "toggleSettingsMenu";
      const ml = h.$j(function (e) {
         return e;
      })(ApplyStyle(js)(class extends baseComponent {
         constructor(e) {
            super(e);
            this.handledProps = {
               setModal: undefined,
               dispatch: undefined,
               currentCharacter: undefined,
               gameState: undefined,
               highVisibilityMode: undefined,
               gameSpeed: undefined,
               mode: undefined,
               theme: undefined,
               endless_bestScore: undefined,
               timetrial_bestScore: undefined,
               zigzag_bestScore: undefined
            };
            this.buttonRef = React.createRef();
            this.onHighVisiblityModeChange = () => {
               const e = !this.props.highVisibilityMode;
               Ta.saveHighVisibilityMode(e);
               this.props.dispatch(UpdateStatsEvent({
                  ...Ea.getState(),
                  highVisibilityMode: e
               }));
               Ma.sys.session.settings.hitbox = e;
               Qa.sys.render();
            };
            this.onReducedSpeedModeChange = () => {
               const e = this.props.gameSpeed === ka ? 0.5 : ka;
               Ta.saveReducedSpeedMode(e !== ka);
               this.props.dispatch(UpdateStatsEvent({
                  ...Ea.getState(),
                  gameSpeed: e
               }));
            };
            this.onGameModeChange = e => {
               this.props.dispatch(UpdateStatsEvent({
                  ...Ea.getState(),
                  mode: e
               }));
               Qa.sys.changeGameState(xa.Menu);
               Qa.sys.updateMode();
               Ta.saveGameMode(e);
            };
            this.onNewGameClick = () => {
               Qa.sys.changeGameState(xa.Menu);
            };
            this.copyShareLinkToClipboard = () => {
               ya(LoadTimeData.getString("shareLinkFlyout"));
               this.setState({
                  shareLinkCopied: true
               });
            };
            this.onHamburgerMenuClick = e => {
               if (typeof this.props.onClick == "function") {
                  this.props.onClick(e);
               }
               this.toggleSettingsMenu();
            };
            this.toggleSettingsMenu = () => {
               if (!this.state.menuOpen && this.props.gameState === xa.Play) {
                  Qa.sys.changeGameState(xa.Pause);
               }
               this.setState({
                  menuOpen: !this.state.menuOpen,
                  shareLinkCopied: false
               });
               Ma.sys.session.flyoutActive = !Ma.sys.session.flyoutActive;
            };
            this.dismissMenu = () => {
               this.setState({
                  menuOpen: false,
                  shareLinkCopied: false
               });
               Ma.sys.session.flyoutActive = false;
            };
            this.closeModal = () => {
               this.props.setModal(null);
            };
            this.openHowToPlayModal = () => {
               this.props.setModal(React.createElement(hl, {
                  onClick: ul,
                  label: LoadTimeData.getString("howToPlayDialogTitle"),
                  accept: this.closeModal,
                  acceptMessage: LoadTimeData.getString("close"),
                  dismiss: this.closeModal,
                  closeButtonToolTip: LoadTimeData.getString("close")
               }));
            };
            this.startShare = () => {
               Ta.startShare(LoadTimeData.getString("highScoreShareTitle"), LoadTimeData.getString("highScoreShareSubtitle"), LoadTimeData.getString("highScoreNotification"), LoadTimeData.getString("shareLinkGameOver"));
            };
            this.openGameCreditsModal = () => {
               this.props.setModal(React.createElement(il, {
                  onClick: ul,
                  label: LoadTimeData.getString("gameCreditsDialogTitle"),
                  accept: this.closeModal,
                  acceptMessage: LoadTimeData.getString("close"),
                  dismiss: this.closeModal,
                  closeButtonToolTip: LoadTimeData.getString("close"),
                  content: this.getGameCreditsModalBody
               }));
            };
            this.getGameCreditsModalBody = () => React.createElement(React.Fragment, null, React.createElement(yi, null, "Parker Young, Scott Porterfield, Patrick Evan Little, Connor Smith, William Devereux, Adina Shanholtz, Ray Rivers, 陈嘉钰, 傅远, 胡雨阳, 郑俊豪"), React.createElement(Si, {
               className: this.props.managedClasses.settingsHamburgerMenu_creditsTable_specialThanks,
               size: Gt._7,
               tag: qt.h3
            }, LoadTimeData.getString("specialThanks")), React.createElement(yi, null, "Jonathan Merrin, Charles Duval, Addison Kaufmann, Rachel Weil, Joseph Oak, Amanda Velasco Gallardo, Ramya Challa, Chris Pirih"));
            this.confirmResetStats = () => {
               this.props.setModal(React.createElement(sa, {
                  title: LoadTimeData.getString("resetAllStatsDialogTitle"),
                  closeButtonTooltip: LoadTimeData.getString("close"),
                  dialogText: LoadTimeData.getString("resetAllStatsDialogText"),
                  confirmText: LoadTimeData.getString("resetAllStats"),
                  rejectText: LoadTimeData.getString("cancel"),
                  handleConfirm: this.resetStats,
                  handleReject: this.closeModal,
                  onClick: ul
               }));
            };
            this.resetStats = () => {
               this.props.dispatch(ResetStatsEvent());
               Ta.resetAllStats();
               Fa.sys.refreshDisplay();
               this.closeModal();
            };
            this.state = {
               menuOpen: false,
               shareLinkCopied: false
            };
         }
         componentDidMount() {
            document.addEventListener(fl, this.toggleSettingsMenu);
         }
         componentWillUnmount() {
            document.removeEventListener(fl, this.toggleSettingsMenu);
         }
         render() {
            return React.createElement(React.Fragment, null, React.createElement(SurfComponent, {
               designSystem: bl
            }, React.createElement(ft, {
               value: pl,
               tag: null,
               drawBackground: false
            }, React.createElement(Qi, dl({}, this.unhandledProps(), {
               ref: this.buttonRef,
               onClick: this.onHamburgerMenuClick,
               className: Ks.A(this.props.managedClasses.settingsHamburgerMenu)
            }), (e = this.props.managedClasses.settingsHamburgerMenu_settingsButton, React.createElement("svg", {
               width: 24,
               height: 24,
               viewBox: "0 0 24 24",
               className: e,
               xmlns: "http://www.w3.org/2000/svg"
            }, React.createElement("path", {
               d: "M12.0124 2.25C12.7464 2.25846 13.4775 2.34326 14.1939 2.50304C14.5067 2.57279 14.7406 2.83351 14.7761 3.15196L14.9463 4.67881C15.0233 5.37986 15.6152 5.91084 16.3209 5.91158C16.5105 5.91188 16.6982 5.87238 16.8734 5.79483L18.2741 5.17956C18.5654 5.05159 18.9057 5.12136 19.1232 5.35362C20.1354 6.43464 20.8892 7.73115 21.3279 9.14558C21.4225 9.45058 21.3137 9.78203 21.0566 9.9715L19.8151 10.8866C19.461 11.1468 19.2518 11.56 19.2518 11.9995C19.2518 12.4389 19.461 12.8521 19.8159 13.1129L21.0585 14.0283C21.3156 14.2177 21.4246 14.5492 21.3299 14.8543C20.8914 16.2685 20.138 17.5649 19.1264 18.6461C18.9091 18.8783 18.569 18.9483 18.2777 18.8206L16.8714 18.2045C16.4691 18.0284 16.007 18.0542 15.6268 18.274C15.2466 18.4937 14.9935 18.8812 14.9452 19.3177L14.7761 20.8444C14.7413 21.1592 14.5124 21.4182 14.2043 21.4915C12.7558 21.8361 11.2467 21.8361 9.79828 21.4915C9.49015 21.4182 9.26129 21.1592 9.22643 20.8444L9.0576 19.32C9.00802 18.8843 8.75459 18.498 8.37467 18.279C7.99475 18.06 7.53345 18.0343 7.13244 18.2094L5.72582 18.8256C5.43446 18.9533 5.09428 18.8833 4.87703 18.6509C3.86487 17.5685 3.11144 16.2705 2.67344 14.8548C2.57911 14.5499 2.68811 14.2186 2.94509 14.0293L4.18842 13.1133C4.54256 12.8531 4.75172 12.4399 4.75172 12.0005C4.75172 11.561 4.54256 11.1478 4.18796 10.8873L2.94541 9.97285C2.68804 9.78345 2.57894 9.45178 2.67361 9.14658C3.11236 7.73215 3.86619 6.43564 4.87837 5.35462C5.09584 5.12236 5.43618 5.05259 5.72749 5.18056L7.12786 5.79572C7.53081 5.97256 7.99404 5.94585 8.37601 5.72269C8.75633 5.50209 9.00953 5.11422 9.05841 4.67764L9.22849 3.15196C9.26401 2.83335 9.49811 2.57254 9.81105 2.50294C10.5283 2.34342 11.2602 2.25865 12.0124 2.25ZM11.9999 8.99995C10.3431 8.99995 8.99994 10.3431 8.99994 12C8.99994 13.6568 10.3431 15 11.9999 15C13.6568 15 14.9999 13.6568 14.9999 12C14.9999 10.3431 13.6568 8.99995 11.9999 8.99995Z"
            })))))), this.renderMenu());
            var e;
         }
         getHighScoreString() {
            return LoadTimeData.getStringF("bestScoreMenuDisplay", Ma.sys.getHighScore(Ma.sys.session.settings.mode), LoadTimeData.getString(Ma.sys.session.settings.mode + "Unit"));
         }
         renderMenu() {
            const e = this.getHighScoreString();
            return React.createElement(Lo, {
               className: this.props.managedClasses.settingsHamburgerMenu_flyout,
               width: "280px",
               height: "fit-content",
               defaultVerticalPosition: Po.bottom,
               defaultHorizontalPosition: To.left,
               verticalPositioningMode: jo.adjacent,
               visible: this.state.menuOpen,
               anchor: this.buttonRef,
               onDismiss: this.dismissMenu,
               onClick: ul
            }, this.renderCloseButton(), React.createElement(an, {
               jssStyleSheet: Ts,
               onClick: this.onNewGameClick
            }, LoadTimeData.getString("newGame")), React.createElement(un, {
               className: this.props.managedClasses.settingsHamburgerMenu_flyout_divider
            }), this.renderGameModePicker(), React.createElement(yi, {
               className: this.props.managedClasses.settingsHamburgerMenu_flyout_score
            }, (t = this.props.managedClasses.settingsHamburgerMenu_flyout_scoreStar, React.createElement("svg", {
               width: 20,
               height: 20,
               viewBox: "0 0 20 20",
               className: t
            }, React.createElement("path", {
               d: "M9.1 2.9a1 1 0 011.8 0l1.93 3.91 4.31.63a1 1 0 01.56 1.7l-3.13 3.05.74 4.3a1 1 0 01-1.45 1.05L10 15.51l-3.86 2.03a1 1 0 01-1.45-1.05l.74-4.3L2.3 9.14a1 1 0 01.56-1.7l4.31-.63L9.1 2.9z"
            }))), LoadTimeData.getStringF("bestScoreFlyout", e)), React.createElement(un, {
               className: this.props.managedClasses.settingsHamburgerMenu_flyout_divider
            }), this.renderShareSection(), this.renderStartShare(), React.createElement(un, {
               className: this.props.managedClasses.settingsHamburgerMenu_flyout_divider
            }), this.renderToggleSection(), React.createElement(un, {
               className: this.props.managedClasses.settingsHamburgerMenu_flyout_divider
            }), this.renderButtonSection());
            var t;
         }
         renderCloseButton() {
            return React.createElement(Qi, {
               className: this.props.managedClasses.settingsHamburgerMenu_closeButton,
               title: LoadTimeData.getString("close"),
               onClick: this.dismissMenu
            }, Dr(this.props.managedClasses.settingsHamburgerMenu_closeButton_icon));
         }
         renderGameModePicker() {
            const e = LoadTimeData.getString("zigzagTitle");
            const t = LoadTimeData.getString("endlessTitle");
            const s = LoadTimeData.getString("timetrialTitle");
            const n = this.props.mode;
            const o = this.props.gameState === xa.Pause || this.props.gameState === xa.Play;
            return React.createElement(React.Fragment, null, React.createElement(mn, {
               className: this.props.managedClasses.settingsHamburgerMenu_flyout_label
            }, o ? LoadTimeData.getString("gameModeSelectLabelDisabled") : LoadTimeData.getString("gameModeSelectLabel")), React.createElement(Qo, {
               jssStyleSheet: Qt,
               menu: es,
               onValueChange: this.onGameModeChange,
               selectedItems: [n],
               disabled: o
            }, React.createElement(rr, {
               id: GameModeIDs.Endless,
               value: GameModeIDs.Endless,
               displayString: t
            }), React.createElement(rr, {
               id: GameModeIDs.TimeTrial,
               value: GameModeIDs.TimeTrial,
               displayString: s
            }), React.createElement(rr, {
               id: GameModeIDs.ZigZag,
               value: GameModeIDs.ZigZag,
               displayString: e
            })));
         }
         renderToggleSection() {
            const e = LoadTimeData.getString("on");
            const t = LoadTimeData.getString("off");
            return React.createElement(React.Fragment, null, React.createElement("div", {
               className: this.props.managedClasses.settingsHamburgerMenu_flyout_toggleRow
            }, React.createElement(mn, {
               htmlFor: "highVisibilityMode"
            }, LoadTimeData.getString("highVisiblityModeToggleLabel")), React.createElement(to, {
               jssStyleSheet: Es,
               inputId: "highVisibilityMode",
               selectedMessage: e,
               unselectedMessage: t,
               selected: this.props.highVisibilityMode,
               onChange: this.onHighVisiblityModeChange
            })), React.createElement("div", {
               className: this.props.managedClasses.settingsHamburgerMenu_flyout_toggleRow
            }, React.createElement(mn, {
               htmlFor: "reducedSpeedMode"
            }, LoadTimeData.getString("reducedSpeedModeToggleLabel")), React.createElement(to, {
               jssStyleSheet: Es,
               inputId: "reducedSpeedMode",
               defaultChecked: true,
               selectedMessage: e,
               unselectedMessage: t,
               selected: this.props.gameSpeed !== ka,
               onChange: this.onReducedSpeedModeChange
            })));
         }
         renderShareSection() {
            return React.createElement(React.Fragment, null, React.createElement("div", {
               className: this.props.managedClasses.settingsHamburgerMenu_flyout_shareRow
            }, React.createElement(mn, {
               htmlFor: "shareButton"
            }, LoadTimeData.getString("share")), React.createElement(co, {
               id: "shareButton",
               jssStyleSheet: Ps,
               onClick: this.copyShareLinkToClipboard,
               beforeContent: this.state.shareLinkCopied ? ia : na
            }, this.state.shareLinkCopied ? LoadTimeData.getString("shareLinkCopied") : LoadTimeData.getString("shareCopy"))));
         }
         renderStartShare() {
            if (LoadTimeData.getBoolean("isDebugMode") && wa()) {
               return React.createElement("div", null, React.createElement(an, {
                  jssStyleSheet: Ps,
                  onClick: this.startShare
               }, LoadTimeData.getString("startShare")));
            } else {
               return React.createElement(React.Fragment, null);
            }
         }
         renderButtonSection() {
            return React.createElement("div", {
               className: this.props.managedClasses.settingsHamburgerMenu_flyout_buttonSection
            }, React.createElement(an, {
               jssStyleSheet: Ps,
               onClick: this.openHowToPlayModal
            }, LoadTimeData.getString("howToPlayButton")), React.createElement(an, {
               jssStyleSheet: Ps,
               onClick: this.openGameCreditsModal
            }, LoadTimeData.getString("gameCreditsButton")), React.createElement(an, {
               jssStyleSheet: Ps,
               onClick: this.confirmResetStats
            }, LoadTimeData.getString("resetAllStats")));
         }
      }));
      function yl() {
         const [e, t] = React.useState(null);
         return React.createElement(React.Fragment, null, React.createElement(ml, {
            setModal: t
         }), React.createElement(p, {
            modal: e,
            rootElement: document.getElementById("modal-root")
         }));
      }
      if (LoadTimeData.valueExists("redirectUrl")) {
         const e = LoadTimeData.getString("redirectUrl");
         if (e.length > 0) {
            window.location.href = e;
         }
      } else {
         window.addEventListener("beforeunload", () => {
            Ta.recordUnload();
         });
         window.addEventListener("pagehide", () => {
            Ta.recordUnload();
         });
         window.addEventListener("blur", () => {
            Ta.recordUnload();
         });
         (async function () {
            const e = await Ta.getAllStats();
            Ea.dispatch(UpdateStatsEvent(e));
         })().then(() => {
            (function (e) {
               const t = e;
               function s(e, s) {
                  if (s.length > 0) {
                     if ("getScriptHash" in s[0].constructor.prototype) {
                        t.prepareStackTrace = Et;
                        return Et.apply(t, [e, s]);
                     }
                     t.prepareStackTrace = Ot;
                  }
                  if (typeof Ot == "function") {
                     return Ot.apply(t, [e, s]);
                  } else {
                     return e.stack;
                  }
               }
               if (t.prepareStackTrace !== s && t.prepareStackTrace !== Et) {
                  Ot = t.prepareStackTrace;
                  t.prepareStackTrace = s;
               }
            })(Error);

            (function () {
               const e = new Qa();
               let t = window.performance.now();
               const s = () => {
                  requestAnimationFrame(s);
                  const i = window.performance.now() - t;
                  e.gameLoop(i);
                  t = window.performance.now();
               };
               requestAnimationFrame(s);
               (function (e, t) {
                  let s;
                  window.addEventListener("resize", function () {
                     if (s !== undefined) {
                        clearTimeout(s);
                        s = undefined;
                     }
                     s = window.setTimeout(function () {
                        s = undefined;
                        e();
                     }, t);
                  });
               })(function () {
                  e.reflowCanvas();
               }, 10);
               document.addEventListener("visibilitychange", function () {
                  e.reflowCanvas();
               });
            })();
            (function () {
               const e = document.getElementById("hamburger-container");
               e.style.zIndex = d.CONTEXT_MENU.toString();
               n.render(React.createElement(h.zt, {
                  store: Ea
               }, React.createElement(SurfComponent, {
                  designSystem: Ct
               }, React.createElement(yl, null))), e);
            })();
         });
      }
   },
   1852: (e, t) => {
      Object.defineProperty(t, "__esModule", {
         value: true
      });
      t.default = function (e) {
         return e.replace(s, i);
      };
      var s = /[-\s]+(.)?/g;
      function i(e, t) {
         if (t) {
            return t.toUpperCase();
         } else {
            return "";
         }
      }
   },
   24893: (e, t, s) => {
      Object.defineProperty(t, "__esModule", {
         value: true
      });
      t.supportedValue = t.supportedProperty = t.prefix = undefined;
      var i = r(s(80811));
      var n = r(s(50965));
      var o = r(s(83537));
      function r(e) {
         if (e && e.__esModule) {
            return e;
         } else {
            return {
               default: e
            };
         }
      }
      t.default = {
         prefix: i.default,
         supportedProperty: n.default,
         supportedValue: o.default
      };
      /**
       * CSS Vendor prefix detection and property feature testing.
       *
       * @copyright Oleg Slobodskoi 2015
       * @website https://github.com/jsstyles/css-vendor
       * @license MIT
       */
      t.prefix = i.default;
      t.supportedProperty = n.default;
      t.supportedValue = o.default;
   },
   80811: (e, t, s) => {
      Object.defineProperty(t, "__esModule", {
         value: true
      });
      var i;
      var n = s(60307);
      var o = "";
      var r = "";
      if (((i = n) && i.__esModule ? i : {
         default: i
      }).default) {
         var a = {
            Moz: "-moz-",
            ms: "-ms-",
            O: "-o-",
            Webkit: "-webkit-"
         };
         var l = document.createElement("p").style;
         for (var c in a) {
            if (c + "Transform" in l) {
               o = c;
               r = a[c];
               break;
            }
         }
      }
      t.default = {
         js: o,
         css: r
      };
   },
   50965: (e, t, s) => {
      Object.defineProperty(t, "__esModule", {
         value: true
      });
      t.default = function (e) {
         if (!a) {
            return e;
         }
         if (l[e] != null) {
            return l[e];
         }
         if (o.default(e) in a.style) {
            l[e] = e;
         } else if (n.default.js + o.default("-" + e) in a.style) {
            l[e] = n.default.css + e;
         } else {
            l[e] = false;
         }
         return l[e];
      };
      var i = r(s(60307));
      var n = r(s(80811));
      var o = r(s(1852));
      function r(e) {
         if (e && e.__esModule) {
            return e;
         } else {
            return {
               default: e
            };
         }
      }
      var a = undefined;
      var l = {};
      if (i.default) {
         a = document.createElement("p");
         var c = window.getComputedStyle(document.documentElement, "");
         for (var h in c) {
            if (!isNaN(h)) {
               l[c[h]] = c[h];
            }
         }
      }
   },
   83537: (e, t, s) => {
      Object.defineProperty(t, "__esModule", {
         value: true
      });
      t.default = function (e, t) {
         if (!a) {
            return t;
         }
         if (typeof t != "string" || !isNaN(parseInt(t, 10))) {
            return t;
         }
         var s = e + t;
         if (r[s] != null) {
            return r[s];
         }
         try {
            a.style[e] = t;
         } catch (e) {
            r[s] = false;
            return false;
         }
         if (a.style[e] !== "") {
            r[s] = t;
         } else {
            if ((t = n.default.css + t) === "-ms-flex") {
               t = "-ms-flexbox";
            }
            a.style[e] = t;
            if (a.style[e] !== "") {
               r[s] = t;
            }
         }
         r[s] ||= false;
         a.style[e] = "";
         return r[s];
      };
      var i = o(s(60307));
      var n = o(s(80811));
      function o(e) {
         if (e && e.__esModule) {
            return e;
         } else {
            return {
               default: e
            };
         }
      }
      var r = {};
      var a = undefined;
      if (i.default) {
         a = document.createElement("p");
      }
   },
   41281: (e, t, s) => {
      var i = s(338);
      var n = {
         childContextTypes: true,
         contextType: true,
         contextTypes: true,
         defaultProps: true,
         displayName: true,
         getDefaultProps: true,
         getDerivedStateFromError: true,
         getDerivedStateFromProps: true,
         mixins: true,
         propTypes: true,
         type: true
      };
      var o = {
         name: true,
         length: true,
         prototype: true,
         caller: true,
         callee: true,
         arguments: true,
         arity: true
      };
      var r = {
         $$typeof: true,
         compare: true,
         defaultProps: true,
         displayName: true,
         propTypes: true,
         type: true
      };
      var a = {};
      function l(e) {
         if (i.isMemo(e)) {
            return r;
         } else {
            return a[e.$$typeof] || n;
         }
      }
      a[i.ForwardRef] = {
         $$typeof: true,
         render: true,
         defaultProps: true,
         displayName: true,
         propTypes: true
      };
      var c = Object.defineProperty;
      var h = Object.getOwnPropertyNames;
      var d = Object.getOwnPropertySymbols;
      var u = Object.getOwnPropertyDescriptor;
      var p = Object.getPrototypeOf;
      var b = Object.prototype;
      e.exports = function e(t, s, i) {
         if (typeof s != "string") {
            if (b) {
               var n = p(s);
               if (n && n !== b) {
                  e(t, n, i);
               }
            }
            var r = h(s);
            if (d) {
               r = r.concat(d(s));
            }
            var a = l(t);
            var g = l(s);
            for (var f = 0; f < r.length; ++f) {
               var m = r[f];
               if (!o[m] && (!i || !i[m]) && (!g || !g[m]) && (!a || !a[m])) {
                  var y = u(s, m);
                  try {
                     c(t, m, y);
                  } catch (e) {}
               }
            }
            return t;
         }
         return t;
      };
   },
   75029: e => {
      var t = /[A-Z]/g;
      var s = /^ms-/;
      var i = {};
      e.exports = function (e) {
         if (e in i) {
            return i[e];
         } else {
            return i[e] = e.replace(t, "-$&").toLowerCase().replace(s, "-ms-");
         }
      };
   },
   60307: (e, t, s) => {
      s.r(t);
      s.d(t, {
         default: () => o,
         isBrowser: () => n
      });
      var i = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (e) {
         return typeof e;
      } : function (e) {
         if (e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype) {
            return "symbol";
         } else {
            return typeof e;
         }
      };
      var n = (typeof window == "undefined" ? "undefined" : i(window)) === "object" && (typeof document == "undefined" ? "undefined" : i(document)) === "object" && document.nodeType === 9;
      const o = n;
   },
   54943: (e, t, s) => {
      Object.defineProperty(t, "__esModule", {
         value: true
      });
      t.default = function () {
         return {
            onProcessStyle: function (e) {
               if (Array.isArray(e)) {
                  for (var t = 0; t < e.length; t++) {
                     e[t] = r(e[t]);
                  }
                  return e;
               }
               return r(e);
            },
            onChangeValue: function (e, t, s) {
               var i = o.default(t);
               if (t === i) {
                  return e;
               } else {
                  s.prop(i, e);
                  return null;
               }
            }
         };
      };
      var i;
      var n = s(75029);
      var o = (i = n) && i.__esModule ? i : {
         default: i
      };
      function r(e) {
         var t = {};
         for (var s in e) {
            t[o.default(s)] = e[s];
         }
         if (e.fallbacks) {
            if (Array.isArray(e.fallbacks)) {
               t.fallbacks = e.fallbacks.map(r);
            } else {
               t.fallbacks = r(e.fallbacks);
            }
         }
         return t;
      }
   },
   41837: (e, t, s) => {
      Object.defineProperty(t, "__esModule", {
         value: true
      });
      t.default = function () {
         return {
            onProcessStyle: function (e, t) {
               if (e.composes) {
                  r(t, e.composes);
                  delete e.composes;
                  return e;
               } else {
                  return e;
               }
            }
         };
      };
      var i;
      var n = s(89198);
      var o = (i = n) && i.__esModule ? i : {
         default: i
      };
      function r(e, t) {
         if (!t) {
            return true;
         }
         if (Array.isArray(t)) {
            for (var s = 0; s < t.length; s++) {
               if (!r(e, t[s])) {
                  return false;
               }
            }
            return true;
         }
         if (t.indexOf(" ") > -1) {
            return r(e, t.split(" "));
         }
         var i = e.options.parent;
         if (t[0] === "$") {
            var n = i.getRule(t.substr(1));
            if (n) {
               if (n === e) {
                  o.default(false, "[JSS] Cyclic composition detected. \r\n%s", e);
                  return false;
               } else {
                  i.classes[e.key] += " " + i.classes[n.key];
                  return true;
               }
            } else {
               o.default(false, "[JSS] Referenced rule is not defined. \r\n%s", e);
               return false;
            }
         }
         e.options.parent.classes[e.key] += " " + t;
         return true;
      }
   },
   7277: (e, t) => {
      Object.defineProperty(t, "__esModule", {
         value: true
      });
      t.default = {
         "animation-delay": "ms",
         "animation-duration": "ms",
         "background-position": "px",
         "background-position-x": "px",
         "background-position-y": "px",
         "background-size": "px",
         border: "px",
         "border-bottom": "px",
         "border-bottom-left-radius": "px",
         "border-bottom-right-radius": "px",
         "border-bottom-width": "px",
         "border-left": "px",
         "border-left-width": "px",
         "border-radius": "px",
         "border-right": "px",
         "border-right-width": "px",
         "border-spacing": "px",
         "border-top": "px",
         "border-top-left-radius": "px",
         "border-top-right-radius": "px",
         "border-top-width": "px",
         "border-width": "px",
         "border-after-width": "px",
         "border-before-width": "px",
         "border-end-width": "px",
         "border-horizontal-spacing": "px",
         "border-start-width": "px",
         "border-vertical-spacing": "px",
         bottom: "px",
         "box-shadow": "px",
         "column-gap": "px",
         "column-rule": "px",
         "column-rule-width": "px",
         "column-width": "px",
         "flex-basis": "px",
         "font-size": "px",
         "font-size-delta": "px",
         height: "px",
         left: "px",
         "letter-spacing": "px",
         "logical-height": "px",
         "logical-width": "px",
         margin: "px",
         "margin-after": "px",
         "margin-before": "px",
         "margin-bottom": "px",
         "margin-left": "px",
         "margin-right": "px",
         "margin-top": "px",
         "max-height": "px",
         "max-width": "px",
         "margin-end": "px",
         "margin-start": "px",
         "mask-position-x": "px",
         "mask-position-y": "px",
         "mask-size": "px",
         "max-logical-height": "px",
         "max-logical-width": "px",
         "min-height": "px",
         "min-width": "px",
         "min-logical-height": "px",
         "min-logical-width": "px",
         motion: "px",
         "motion-offset": "px",
         outline: "px",
         "outline-offset": "px",
         "outline-width": "px",
         padding: "px",
         "padding-bottom": "px",
         "padding-left": "px",
         "padding-right": "px",
         "padding-top": "px",
         "padding-after": "px",
         "padding-before": "px",
         "padding-end": "px",
         "padding-start": "px",
         "perspective-origin-x": "%",
         "perspective-origin-y": "%",
         perspective: "px",
         right: "px",
         "shape-margin": "px",
         size: "px",
         "text-indent": "px",
         "text-stroke": "px",
         "text-stroke-width": "px",
         top: "px",
         "transform-origin": "%",
         "transform-origin-x": "%",
         "transform-origin-y": "%",
         "transform-origin-z": "%",
         "transition-delay": "ms",
         "transition-duration": "ms",
         "vertical-align": "px",
         width: "px",
         "word-spacing": "px",
         "box-shadow-x": "px",
         "box-shadow-y": "px",
         "box-shadow-blur": "px",
         "box-shadow-spread": "px",
         "font-line-height": "px",
         "text-shadow-x": "px",
         "text-shadow-y": "px",
         "text-shadow-blur": "px"
      };
   },
   44525: (e, t, s) => {
      Object.defineProperty(t, "__esModule", {
         value: true
      });
      var i = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (e) {
         return typeof e;
      } : function (e) {
         if (e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype) {
            return "symbol";
         } else {
            return typeof e;
         }
      };
      t.default = function () {
         var e = r(arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {});
         return {
            onProcessStyle: function (t, s) {
               if (s.type !== "style") {
                  return t;
               }
               for (var i in t) {
                  t[i] = l(i, t[i], e);
               }
               return t;
            },
            onChangeValue: function (t, s) {
               return l(s, t, e);
            }
         };
      };
      var n;
      var o = s(7277);
      function r(e) {
         var t = /(-[a-z])/g;
         function s(e) {
            return e[1].toUpperCase();
         }
         var i = {};
         for (var n in e) {
            i[n] = e[n];
            i[n.replace(t, s)] = e[n];
         }
         return i;
      }
      var a = r(((n = o) && n.__esModule ? n : {
         default: n
      }).default);
      function l(e, t, s) {
         if (!t) {
            return t;
         }
         var n = t;
         var o = t === undefined ? "undefined" : i(t);
         if (o === "object" && Array.isArray(t)) {
            o = "array";
         }
         switch (o) {
            case "object":
               if (e === "fallbacks") {
                  for (var r in t) {
                     t[r] = l(r, t[r], s);
                  }
                  break;
               }
               for (var c in t) {
                  t[c] = l(e + "-" + c, t[c], s);
               }
               break;
            case "array":
               for (var h = 0; h < t.length; h++) {
                  t[h] = l(e, t[h], s);
               }
               break;
            case "number":
               if (t !== 0) {
                  n = t + (s[e] || a[e] || "");
               }
         }
         return n;
      }
   },
   69930: (e, t, s) => {
      Object.defineProperty(t, "__esModule", {
         value: true
      });
      var i = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (e) {
         return typeof e;
      } : function (e) {
         if (e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype) {
            return "symbol";
         } else {
            return typeof e;
         }
      };
      t.default = function () {
         return {
            onProcessStyle: function (e, t) {
               if (!e || t.type !== "style") {
                  return e;
               }
               if (Array.isArray(e)) {
                  for (var s = 0; s < e.length; s++) {
                     e[s] = l(e[s], t);
                  }
                  return e;
               }
               return l(e, t);
            }
         };
      };
      var n = s(67152);
      function o(e, t, s) {
         if (t in e) {
            Object.defineProperty(e, t, {
               value: s,
               enumerable: true,
               configurable: true,
               writable: true
            });
         } else {
            e[t] = s;
         }
         return e;
      }
      function r(e, t, s, n) {
         if (s[t] == null) {
            return e;
         } else if (e.length === 0) {
            return [];
         } else if (Array.isArray(e[0])) {
            return r(e[0], t, s);
         } else if (i(e[0]) === "object") {
            return function (e, t, s) {
               return e.map(function (e) {
                  return a(e, t, s, false, true);
               });
            }(e, t, n);
         } else {
            return [e];
         }
      }
      function a(e, t, s, i, r) {
         if (!n.propObj[t] && !n.customPropObj[t]) {
            return [];
         }
         var a = [];
         if (n.customPropObj[t]) {
            e = function (e, t, s, i) {
               for (var n in s) {
                  var r = s[n];
                  if (e[n] !== undefined && (i || !t.prop(r))) {
                     var a = l(o({}, r, e[n]), t)[r];
                     if (i) {
                        t.style.fallbacks[r] = a;
                     } else {
                        t.style[r] = a;
                     }
                  }
                  delete e[n];
               }
               return e;
            }(e, s, n.customPropObj[t], i);
         }
         if (Object.keys(e).length) {
            for (var c in n.propObj[t]) {
               if (e[c]) {
                  if (Array.isArray(e[c])) {
                     a.push(n.propArrayInObj[c] === null ? e[c] : e[c].join(" "));
                  } else {
                     a.push(e[c]);
                  }
               } else if (n.propObj[t][c] != null) {
                  a.push(n.propObj[t][c]);
               }
            }
         }
         if (!a.length || r) {
            return a;
         } else {
            return [a];
         }
      }
      function l(e, t, s) {
         for (var o in e) {
            var c = e[o];
            if (Array.isArray(c)) {
               if (!Array.isArray(c[0])) {
                  if (o === "fallbacks") {
                     for (var h = 0; h < e.fallbacks.length; h++) {
                        e.fallbacks[h] = l(e.fallbacks[h], t, true);
                     }
                     continue;
                  }
                  e[o] = r(c, o, n.propArray);
                  if (!e[o].length) {
                     delete e[o];
                  }
               }
            } else if ((c === undefined ? "undefined" : i(c)) === "object") {
               if (o === "fallbacks") {
                  e.fallbacks = l(e.fallbacks, t, true);
                  continue;
               }
               e[o] = a(c, o, t, s);
               if (!e[o].length) {
                  delete e[o];
               }
            } else if (e[o] === "") {
               delete e[o];
            }
         }
         return e;
      }
   },
   67152: (e, t) => {
      Object.defineProperty(t, "__esModule", {
         value: true
      });
      t.propArray = {
         "background-size": true,
         "background-position": true,
         border: true,
         "border-bottom": true,
         "border-left": true,
         "border-top": true,
         "border-right": true,
         "border-radius": true,
         "border-image": true,
         "border-width": true,
         "border-style": true,
         "border-color": true,
         "box-shadow": true,
         flex: true,
         margin: true,
         padding: true,
         outline: true,
         "transform-origin": true,
         transform: true,
         transition: true
      };
      t.propArrayInObj = {
         position: true,
         size: true
      };
      t.propObj = {
         padding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
         },
         margin: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
         },
         background: {
            attachment: null,
            color: null,
            image: null,
            position: null,
            repeat: null
         },
         border: {
            width: null,
            style: null,
            color: null
         },
         "border-top": {
            width: null,
            style: null,
            color: null
         },
         "border-right": {
            width: null,
            style: null,
            color: null
         },
         "border-bottom": {
            width: null,
            style: null,
            color: null
         },
         "border-left": {
            width: null,
            style: null,
            color: null
         },
         outline: {
            width: null,
            style: null,
            color: null
         },
         "list-style": {
            type: null,
            position: null,
            image: null
         },
         transition: {
            property: null,
            duration: null,
            "timing-function": null,
            timingFunction: null,
            delay: null
         },
         animation: {
            name: null,
            duration: null,
            "timing-function": null,
            timingFunction: null,
            delay: null,
            "iteration-count": null,
            iterationCount: null,
            direction: null,
            "fill-mode": null,
            fillMode: null,
            "play-state": null,
            playState: null
         },
         "box-shadow": {
            x: 0,
            y: 0,
            blur: 0,
            spread: 0,
            color: null,
            inset: null
         },
         "text-shadow": {
            x: 0,
            y: 0,
            blur: null,
            color: null
         }
      };
      t.customPropObj = {
         border: {
            radius: "border-radius",
            image: "border-image",
            width: "border-width",
            style: "border-style",
            color: "border-color"
         },
         background: {
            size: "background-size",
            image: "background-image"
         },
         font: {
            style: "font-style",
            variant: "font-variant",
            weight: "font-weight",
            stretch: "font-stretch",
            size: "font-size",
            family: "font-family",
            lineHeight: "line-height",
            "line-height": "line-height"
         },
         flex: {
            grow: "flex-grow",
            basis: "flex-basis",
            direction: "flex-direction",
            wrap: "flex-wrap",
            flow: "flex-flow",
            shrink: "flex-shrink"
         },
         align: {
            self: "align-self",
            items: "align-items",
            content: "align-content"
         },
         grid: {
            "template-columns": "grid-template-columns",
            templateColumns: "grid-template-columns",
            "template-rows": "grid-template-rows",
            templateRows: "grid-template-rows",
            "template-areas": "grid-template-areas",
            templateAreas: "grid-template-areas",
            template: "grid-template",
            "auto-columns": "grid-auto-columns",
            autoColumns: "grid-auto-columns",
            "auto-rows": "grid-auto-rows",
            autoRows: "grid-auto-rows",
            "auto-flow": "grid-auto-flow",
            autoFlow: "grid-auto-flow",
            row: "grid-row",
            column: "grid-column",
            "row-start": "grid-row-start",
            rowStart: "grid-row-start",
            "row-end": "grid-row-end",
            rowEnd: "grid-row-end",
            "column-start": "grid-column-start",
            columnStart: "grid-column-start",
            "column-end": "grid-column-end",
            columnEnd: "grid-column-end",
            area: "grid-area",
            gap: "grid-gap",
            "row-gap": "grid-row-gap",
            rowGap: "grid-row-gap",
            "column-gap": "grid-column-gap",
            columnGap: "grid-column-gap"
         }
      };
   },
   57421: (e, t, s) => {
      Object.defineProperty(t, "__esModule", {
         value: true
      });
      var i = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (e) {
         return typeof e;
      } : function (e) {
         if (e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype) {
            return "symbol";
         } else {
            return typeof e;
         }
      };
      t.default = function () {
         return {
            onProcessStyle: function (e, t, s) {
               if ("extend" in e) {
                  return c(e, t, s);
               } else {
                  return e;
               }
            },
            onChangeValue: function (e, t, s) {
               if (t !== "extend") {
                  return e;
               }
               if (e == null || e === false) {
                  for (var i in s[l]) {
                     s.prop(i, null);
                  }
                  s[l] = null;
                  return null;
               }
               for (var n in e) {
                  s.prop(n, e[n]);
               }
               s[l] = e;
               return null;
            }
         };
      };
      var n;
      var o = s(89198);
      var r = (n = o) && n.__esModule ? n : {
         default: n
      };
      function a(e) {
         return e && (e === undefined ? "undefined" : i(e)) === "object" && !Array.isArray(e);
      }
      var l = "extendCurrValue" + Date.now();
      function c(e, t, s, n = {}) {
         (function (e, t, s, n) {
            if (i(e.extend) !== "string") {
               if (Array.isArray(e.extend)) {
                  for (var o = 0; o < e.extend.length; o++) {
                     c(e.extend[o], t, s, n);
                  }
               } else {
                  for (var l in e.extend) {
                     if (l !== "extend") {
                        if (a(e.extend[l])) {
                           if (!(l in n)) {
                              n[l] = {};
                           }
                           c(e.extend[l], t, s, n[l]);
                        } else {
                           n[l] = e.extend[l];
                        }
                     } else {
                        c(e.extend.extend, t, s, n);
                     }
                  }
               }
            } else {
               if (!s) {
                  return;
               }
               var h = s.getRule(e.extend);
               if (!h) {
                  return;
               }
               if (h === t) {
                  r.default(false, "[JSS] A rule tries to extend itself \r\n%s", t);
                  return;
               }
               var d = h.options.parent;
               if (d) {
                  c(d.rules.raw[e.extend], t, s, n);
               }
            }
         })(e, t, s, n);
         (function (e, t, s, i) {
            for (var n in e) {
               if (n !== "extend") {
                  if (a(i[n]) && a(e[n])) {
                     c(e[n], t, s, i[n]);
                  } else if (a(e[n])) {
                     i[n] = c(e[n], t, s);
                  } else {
                     i[n] = e[n];
                  }
               }
            }
         })(e, t, s, n);
         return n;
      }
   },
   80179: (e, t, s) => {
      Object.defineProperty(t, "__esModule", {
         value: true
      });
      var i = Object.assign || function (e) {
         for (var t = 1; t < arguments.length; t++) {
            var s = arguments[t];
            for (var i in s) {
               if (Object.prototype.hasOwnProperty.call(s, i)) {
                  e[i] = s[i];
               }
            }
         }
         return e;
      };
      var n = function () {
         function e(e, t) {
            for (var s = 0; s < t.length; s++) {
               var i = t[s];
               i.enumerable = i.enumerable || false;
               i.configurable = true;
               if ("value" in i) {
                  i.writable = true;
               }
               Object.defineProperty(e, i.key, i);
            }
         }
         return function (t, s, i) {
            if (s) {
               e(t.prototype, s);
            }
            if (i) {
               e(t, i);
            }
            return t;
         };
      }();
      t.default = function () {
         return {
            onCreateRule: function (e, t, s) {
               if (e === a) {
                  return new c(e, t, s);
               }
               if (e[0] === "@" && e.substr(0, l.length) === l) {
                  return new h(e, t, s);
               }
               var i = s.parent;
               if (i) {
                  if (i.type === "global" || i.options.parent.type === "global") {
                     s.global = true;
                  }
               }
               if (s.global) {
                  s.selector = e;
               }
               return null;
            },
            onProcessRule: function (e) {
               if (e.type === "style") {
                  (function (e) {
                     var t = e.options;
                     var s = e.style;
                     var n = s[a];
                     if (n) {
                        for (var o in n) {
                           t.sheet.addRule(o, n[o], i({}, t, {
                              selector: u(o, e.selector)
                           }));
                        }
                        delete s[a];
                     }
                  })(e);
                  (function (e) {
                     var t = e.options;
                     var s = e.style;
                     for (var n in s) {
                        if (n.substr(0, a.length) === a) {
                           var o = u(n.substr(a.length), e.selector);
                           t.sheet.addRule(o, s[n], i({}, t, {
                              selector: o
                           }));
                           delete s[n];
                        }
                     }
                  })(e);
               }
            }
         };
      };
      var o = s(67514);
      function r(e, t) {
         if (!(e instanceof t)) {
            throw new TypeError("Cannot call a class as a function");
         }
      }
      var a = "@global";
      var l = "@global ";
      var c = function () {
         function e(t, s, n) {
            r(this, e);
            this.type = "global";
            this.key = t;
            this.options = n;
            this.rules = new o.RuleList(i({}, n, {
               parent: this
            }));
            for (var a in s) {
               this.rules.add(a, s[a], {
                  selector: a
               });
            }
            this.rules.process();
         }
         n(e, [{
            key: "getRule",
            value: function (e) {
               return this.rules.get(e);
            }
         }, {
            key: "addRule",
            value: function (e, t, s) {
               var i = this.rules.add(e, t, s);
               this.options.jss.plugins.onProcessRule(i);
               return i;
            }
         }, {
            key: "indexOf",
            value: function (e) {
               return this.rules.indexOf(e);
            }
         }, {
            key: "toString",
            value: function () {
               return this.rules.toString();
            }
         }]);
         return e;
      }();
      var h = function () {
         function e(t, s, n) {
            r(this, e);
            this.name = t;
            this.options = n;
            var o = t.substr(l.length);
            this.rule = n.jss.createRule(o, s, i({}, n, {
               parent: this,
               selector: o
            }));
         }
         n(e, [{
            key: "toString",
            value: function (e) {
               return this.rule.toString(e);
            }
         }]);
         return e;
      }();
      var d = /\s*,\s*/g;
      function u(e, t) {
         for (var s = e.split(d), i = "", n = 0; n < s.length; n++) {
            i += t + " " + s[n].trim();
            if (s[n + 1]) {
               i += ", ";
            }
         }
         return i;
      }
   },
   41116: (e, t, s) => {
      Object.defineProperty(t, "__esModule", {
         value: true
      });
      var i = Object.assign || function (e) {
         for (var t = 1; t < arguments.length; t++) {
            var s = arguments[t];
            for (var i in s) {
               if (Object.prototype.hasOwnProperty.call(s, i)) {
                  e[i] = s[i];
               }
            }
         }
         return e;
      };
      t.default = function () {
         function e(e) {
            return function (t, s) {
               var i = e.getRule(s);
               if (i) {
                  return i.selector;
               } else {
                  r.default(false, "[JSS] Could not find the referenced rule %s in %s.", s, e.options.meta || e);
                  return s;
               }
            };
         }
         function t(e) {
            return e.indexOf("&") !== -1;
         }
         function s(e, s) {
            for (var i = s.split(a), n = e.split(a), o = "", r = 0; r < i.length; r++) {
               var c = i[r];
               for (var h = 0; h < n.length; h++) {
                  var d = n[h];
                  if (o) {
                     o += ", ";
                  }
                  o += t(d) ? d.replace(l, c) : c + " " + d;
               }
            }
            return o;
         }
         function n(e, t, s) {
            if (s) {
               return i({}, s, {
                  index: s.index + 1
               });
            }
            var n = e.options.nestingLevel;
            n = n === undefined ? 1 : n + 1;
            return i({}, e.options, {
               nestingLevel: n,
               index: t.indexOf(e) + 1
            });
         }
         return {
            onProcessStyle: function (o, r) {
               if (r.type !== "style") {
                  return o;
               }
               var a = r.options.parent;
               var l = undefined;
               var h = undefined;
               for (var d in o) {
                  var u = t(d);
                  var p = d[0] === "@";
                  if (u || p) {
                     l = n(r, a, l);
                     if (u) {
                        var b = s(d, r.selector);
                        h ||= e(a);
                        b = b.replace(c, h);
                        a.addRule(b, o[d], i({}, l, {
                           selector: b
                        }));
                     } else if (p) {
                        a.addRule(d, null, l).addRule(r.key, o[d], {
                           selector: r.selector
                        });
                     }
                     delete o[d];
                  }
               }
               return o;
            }
         };
      };
      var n;
      var o = s(89198);
      var r = (n = o) && n.__esModule ? n : {
         default: n
      };
      var a = /\s*,\s*/g;
      var l = /&/g;
      var c = /\$([\w-]+)/g;
   },
   54716: (e, t, s) => {
      var i = p(s(65194));
      var n = p(s(80179));
      var o = p(s(57421));
      var r = p(s(41116));
      var a = p(s(41837));
      var l = p(s(54943));
      var c = p(s(44525));
      var h = p(s(69930));
      var d = p(s(55154));
      var u = p(s(24847));
      function p(e) {
         if (e && e.__esModule) {
            return e;
         } else {
            return {
               default: e
            };
         }
      }
      t.Z = function (e = {}) {
         return {
            plugins: [i.default(e.template), n.default(e.global), o.default(e.extend), r.default(e.nested), a.default(e.compose), l.default(e.camelCase), c.default(e.defaultUnit), h.default(e.expand), d.default(e.vendorPrefixer), u.default(e.propsSort)]
         };
      };
   },
   24847: (e, t) => {
      Object.defineProperty(t, "__esModule", {
         value: true
      });
      t.default = function () {
         function e(e, t) {
            return e.length - t.length;
         }
         return {
            onProcessStyle: function (t, s) {
               if (s.type !== "style") {
                  return t;
               }
               var i = {};
               var n = Object.keys(t).sort(e);
               for (var o in n) {
                  i[n[o]] = t[n[o]];
               }
               return i;
            }
         };
      };
   },
   65194: (e, t, s) => {
      Object.defineProperty(t, "__esModule", {
         value: true
      });
      var i;
      var n = s(99341);
      var o = (i = n) && i.__esModule ? i : {
         default: i
      };
      function r(e) {
         if (typeof e.style == "string") {
            e.style = o.default(e.style);
         }
      }
      t.default = function () {
         return {
            onProcessRule: r
         };
      };
   },
   99341: (e, t, s) => {
      Object.defineProperty(t, "__esModule", {
         value: true
      });
      var i;
      var n = s(89198);
      var o = (i = n) && i.__esModule ? i : {
         default: i
      };
      var r = /;\n/;
      t.default = function (e) {
         var t = {};
         for (var s = e.split(r), i = 0; i < s.length; i++) {
            var n = (s[i] || "").trim();
            if (n) {
               var a = n.indexOf(":");
               if (a !== -1) {
                  var l = n.substr(0, a).trim();
                  var c = n.substr(a + 1).trim();
                  t[l] = c;
               } else {
                  o.default(false, "Malformed CSS string \"%s\"", n);
               }
            }
         }
         return t;
      };
   },
   55154: (e, t, s) => {
      Object.defineProperty(t, "__esModule", {
         value: true
      });
      t.default = function () {
         return {
            onProcessRule: function (e) {
               if (e.type === "keyframes") {
                  e.key = "@" + i.prefix.css + e.key.substr(1);
               }
            },
            onProcessStyle: function (e, t) {
               if (t.type !== "style") {
                  return e;
               }
               for (var s in e) {
                  var n = e[s];
                  var o = false;
                  var r = i.supportedProperty(s);
                  if (r && r !== s) {
                     o = true;
                  }
                  var a = false;
                  var l = i.supportedValue(r, n);
                  if (l && l !== n) {
                     a = true;
                  }
                  if (o || a) {
                     if (o) {
                        delete e[s];
                     }
                     e[r || s] = l || n;
                  }
               }
               return e;
            },
            onChangeValue: function (e, t) {
               return i.supportedValue(t, e);
            }
         };
      };
      var i = function (e) {
         if (e && e.__esModule) {
            return e;
         }
         var t = {};
         if (e != null) {
            for (var s in e) {
               if (Object.prototype.hasOwnProperty.call(e, s)) {
                  t[s] = e[s];
               }
            }
         }
         t.default = e;
         return t;
      }(s(24893));
   },
   83008: (e, t, s) => {
      Object.defineProperty(t, "__esModule", {
         value: true
      });
      var i = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (e) {
         return typeof e;
      } : function (e) {
         if (e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype) {
            return "symbol";
         } else {
            return typeof e;
         }
      };
      var n = Object.assign || function (e) {
         for (var t = 1; t < arguments.length; t++) {
            var s = arguments[t];
            for (var i in s) {
               if (Object.prototype.hasOwnProperty.call(s, i)) {
                  e[i] = s[i];
               }
            }
         }
         return e;
      };
      var o = function () {
         function e(e, t) {
            for (var s = 0; s < t.length; s++) {
               var i = t[s];
               i.enumerable = i.enumerable || false;
               i.configurable = true;
               if ("value" in i) {
                  i.writable = true;
               }
               Object.defineProperty(e, i.key, i);
            }
         }
         return function (t, s, i) {
            if (s) {
               e(t.prototype, s);
            }
            if (i) {
               e(t, i);
            }
            return t;
         };
      }();
      var r = y(s(60307));
      var a = y(s(83103));
      var l = y(s(56763));
      var c = y(s(60623));
      var h = y(s(90282));
      var d = y(s(88151));
      var u = y(s(96913));
      var p = y(s(84546));
      var b = y(s(75347));
      var g = y(s(76558));
      var f = y(s(30418));
      var m = y(s(31510));
      function y(e) {
         if (e && e.__esModule) {
            return e;
         } else {
            return {
               default: e
            };
         }
      }
      var v = c.default.concat([h.default, d.default]);
      var w = 0;
      var x = function () {
         function e(t) {
            (function (e, t) {
               if (!(e instanceof t)) {
                  throw new TypeError("Cannot call a class as a function");
               }
            })(this, e);
            this.id = w++;
            this.version = "9.8.7";
            this.plugins = new l.default();
            this.options = {
               createGenerateClassName: b.default,
               Renderer: r.default ? f.default : m.default,
               plugins: []
            };
            this.generateClassName = b.default();
            this.use.apply(this, v);
            this.setup(t);
         }
         o(e, [{
            key: "setup",
            value: function (e = {}) {
               if (e.createGenerateClassName) {
                  this.options.createGenerateClassName = e.createGenerateClassName;
                  this.generateClassName = e.createGenerateClassName();
               }
               if (e.insertionPoint != null) {
                  this.options.insertionPoint = e.insertionPoint;
               }
               if (e.virtual || e.Renderer) {
                  this.options.Renderer = e.Renderer || (e.virtual ? m.default : f.default);
               }
               if (e.plugins) {
                  this.use.apply(this, e.plugins);
               }
               return this;
            }
         }, {
            key: "createStyleSheet",
            value: function (e, t = {}) {
               var s = t.index;
               if (typeof s != "number") {
                  s = u.default.index === 0 ? 0 : u.default.index + 1;
               }
               var i = new a.default(e, n({}, t, {
                  jss: this,
                  generateClassName: t.generateClassName || this.generateClassName,
                  insertionPoint: this.options.insertionPoint,
                  Renderer: this.options.Renderer,
                  index: s
               }));
               this.plugins.onProcessSheet(i);
               return i;
            }
         }, {
            key: "removeStyleSheet",
            value: function (e) {
               e.detach();
               u.default.remove(e);
               return this;
            }
         }, {
            key: "createRule",
            value: function (e, t = {}, s = {}) {
               if ((e === undefined ? "undefined" : i(e)) === "object") {
                  s = t;
                  t = e;
                  e = undefined;
               }
               var n = s;
               n.jss = this;
               n.Renderer = this.options.Renderer;
               n.generateClassName ||= this.generateClassName;
               n.classes ||= {};
               var o = g.default(e, t, n);
               if (!n.selector && o instanceof p.default) {
                  o.selector = "." + n.generateClassName(o);
               }
               this.plugins.onProcessRule(o);
               return o;
            }
         }, {
            key: "use",
            value: function () {
               var e = this;
               for (var t = arguments.length, s = Array(t), i = 0; i < t; i++) {
                  s[i] = arguments[i];
               }
               s.forEach(function (t) {
                  if (e.options.plugins.indexOf(t) === -1) {
                     e.options.plugins.push(t);
                     e.plugins.use(t);
                  }
               });
               return this;
            }
         }]);
         return e;
      }();
      t.default = x;
   },
   56763: (e, t, s) => {
      Object.defineProperty(t, "__esModule", {
         value: true
      });
      var i;
      var n = function () {
         function e(e, t) {
            for (var s = 0; s < t.length; s++) {
               var i = t[s];
               i.enumerable = i.enumerable || false;
               i.configurable = true;
               if ("value" in i) {
                  i.writable = true;
               }
               Object.defineProperty(e, i.key, i);
            }
         }
         return function (t, s, i) {
            if (s) {
               e(t.prototype, s);
            }
            if (i) {
               e(t, i);
            }
            return t;
         };
      }();
      var o = s(89198);
      var r = (i = o) && i.__esModule ? i : {
         default: i
      };
      var a = function () {
         function e() {
            (function (e, t) {
               if (!(e instanceof t)) {
                  throw new TypeError("Cannot call a class as a function");
               }
            })(this, e);
            this.hooks = {
               onCreateRule: [],
               onProcessRule: [],
               onProcessStyle: [],
               onProcessSheet: [],
               onChangeValue: [],
               onUpdate: []
            };
         }
         n(e, [{
            key: "onCreateRule",
            value: function (e, t, s) {
               for (var i = 0; i < this.hooks.onCreateRule.length; i++) {
                  var n = this.hooks.onCreateRule[i](e, t, s);
                  if (n) {
                     return n;
                  }
               }
               return null;
            }
         }, {
            key: "onProcessRule",
            value: function (e) {
               if (!e.isProcessed) {
                  var t = e.options.sheet;
                  for (var s = 0; s < this.hooks.onProcessRule.length; s++) {
                     this.hooks.onProcessRule[s](e, t);
                  }
                  if (e.style) {
                     this.onProcessStyle(e.style, e, t);
                  }
                  e.isProcessed = true;
               }
            }
         }, {
            key: "onProcessStyle",
            value: function (e, t, s) {
               var i = e;
               for (var n = 0; n < this.hooks.onProcessStyle.length; n++) {
                  i = this.hooks.onProcessStyle[n](i, t, s);
                  t.style = i;
               }
            }
         }, {
            key: "onProcessSheet",
            value: function (e) {
               for (var t = 0; t < this.hooks.onProcessSheet.length; t++) {
                  this.hooks.onProcessSheet[t](e);
               }
            }
         }, {
            key: "onUpdate",
            value: function (e, t, s) {
               for (var i = 0; i < this.hooks.onUpdate.length; i++) {
                  this.hooks.onUpdate[i](e, t, s);
               }
            }
         }, {
            key: "onChangeValue",
            value: function (e, t, s) {
               var i = e;
               for (var n = 0; n < this.hooks.onChangeValue.length; n++) {
                  i = this.hooks.onChangeValue[n](i, t, s);
               }
               return i;
            }
         }, {
            key: "use",
            value: function (e) {
               for (var t in e) {
                  if (this.hooks[t]) {
                     this.hooks[t].push(e[t]);
                  } else {
                     r.default(false, "[JSS] Unknown hook \"%s\".", t);
                  }
               }
            }
         }]);
         return e;
      }();
      t.default = a;
   },
   37009: (e, t, s) => {
      Object.defineProperty(t, "__esModule", {
         value: true
      });
      var i = Object.assign || function (e) {
         for (var t = 1; t < arguments.length; t++) {
            var s = arguments[t];
            for (var i in s) {
               if (Object.prototype.hasOwnProperty.call(s, i)) {
                  e[i] = s[i];
               }
            }
         }
         return e;
      };
      var n = function () {
         function e(e, t) {
            for (var s = 0; s < t.length; s++) {
               var i = t[s];
               i.enumerable = i.enumerable || false;
               i.configurable = true;
               if ("value" in i) {
                  i.writable = true;
               }
               Object.defineProperty(e, i.key, i);
            }
         }
         return function (t, s, i) {
            if (s) {
               e(t.prototype, s);
            }
            if (i) {
               e(t, i);
            }
            return t;
         };
      }();
      var o = c(s(76558));
      var r = c(s(24906));
      var a = c(s(84546));
      var l = c(s(15653));
      function c(e) {
         if (e && e.__esModule) {
            return e;
         } else {
            return {
               default: e
            };
         }
      }
      var h = function () {
         function e(t) {
            var s = this;
            (function (e, t) {
               if (!(e instanceof t)) {
                  throw new TypeError("Cannot call a class as a function");
               }
            })(this, e);
            this.map = {};
            this.raw = {};
            this.index = [];
            this.update = function (e, t) {
               var i = s.options;
               var n = i.jss.plugins;
               var o = i.sheet;
               if (typeof e == "string") {
                  n.onUpdate(t, s.get(e), o);
               } else {
                  for (var r = 0; r < s.index.length; r++) {
                     n.onUpdate(e, s.index[r], o);
                  }
               }
            };
            this.options = t;
            this.classes = t.classes;
         }
         n(e, [{
            key: "add",
            value: function (e, t, s) {
               var n = this.options;
               var r = n.parent;
               var c = n.sheet;
               var h = n.jss;
               var d = n.Renderer;
               var u = n.generateClassName;
               if (!(s = i({
                  classes: this.classes,
                  parent: r,
                  sheet: c,
                  jss: h,
                  Renderer: d,
                  generateClassName: u
               }, s)).selector && this.classes[e]) {
                  s.selector = "." + l.default(this.classes[e]);
               }
               this.raw[e] = t;
               var p = o.default(e, t, s);
               var b = undefined;
               if (!s.selector && p instanceof a.default) {
                  b = u(p, c);
                  p.selector = "." + l.default(b);
               }
               this.register(p, b);
               var g = s.index === undefined ? this.index.length : s.index;
               this.index.splice(g, 0, p);
               return p;
            }
         }, {
            key: "get",
            value: function (e) {
               return this.map[e];
            }
         }, {
            key: "remove",
            value: function (e) {
               this.unregister(e);
               this.index.splice(this.indexOf(e), 1);
            }
         }, {
            key: "indexOf",
            value: function (e) {
               return this.index.indexOf(e);
            }
         }, {
            key: "process",
            value: function () {
               var e = this.options.jss.plugins;
               this.index.slice(0).forEach(e.onProcessRule, e);
            }
         }, {
            key: "register",
            value: function (e, t) {
               this.map[e.key] = e;
               if (e instanceof a.default) {
                  this.map[e.selector] = e;
                  if (t) {
                     this.classes[e.key] = t;
                  }
               }
            }
         }, {
            key: "unregister",
            value: function (e) {
               delete this.map[e.key];
               if (e instanceof a.default) {
                  delete this.map[e.selector];
                  delete this.classes[e.key];
               }
            }
         }, {
            key: "link",
            value: function (e) {
               var t = this.options.sheet.renderer.getUnescapedKeysMap(this.index);
               for (var s = 0; s < e.length; s++) {
                  var i = e[s];
                  var n = this.options.sheet.renderer.getKey(i);
                  if (t[n]) {
                     n = t[n];
                  }
                  var o = this.map[n];
                  if (o) {
                     r.default(o, i);
                  }
               }
            }
         }, {
            key: "toString",
            value: function (e) {
               var t = "";
               var s = this.options.sheet;
               var i = !!s && s.options.link;
               for (var n = 0; n < this.index.length; n++) {
                  var o = this.index[n].toString(e);
                  if (o || i) {
                     if (t) {
                        t += "\n";
                     }
                     t += o;
                  }
               }
               return t;
            }
         }]);
         return e;
      }();
      t.default = h;
   },
   11749: (e, t, s) => {
      Object.defineProperty(t, "__esModule", {
         value: true
      });
      var i;
      var n = function () {
         function e(e, t) {
            for (var s = 0; s < t.length; s++) {
               var i = t[s];
               i.enumerable = i.enumerable || false;
               i.configurable = true;
               if ("value" in i) {
                  i.writable = true;
               }
               Object.defineProperty(e, i.key, i);
            }
         }
         return function (t, s, i) {
            if (s) {
               e(t.prototype, s);
            }
            if (i) {
               e(t, i);
            }
            return t;
         };
      }();
      var o = s(89198);
      var r = (i = o) && i.__esModule ? i : {
         default: i
      };
      var a = function () {
         function e() {
            (function (e, t) {
               if (!(e instanceof t)) {
                  throw new TypeError("Cannot call a class as a function");
               }
            })(this, e);
            this.sheets = [];
            this.refs = [];
            this.keys = [];
         }
         n(e, [{
            key: "get",
            value: function (e) {
               var t = this.keys.indexOf(e);
               return this.sheets[t];
            }
         }, {
            key: "add",
            value: function (e, t) {
               var s = this.sheets;
               var i = this.refs;
               var n = this.keys;
               var o = s.indexOf(t);
               if (o !== -1) {
                  return o;
               } else {
                  s.push(t);
                  i.push(0);
                  n.push(e);
                  return s.length - 1;
               }
            }
         }, {
            key: "manage",
            value: function (e) {
               var t = this.keys.indexOf(e);
               var s = this.sheets[t];
               if (this.refs[t] === 0) {
                  s.attach();
               }
               this.refs[t]++;
               if (!this.keys[t]) {
                  this.keys.splice(t, 0, e);
               }
               return s;
            }
         }, {
            key: "unmanage",
            value: function (e) {
               var t = this.keys.indexOf(e);
               if (t !== -1) {
                  if (this.refs[t] > 0) {
                     this.refs[t]--;
                     if (this.refs[t] === 0) {
                        this.sheets[t].detach();
                     }
                  }
               } else {
                  r.default(false, "SheetsManager: can't find sheet to unmanage");
               }
            }
         }, {
            key: "size",
            get: function () {
               return this.keys.length;
            }
         }]);
         return e;
      }();
      t.default = a;
   },
   28665: (e, t) => {
      Object.defineProperty(t, "__esModule", {
         value: true
      });
      var s = function () {
         function e(e, t) {
            for (var s = 0; s < t.length; s++) {
               var i = t[s];
               i.enumerable = i.enumerable || false;
               i.configurable = true;
               if ("value" in i) {
                  i.writable = true;
               }
               Object.defineProperty(e, i.key, i);
            }
         }
         return function (t, s, i) {
            if (s) {
               e(t.prototype, s);
            }
            if (i) {
               e(t, i);
            }
            return t;
         };
      }();
      var i = function () {
         function e() {
            (function (e, t) {
               if (!(e instanceof t)) {
                  throw new TypeError("Cannot call a class as a function");
               }
            })(this, e);
            this.registry = [];
         }
         s(e, [{
            key: "add",
            value: function (e) {
               var t = this.registry;
               var s = e.options.index;
               if (t.indexOf(e) === -1) {
                  if (t.length === 0 || s >= this.index) {
                     t.push(e);
                  } else {
                     for (var i = 0; i < t.length; i++) {
                        if (t[i].options.index > s) {
                           t.splice(i, 0, e);
                           return;
                        }
                     }
                  }
               }
            }
         }, {
            key: "reset",
            value: function () {
               this.registry = [];
            }
         }, {
            key: "remove",
            value: function (e) {
               var t = this.registry.indexOf(e);
               this.registry.splice(t, 1);
            }
         }, {
            key: "toString",
            value: function (e) {
               return this.registry.filter(function (e) {
                  return e.attached;
               }).map(function (t) {
                  return t.toString(e);
               }).join("\n");
            }
         }, {
            key: "index",
            get: function () {
               if (this.registry.length === 0) {
                  return 0;
               } else {
                  return this.registry[this.registry.length - 1].options.index;
               }
            }
         }]);
         return e;
      }();
      t.default = i;
   },
   83103: (e, t, s) => {
      Object.defineProperty(t, "__esModule", {
         value: true
      });
      var i = Object.assign || function (e) {
         for (var t = 1; t < arguments.length; t++) {
            var s = arguments[t];
            for (var i in s) {
               if (Object.prototype.hasOwnProperty.call(s, i)) {
                  e[i] = s[i];
               }
            }
         }
         return e;
      };
      var n = function () {
         function e(e, t) {
            for (var s = 0; s < t.length; s++) {
               var i = t[s];
               i.enumerable = i.enumerable || false;
               i.configurable = true;
               if ("value" in i) {
                  i.writable = true;
               }
               Object.defineProperty(e, i.key, i);
            }
         }
         return function (t, s, i) {
            if (s) {
               e(t.prototype, s);
            }
            if (i) {
               e(t, i);
            }
            return t;
         };
      }();
      var o = a(s(24906));
      var r = a(s(37009));
      function a(e) {
         if (e && e.__esModule) {
            return e;
         } else {
            return {
               default: e
            };
         }
      }
      var l = function () {
         function e(t, s) {
            var n = this;
            (function (e, t) {
               if (!(e instanceof t)) {
                  throw new TypeError("Cannot call a class as a function");
               }
            })(this, e);
            this.update = function (e, t) {
               if (typeof e == "string") {
                  n.rules.update(e, t);
               } else {
                  n.rules.update(e);
               }
               return n;
            };
            this.attached = false;
            this.deployed = false;
            this.linked = false;
            this.classes = {};
            this.options = i({}, s, {
               sheet: this,
               parent: this,
               classes: this.classes
            });
            this.renderer = new s.Renderer(this);
            this.rules = new r.default(this.options);
            for (var o in t) {
               this.rules.add(o, t[o]);
            }
            this.rules.process();
         }
         n(e, [{
            key: "attach",
            value: function () {
               if (!this.attached) {
                  if (!this.deployed) {
                     this.deploy();
                  }
                  this.renderer.attach();
                  if (!this.linked && this.options.link) {
                     this.link();
                  }
                  this.attached = true;
               }
               return this;
            }
         }, {
            key: "detach",
            value: function () {
               if (this.attached) {
                  this.renderer.detach();
                  this.attached = false;
                  return this;
               } else {
                  return this;
               }
            }
         }, {
            key: "addRule",
            value: function (e, t, s) {
               var i = this.queue;
               if (this.attached && !i) {
                  this.queue = [];
               }
               var n = this.rules.add(e, t, s);
               this.options.jss.plugins.onProcessRule(n);
               if (this.attached) {
                  if (this.deployed) {
                     if (i) {
                        i.push(n);
                     } else {
                        this.insertRule(n);
                        if (this.queue) {
                           this.queue.forEach(this.insertRule, this);
                           this.queue = undefined;
                        }
                     }
                     return n;
                  } else {
                     return n;
                  }
               } else {
                  this.deployed = false;
                  return n;
               }
            }
         }, {
            key: "insertRule",
            value: function (e) {
               var t = this.renderer.insertRule(e);
               if (t && this.options.link) {
                  o.default(e, t);
               }
            }
         }, {
            key: "addRules",
            value: function (e, t) {
               var s = [];
               for (var i in e) {
                  s.push(this.addRule(i, e[i], t));
               }
               return s;
            }
         }, {
            key: "getRule",
            value: function (e) {
               return this.rules.get(e);
            }
         }, {
            key: "deleteRule",
            value: function (e) {
               var t = this.rules.get(e);
               return !!t && (this.rules.remove(t), !this.attached || !t.renderable || this.renderer.deleteRule(t.renderable));
            }
         }, {
            key: "indexOf",
            value: function (e) {
               return this.rules.indexOf(e);
            }
         }, {
            key: "deploy",
            value: function () {
               this.renderer.deploy();
               this.deployed = true;
               return this;
            }
         }, {
            key: "link",
            value: function () {
               var e = this.renderer.getRules();
               if (e) {
                  this.rules.link(e);
               }
               this.linked = true;
               return this;
            }
         }, {
            key: "toString",
            value: function (e) {
               return this.rules.toString(e);
            }
         }]);
         return e;
      }();
      t.default = l;
   },
   67514: (e, t, s) => {
      Object.defineProperty(t, "__esModule", {
         value: true
      });
      t.create = t.createGenerateClassName = t.sheets = t.RuleList = t.SheetsManager = t.SheetsRegistry = t.toCssValue = t.getDynamicStyles = undefined;
      var i = s(3558);
      Object.defineProperty(t, "getDynamicStyles", {
         enumerable: true,
         get: function () {
            return d(i).default;
         }
      });
      var n = s(44396);
      Object.defineProperty(t, "toCssValue", {
         enumerable: true,
         get: function () {
            return d(n).default;
         }
      });
      var o = s(28665);
      Object.defineProperty(t, "SheetsRegistry", {
         enumerable: true,
         get: function () {
            return d(o).default;
         }
      });
      var r = s(11749);
      Object.defineProperty(t, "SheetsManager", {
         enumerable: true,
         get: function () {
            return d(r).default;
         }
      });
      var a = s(37009);
      Object.defineProperty(t, "RuleList", {
         enumerable: true,
         get: function () {
            return d(a).default;
         }
      });
      var l = s(96913);
      Object.defineProperty(t, "sheets", {
         enumerable: true,
         get: function () {
            return d(l).default;
         }
      });
      var c = s(75347);
      Object.defineProperty(t, "createGenerateClassName", {
         enumerable: true,
         get: function () {
            return d(c).default;
         }
      });
      var h = d(s(83008));
      function d(e) {
         if (e && e.__esModule) {
            return e;
         } else {
            return {
               default: e
            };
         }
      }
      var u = t.create = function (e) {
         return new h.default(e);
      };
      t.default = u();
   },
   88151: (e, t, s) => {
      Object.defineProperty(t, "__esModule", {
         value: true
      });
      var i = r(s(37009));
      var n = r(s(84546));
      var o = r(s(76558));
      function r(e) {
         if (e && e.__esModule) {
            return e;
         } else {
            return {
               default: e
            };
         }
      }
      var a = Date.now();
      var l = "fnValues" + a;
      var c = "fnStyle" + ++a;
      t.default = {
         onCreateRule: function (e, t, s) {
            if (typeof t != "function") {
               return null;
            }
            var i = o.default(e, {}, s);
            i[c] = t;
            return i;
         },
         onProcessStyle: function (e, t) {
            var s = {};
            for (var i in e) {
               var n = e[i];
               if (typeof n == "function") {
                  delete e[i];
                  s[i] = n;
               }
            }
            t[l] = s;
            return e;
         },
         onUpdate: function (e, t) {
            if (t.rules instanceof i.default) {
               t.rules.update(e);
            } else if (t instanceof n.default) {
               if (t[l]) {
                  for (var s in t[l]) {
                     t.prop(s, t[l][s](e));
                  }
               }
               var o = t[c];
               if (o) {
                  var r = o(e);
                  for (var a in r) {
                     t.prop(a, r[a]);
                  }
               }
            }
         }
      };
   },
   90282: (e, t, s) => {
      Object.defineProperty(t, "__esModule", {
         value: true
      });
      var i = r(s(84546));
      var n = r(s(76558));
      var o = r(s(78021));
      function r(e) {
         if (e && e.__esModule) {
            return e;
         } else {
            return {
               default: e
            };
         }
      }
      t.default = {
         onCreateRule: function (e, t, s) {
            if (!o.default(t)) {
               return null;
            }
            var i = t;
            var r = n.default(e, {}, s);
            i.subscribe(function (e) {
               for (var t in e) {
                  r.prop(t, e[t]);
               }
            });
            return r;
         },
         onProcessRule: function (e) {
            if (e instanceof i.default) {
               var t = e;
               var s = t.style;
               function n(e) {
                  var i = s[e];
                  if (!o.default(i)) {
                     return "continue";
                  }
                  delete s[e];
                  i.subscribe({
                     next: function (s) {
                        t.prop(e, s);
                     }
                  });
               }
               for (var r in s) {
                  n(r);
               }
            }
         }
      };
   },
   60623: (e, t, s) => {
      Object.defineProperty(t, "__esModule", {
         value: true
      });
      var i = l(s(83524));
      var n = l(s(2824));
      var o = l(s(27836));
      var r = l(s(39134));
      var a = l(s(76444));
      function l(e) {
         if (e && e.__esModule) {
            return e;
         } else {
            return {
               default: e
            };
         }
      }
      var c = {
         "@charset": i.default,
         "@import": i.default,
         "@namespace": i.default,
         "@keyframes": n.default,
         "@media": o.default,
         "@supports": o.default,
         "@font-face": r.default,
         "@viewport": a.default,
         "@-ms-viewport": a.default
      };
      var h = Object.keys(c).map(function (e) {
         var t = new RegExp("^" + e);
         var s = c[e];
         return {
            onCreateRule: function (e, i, n) {
               if (t.test(e)) {
                  return new s(e, i, n);
               } else {
                  return null;
               }
            }
         };
      });
      t.default = h;
   },
   30418: (e, t, s) => {
      Object.defineProperty(t, "__esModule", {
         value: true
      });
      var i = function () {
         function e(e, t) {
            for (var s = 0; s < t.length; s++) {
               var i = t[s];
               i.enumerable = i.enumerable || false;
               i.configurable = true;
               if ("value" in i) {
                  i.writable = true;
               }
               Object.defineProperty(e, i.key, i);
            }
         }
         return function (t, s, i) {
            if (s) {
               e(t.prototype, s);
            }
            if (i) {
               e(t, i);
            }
            return t;
         };
      }();
      var n = l(s(89198));
      var o = l(s(96913));
      var r = l(s(84546));
      var a = l(s(44396));
      function l(e) {
         if (e && e.__esModule) {
            return e;
         } else {
            return {
               default: e
            };
         }
      }
      function c(e) {
         var t = undefined;
         return function () {
            t ||= e();
            return t;
         };
      }
      function h(e, t) {
         try {
            return e.style.getPropertyValue(t);
         } catch (e) {
            return "";
         }
      }
      function d(e, t, s) {
         try {
            var i = s;
            if (Array.isArray(s) && (i = a.default(s, true), s[s.length - 1] === "!important")) {
               e.style.setProperty(t, i, "important");
               return true;
            }
            e.style.setProperty(t, i);
         } catch (e) {
            return false;
         }
         return true;
      }
      function u(e, t) {
         try {
            e.style.removeProperty(t);
         } catch (e) {
            n.default(false, "[JSS] DOMException \"%s\" was thrown. Tried to remove property \"%s\".", e.message, t);
         }
      }
      var p;
      var b = 1;
      var g = 7;
      p = function (e, t = 0) {
         return e.substr(t, e.indexOf("{") - 1);
      };
      function f(e) {
         if (e.type === b) {
            return e.selectorText;
         }
         if (e.type === g) {
            var t = e.name;
            if (t) {
               return "@keyframes " + t;
            }
            var s = e.cssText;
            return "@" + p(s, s.indexOf("keyframes"));
         }
         return p(e.cssText);
      }
      function m(e, t) {
         e.selectorText = t;
         return e.selectorText === t;
      }
      var y;
      var v;
      var w = c(function () {
         return document.head || document.getElementsByTagName("head")[0];
      });
      y = undefined;
      v = false;
      function x(e) {
         var t = {};
         y ||= document.createElement("style");
         for (var s = 0; s < e.length; s++) {
            var i = e[s];
            if (i instanceof r.default) {
               var n = i.selector;
               if (n && n.indexOf("\\") !== -1) {
                  if (!v) {
                     w().appendChild(y);
                     v = true;
                  }
                  y.textContent = n + " {}";
                  var o = y.sheet;
                  if (o) {
                     var a = o.cssRules;
                     if (a) {
                        t[a[0].selectorText] = i.key;
                     }
                  }
               }
            }
         }
         if (v) {
            w().removeChild(y);
            v = false;
         }
         return t;
      }
      function S(e) {
         var t = o.default.registry;
         if (t.length > 0) {
            var s = function (e, t) {
               for (var s = 0; s < e.length; s++) {
                  var i = e[s];
                  if (i.attached && i.options.index > t.index && i.options.insertionPoint === t.insertionPoint) {
                     return i;
                  }
               }
               return null;
            }(t, e);
            if (s) {
               return s.renderer.element;
            }
            s = function (e, t) {
               for (var s = e.length - 1; s >= 0; s--) {
                  var i = e[s];
                  if (i.attached && i.options.insertionPoint === t.insertionPoint) {
                     return i;
                  }
               }
               return null;
            }(t, e);
            if (s) {
               return s.renderer.element.nextElementSibling;
            }
         }
         var i = e.insertionPoint;
         if (i && typeof i == "string") {
            var r = function (e) {
               for (var t = w(), s = 0; s < t.childNodes.length; s++) {
                  var i = t.childNodes[s];
                  if (i.nodeType === 8 && i.nodeValue.trim() === e) {
                     return i;
                  }
               }
               return null;
            }(i);
            if (r) {
               return r.nextSibling;
            }
            n.default(i === "jss", "[JSS] Insertion point \"%s\" not found.", i);
         }
         return null;
      }
      var M = c(function () {
         var e = document.querySelector("meta[property=\"csp-nonce\"]");
         if (e) {
            return e.getAttribute("content");
         } else {
            return null;
         }
      });
      var k = function () {
         function e(t) {
            (function (e, t) {
               if (!(e instanceof t)) {
                  throw new TypeError("Cannot call a class as a function");
               }
            })(this, e);
            this.getPropertyValue = h;
            this.setProperty = d;
            this.removeProperty = u;
            this.setSelector = m;
            this.getKey = f;
            this.getUnescapedKeysMap = x;
            this.hasInsertedRules = false;
            if (t) {
               o.default.add(t);
            }
            this.sheet = t;
            var s = this.sheet ? this.sheet.options : {};
            var i = s.media;
            var n = s.meta;
            var r = s.element;
            this.element = r || document.createElement("style");
            this.element.setAttribute("data-jss", "");
            if (i) {
               this.element.setAttribute("media", i);
            }
            if (n) {
               this.element.setAttribute("data-meta", n);
            }
            var a = M();
            if (a) {
               this.element.setAttribute("nonce", a);
            }
         }
         i(e, [{
            key: "attach",
            value: function () {
               if (!this.element.parentNode && this.sheet) {
                  if (this.hasInsertedRules) {
                     this.deploy();
                     this.hasInsertedRules = false;
                  }
                  (function (e, t) {
                     var s = t.insertionPoint;
                     var i = S(t);
                     if (i) {
                        var o = i.parentNode;
                        if (o) {
                           o.insertBefore(e, i);
                        }
                     } else if (s && typeof s.nodeType == "number") {
                        var r = s;
                        var a = r.parentNode;
                        if (a) {
                           a.insertBefore(e, r.nextSibling);
                        } else {
                           n.default(false, "[JSS] Insertion point is not in the DOM.");
                        }
                     } else {
                        w().insertBefore(e, i);
                     }
                  })(this.element, this.sheet.options);
               }
            }
         }, {
            key: "detach",
            value: function () {
               this.element.parentNode.removeChild(this.element);
            }
         }, {
            key: "deploy",
            value: function () {
               if (this.sheet) {
                  this.element.textContent = "\n" + this.sheet.toString() + "\n";
               }
            }
         }, {
            key: "insertRule",
            value: function (e, t) {
               var s = this.element.sheet;
               var i = s.cssRules;
               var o = e.toString();
               t ||= i.length;
               if (!o) {
                  return false;
               }
               try {
                  s.insertRule(o, t);
               } catch (t) {
                  n.default(false, "[JSS] Can not insert an unsupported rule \n\r%s", e);
                  return false;
               }
               this.hasInsertedRules = true;
               return i[t];
            }
         }, {
            key: "deleteRule",
            value: function (e) {
               var t = this.element.sheet;
               var s = this.indexOf(e);
               return s !== -1 && (t.deleteRule(s), true);
            }
         }, {
            key: "indexOf",
            value: function (e) {
               for (var t = this.element.sheet.cssRules, s = 0; s < t.length; s++) {
                  if (e === t[s]) {
                     return s;
                  }
               }
               return -1;
            }
         }, {
            key: "replaceRule",
            value: function (e, t) {
               var s = this.indexOf(e);
               var i = this.insertRule(t, s);
               this.element.sheet.deleteRule(s);
               return i;
            }
         }, {
            key: "getRules",
            value: function () {
               return this.element.sheet.cssRules;
            }
         }]);
         return e;
      }();
      t.default = k;
   },
   31510: (e, t) => {
      Object.defineProperty(t, "__esModule", {
         value: true
      });
      var s = function () {
         function e(e, t) {
            for (var s = 0; s < t.length; s++) {
               var i = t[s];
               i.enumerable = i.enumerable || false;
               i.configurable = true;
               if ("value" in i) {
                  i.writable = true;
               }
               Object.defineProperty(e, i.key, i);
            }
         }
         return function (t, s, i) {
            if (s) {
               e(t.prototype, s);
            }
            if (i) {
               e(t, i);
            }
            return t;
         };
      }();
      var i = function () {
         function e() {
            (function (e, t) {
               if (!(e instanceof t)) {
                  throw new TypeError("Cannot call a class as a function");
               }
            })(this, e);
         }
         s(e, [{
            key: "setProperty",
            value: function () {
               return true;
            }
         }, {
            key: "getPropertyValue",
            value: function () {
               return "";
            }
         }, {
            key: "removeProperty",
            value: function () {}
         }, {
            key: "setSelector",
            value: function () {
               return true;
            }
         }, {
            key: "getKey",
            value: function () {
               return "";
            }
         }, {
            key: "attach",
            value: function () {}
         }, {
            key: "detach",
            value: function () {}
         }, {
            key: "deploy",
            value: function () {}
         }, {
            key: "insertRule",
            value: function () {
               return false;
            }
         }, {
            key: "deleteRule",
            value: function () {
               return true;
            }
         }, {
            key: "replaceRule",
            value: function () {
               return false;
            }
         }, {
            key: "getRules",
            value: function () {}
         }, {
            key: "indexOf",
            value: function () {
               return -1;
            }
         }]);
         return e;
      }();
      t.default = i;
   },
   27836: (e, t, s) => {
      Object.defineProperty(t, "__esModule", {
         value: true
      });
      var i;
      var n = Object.assign || function (e) {
         for (var t = 1; t < arguments.length; t++) {
            var s = arguments[t];
            for (var i in s) {
               if (Object.prototype.hasOwnProperty.call(s, i)) {
                  e[i] = s[i];
               }
            }
         }
         return e;
      };
      var o = function () {
         function e(e, t) {
            for (var s = 0; s < t.length; s++) {
               var i = t[s];
               i.enumerable = i.enumerable || false;
               i.configurable = true;
               if ("value" in i) {
                  i.writable = true;
               }
               Object.defineProperty(e, i.key, i);
            }
         }
         return function (t, s, i) {
            if (s) {
               e(t.prototype, s);
            }
            if (i) {
               e(t, i);
            }
            return t;
         };
      }();
      var r = s(37009);
      var a = (i = r) && i.__esModule ? i : {
         default: i
      };
      var l = function () {
         function e(t, s, i) {
            (function (e, t) {
               if (!(e instanceof t)) {
                  throw new TypeError("Cannot call a class as a function");
               }
            })(this, e);
            this.type = "conditional";
            this.isProcessed = false;
            this.key = t;
            this.options = i;
            this.rules = new a.default(n({}, i, {
               parent: this
            }));
            for (var o in s) {
               this.rules.add(o, s[o]);
            }
            this.rules.process();
         }
         o(e, [{
            key: "getRule",
            value: function (e) {
               return this.rules.get(e);
            }
         }, {
            key: "indexOf",
            value: function (e) {
               return this.rules.indexOf(e);
            }
         }, {
            key: "addRule",
            value: function (e, t, s) {
               var i = this.rules.add(e, t, s);
               this.options.jss.plugins.onProcessRule(i);
               return i;
            }
         }, {
            key: "toString",
            value: function (e = {
               indent: 1
            }) {
               var t = this.rules.toString(e);
               if (t) {
                  return this.key + " {\n" + t + "\n}";
               } else {
                  return "";
               }
            }
         }]);
         return e;
      }();
      t.default = l;
   },
   39134: (e, t, s) => {
      Object.defineProperty(t, "__esModule", {
         value: true
      });
      var i;
      var n = function () {
         function e(e, t) {
            for (var s = 0; s < t.length; s++) {
               var i = t[s];
               i.enumerable = i.enumerable || false;
               i.configurable = true;
               if ("value" in i) {
                  i.writable = true;
               }
               Object.defineProperty(e, i.key, i);
            }
         }
         return function (t, s, i) {
            if (s) {
               e(t.prototype, s);
            }
            if (i) {
               e(t, i);
            }
            return t;
         };
      }();
      var o = s(76139);
      var r = (i = o) && i.__esModule ? i : {
         default: i
      };
      var a = function () {
         function e(t, s, i) {
            (function (e, t) {
               if (!(e instanceof t)) {
                  throw new TypeError("Cannot call a class as a function");
               }
            })(this, e);
            this.type = "font-face";
            this.isProcessed = false;
            this.key = t;
            this.style = s;
            this.options = i;
         }
         n(e, [{
            key: "toString",
            value: function (e) {
               if (Array.isArray(this.style)) {
                  var t = "";
                  for (var s = 0; s < this.style.length; s++) {
                     t += r.default(this.key, this.style[s]);
                     if (this.style[s + 1]) {
                        t += "\n";
                     }
                  }
                  return t;
               }
               return r.default(this.key, this.style, e);
            }
         }]);
         return e;
      }();
      t.default = a;
   },
   2824: (e, t, s) => {
      Object.defineProperty(t, "__esModule", {
         value: true
      });
      var i;
      var n = Object.assign || function (e) {
         for (var t = 1; t < arguments.length; t++) {
            var s = arguments[t];
            for (var i in s) {
               if (Object.prototype.hasOwnProperty.call(s, i)) {
                  e[i] = s[i];
               }
            }
         }
         return e;
      };
      var o = function () {
         function e(e, t) {
            for (var s = 0; s < t.length; s++) {
               var i = t[s];
               i.enumerable = i.enumerable || false;
               i.configurable = true;
               if ("value" in i) {
                  i.writable = true;
               }
               Object.defineProperty(e, i.key, i);
            }
         }
         return function (t, s, i) {
            if (s) {
               e(t.prototype, s);
            }
            if (i) {
               e(t, i);
            }
            return t;
         };
      }();
      var r = s(37009);
      var a = (i = r) && i.__esModule ? i : {
         default: i
      };
      var l = function () {
         function e(t, s, i) {
            (function (e, t) {
               if (!(e instanceof t)) {
                  throw new TypeError("Cannot call a class as a function");
               }
            })(this, e);
            this.type = "keyframes";
            this.isProcessed = false;
            this.key = t;
            this.options = i;
            this.rules = new a.default(n({}, i, {
               parent: this
            }));
            for (var o in s) {
               this.rules.add(o, s[o], n({}, this.options, {
                  parent: this,
                  selector: o
               }));
            }
            this.rules.process();
         }
         o(e, [{
            key: "toString",
            value: function (e = {
               indent: 1
            }) {
               var t = this.rules.toString(e);
               if (t) {
                  t += "\n";
               }
               return this.key + " {\n" + t + "}";
            }
         }]);
         return e;
      }();
      t.default = l;
   },
   83524: (e, t) => {
      Object.defineProperty(t, "__esModule", {
         value: true
      });
      var s = function () {
         function e(e, t) {
            for (var s = 0; s < t.length; s++) {
               var i = t[s];
               i.enumerable = i.enumerable || false;
               i.configurable = true;
               if ("value" in i) {
                  i.writable = true;
               }
               Object.defineProperty(e, i.key, i);
            }
         }
         return function (t, s, i) {
            if (s) {
               e(t.prototype, s);
            }
            if (i) {
               e(t, i);
            }
            return t;
         };
      }();
      var i = function () {
         function e(t, s, i) {
            (function (e, t) {
               if (!(e instanceof t)) {
                  throw new TypeError("Cannot call a class as a function");
               }
            })(this, e);
            this.type = "simple";
            this.isProcessed = false;
            this.key = t;
            this.value = s;
            this.options = i;
         }
         s(e, [{
            key: "toString",
            value: function (e) {
               if (Array.isArray(this.value)) {
                  var t = "";
                  for (var s = 0; s < this.value.length; s++) {
                     t += this.key + " " + this.value[s] + ";";
                     if (this.value[s + 1]) {
                        t += "\n";
                     }
                  }
                  return t;
               }
               return this.key + " " + this.value + ";";
            }
         }]);
         return e;
      }();
      t.default = i;
   },
   84546: (e, t, s) => {
      Object.defineProperty(t, "__esModule", {
         value: true
      });
      var i = Object.assign || function (e) {
         for (var t = 1; t < arguments.length; t++) {
            var s = arguments[t];
            for (var i in s) {
               if (Object.prototype.hasOwnProperty.call(s, i)) {
                  e[i] = s[i];
               }
            }
         }
         return e;
      };
      var n = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (e) {
         return typeof e;
      } : function (e) {
         if (e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype) {
            return "symbol";
         } else {
            return typeof e;
         }
      };
      var o = function () {
         function e(e, t) {
            for (var s = 0; s < t.length; s++) {
               var i = t[s];
               i.enumerable = i.enumerable || false;
               i.configurable = true;
               if ("value" in i) {
                  i.writable = true;
               }
               Object.defineProperty(e, i.key, i);
            }
         }
         return function (t, s, i) {
            if (s) {
               e(t.prototype, s);
            }
            if (i) {
               e(t, i);
            }
            return t;
         };
      }();
      var r = c(s(89198));
      var a = c(s(76139));
      var l = c(s(44396));
      function c(e) {
         if (e && e.__esModule) {
            return e;
         } else {
            return {
               default: e
            };
         }
      }
      var h = function () {
         function e(t, s, i) {
            (function (e, t) {
               if (!(e instanceof t)) {
                  throw new TypeError("Cannot call a class as a function");
               }
            })(this, e);
            this.type = "style";
            this.isProcessed = false;
            var n = i.sheet;
            var o = i.Renderer;
            var r = i.selector;
            this.key = t;
            this.options = i;
            this.style = s;
            if (r) {
               this.selectorText = r;
            }
            this.renderer = n ? n.renderer : new o();
         }
         o(e, [{
            key: "prop",
            value: function (e, t) {
               if (t === undefined) {
                  return this.style[e];
               }
               if (this.style[e] === t) {
                  return this;
               }
               var s = (t = this.options.jss.plugins.onChangeValue(t, e, this)) == null || t === false;
               var i = e in this.style;
               if (s && !i) {
                  return this;
               }
               var n = s && i;
               if (n) {
                  delete this.style[e];
               } else {
                  this.style[e] = t;
               }
               if (this.renderable) {
                  if (n) {
                     this.renderer.removeProperty(this.renderable, e);
                  } else {
                     this.renderer.setProperty(this.renderable, e, t);
                  }
                  return this;
               }
               var o = this.options.sheet;
               if (o && o.attached) {
                  r.default(false, "Rule is not linked. Missing sheet option \"link: true\".");
               }
               return this;
            }
         }, {
            key: "applyTo",
            value: function (e) {
               var t = this.toJSON();
               for (var s in t) {
                  this.renderer.setProperty(e, s, t[s]);
               }
               return this;
            }
         }, {
            key: "toJSON",
            value: function () {
               var e = {};
               for (var t in this.style) {
                  var s = this.style[t];
                  if ((s === undefined ? "undefined" : n(s)) !== "object") {
                     e[t] = s;
                  } else if (Array.isArray(s)) {
                     e[t] = l.default(s);
                  }
               }
               return e;
            }
         }, {
            key: "toString",
            value: function (e) {
               var t = this.options.sheet;
               var s = !!t && t.options.link ? i({}, e, {
                  allowEmpty: true
               }) : e;
               return a.default(this.selector, this.style, s);
            }
         }, {
            key: "selector",
            set: function (e) {
               if (e !== this.selectorText && (this.selectorText = e, this.renderable && !this.renderer.setSelector(this.renderable, e) && this.renderable)) {
                  var t = this.renderer.replaceRule(this.renderable, this);
                  if (t) {
                     this.renderable = t;
                  }
               }
            },
            get: function () {
               return this.selectorText;
            }
         }]);
         return e;
      }();
      t.default = h;
   },
   76444: (e, t, s) => {
      Object.defineProperty(t, "__esModule", {
         value: true
      });
      var i;
      var n = function () {
         function e(e, t) {
            for (var s = 0; s < t.length; s++) {
               var i = t[s];
               i.enumerable = i.enumerable || false;
               i.configurable = true;
               if ("value" in i) {
                  i.writable = true;
               }
               Object.defineProperty(e, i.key, i);
            }
         }
         return function (t, s, i) {
            if (s) {
               e(t.prototype, s);
            }
            if (i) {
               e(t, i);
            }
            return t;
         };
      }();
      var o = s(76139);
      var r = (i = o) && i.__esModule ? i : {
         default: i
      };
      var a = function () {
         function e(t, s, i) {
            (function (e, t) {
               if (!(e instanceof t)) {
                  throw new TypeError("Cannot call a class as a function");
               }
            })(this, e);
            this.type = "viewport";
            this.isProcessed = false;
            this.key = t;
            this.style = s;
            this.options = i;
         }
         n(e, [{
            key: "toString",
            value: function (e) {
               return r.default(this.key, this.style, e);
            }
         }]);
         return e;
      }();
      t.default = a;
   },
   96913: (e, t, s) => {
      Object.defineProperty(t, "__esModule", {
         value: true
      });
      var i;
      var n = s(28665);
      var o = (i = n) && i.__esModule ? i : {
         default: i
      };
      t.default = new o.default();
   },
   37281: (e, t, s) => {
      Object.defineProperty(t, "__esModule", {
         value: true
      });
      var i = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (e) {
         return typeof e;
      } : function (e) {
         if (e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype) {
            return "symbol";
         } else {
            return typeof e;
         }
      };
      t.default = function e(t) {
         if (t == null) {
            return t;
         }
         var s = t === undefined ? "undefined" : i(t);
         if (s === "string" || s === "number" || s === "function") {
            return t;
         }
         if (a(t)) {
            return t.map(e);
         }
         if (r.default(t)) {
            return t;
         }
         var n = {};
         for (var o in t) {
            var l = t[o];
            if ((l === undefined ? "undefined" : i(l)) !== "object") {
               n[o] = l;
            } else {
               n[o] = e(l);
            }
         }
         return n;
      };
      var n;
      var o = s(78021);
      var r = (n = o) && n.__esModule ? n : {
         default: n
      };
      var a = Array.isArray;
   },
   75347: (e, t, s) => {
      Object.defineProperty(t, "__esModule", {
         value: true
      });
      var i = o(s(89198));
      o(s(83103));
      var n = o(s(6166));
      function o(e) {
         if (e && e.__esModule) {
            return e;
         } else {
            return {
               default: e
            };
         }
      }
      t.default = function () {
         var e = 0;
         return function (t, s) {
            if ((e += 1) > 10000000000) {
               i.default(false, "[JSS] You might have a memory leak. Rule counter is at %s.", e);
            }
            var o = "c";
            var r = "";
            if (s) {
               o = s.options.classNamePrefix || "c";
               if (s.options.jss.id != null) {
                  r += s.options.jss.id;
               }
            }
            return "" + o + n.default + r + e;
         };
      };
   },
   76558: (e, t, s) => {
      Object.defineProperty(t, "__esModule", {
         value: true
      });
      t.default = function (e = "unnamed") {
         var t = arguments[1];
         var s = arguments[2];
         var r = s.jss;
         var a = o.default(t);
         var l = r.plugins.onCreateRule(e, a, s);
         if (l) {
            return l;
         }
         if (e[0] === "@") {
            i.default(false, "[JSS] Unknown at-rule %s", e);
         }
         return new n.default(e, a, s);
      };
      var i = r(s(89198));
      var n = r(s(84546));
      var o = r(s(37281));
      function r(e) {
         if (e && e.__esModule) {
            return e;
         } else {
            return {
               default: e
            };
         }
      }
   },
   15653: (e, t, s) => {
      Object.defineProperty(t, "__esModule", {
         value: true
      });
      s.g.CSS;
      t.default = function (e) {
         return e;
      };
   },
   3558: (e, t) => {
      Object.defineProperty(t, "__esModule", {
         value: true
      });
      var s = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (e) {
         return typeof e;
      } : function (e) {
         if (e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype) {
            return "symbol";
         } else {
            return typeof e;
         }
      };
      t.default = function e(t) {
         var i = null;
         for (var n in t) {
            var o = t[n];
            var r = o === undefined ? "undefined" : s(o);
            if (r === "function") {
               i ||= {};
               i[n] = o;
            } else if (r === "object" && o !== null && !Array.isArray(o)) {
               var a = e(o);
               if (a) {
                  i ||= {};
                  i[n] = a;
               }
            }
         }
         return i;
      };
   },
   78021: (e, t, s) => {
      Object.defineProperty(t, "__esModule", {
         value: true
      });
      var i;
      var n = s(35934);
      var o = (i = n) && i.__esModule ? i : {
         default: i
      };
      t.default = function (e) {
         return e && e[o.default] && e === e[o.default]();
      };
   },
   24906: (e, t) => {
      Object.defineProperty(t, "__esModule", {
         value: true
      });
      t.default = function (e, t) {
         e.renderable = t;
         if (e.rules && t.cssRules) {
            e.rules.link(t.cssRules);
         }
      };
   },
   6166: (e, t, s) => {
      Object.defineProperty(t, "__esModule", {
         value: true
      });
      var i = "2f1acc6c3a606b082e5eef5e54414ffb";
      if (s.g[i] == null) {
         s.g[i] = 0;
      }
      t.default = s.g[i]++;
   },
   76139: (e, t, s) => {
      Object.defineProperty(t, "__esModule", {
         value: true
      });
      t.default = function (e, t, s = {}) {
         var i = "";
         if (!t) {
            return i;
         }
         var n = s.indent;
         var a = n === undefined ? 0 : n;
         var l = t.fallbacks;
         a++;
         if (l) {
            if (Array.isArray(l)) {
               for (var c = 0; c < l.length; c++) {
                  var h = l[c];
                  for (var d in h) {
                     var u = h[d];
                     if (u != null) {
                        i += "\n" + r(d + ": " + o.default(u) + ";", a);
                     }
                  }
               }
            } else {
               for (var p in l) {
                  var b = l[p];
                  if (b != null) {
                     i += "\n" + r(p + ": " + o.default(b) + ";", a);
                  }
               }
            }
         }
         for (var g in t) {
            var f = t[g];
            if (f != null && g !== "fallbacks") {
               i += "\n" + r(g + ": " + o.default(f) + ";", a);
            }
         }
         if (i || s.allowEmpty) {
            a--;
            return i = r(e + " {" + i + "\n", a) + r("}", a);
         } else {
            return i;
         }
      };
      var i;
      var n = s(44396);
      var o = (i = n) && i.__esModule ? i : {
         default: i
      };
      function r(e, t) {
         var s = "";
         for (var i = 0; i < t; i++) {
            s += "  ";
         }
         return s + e;
      }
   },
   44396: (e, t) => {
      Object.defineProperty(t, "__esModule", {
         value: true
      });
      t.default = function (e, t = false) {
         if (!Array.isArray(e)) {
            return e;
         }
         var i = "";
         if (Array.isArray(e[0])) {
            for (var n = 0; n < e.length && e[n] !== "!important"; n++) {
               if (i) {
                  i += ", ";
               }
               i += s(e[n], " ");
            }
         } else {
            i = s(e, ", ");
         }
         if (!t && e[e.length - 1] === "!important") {
            i += " !important";
         }
         return i;
      };
      function s(e, t) {
         var s = "";
         for (var i = 0; i < e.length && e[i] !== "!important"; i++) {
            if (s) {
               s += t;
            }
            s += e[i];
         }
         return s;
      }
   },
   99813: e => {
      /*
      object-assign
      (c) Sindre Sorhus
      @license MIT
      */
      var t = Object.getOwnPropertySymbols;
      var s = Object.prototype.hasOwnProperty;
      var i = Object.prototype.propertyIsEnumerable;
      e.exports = function () {
         try {
            if (!Object.assign) {
               return false;
            }
            var e = new String("abc");
            e[5] = "de";
            if (Object.getOwnPropertyNames(e)[0] === "5") {
               return false;
            }
            var t = {};
            for (var s = 0; s < 10; s++) {
               t["_" + String.fromCharCode(s)] = s;
            }
            if (Object.getOwnPropertyNames(t).map(function (e) {
               return t[e];
            }).join("") !== "0123456789") {
               return false;
            }
            var i = {};
            "abcdefghijklmnopqrst".split("").forEach(function (e) {
               i[e] = e;
            });
            return Object.keys(Object.assign({}, i)).join("") === "abcdefghijklmnopqrst";
         } catch (e) {
            return false;
         }
      }() ? Object.assign : function (e, n) {
         var o;
         var r;
         var a = function (e) {
            if (e == null) {
               throw new TypeError("Object.assign cannot be called with null or undefined");
            }
            return Object(e);
         }(e);
         for (var l = 1; l < arguments.length; l++) {
            for (var c in o = Object(arguments[l])) {
               if (s.call(o, c)) {
                  a[c] = o[c];
               }
            }
            if (t) {
               r = t(o);
               for (var h = 0; h < r.length; h++) {
                  if (i.call(o, r[h])) {
                     a[r[h]] = o[r[h]];
                  }
               }
            }
         }
         return a;
      };
   },
   41196: (e, t) => {
      /** @license React v0.19.1
       * scheduler.production.min.js
       *
       * Copyright (c) Facebook, Inc. and its affiliates.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE file in the root directory of this source tree.
       */
      var s;
      var i;
      var n;
      var o;
      var r;
      if (typeof window == "undefined" || typeof MessageChannel != "function") {
         var a = null;
         var l = null;
         function c() {
            if (a !== null) {
               try {
                  var e = t.unstable_now();
                  a(true, e);
                  a = null;
               } catch (e) {
                  // TOLOOK
                  setTimeout(c, 0);
                  throw e;
               }
            }
         }
         var h = Date.now();
         t.unstable_now = function () {
            return Date.now() - h;
         };
         s = function (e) {
            if (a !== null) {
               // TOLOOK
               setTimeout(s, 0, e);
            } else {
               a = e;
               // TOLOOK
               setTimeout(c, 0);
            }
         };
         i = function (e, t) {
            l = // TOLOOK
               setTimeout(e, t);
         };
         n = function () {
            clearTimeout(l);
         };
         o = function () {
            return false;
         };
         r = t.unstable_forceFrameRate = function () {};
      } else {
         var d = window.performance;
         var u = window.Date;
         var p = window.setTimeout;
         var b = window.clearTimeout;
         if (typeof console != "undefined") {
            var g = window.cancelAnimationFrame;
            if (typeof window.requestAnimationFrame != "function") {
               console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills");
            }
            if (typeof g != "function") {
               console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills");
            }
         }
         if (typeof d == "object" && typeof d.now == "function") {
            t.unstable_now = function () {
               return d.now();
            };
         } else {
            var f = u.now();
            t.unstable_now = function () {
               return u.now() - f;
            };
         }
         var m = false;
         var y = null;
         var v = -1;
         var w = 5;
         var x = 0;
         o = function () {
            return t.unstable_now() >= x;
         };
         r = function () {};
         t.unstable_forceFrameRate = function (e) {
            if (e < 0 || e > 125) {
               console.error("forceFrameRate takes a positive int between 0 and 125, forcing framerates higher than 125 fps is not unsupported");
            } else {
               w = e > 0 ? Math.floor(1000 / e) : 5;
            }
         };
         var S = new MessageChannel();
         var M = S.port2;
         S.port1.onmessage = function () {
            if (y !== null) {
               var e = t.unstable_now();
               x = e + w;
               try {
                  if (y(true, e)) {
                     M.postMessage(null);
                  } else {
                     m = false;
                     y = null;
                  }
               } catch (e) {
                  M.postMessage(null);
                  throw e;
               }
            } else {
               m = false;
            }
         };
         s = function (e) {
            y = e;
            if (!m) {
               m = true;
               M.postMessage(null);
            }
         };
         i = function (e, s) {
            v = p(function () {
               e(t.unstable_now());
            }, s);
         };
         n = function () {
            b(v);
            v = -1;
         };
      }
      function k(e, t) {
         var s = e.length;
         e.push(t);
         e: while (true) {
            var i = s - 1 >>> 1;
            var n = e[i];
            if (n === undefined || !(V(n, t) > 0)) {
               break e;
            }
            e[i] = t;
            e[s] = n;
            s = i;
         }
      }
      function H(e) {
         if ((e = e[0]) === undefined) {
            return null;
         } else {
            return e;
         }
      }
      function C(e) {
         var t = e[0];
         if (t !== undefined) {
            var s = e.pop();
            if (s !== t) {
               e[0] = s;
               e: for (var i = 0, n = e.length; i < n;) {
                  var o = (i + 1) * 2 - 1;
                  var r = e[o];
                  var a = o + 1;
                  var l = e[a];
                  if (r !== undefined && V(r, s) < 0) {
                     if (l !== undefined && V(l, r) < 0) {
                        e[i] = l;
                        e[a] = s;
                        i = a;
                     } else {
                        e[i] = r;
                        e[o] = s;
                        i = o;
                     }
                  } else {
                     if (l === undefined || !(V(l, s) < 0)) {
                        break e;
                     }
                     e[i] = l;
                     e[a] = s;
                     i = a;
                  }
               }
            }
            return t;
         }
         return null;
      }
      function V(e, t) {
         var s = e.sortIndex - t.sortIndex;
         if (s !== 0) {
            return s;
         } else {
            return e.id - t.id;
         }
      }
      var _ = [];
      var O = [];
      var E = 1;
      var T = null;
      var P = 3;
      var j = false;
      var D = false;
      var I = false;
      function A(e) {
         for (var t = H(O); t !== null;) {
            if (t.callback === null) {
               C(O);
            } else {
               if (!(t.startTime <= e)) {
                  break;
               }
               C(O);
               t.sortIndex = t.expirationTime;
               k(_, t);
            }
            t = H(O);
         }
      }
      function L(e) {
         I = false;
         A(e);
         if (!D) {
            if (H(_) !== null) {
               D = true;
               s(Z);
            } else {
               var t = H(O);
               if (t !== null) {
                  i(L, t.startTime - e);
               }
            }
         }
      }
      function Z(e, s) {
         D = false;
         if (I) {
            I = false;
            n();
         }
         j = true;
         var r = P;
         try {
            A(s);
            T = H(_);
            while (T !== null && (!(T.expirationTime > s) || e && !o())) {
               var a = T.callback;
               if (a !== null) {
                  T.callback = null;
                  P = T.priorityLevel;
                  var l = a(T.expirationTime <= s);
                  s = t.unstable_now();
                  if (typeof l == "function") {
                     T.callback = l;
                  } else if (T === H(_)) {
                     C(_);
                  }
                  A(s);
               } else {
                  C(_);
               }
               T = H(_);
            }
            if (T !== null) {
               var c = true;
            } else {
               var h = H(O);
               if (h !== null) {
                  i(L, h.startTime - s);
               }
               c = false;
            }
            return c;
         } finally {
            T = null;
            P = r;
            j = false;
         }
      }
      function F(e) {
         switch (e) {
            case 1:
               return -1;
            case 2:
               return 250;
            case 5:
               return 1073741823;
            case 4:
               return 10000;
            default:
               return 5000;
         }
      }
      var B = r;
      t.unstable_IdlePriority = 5;
      t.unstable_ImmediatePriority = 1;
      t.unstable_LowPriority = 4;
      t.unstable_NormalPriority = 3;
      t.unstable_Profiling = null;
      t.unstable_UserBlockingPriority = 2;
      t.unstable_cancelCallback = function (e) {
         e.callback = null;
      };
      t.unstable_continueExecution = function () {
         if (!D && !j) {
            D = true;
            s(Z);
         }
      };
      t.unstable_getCurrentPriorityLevel = function () {
         return P;
      };
      t.unstable_getFirstCallbackNode = function () {
         return H(_);
      };
      t.unstable_next = function (e) {
         switch (P) {
            case 1:
            case 2:
            case 3:
               var t = 3;
               break;
            default:
               t = P;
         }
         var s = P;
         P = t;
         try {
            return e();
         } finally {
            P = s;
         }
      };
      t.unstable_pauseExecution = function () {};
      t.unstable_requestPaint = B;
      t.unstable_runWithPriority = function (e, t) {
         switch (e) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
               break;
            default:
               e = 3;
         }
         var s = P;
         P = e;
         try {
            return t();
         } finally {
            P = s;
         }
      };
      t.unstable_scheduleCallback = function (e, o, r) {
         var a = t.unstable_now();
         if (typeof r == "object" && r !== null) {
            var l = r.delay;
            l = typeof l == "number" && l > 0 ? a + l : a;
            r = typeof r.timeout == "number" ? r.timeout : F(e);
         } else {
            r = F(e);
            l = a;
         }
         e = {
            id: E++,
            callback: o,
            priorityLevel: e,
            startTime: l,
            expirationTime: r = l + r,
            sortIndex: -1
         };
         if (l > a) {
            e.sortIndex = l;
            k(O, e);
            if (H(_) === null && e === H(O)) {
               if (I) {
                  n();
               } else {
                  I = true;
               }
               i(L, l - a);
            }
         } else {
            e.sortIndex = r;
            k(_, e);
            if (!D && !j) {
               D = true;
               s(Z);
            }
         }
         return e;
      };
      t.unstable_shouldYield = function () {
         var e = t.unstable_now();
         A(e);
         var s = H(_);
         return s !== T && T !== null && s !== null && s.callback !== null && s.startTime <= e && s.expirationTime < T.expirationTime || o();
      };
      t.unstable_wrapCallback = function (e) {
         var t = P;
         return function () {
            var s = P;
            P = t;
            try {
               return e.apply(this, arguments);
            } finally {
               P = s;
            }
         };
      };
   },
   72851: (e, t, s) => {
      e.exports = s(41196);
   },
   35934: (e, t, s) => {
      s.r(t);
      s.d(t, {
         default: () => i
      });
      e = s.hmd(e);
      const i = function (e) {
         var t;
         var s = e.Symbol;
         if (typeof s == "function") {
            if (s.observable) {
               t = s.observable;
            } else {
               t = s("observable");
               s.observable = t;
            }
         } else {
            t = "@@observable";
         }
         return t;
      }(typeof self != "undefined" ? self : typeof window != "undefined" ? window : s.g !== undefined ? s.g : e);
   },
   89198: e => {
      e.exports = function () {};
   },
   17692: (e, t, s) => {
      function i() {
         i = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
               var s = arguments[t];
               for (var i in s) {
                  if (Object.prototype.hasOwnProperty.call(s, i)) {
                     e[i] = s[i];
                  }
               }
            }
            return e;
         };
         return i.apply(this, arguments);
      }
      s.d(t, {
         Z: () => i
      });
   },
   71972: (e, t, s) => {
      function i(e, t) {
         if (e == null) {
            return {};
         }
         var s;
         var i;
         var n = {};
         var o = Object.keys(e);
         for (i = 0; i < o.length; i++) {
            s = o[i];
            if (!(t.indexOf(s) >= 0)) {
               n[s] = e[s];
            }
         }
         return n;
      }
      s.d(t, {
         Z: () => i
      });
   }
};

var s = {};
function State(e) {
   var n = s[e];
   if (n !== undefined) {
      return n.exports;
   }
   var o = s[e] = {
      id: e,
      loaded: false,
      exports: {}
   };
   Surf[e](o, o.exports, State);
   o.loaded = true;
   return o.exports;
}

State.m = Surf;
var e = [];

State.O = (t, s, n, o) => {
   if (!s) {
      var r = Infinity;
      for (h = 0; h < e.length; h++) {
         for (var [s, n, o] = e[h], a = true, l = 0; l < s.length; l++) {
            if ((o & false || r >= o) && Object.keys(State.O).every(e => State.O[e](s[l]))) {
               s.splice(l--, 1);
            } else {
               a = false;
               if (o < r) {
                  r = o;
               }
            }
         }
         if (a) {
            e.splice(h--, 1);
            var c = n();
            if (c !== undefined) {
               t = c;
            }
         }
      }
      return t;
   }
   o = o || 0;
   for (var h = e.length; h > 0 && e[h - 1][2] > o; h--) {
      e[h] = e[h - 1];
   }
   e[h] = [s, n, o];
};

State.n = e => {
   var t = e && e.__esModule ? () => e.default : () => e;
   State.d(t, {
      a: t
   });
   return t;
};

State.d = (e, t) => {
   for (var s in t) {
      if (State.o(t, s) && !State.o(e, s)) {
         Object.defineProperty(e, s, {
            enumerable: true,
            get: t[s]
         });
      }
   }
};

State.g = function () {
   if (typeof globalThis == "object") {
      return globalThis;
   }
   try {
      return this || new Function("return this")();
   } catch (e) {
      if (typeof window == "object") {
         return window;
      }
   }
}();

State.hmd = e => {
   if (!(e = Object.create(e)).children) {
      e.children = [];
   }
   Object.defineProperty(e, "exports", {
      enumerable: true,
      set: () => {
         throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: " + e.id);
      }
   });
   return e;
};

State.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t);
State.r = e => {
   if (typeof Symbol != "undefined" && Symbol.toStringTag) {
      Object.defineProperty(e, Symbol.toStringTag, {
         value: "Module"
      });
   }
   Object.defineProperty(e, "__esModule", {
      value: true
   });
};

State.j = 4185;

(() => {
   var e = {
      4185: 0
   };
   State.O.j = t => e[t] === 0;
   var t = (t, s) => {
      var n;
      var o;
      var [r, a, l] = s;
      var c = 0;
      if (r.some(t => e[t] !== 0)) {
         for (n in a) {
            if (State.o(a, n)) {
               State.m[n] = a[n];
            }
         }
         if (l) {
            var h = l(State);
         }
      }
      for (t && t(s); c < r.length; c++) {
         o = r[c];
         if (State.o(e, o) && e[o]) {
            e[o][0]();
         }
         e[o] = 0;
      }
      return State.O(h);
   };
   var s = self.webpackChunkedge_common = self.webpackChunkedge_common || [];
   s.forEach(t.bind(null, 0));
   s.push = t.bind(null, s.push.bind(s));
})();

var n = State.O(undefined, [759, 7692], () => State(58387));
n = State.O(n);
