var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
import { toRefs, ref, watchEffect, resolveComponent, openBlock, createElementBlock, Fragment, renderSlot, createCommentVNode, createBlock, withCtx, createElementVNode, createVNode, renderList, unref, createTextVNode, toDisplayString, pushScopeId, popScopeId, Teleport, normalizeClass, reactive, onMounted, nextTick, onUnmounted, watch, computed, getCurrentScope, onScopeDispose, resolveDynamicComponent, mergeProps, createStaticVNode, inject, withModifiers, withKeys, useAttrs, normalizeProps, warn, toRef, Comment, isVNode, getCurrentInstance, h as h$1, Transition, withDirectives, vShow, cloneVNode, defineComponent, onBeforeUnmount, onActivated, onDeactivated, provide, resolveDirective, createSlots, toHandlers } from "vue";
import draggable from "vuedraggable";
import ResizeObserver from "resize-observer-polyfill";
import { debounce as debounce$1, cloneDeep as cloneDeep$1, isEmpty, sortBy, findIndex, omit } from "lodash";
import jsMd5 from "js-md5";
import { ElMessage, ElTableColumn } from "yun-design";
import { DocumentCopy } from "@element-plus/icons-vue";
var TableHeader_vue_vue_type_style_index_0_scoped_true_lang = /* @__PURE__ */ (() => ".dm-table-header[data-v-2b2d82c4]{display:flex;padding:8px 0}.dm-table-header-left[data-v-2b2d82c4]{flex:1}.dm-table-header-left[data-v-2b2d82c4],.dm-table-header-right[data-v-2b2d82c4]{display:flex;align-items:center;overflow:hidden}.dm-table-header-right[data-v-2b2d82c4]{justify-content:flex-end}.dm-popover-header[data-v-2b2d82c4]{display:flex;justify-content:space-between;border-bottom:1px solid #dcdfe6}.checkbox-list[data-v-2b2d82c4]{display:flex;flex-direction:column;max-height:200px;overflow-y:auto}.checkbox-item[data-v-2b2d82c4]{flex-shrink:0;height:30px}\n")();
var TableHeader_vue_vue_type_style_index_1_lang = /* @__PURE__ */ (() => ".dm-popover.el-popper{min-width:auto;padding:12px 20px!important}\n")();
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _withScopeId$2 = (n) => (pushScopeId("data-v-2b2d82c4"), n = n(), popScopeId(), n);
const _hoisted_1$8 = {
  key: 0,
  class: "dm-table-header"
};
const _hoisted_2$6 = {
  key: 0,
  class: "dm-table-header-left"
};
const _hoisted_3$3 = {
  key: 1,
  class: "dm-table-header-right"
};
const _hoisted_4$3 = /* @__PURE__ */ _withScopeId$2(() => /* @__PURE__ */ createElementVNode("i", { class: "yun-iconfont icon-settings" }, null, -1));
const _hoisted_5$2 = { class: "dm-popover-header" };
const _hoisted_6$2 = /* @__PURE__ */ createTextVNode(" \u91CD\u7F6E ");
const _hoisted_7$3 = /* @__PURE__ */ createTextVNode(" \u786E\u8BA4 ");
const _hoisted_8$2 = {
  key: 1,
  class: "dm-table-shoulder"
};
const _sfc_main$b = {
  props: {
    showTableSetting: {
      type: Boolean,
      default: false
    },
    columns: {
      type: Array,
      default: () => []
    },
    checkedColumns: {
      type: Array,
      default: () => null
    }
  },
  emits: ["submit"],
  setup(__props, { emit }) {
    const props = __props;
    const { columns, checkedColumns } = toRefs(props);
    const columnTypes = ["index", "selection"];
    const checkedList = ref([]);
    watchEffect(() => {
      checkedList.value = checkedColumns.value ? [...checkedColumns.value] : getColumnsProp(columns.value);
    });
    const resetColumns = () => {
      checkedList.value = getColumnsProp(columns.value);
    };
    const submitColumns = () => {
      emit("submit", checkedList.value);
    };
    function getColumnsProp(columns2) {
      return columns2.map((item) => item.prop);
    }
    return (_ctx, _cache) => {
      const _component_el_button = resolveComponent("el-button");
      const _component_el_checkbox = resolveComponent("el-checkbox");
      const _component_el_checkbox_group = resolveComponent("el-checkbox-group");
      const _component_el_popover = resolveComponent("el-popover");
      return openBlock(), createElementBlock(Fragment, null, [
        _ctx.$slots.tableHeaderLeft || _ctx.$slots.tableHeaderRight ? (openBlock(), createElementBlock("div", _hoisted_1$8, [
          _ctx.$slots.tableHeaderLeft ? (openBlock(), createElementBlock("div", _hoisted_2$6, [
            renderSlot(_ctx.$slots, "tableHeaderLeft", {}, void 0, true)
          ])) : createCommentVNode("", true),
          _ctx.$slots.tableHeaderRight ? (openBlock(), createElementBlock("div", _hoisted_3$3, [
            renderSlot(_ctx.$slots, "tableHeaderRight", {}, void 0, true),
            __props.showTableSetting ? (openBlock(), createBlock(_component_el_popover, {
              key: 0,
              width: "auto",
              "popper-class": "dm-popover",
              placement: "bottom-end"
            }, {
              reference: withCtx(() => [
                _hoisted_4$3
              ]),
              default: withCtx(() => [
                createElementVNode("div", _hoisted_5$2, [
                  createVNode(_component_el_button, {
                    type: "text",
                    onClick: resetColumns
                  }, {
                    default: withCtx(() => [
                      _hoisted_6$2
                    ]),
                    _: 1
                  }),
                  createVNode(_component_el_button, {
                    type: "text",
                    onClick: submitColumns
                  }, {
                    default: withCtx(() => [
                      _hoisted_7$3
                    ]),
                    _: 1
                  })
                ]),
                createVNode(_component_el_checkbox_group, {
                  modelValue: checkedList.value,
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => checkedList.value = $event),
                  class: "checkbox-list"
                }, {
                  default: withCtx(() => [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(unref(columns), (item) => {
                      return openBlock(), createElementBlock(Fragment, {
                        key: item.prop
                      }, [
                        !columnTypes.includes(item.type) ? (openBlock(), createBlock(_component_el_checkbox, {
                          key: 0,
                          class: "checkbox-item",
                          label: item.prop
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(item.label), 1)
                          ]),
                          _: 2
                        }, 1032, ["label"])) : createCommentVNode("", true)
                      ], 64);
                    }), 128))
                  ]),
                  _: 1
                }, 8, ["modelValue"])
              ]),
              _: 1
            })) : createCommentVNode("", true)
          ])) : createCommentVNode("", true)
        ])) : createCommentVNode("", true),
        _ctx.$slots.tableShoulder ? (openBlock(), createElementBlock("div", _hoisted_8$2, [
          renderSlot(_ctx.$slots, "tableShoulder", {}, void 0, true)
        ])) : createCommentVNode("", true)
      ], 64);
    };
  }
};
var TableHeader = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["__scopeId", "data-v-2b2d82c4"]]);
var _imports_0 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAAAoCAYAAABdGbwdAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAF9SURBVHgB7drBbcIwFAbg55CWOBya9MaNEWgnYYZu0EkYgRXYBEbgxq2hB5K0JX7FgUoOCX1qLkXJ/0mggJyDf9mWfsmKjpIkmRwKXiiiKRNF1Hu89AfeaxzHG2XDKQpeaa0jrYeklKI+Y2bKPz5pv093/kA9+UVh5mE4KsMBKheIDobEhqM0yxYek5oFwT1B1XnBTH377W6rt+SdjDHls+d59Bg/1F52x3SJO99zJpF3Ocid+LUQuhiO1TQvj+BXtYDsMmt6vjamS5rm5V/+0XTmtBnTFdhiAgQkQECC2hmUphn1WRjqym9fGtB32GICBCRAQAIEJKgd0mjz1fmizTvQ5ltAm3egzbeALSZAQAIEJECbv4A2/0fYYgIEJEBAAgQkQJt3oM0L0OZbQJt3XGvzO2aOfu4Ioc2f2Kt4lo1sneU5QZW9p2iYlmq7TSb+Ha9GIx0FQ1zitCvHLpg0zZPDl3ou0ziFZOZEaka3g+l/7I6f9TGcl/E43nwD3XGkHXy8754AAAAASUVORK5CYII=";
var _imports_1 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAAAoCAYAAABdGbwdAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAF4SURBVHgB7dpBboJAFAbgNyMtDCYtdOfOI9iexDP0Bj2JR/AK3kSP4M5dhzYRaCszdahNRNCXsqmB/0s0QGYzf96bxcsI2tNaj3eFnQuiiSWKqPfswhvIlziO18KFUxR2qZSKlPJJCEF9Zq2l/OOTtts08Qbi0SsKMwvDYRkOUFkgKvDJGhulWTaXlsQ0CG4Jqg4FM5Huv+9t1eSQSSQJLvJOP7zqNzLGlM9SSnqI7+nSmi5p2m+tgo43fi6ELobjNO0LLcaoBeTKrOn53JouadpX7QxqOnParOkKtBgDATEQEAMBMWqHdJpm1GdhqCrvHreg79BiDATEQEAMBMRAQAzMg45gHsTAPKgFzIOOYB7UAlqMgYAYCIiBgBiYB53APOiP0GIMBMRAQAwXUOKunUHVbyYuoFWW5wRV7p6isbQQm40eezd2ORyqKPB90sl7r+dBcXRHrmDSNNe7L/FU3jP7CcnMiMSUrsd/9X2y/6324TyPRvH6G/WglKJxcf2IAAAAAElFTkSuQmCC";
var _imports_2 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAAAoCAYAAABdGbwdAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFuSURBVHgB7dpBboJAGIbhf0ZaGVgUunPnEWxP4hl6g57EI3gFb6JHcOeu0IVAW5kpQ20CZfRP2NTA9yQaNLOZNzOQTBBUSZJkfirNWhAtDFFEo2c23kS+xnG8FzZOWZqtUipSakpCCBozYwwVH590PGapNxFPXlnqVRCEdRygeoEof0pGmyjL87U0JJa+f0/Qdl4wC2m/x76tXM5NIklwFQIxEIjh/f3jLXknrXV9LaWkx/iBro0ZEtd8OyuoOfFLEYYYx3LNC1uM0Qlkl5nr+tKYIXHNq3MPct1z+owZCmwxBgIxEIiBQAwEYiAQo/OYz7KcxiwIVOu3xw0YO2wxBgIxEIiBQAwEYiAQA4EYOJNuwJk0A2fSPeBMugFn0j1gizEQiIFADBsota+dQdtvExtolxcFQZt9T1Eb2ojDIZl7d2Ybhiryp3iJ064cu2CyrEhOX+K5rvETSa+IxJJux3/t+7T67Ko4L7NZvP8GeYqIgVpp0YQAAAAASUVORK5CYII=";
var _imports_3 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJAAAABQCAYAAAD2rvwMAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAM+SURBVHgB7dvLThRBFMbxU9UgXiPjoCiKjkSjcQNLl7BzB4/gG+gbCG+gb+ES9ib00iXGaDQmMiGK3AbwjkB3WTUTCBCabjhCxvD/JcNUTXcqJPWlpromx8gO/Z4x0ZAYGfTdigDGTBjnJtI0GYnjuLrt0kbD56bdWvvEiXksQAYj5mmarocgLTf60giPsVHsm71Jksrs3IJ8//Gz/gJOnzopnRfLUi6XGh/4Fckl6wMhRDb0w8rj33pXV9fk7bsPMj0zR3iw6dfvFZmc+iyv37yXkBFxrs/alpAZMX71qfjVZzJ0wg1/wg1AhrYTrXLv7i2JokhcmgxYv2EeDhdqtSXCg1whI7NztXrbRNGQFSu9oTM7XxOgiM3tjZNB6//0hXb4ngOK2LI/rrTk3dxRbpfuq13+O89u+zxspqa/zMrC4rIUkTUOmlPR+c2dza7LnbtO+gm/meq+dkWKyhoHzano/ObOaBgoS9iJ7+cfwv+lyPyyJECFAEGFAEElN0BJkmReW93HweNe46A5FZnf3ABNfZrZdaDwo2t4zCsqaxw0p6Lzm3sOVFtcqr+0/tU4aC7sgaBCgKBCgKBCgKBCgKBCgKBCgKCSew50veui4Piamp7f8zorEFRyV6C8BOJ4YwWCCgGCCgGCCgGCCgGCCgGCCgGCCgGCCgGCCrXx2BW18VChNh5q1Mbj0BEgqBAgqFAbj0zUxuPAqI3HkWAPBBUCBBUCBBUCBBUCBBUCBBUCBBVq47EnauNxqKiNhworEFQIEFQIEFQIEFQIEFQIEFQIEFQIEFQIEFSojceuqI2HCrXxUKM2HoeOAEGFAEGF2nhkojYeB0ZtPI5EWIGqoXHu7BkBijh96mSj4WTCOpeOhTYBQlGdl8r1d2d8gMRFoxsftnHYhxwhI+ULpUYnTUaiavVjtVLpKVlr75faz8vy12/1DRSwUwjPnds9jRNqI8/i8fHn9bPqSuXGSyP2QdQSXe681CFtba31J6a19XUBwvamo1ySmze6pbU1PHe5Vy5NH1ar1RWzcVN/f3+7mGjYGHkkQBa/8rgkGY7jeLnR3cEHqWJ8kJxIrw9TnwDhSd3JmHNmNI5fxFsv/AVrpnqLyGZgDwAAAABJRU5ErkJggg==";
var _imports_4 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJAAAABQCAYAAAD2rvwMAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMuSURBVHgB7dz9ShRRGIDx98z0/QHapqZmWSSKEXoJK12A3kneQXoHdif6f9JcghFFIqRImV+rQp+as6fzuioqjjP2Zmz4/EB3xlkG4TycnR3d4+SIcuBcPCROBsNupwDOTTnvp6rVdDRJkrlDh/Y2QjcNURQ99+KGBcjgxI1Vq9sa0kZtX2rxuChOwmZfmlZlaXlVvnz9tvMFXLt6RVqaSlIqNdZ+EGYkn24PaESR7uvMEx76trZ+ybv3M7KwuEw82Pf9x0+Znf8kb95OizYi3vdH0QVtRlyYfTrD7DOrO/qETX0CkOHypYvS2/NI4jgWX00HonDBPKIHKpV14kEubWRpubKz7eJ4KJJI+nRnaaUiQBH7lzdeBqPwrV+39XUOKOLA9XFnJIABAcGEgGBCQDC5kPeE26UG6WhvC+/7D7emN5QWPi/J6tqGFJF1HtSnouObO5ptd1qOHfRL4YZSx91WKSrrPKhPRcc3d0T1RFn0buRpfiH8X4qML1MCTAgIJgQEk9yA0jTNPLZ1ij++nnQe1Kci45sb0PzHxWNPpP94pm/ziso6D+pT0fHNvQ9UWVvf+bL6W+dBfeEaCCYEBBMCggkBwYSAYEJAMCEgmBAQTAgIJrl3ou+1NQnOr/mFlROPMwPBJHcGyisQ5xszEEwICCYEBBMCggkBwYSAYEJAMCEgmBAQTAgIJgQEE9YHwrFYHwgmrA8EM9YHwpkjIJgQEExYHwiZWB8If4z1gfBPcA0EEwKCCQHBhIBgQkAwISCYEBBMCAgmBAQT1gfCiVgfCGeK9YFgwgwEEwKCCQHBhIBgQkAwISCYEBBMCAgmGtCcbty8cV2AIq5dvVLb8DIVeV+d0G0CQlEtzaWdR+9CQOLj8b0fXmYBBOTQRkq3Gms71XTU6WN54OmYc/JMP/g3PfNBNg98AJD1gc6n48ZX4+nuelhbacXJi1eTk8O10fTpiL6e6YEnj7vlwf32/dc51gc6nw6Or17etLU2S29P1+4yPf61T0Mzoh3tKpfLDeLiEZ2JBMgSZh6NJ0mSjdruESGkThdC8iJ9IaZ+AfSdupcJ7914krxMDh74DQkBRtbOTBwdAAAAAElFTkSuQmCC";
var _imports_5 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJAAAABQCAYAAAD2rvwMAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMzSURBVHgB7dzNTtRQGIDh75yC+BsZBwFRZCQajRtYuoSdO7gE70DvQLgDvQuXsDehS5cYo9GYyIQo8jeA/wi0x3NmAgFCafFTM4b3SYZpp01D0jeHDqepkX2GPGOiUTEy4lcrAhgzbZybTtNkPI7j6p5N2wu+m3Zr7UMn5oEAGYyYR2m6FUJaa6xLIx5jo9gvDiRJKguLy/Ll67f6Czh96qR0XSxLuVxqfOBHJJdsDYeIbFgPI49/G9jY2JRXr9/K3Pwi8WDH9x/rMjP7QV68fCOhEXFu0NqW0IwYP/pU/OgzE1bCDj/DDkCGthOtcvvWdYmiSFyaDFt/wTwWNtRqq8SDXKGRhcVafdlE0agVKwNhZWGpJkARO5c3Tkas/zEYlsPfOaCIXdfHFSuAAgFBhYCgQkBQISCoEBBUCAgqBASVlrwdOsrt0nu5x8997G0tTKrNfVyQ5ZU1KSLrOGhORc9v7tns6e468KSf8JNqvVcuSVFZx0FzKnp+c89oOFCWMCN7lF8I/5ci55chASoEBBUCgkpuQEmSZG7bOMINaIcdB82pyPnNDWj2/fyBBwo334eveUVlHQfNqej5zf0/UG1ltf7S+lPHQXPhGggqBAQVAoIKAUGFgKBCQFAhIKgQEFQICCoEBBUCggoBQYWAoJI7G3+156Lg+JqdWzp0OyMQVHJHoLwCcbwxAkGFgKBCQFAhIKgQEFQICCoEBBUCggoBQYWAoEJAUCEgqBAQVAgIKgQEFZ4TjQPxnGio8JxoqPGcaPx1BAQVAoIKz4lGJp4Tjd/Gc6LxT3ANBBUCggoBQYWAoEJAUCEgqBAQVAgIKiGgalg4d/aMAEWcPnWyseBk2jqXToZlAkJRXZ3l+rszPiBx0cT2h23c9IUcoZHyhVJjJU3Go2r1XbVS6S9Za++U2s/L2qfP9Yk0YL8Qz80b/Y07FY08jqemntTvWaxU+p4ZsXejlqi7q7ND2tpa6zPnm1tbAoTLm45ySa719Upra5h/d89dmt6rVqvrZnunoaGhdjHRmDFyX4AsfuRxSTIWx/FaY3UfH1LF+JCcyICPaVCA8E3dyaRzZiKOn8a7N/wCwoMzqm3xUmsAAAAASUVORK5CYII=";
function isObject$7(target) {
  return target && typeof target === "object";
}
function mergeDeep(...objects) {
  return objects.reduce((prev, obj) => {
    Object.keys(obj).forEach((key) => {
      const pVal = prev[key];
      const oVal = obj[key];
      if (Array.isArray(pVal) && Array.isArray(oVal)) {
        prev[key] = pVal.concat(...oVal);
      } else if (isObject$7(pVal) && isObject$7(oVal)) {
        prev[key] = mergeDeep(pVal, oVal);
      } else {
        prev[key] = oVal;
      }
    });
    return prev;
  }, {});
}
let defaultConfig = {
  table: {
    filterCache: false,
    yunPagination: false,
    storageKey: "TABLE_HEADER_KEYS",
    cacheSize: 25,
    serverCacheOn: false,
    axiosInstance: null,
    userId: null,
    systemCode: null
  },
  tableHeader: {
    "el-date-picker": {
      valueFormat: "x",
      clearable: true
    },
    "el-input": {
      clearable: true
    },
    "el-select": {
      clearable: true
    },
    "el-cascader": {
      clearable: true
    }
  },
  pagination: {
    pageSize: 10
  },
  filter: {
    filterCache: false
  },
  proTable: {
    filterCache: false
  }
};
function setConfig(opt) {
  if (!isObject$7(opt))
    return;
  defaultConfig = mergeDeep(defaultConfig, opt);
}
function getConfig(key) {
  return defaultConfig[key];
}
var storage = {
  setItem(key, item) {
    let stringifyItem;
    try {
      stringifyItem = JSON.stringify(item);
    } catch (error) {
      stringifyItem = "";
    } finally {
      window.localStorage.setItem(key, stringifyItem);
    }
  },
  getItem(key) {
    let item;
    try {
      const stringifyItem = window.localStorage.getItem(key);
      item = JSON.parse(stringifyItem);
    } catch (erorr) {
      item = null;
    }
    return item;
  },
  removeItem(key) {
    window.localStorage.removeItem(key);
  }
};
const sessionStorage = {
  setItem(key, item) {
    let stringifyItem;
    try {
      stringifyItem = JSON.stringify(item);
    } catch (error) {
      stringifyItem = "";
    } finally {
      window.sessionStorage.setItem(key, stringifyItem);
    }
  },
  getItem(key) {
    let item;
    try {
      const stringifyItem = window.sessionStorage.getItem(key);
      item = JSON.parse(stringifyItem);
    } catch (erorr) {
      item = null;
    }
    return item;
  },
  removeItem(key) {
    window.sessionStorage.removeItem(key);
  }
};
function updateTableConfig(http, data) {
  return http.request({
    url: `/bfs-user/memory/upsert`,
    method: "POST",
    data
  });
}
var TableOperate_vue_vue_type_style_index_0_scoped_true_lang = /* @__PURE__ */ (() => '.dm-table-operate[data-v-6ec16483]{position:absolute;top:0px;right:0px;display:flex;z-index:19;height:40px;width:40px;background:var(--el-color-dark-bg);justify-content:center;align-items:center;cursor:pointer;border-left:1px solid var(--el-border-color-light)}.dm-table-operate .icon-settings[data-v-6ec16483]{font-size:16px}.dm-table-operate .operate-btn[data-v-6ec16483]{width:28px;height:28px;border-radius:4px;display:flex;justify-content:center;align-items:center;color:var(--el-text-color-secondary)}.dm-table-operate .operate-btn[data-v-6ec16483]:hover{background:var(--el-border-color-light)}.dm-table-operate[data-v-6ec16483] .el-drawer__header{margin-bottom:42px}.switch-own[data-v-6ec16483]{width:34px;height:20px}.operate-header[data-v-6ec16483]{font-style:normal;font-size:18px;font-weight:400;color:var(--el-text-color-primary);line-height:26px}.setting-height-box[data-v-6ec16483]{margin-top:-20px}.setting-height-box .setting-title[data-v-6ec16483]{display:inline-block;font-weight:500;font-size:14px;color:var(--el-text-color-primary);letter-spacing:-.01px;font-style:normal;height:22px;line-height:22px}.setting-height-box .height-option-box[data-v-6ec16483]{margin-top:8px;display:flex;flex-direction:row;justify-content:space-between;height:42px}.setting-height-box .height-option-box .height-option[data-v-6ec16483]{border:1px solid transparent;border-radius:4px;cursor:pointer;line-height:normal}.setting-height-box .height-option-box .height-option img[data-v-6ec16483]{display:inline-block;width:72px;height:40px}.setting-height-box .height-option-box .height-option img.light[data-v-6ec16483]{display:inline-block}.setting-height-box .height-option-box .height-option img.dark[data-v-6ec16483]{display:none}.setting-height-box .height-option-box .height-option[data-v-6ec16483]{margin-left:0;margin-right:0}.setting-height-box .height-option-box .height-option.active[data-v-6ec16483]{box-shadow:none}.setting-height-box .height-option-box .height-option[data-v-6ec16483]:hover{border:1px solid var(--el-color-primary)!important}.setting-header-box[data-v-6ec16483]{margin-top:32px}.setting-header-box .setting-header[data-v-6ec16483]{display:flex;justify-content:space-between;height:22px}.setting-header-box .setting-header .el-button[data-v-6ec16483]{font-style:normal;font-weight:400;font-size:14px;line-height:22px;letter-spacing:-.01px;color:var(--el-color-primary);padding-top:0}.setting-header-box .no-sort-line[data-v-6ec16483]{width:280px;height:20px;margin:17px auto;font-size:12px;color:var(--el-text-color-secondary)}.setting-header-box .unsortable-options-box[data-v-6ec16483]{margin-top:17px}.setting-header-box .unsortable-options-box .item-single[data-v-6ec16483]{display:flex;justify-content:space-between;height:22px;line-height:22px}.setting-header-box .unsortable-options-box .item-single .item-label[data-v-6ec16483]{font-style:normal;font-weight:400;font-size:14px;letter-spacing:-.01px;color:var(--el-text-color-regular);height:22px;line-height:22px}.setting-header-box .unsortable-options-box .item-single .item-select[data-v-6ec16483]{position:relative}.setting-header-box .unsortable-options-box .item-single .item-select .switch-own[data-v-6ec16483]{position:absolute;top:3px;right:0px}.item-single[data-v-6ec16483]{display:flex;justify-content:space-between;height:22px;line-height:22px}.item-single .item-label[data-v-6ec16483]{font-style:normal;font-weight:400;font-size:14px;letter-spacing:-.01px;color:var(--el-text-color-secondary);position:relative}.item-single .item-label i.icon-tuozhuaipaixu[data-v-6ec16483]{position:absolute;font-size:12px;color:var(--el-text-color-placeholder);left:-14px;top:0px}.item-single+.item-single[data-v-6ec16483]{margin-top:18px}.item-drag[data-v-6ec16483]{cursor:move}.unsortable-tip[data-v-6ec16483]{font-style:normal;font-weight:400;font-size:12px;color:var(--el-border-color-base)}.active[data-v-6ec16483]{position:relative;margin:0 auto;text-align:center;line-height:52px;color:var(--el-color-primary);box-shadow:0 2px 7px #556e6159;border-radius:7px;border:1px solid var(--el-color-primary)!important;z-index:299}.active[data-v-6ec16483]:before{content:"";position:absolute;right:-1px;top:-1px;border:9px solid var(--el-color-primary-light-6);border-radius:0 4px;z-index:399}.active[data-v-6ec16483]:after{content:"";background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAA3SURBVHgB1Y7LDQAwCEIdyZG6cUfoKFTvxM9NSQgHHgki+wRAzbcDP09WaAlmZQiT0Unh0o25+qDKUdGDEmtqAAAAAElFTkSuQmCC) center center no-repeat;background-size:100% 100%;width:12px;height:12px;position:absolute;right:2px;top:2px;z-index:499}i.el-icon.setting-icon[data-v-6ec16483]{width:28px;height:28px}.dm-table-operate[data-table-size=small][data-v-6ec16483]{width:32px;height:32px}.dm-table-operate[data-table-size=default][data-v-6ec16483]{width:40px;height:39px}.dm-table-operate[data-table-size=large][data-v-6ec16483]{width:48px;height:47px}.dark .setting-height-box .height-option img.dark[data-v-6ec16483]{display:inline-block}.dark .setting-height-box .height-option img.light[data-v-6ec16483]{display:none}\n')();
const _withScopeId$1 = (n) => (pushScopeId("data-v-6ec16483"), n = n(), popScopeId(), n);
const _hoisted_1$7 = ["data-table-size"];
const _hoisted_2$5 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createElementVNode("i", { class: "yun-iconfont icon-settings" }, null, -1));
const _hoisted_3$2 = [
  _hoisted_2$5
];
const _hoisted_4$2 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createElementVNode("span", { class: "operate-header" }, " \u8868\u683C\u663E\u793A\u8BBE\u7F6E ", -1));
const _hoisted_5$1 = { class: "setting-height-box" };
const _hoisted_6$1 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createElementVNode("span", { class: "setting-title" }, "\u8868\u683C\u9AD8\u5EA6", -1));
const _hoisted_7$2 = { class: "height-option-box" };
const _hoisted_8$1 = ["onClick"];
const _hoisted_9$1 = {
  key: 0,
  class: "light",
  src: _imports_0
};
const _hoisted_10$1 = {
  key: 1,
  class: "light",
  src: _imports_1
};
const _hoisted_11$1 = {
  key: 2,
  class: "light",
  src: _imports_2
};
const _hoisted_12$1 = {
  key: 3,
  class: "dark",
  src: _imports_3
};
const _hoisted_13$1 = {
  key: 4,
  class: "dark",
  src: _imports_4
};
const _hoisted_14$1 = {
  key: 5,
  class: "dark",
  src: _imports_5
};
const _hoisted_15$1 = { class: "setting-header-box" };
const _hoisted_16 = { class: "setting-header" };
const _hoisted_17 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createElementVNode("span", { class: "setting-title" }, "\u8868\u5934\u8BBE\u7F6E", -1));
const _hoisted_18 = /* @__PURE__ */ createTextVNode(" \u6062\u590D\u9ED8\u8BA4 ");
const _hoisted_19 = { class: "unsortable-options-box" };
const _hoisted_20 = { class: "item-label" };
const _hoisted_21 = { class: "item-select" };
const _hoisted_22 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createElementVNode("span", { class: "no-sort-line" }, "\u4EE5\u4E0A\u5C5E\u6027\u4E0D\u53EF\u6392\u5E8F", -1));
const _hoisted_23 = { class: "sortable-options-box" };
const _hoisted_24 = { class: "item-single item-drag" };
const _hoisted_25 = { class: "item-label" };
const _hoisted_26 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createElementVNode("i", { class: "yun-iconfont icon-tuozhuaipaixu" }, null, -1));
const _hoisted_27 = { class: "item-select" };
const _sfc_main$a = {
  props: {
    showTableSetting: {
      type: Boolean,
      default: false
    },
    columns: {
      type: Array,
      default: () => []
    },
    checkedColumns: {
      type: Array,
      default: () => null
    },
    tableSize: {
      type: String,
      default: "small"
    },
    defaultColumns: {
      type: Array,
      default: () => []
    },
    defaultCheckedColumns: {
      type: Array,
      default: () => []
    },
    defaultSize: {
      type: String,
      default: "small"
    }
  },
  emits: ["submit", "update:tableSize"],
  setup(__props, { emit }) {
    const props = __props;
    const drawer = ref(false);
    const direction = ref("rtl");
    const { columns, checkedColumns, tableSize, defaultColumns, defaultSize, defaultCheckedColumns } = toRefs(props);
    const sizeObj = {
      small: 0,
      default: 1,
      large: 2
    };
    const sizeArr = ["small", "default", "large"];
    const activeIndex = ref(0);
    const columnTypes = ["index", "selection"];
    const checkedList = ref([]);
    const sortableList = ref([]);
    const unsortableList = ref([]);
    watchEffect(() => {
      activeIndex.value = sizeObj[tableSize.value];
      checkedList.value = checkedColumns.value.length >= 0 ? [...checkedColumns.value] : getColumnsProp(columns.value);
      sortableList.value = getSortColumns(columns.value);
      unsortableList.value = getUnSortColumns(columns.value);
    });
    const submitColumns = () => {
      const allList = [...unsortableList.value, ...sortableList.value];
      const sortkeyList = sortableList.value.map((i) => i.prop);
      if (unsortableList.value.length > 0) {
        const mapObj = {};
        const unsortKeys = unsortableList.value.map((i) => i.prop);
        columns.value.forEach((item, index) => {
          if (unsortKeys.includes(item.prop)) {
            mapObj[item.prop] = index;
          }
        });
        for (const key in mapObj) {
          if (Object.prototype.hasOwnProperty.call(mapObj, key)) {
            sortkeyList.splice(mapObj[key], 0, key);
          }
        }
      }
      checkedList.value = allList.filter((i) => i.visible === true).map((i) => {
        return i.prop;
      });
      emit("submit", checkedList.value, sortkeyList, sizeArr[activeIndex.value]);
    };
    const resetColumns = () => {
      const columnPropsArr = defaultColumns.value.filter((i) => !columnTypes.includes(i.type));
      checkedList.value = defaultCheckedColumns.value.length > 0 ? defaultCheckedColumns.value : columnPropsArr.filter((i) => i.visible !== false).map((item) => item.prop);
      const allkeyList = getColumnsProp(columnPropsArr);
      sortableList.value = getSortColumns(columnPropsArr);
      unsortableList.value = getUnSortColumns(columnPropsArr);
      emit("submit", checkedList.value, allkeyList, defaultSize.value);
    };
    const handleActive = (index) => {
      activeIndex.value = index;
      emit("update:tableSize", sizeArr[index]);
    };
    function getSortColumns(columns2) {
      return columns2.map((item) => {
        return __spreadProps(__spreadValues({
          dragSort: true
        }, item), {
          visible: checkedList.value.includes(item.prop)
        });
      }).filter((i) => i.dragSort === true && !columnTypes.includes(i.type));
    }
    function getUnSortColumns(columns2) {
      return columns2.map((item) => {
        return __spreadProps(__spreadValues({
          dragSort: true
        }, item), {
          visible: checkedList.value.includes(item.prop)
        });
      }).filter((i) => {
        return i.dragSort === false && !columnTypes.includes(i.type);
      });
    }
    function getColumnsProp(columns2) {
      return columns2.map((item) => item.prop);
    }
    const handleClose = (done) => {
      const isServerCacheOn = getConfig("table").serverCacheOn;
      if (isServerCacheOn) {
        const STORAGE_KEY_SUFFIX = getConfig("table").storageKey;
        const axiosInstance = getConfig("table").axiosInstance;
        const userId = getConfig("table").userId;
        const systemCode = getConfig("table").systemCode;
        const columnSet = storage.getItem(STORAGE_KEY_SUFFIX);
        if (!axiosInstance || !userId || !systemCode) {
          throw new ReferenceError(`serverCacheOn: Prop userId/systemCode/axiosInstance does not exist`);
        }
        const params = {
          userId,
          systemCode,
          bizKey: STORAGE_KEY_SUFFIX,
          queryConfig: columnSet
        };
        try {
          updateTableConfig(axiosInstance, params);
        } catch (err) {
          console.log("err", err);
        }
      }
      done();
    };
    return (_ctx, _cache) => {
      const _component_el_button = resolveComponent("el-button");
      const _component_el_switch = resolveComponent("el-switch");
      const _component_el_divider = resolveComponent("el-divider");
      const _component_el_drawer = resolveComponent("el-drawer");
      return __props.showTableSetting ? (openBlock(), createElementBlock("div", {
        key: 0,
        class: "dm-table-operate",
        "data-table-size": sizeArr[activeIndex.value],
        onClick: _cache[3] || (_cache[3] = ($event) => drawer.value = true)
      }, [
        createElementVNode("div", {
          class: "operate-btn",
          onClick: _cache[0] || (_cache[0] = ($event) => drawer.value = true)
        }, _hoisted_3$2),
        (openBlock(), createBlock(Teleport, { to: "body" }, [
          createVNode(_component_el_drawer, {
            modelValue: drawer.value,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => drawer.value = $event),
            direction: direction.value,
            size: "320px",
            "before-close": handleClose
          }, {
            title: withCtx(() => [
              _hoisted_4$2
            ]),
            default: withCtx(() => [
              createElementVNode("div", _hoisted_5$1, [
                _hoisted_6$1,
                createElementVNode("div", _hoisted_7$2, [
                  (openBlock(), createElementBlock(Fragment, null, renderList(["small", "default", "large"], (i, index) => {
                    return createElementVNode("div", {
                      key: index,
                      class: normalizeClass({ "height-option": true, active: activeIndex.value === index }),
                      onClick: ($event) => handleActive(index)
                    }, [
                      i === "small" ? (openBlock(), createElementBlock("img", _hoisted_9$1)) : createCommentVNode("", true),
                      i === "default" ? (openBlock(), createElementBlock("img", _hoisted_10$1)) : createCommentVNode("", true),
                      i === "large" ? (openBlock(), createElementBlock("img", _hoisted_11$1)) : createCommentVNode("", true),
                      i === "small" ? (openBlock(), createElementBlock("img", _hoisted_12$1)) : createCommentVNode("", true),
                      i === "default" ? (openBlock(), createElementBlock("img", _hoisted_13$1)) : createCommentVNode("", true),
                      i === "large" ? (openBlock(), createElementBlock("img", _hoisted_14$1)) : createCommentVNode("", true)
                    ], 10, _hoisted_8$1);
                  }), 64))
                ]),
                createElementVNode("div", _hoisted_15$1, [
                  createElementVNode("div", _hoisted_16, [
                    _hoisted_17,
                    createVNode(_component_el_button, {
                      type: "text",
                      onClick: resetColumns
                    }, {
                      default: withCtx(() => [
                        _hoisted_18
                      ]),
                      _: 1
                    })
                  ]),
                  createElementVNode("div", _hoisted_19, [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(unsortableList.value, (item) => {
                      return openBlock(), createElementBlock("div", {
                        key: item.prop,
                        class: "item-single"
                      }, [
                        createElementVNode("span", _hoisted_20, toDisplayString(item.label), 1),
                        createElementVNode("span", _hoisted_21, [
                          createVNode(_component_el_switch, {
                            modelValue: item.visible,
                            "onUpdate:modelValue": ($event) => item.visible = $event,
                            class: "switch-own",
                            width: 34,
                            disabled: item == null ? void 0 : item.disabledShow,
                            onChange: submitColumns
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])
                        ])
                      ]);
                    }), 128))
                  ]),
                  unsortableList.value.length > 0 ? (openBlock(), createBlock(_component_el_divider, { key: 0 }, {
                    default: withCtx(() => [
                      _hoisted_22
                    ]),
                    _: 1
                  })) : createCommentVNode("", true),
                  createElementVNode("div", _hoisted_23, [
                    createVNode(unref(draggable), {
                      modelValue: sortableList.value,
                      "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => sortableList.value = $event),
                      "item-key": "label",
                      "chosen-class": "chosen",
                      "force-fallback": "true",
                      animation: "300",
                      onChange: submitColumns
                    }, {
                      item: withCtx(({ element }) => [
                        createElementVNode("div", _hoisted_24, [
                          createElementVNode("span", _hoisted_25, [
                            _hoisted_26,
                            createTextVNode(toDisplayString(element.label), 1)
                          ]),
                          createElementVNode("span", _hoisted_27, [
                            createVNode(_component_el_switch, {
                              modelValue: element.visible,
                              "onUpdate:modelValue": ($event) => element.visible = $event,
                              class: "switch-own",
                              width: 34,
                              disabled: element == null ? void 0 : element.disabledShow,
                              onChange: submitColumns
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])
                          ])
                        ])
                      ]),
                      _: 1
                    }, 8, ["modelValue"])
                  ])
                ])
              ])
            ]),
            _: 1
          }, 8, ["modelValue", "direction"])
        ]))
      ], 8, _hoisted_1$7)) : createCommentVNode("", true);
    };
  }
};
var TableOperate = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["__scopeId", "data-v-6ec16483"]]);
const exportFucName = [
  "clearSelection",
  "getSelectionRows",
  "toggleRowSelection",
  "toggleAllSelection",
  "toggleRowExpansion",
  "setCurrentRow",
  "clearSort",
  "clearFilter",
  "doLayout",
  "sort",
  "scrollTo",
  "setScrollTop",
  "setScrollLeft"
];
var useExport = (table, props, section) => {
  const functions = exportFucName.reduce((result, funcName) => {
    result[funcName] = (...rest) => {
      var _a2;
      return (_a2 = table.value[funcName]) == null ? void 0 : _a2.apply(table.value, rest);
    };
    return result;
  }, {});
  return functions;
};
var useTableHeightResize = (props) => {
  const tableHeight = ref(350);
  const state = reactive({
    containerRef: null,
    headerRef: null,
    filterRef: null,
    footerRef: null
  });
  const updateTableHeight = () => {
    var _a2, _b2, _c;
    const layoutMainHeight = state.containerRef.offsetHeight;
    const dmTableHeader = ((_a2 = state.containerRef.querySelector(".dm-table-header")) == null ? void 0 : _a2.offsetHeight) || 0;
    const dmTableFilter = ((_b2 = state.containerRef.querySelector(".filter-manage-box")) == null ? void 0 : _b2.offsetHeight) || 0;
    const dmTableFooter = ((_c = state.containerRef.querySelector(".dm-table__footer")) == null ? void 0 : _c.offsetHeight) || 0;
    const resNum = layoutMainHeight - dmTableHeader - dmTableFilter - dmTableFooter - 10;
    if (tableHeight.value !== resNum) {
      tableHeight.value = resNum > 200 ? resNum : 200;
    }
  };
  const debounced = debounce$1(updateTableHeight, 500, {
    leading: false,
    trailing: true
  });
  let robserverOld;
  const createObserveElement = (key) => () => {
    const robserver = new ResizeObserver((entries) => {
      window.requestAnimationFrame(() => {
        if (!Array.isArray(entries) || !entries.length) {
          return;
        }
        entries.forEach((item) => {
          if (item.target === state[key]) {
            debounced();
          }
        });
      });
    });
    robserverOld = robserver;
    if (state[key]) {
      robserver.observe(state[key]);
    }
  };
  if (props.autoHeight) {
    const containerObserveElement = createObserveElement("containerRef");
    const headerObserveElement = createObserveElement("headerRef");
    const filterObserveElement = createObserveElement("filterRef");
    const footerObserveElement = createObserveElement("footerRef");
    onMounted(async () => {
      nextTick(() => {
        containerObserveElement();
        headerObserveElement();
        filterObserveElement();
        footerObserveElement();
      });
      window.addEventListener("resize", containerObserveElement);
    });
    onUnmounted(() => {
      window.removeEventListener("resize", containerObserveElement);
      if (robserverOld) {
        robserverOld.disconnect();
      }
    });
  }
  return __spreadValues({
    tableHeight
  }, toRefs(state));
};
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
function listCacheClear$1() {
  this.__data__ = [];
  this.size = 0;
}
var _listCacheClear = listCacheClear$1;
function eq$2(value, other) {
  return value === other || value !== value && other !== other;
}
var eq_1 = eq$2;
var eq$1 = eq_1;
function assocIndexOf$4(array, key) {
  var length = array.length;
  while (length--) {
    if (eq$1(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}
var _assocIndexOf = assocIndexOf$4;
var assocIndexOf$3 = _assocIndexOf;
var arrayProto = Array.prototype;
var splice = arrayProto.splice;
function listCacheDelete$1(key) {
  var data = this.__data__, index = assocIndexOf$3(data, key);
  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}
var _listCacheDelete = listCacheDelete$1;
var assocIndexOf$2 = _assocIndexOf;
function listCacheGet$1(key) {
  var data = this.__data__, index = assocIndexOf$2(data, key);
  return index < 0 ? void 0 : data[index][1];
}
var _listCacheGet = listCacheGet$1;
var assocIndexOf$1 = _assocIndexOf;
function listCacheHas$1(key) {
  return assocIndexOf$1(this.__data__, key) > -1;
}
var _listCacheHas = listCacheHas$1;
var assocIndexOf = _assocIndexOf;
function listCacheSet$1(key, value) {
  var data = this.__data__, index = assocIndexOf(data, key);
  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}
var _listCacheSet = listCacheSet$1;
var listCacheClear = _listCacheClear, listCacheDelete = _listCacheDelete, listCacheGet = _listCacheGet, listCacheHas = _listCacheHas, listCacheSet = _listCacheSet;
function ListCache$4(entries) {
  var index = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
ListCache$4.prototype.clear = listCacheClear;
ListCache$4.prototype["delete"] = listCacheDelete;
ListCache$4.prototype.get = listCacheGet;
ListCache$4.prototype.has = listCacheHas;
ListCache$4.prototype.set = listCacheSet;
var _ListCache = ListCache$4;
var ListCache$3 = _ListCache;
function stackClear$1() {
  this.__data__ = new ListCache$3();
  this.size = 0;
}
var _stackClear = stackClear$1;
function stackDelete$1(key) {
  var data = this.__data__, result = data["delete"](key);
  this.size = data.size;
  return result;
}
var _stackDelete = stackDelete$1;
function stackGet$1(key) {
  return this.__data__.get(key);
}
var _stackGet = stackGet$1;
function stackHas$1(key) {
  return this.__data__.has(key);
}
var _stackHas = stackHas$1;
var freeGlobal$1 = typeof commonjsGlobal == "object" && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;
var _freeGlobal = freeGlobal$1;
var freeGlobal = _freeGlobal;
var freeSelf = typeof self == "object" && self && self.Object === Object && self;
var root$8 = freeGlobal || freeSelf || Function("return this")();
var _root = root$8;
var root$7 = _root;
var Symbol$7 = root$7.Symbol;
var _Symbol = Symbol$7;
var Symbol$6 = _Symbol;
var objectProto$c = Object.prototype;
var hasOwnProperty$a = objectProto$c.hasOwnProperty;
var nativeObjectToString$1 = objectProto$c.toString;
var symToStringTag$1 = Symbol$6 ? Symbol$6.toStringTag : void 0;
function getRawTag$1(value) {
  var isOwn = hasOwnProperty$a.call(value, symToStringTag$1), tag = value[symToStringTag$1];
  try {
    value[symToStringTag$1] = void 0;
    var unmasked = true;
  } catch (e) {
  }
  var result = nativeObjectToString$1.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag$1] = tag;
    } else {
      delete value[symToStringTag$1];
    }
  }
  return result;
}
var _getRawTag = getRawTag$1;
var objectProto$b = Object.prototype;
var nativeObjectToString = objectProto$b.toString;
function objectToString$2(value) {
  return nativeObjectToString.call(value);
}
var _objectToString = objectToString$2;
var Symbol$5 = _Symbol, getRawTag = _getRawTag, objectToString$1 = _objectToString;
var nullTag = "[object Null]", undefinedTag = "[object Undefined]";
var symToStringTag = Symbol$5 ? Symbol$5.toStringTag : void 0;
function baseGetTag$4(value) {
  if (value == null) {
    return value === void 0 ? undefinedTag : nullTag;
  }
  return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString$1(value);
}
var _baseGetTag = baseGetTag$4;
function isObject$6(value) {
  var type = typeof value;
  return value != null && (type == "object" || type == "function");
}
var isObject_1 = isObject$6;
var baseGetTag$3 = _baseGetTag, isObject$5 = isObject_1;
var asyncTag = "[object AsyncFunction]", funcTag$2 = "[object Function]", genTag$1 = "[object GeneratorFunction]", proxyTag = "[object Proxy]";
function isFunction$2(value) {
  if (!isObject$5(value)) {
    return false;
  }
  var tag = baseGetTag$3(value);
  return tag == funcTag$2 || tag == genTag$1 || tag == asyncTag || tag == proxyTag;
}
var isFunction_1 = isFunction$2;
var root$6 = _root;
var coreJsData$1 = root$6["__core-js_shared__"];
var _coreJsData = coreJsData$1;
var coreJsData = _coreJsData;
var maskSrcKey = function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
  return uid ? "Symbol(src)_1." + uid : "";
}();
function isMasked$1(func) {
  return !!maskSrcKey && maskSrcKey in func;
}
var _isMasked = isMasked$1;
var funcProto$1 = Function.prototype;
var funcToString$1 = funcProto$1.toString;
function toSource$2(func) {
  if (func != null) {
    try {
      return funcToString$1.call(func);
    } catch (e) {
    }
    try {
      return func + "";
    } catch (e) {
    }
  }
  return "";
}
var _toSource = toSource$2;
var isFunction$1 = isFunction_1, isMasked = _isMasked, isObject$4 = isObject_1, toSource$1 = _toSource;
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
var reIsHostCtor = /^\[object .+?Constructor\]$/;
var funcProto = Function.prototype, objectProto$a = Object.prototype;
var funcToString = funcProto.toString;
var hasOwnProperty$9 = objectProto$a.hasOwnProperty;
var reIsNative = RegExp("^" + funcToString.call(hasOwnProperty$9).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
function baseIsNative$1(value) {
  if (!isObject$4(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction$1(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource$1(value));
}
var _baseIsNative = baseIsNative$1;
function getValue$1(object, key) {
  return object == null ? void 0 : object[key];
}
var _getValue = getValue$1;
var baseIsNative = _baseIsNative, getValue = _getValue;
function getNative$7(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : void 0;
}
var _getNative = getNative$7;
var getNative$6 = _getNative, root$5 = _root;
var Map$4 = getNative$6(root$5, "Map");
var _Map = Map$4;
var getNative$5 = _getNative;
var nativeCreate$4 = getNative$5(Object, "create");
var _nativeCreate = nativeCreate$4;
var nativeCreate$3 = _nativeCreate;
function hashClear$1() {
  this.__data__ = nativeCreate$3 ? nativeCreate$3(null) : {};
  this.size = 0;
}
var _hashClear = hashClear$1;
function hashDelete$1(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}
var _hashDelete = hashDelete$1;
var nativeCreate$2 = _nativeCreate;
var HASH_UNDEFINED$2 = "__lodash_hash_undefined__";
var objectProto$9 = Object.prototype;
var hasOwnProperty$8 = objectProto$9.hasOwnProperty;
function hashGet$1(key) {
  var data = this.__data__;
  if (nativeCreate$2) {
    var result = data[key];
    return result === HASH_UNDEFINED$2 ? void 0 : result;
  }
  return hasOwnProperty$8.call(data, key) ? data[key] : void 0;
}
var _hashGet = hashGet$1;
var nativeCreate$1 = _nativeCreate;
var objectProto$8 = Object.prototype;
var hasOwnProperty$7 = objectProto$8.hasOwnProperty;
function hashHas$1(key) {
  var data = this.__data__;
  return nativeCreate$1 ? data[key] !== void 0 : hasOwnProperty$7.call(data, key);
}
var _hashHas = hashHas$1;
var nativeCreate = _nativeCreate;
var HASH_UNDEFINED$1 = "__lodash_hash_undefined__";
function hashSet$1(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = nativeCreate && value === void 0 ? HASH_UNDEFINED$1 : value;
  return this;
}
var _hashSet = hashSet$1;
var hashClear = _hashClear, hashDelete = _hashDelete, hashGet = _hashGet, hashHas = _hashHas, hashSet = _hashSet;
function Hash$1(entries) {
  var index = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
Hash$1.prototype.clear = hashClear;
Hash$1.prototype["delete"] = hashDelete;
Hash$1.prototype.get = hashGet;
Hash$1.prototype.has = hashHas;
Hash$1.prototype.set = hashSet;
var _Hash = Hash$1;
var Hash = _Hash, ListCache$2 = _ListCache, Map$3 = _Map;
function mapCacheClear$1() {
  this.size = 0;
  this.__data__ = {
    "hash": new Hash(),
    "map": new (Map$3 || ListCache$2)(),
    "string": new Hash()
  };
}
var _mapCacheClear = mapCacheClear$1;
function isKeyable$1(value) {
  var type = typeof value;
  return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
}
var _isKeyable = isKeyable$1;
var isKeyable = _isKeyable;
function getMapData$4(map, key) {
  var data = map.__data__;
  return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
}
var _getMapData = getMapData$4;
var getMapData$3 = _getMapData;
function mapCacheDelete$1(key) {
  var result = getMapData$3(this, key)["delete"](key);
  this.size -= result ? 1 : 0;
  return result;
}
var _mapCacheDelete = mapCacheDelete$1;
var getMapData$2 = _getMapData;
function mapCacheGet$1(key) {
  return getMapData$2(this, key).get(key);
}
var _mapCacheGet = mapCacheGet$1;
var getMapData$1 = _getMapData;
function mapCacheHas$1(key) {
  return getMapData$1(this, key).has(key);
}
var _mapCacheHas = mapCacheHas$1;
var getMapData = _getMapData;
function mapCacheSet$1(key, value) {
  var data = getMapData(this, key), size = data.size;
  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}
var _mapCacheSet = mapCacheSet$1;
var mapCacheClear = _mapCacheClear, mapCacheDelete = _mapCacheDelete, mapCacheGet = _mapCacheGet, mapCacheHas = _mapCacheHas, mapCacheSet = _mapCacheSet;
function MapCache$3(entries) {
  var index = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
MapCache$3.prototype.clear = mapCacheClear;
MapCache$3.prototype["delete"] = mapCacheDelete;
MapCache$3.prototype.get = mapCacheGet;
MapCache$3.prototype.has = mapCacheHas;
MapCache$3.prototype.set = mapCacheSet;
var _MapCache = MapCache$3;
var ListCache$1 = _ListCache, Map$2 = _Map, MapCache$2 = _MapCache;
var LARGE_ARRAY_SIZE$1 = 200;
function stackSet$1(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache$1) {
    var pairs = data.__data__;
    if (!Map$2 || pairs.length < LARGE_ARRAY_SIZE$1 - 1) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache$2(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}
var _stackSet = stackSet$1;
var ListCache = _ListCache, stackClear = _stackClear, stackDelete = _stackDelete, stackGet = _stackGet, stackHas = _stackHas, stackSet = _stackSet;
function Stack$1(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}
Stack$1.prototype.clear = stackClear;
Stack$1.prototype["delete"] = stackDelete;
Stack$1.prototype.get = stackGet;
Stack$1.prototype.has = stackHas;
Stack$1.prototype.set = stackSet;
var _Stack = Stack$1;
function arrayEach$1(array, iteratee) {
  var index = -1, length = array == null ? 0 : array.length;
  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}
var _arrayEach = arrayEach$1;
var getNative$4 = _getNative;
var defineProperty$2 = function() {
  try {
    var func = getNative$4(Object, "defineProperty");
    func({}, "", {});
    return func;
  } catch (e) {
  }
}();
var _defineProperty = defineProperty$2;
var defineProperty$1 = _defineProperty;
function baseAssignValue$2(object, key, value) {
  if (key == "__proto__" && defineProperty$1) {
    defineProperty$1(object, key, {
      "configurable": true,
      "enumerable": true,
      "value": value,
      "writable": true
    });
  } else {
    object[key] = value;
  }
}
var _baseAssignValue = baseAssignValue$2;
var baseAssignValue$1 = _baseAssignValue, eq = eq_1;
var objectProto$7 = Object.prototype;
var hasOwnProperty$6 = objectProto$7.hasOwnProperty;
function assignValue$2(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty$6.call(object, key) && eq(objValue, value)) || value === void 0 && !(key in object)) {
    baseAssignValue$1(object, key, value);
  }
}
var _assignValue = assignValue$2;
var assignValue$1 = _assignValue, baseAssignValue = _baseAssignValue;
function copyObject$4(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});
  var index = -1, length = props.length;
  while (++index < length) {
    var key = props[index];
    var newValue = customizer ? customizer(object[key], source[key], key, object, source) : void 0;
    if (newValue === void 0) {
      newValue = source[key];
    }
    if (isNew) {
      baseAssignValue(object, key, newValue);
    } else {
      assignValue$1(object, key, newValue);
    }
  }
  return object;
}
var _copyObject = copyObject$4;
function baseTimes$1(n, iteratee) {
  var index = -1, result = Array(n);
  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}
var _baseTimes = baseTimes$1;
function isObjectLike$6(value) {
  return value != null && typeof value == "object";
}
var isObjectLike_1 = isObjectLike$6;
var baseGetTag$2 = _baseGetTag, isObjectLike$5 = isObjectLike_1;
var argsTag$2 = "[object Arguments]";
function baseIsArguments$1(value) {
  return isObjectLike$5(value) && baseGetTag$2(value) == argsTag$2;
}
var _baseIsArguments = baseIsArguments$1;
var baseIsArguments = _baseIsArguments, isObjectLike$4 = isObjectLike_1;
var objectProto$6 = Object.prototype;
var hasOwnProperty$5 = objectProto$6.hasOwnProperty;
var propertyIsEnumerable$1 = objectProto$6.propertyIsEnumerable;
var isArguments$2 = baseIsArguments(function() {
  return arguments;
}()) ? baseIsArguments : function(value) {
  return isObjectLike$4(value) && hasOwnProperty$5.call(value, "callee") && !propertyIsEnumerable$1.call(value, "callee");
};
var isArguments_1 = isArguments$2;
var isArray$5 = Array.isArray;
var isArray_1 = isArray$5;
var isBuffer$2 = { exports: {} };
function stubFalse() {
  return false;
}
var stubFalse_1 = stubFalse;
(function(module, exports) {
  var root2 = _root, stubFalse2 = stubFalse_1;
  var freeExports = exports && !exports.nodeType && exports;
  var freeModule = freeExports && true && module && !module.nodeType && module;
  var moduleExports = freeModule && freeModule.exports === freeExports;
  var Buffer2 = moduleExports ? root2.Buffer : void 0;
  var nativeIsBuffer = Buffer2 ? Buffer2.isBuffer : void 0;
  var isBuffer2 = nativeIsBuffer || stubFalse2;
  module.exports = isBuffer2;
})(isBuffer$2, isBuffer$2.exports);
var MAX_SAFE_INTEGER$1 = 9007199254740991;
var reIsUint = /^(?:0|[1-9]\d*)$/;
function isIndex$1(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER$1 : length;
  return !!length && (type == "number" || type != "symbol" && reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
}
var _isIndex = isIndex$1;
var MAX_SAFE_INTEGER = 9007199254740991;
function isLength$2(value) {
  return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}
var isLength_1 = isLength$2;
var baseGetTag$1 = _baseGetTag, isLength$1 = isLength_1, isObjectLike$3 = isObjectLike_1;
var argsTag$1 = "[object Arguments]", arrayTag$1 = "[object Array]", boolTag$2 = "[object Boolean]", dateTag$2 = "[object Date]", errorTag$1 = "[object Error]", funcTag$1 = "[object Function]", mapTag$4 = "[object Map]", numberTag$2 = "[object Number]", objectTag$2 = "[object Object]", regexpTag$2 = "[object RegExp]", setTag$4 = "[object Set]", stringTag$2 = "[object String]", weakMapTag$2 = "[object WeakMap]";
var arrayBufferTag$2 = "[object ArrayBuffer]", dataViewTag$3 = "[object DataView]", float32Tag$2 = "[object Float32Array]", float64Tag$2 = "[object Float64Array]", int8Tag$2 = "[object Int8Array]", int16Tag$2 = "[object Int16Array]", int32Tag$2 = "[object Int32Array]", uint8Tag$2 = "[object Uint8Array]", uint8ClampedTag$2 = "[object Uint8ClampedArray]", uint16Tag$2 = "[object Uint16Array]", uint32Tag$2 = "[object Uint32Array]";
var typedArrayTags = {};
typedArrayTags[float32Tag$2] = typedArrayTags[float64Tag$2] = typedArrayTags[int8Tag$2] = typedArrayTags[int16Tag$2] = typedArrayTags[int32Tag$2] = typedArrayTags[uint8Tag$2] = typedArrayTags[uint8ClampedTag$2] = typedArrayTags[uint16Tag$2] = typedArrayTags[uint32Tag$2] = true;
typedArrayTags[argsTag$1] = typedArrayTags[arrayTag$1] = typedArrayTags[arrayBufferTag$2] = typedArrayTags[boolTag$2] = typedArrayTags[dataViewTag$3] = typedArrayTags[dateTag$2] = typedArrayTags[errorTag$1] = typedArrayTags[funcTag$1] = typedArrayTags[mapTag$4] = typedArrayTags[numberTag$2] = typedArrayTags[objectTag$2] = typedArrayTags[regexpTag$2] = typedArrayTags[setTag$4] = typedArrayTags[stringTag$2] = typedArrayTags[weakMapTag$2] = false;
function baseIsTypedArray$1(value) {
  return isObjectLike$3(value) && isLength$1(value.length) && !!typedArrayTags[baseGetTag$1(value)];
}
var _baseIsTypedArray = baseIsTypedArray$1;
function baseUnary$4(func) {
  return function(value) {
    return func(value);
  };
}
var _baseUnary = baseUnary$4;
var _nodeUtil = { exports: {} };
(function(module, exports) {
  var freeGlobal2 = _freeGlobal;
  var freeExports = exports && !exports.nodeType && exports;
  var freeModule = freeExports && true && module && !module.nodeType && module;
  var moduleExports = freeModule && freeModule.exports === freeExports;
  var freeProcess = moduleExports && freeGlobal2.process;
  var nodeUtil2 = function() {
    try {
      var types = freeModule && freeModule.require && freeModule.require("util").types;
      if (types) {
        return types;
      }
      return freeProcess && freeProcess.binding && freeProcess.binding("util");
    } catch (e) {
    }
  }();
  module.exports = nodeUtil2;
})(_nodeUtil, _nodeUtil.exports);
var baseIsTypedArray = _baseIsTypedArray, baseUnary$3 = _baseUnary, nodeUtil$2 = _nodeUtil.exports;
var nodeIsTypedArray = nodeUtil$2 && nodeUtil$2.isTypedArray;
var isTypedArray$1 = nodeIsTypedArray ? baseUnary$3(nodeIsTypedArray) : baseIsTypedArray;
var isTypedArray_1 = isTypedArray$1;
var baseTimes = _baseTimes, isArguments$1 = isArguments_1, isArray$4 = isArray_1, isBuffer$1 = isBuffer$2.exports, isIndex = _isIndex, isTypedArray = isTypedArray_1;
var objectProto$5 = Object.prototype;
var hasOwnProperty$4 = objectProto$5.hasOwnProperty;
function arrayLikeKeys$2(value, inherited) {
  var isArr = isArray$4(value), isArg = !isArr && isArguments$1(value), isBuff = !isArr && !isArg && isBuffer$1(value), isType = !isArr && !isArg && !isBuff && isTypedArray(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes(value.length, String) : [], length = result.length;
  for (var key in value) {
    if ((inherited || hasOwnProperty$4.call(value, key)) && !(skipIndexes && (key == "length" || isBuff && (key == "offset" || key == "parent") || isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || isIndex(key, length)))) {
      result.push(key);
    }
  }
  return result;
}
var _arrayLikeKeys = arrayLikeKeys$2;
var objectProto$4 = Object.prototype;
function isPrototype$3(value) {
  var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto$4;
  return value === proto;
}
var _isPrototype = isPrototype$3;
function overArg$2(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}
var _overArg = overArg$2;
var overArg$1 = _overArg;
var nativeKeys$1 = overArg$1(Object.keys, Object);
var _nativeKeys = nativeKeys$1;
var isPrototype$2 = _isPrototype, nativeKeys = _nativeKeys;
var objectProto$3 = Object.prototype;
var hasOwnProperty$3 = objectProto$3.hasOwnProperty;
function baseKeys$1(object) {
  if (!isPrototype$2(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty$3.call(object, key) && key != "constructor") {
      result.push(key);
    }
  }
  return result;
}
var _baseKeys = baseKeys$1;
var isFunction = isFunction_1, isLength = isLength_1;
function isArrayLike$3(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}
var isArrayLike_1 = isArrayLike$3;
var arrayLikeKeys$1 = _arrayLikeKeys, baseKeys = _baseKeys, isArrayLike$2 = isArrayLike_1;
function keys$3(object) {
  return isArrayLike$2(object) ? arrayLikeKeys$1(object) : baseKeys(object);
}
var keys_1 = keys$3;
var copyObject$3 = _copyObject, keys$2 = keys_1;
function baseAssign$1(object, source) {
  return object && copyObject$3(source, keys$2(source), object);
}
var _baseAssign = baseAssign$1;
function nativeKeysIn$1(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}
var _nativeKeysIn = nativeKeysIn$1;
var isObject$3 = isObject_1, isPrototype$1 = _isPrototype, nativeKeysIn = _nativeKeysIn;
var objectProto$2 = Object.prototype;
var hasOwnProperty$2 = objectProto$2.hasOwnProperty;
function baseKeysIn$1(object) {
  if (!isObject$3(object)) {
    return nativeKeysIn(object);
  }
  var isProto = isPrototype$1(object), result = [];
  for (var key in object) {
    if (!(key == "constructor" && (isProto || !hasOwnProperty$2.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}
var _baseKeysIn = baseKeysIn$1;
var arrayLikeKeys = _arrayLikeKeys, baseKeysIn = _baseKeysIn, isArrayLike$1 = isArrayLike_1;
function keysIn$3(object) {
  return isArrayLike$1(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}
var keysIn_1 = keysIn$3;
var copyObject$2 = _copyObject, keysIn$2 = keysIn_1;
function baseAssignIn$1(object, source) {
  return object && copyObject$2(source, keysIn$2(source), object);
}
var _baseAssignIn = baseAssignIn$1;
var _cloneBuffer = { exports: {} };
(function(module, exports) {
  var root2 = _root;
  var freeExports = exports && !exports.nodeType && exports;
  var freeModule = freeExports && true && module && !module.nodeType && module;
  var moduleExports = freeModule && freeModule.exports === freeExports;
  var Buffer2 = moduleExports ? root2.Buffer : void 0, allocUnsafe = Buffer2 ? Buffer2.allocUnsafe : void 0;
  function cloneBuffer2(buffer, isDeep) {
    if (isDeep) {
      return buffer.slice();
    }
    var length = buffer.length, result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
    buffer.copy(result);
    return result;
  }
  module.exports = cloneBuffer2;
})(_cloneBuffer, _cloneBuffer.exports);
function copyArray$1(source, array) {
  var index = -1, length = source.length;
  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}
var _copyArray = copyArray$1;
function arrayFilter$1(array, predicate) {
  var index = -1, length = array == null ? 0 : array.length, resIndex = 0, result = [];
  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}
var _arrayFilter = arrayFilter$1;
function stubArray$2() {
  return [];
}
var stubArray_1 = stubArray$2;
var arrayFilter = _arrayFilter, stubArray$1 = stubArray_1;
var objectProto$1 = Object.prototype;
var propertyIsEnumerable = objectProto$1.propertyIsEnumerable;
var nativeGetSymbols$1 = Object.getOwnPropertySymbols;
var getSymbols$3 = !nativeGetSymbols$1 ? stubArray$1 : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter(nativeGetSymbols$1(object), function(symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};
var _getSymbols = getSymbols$3;
var copyObject$1 = _copyObject, getSymbols$2 = _getSymbols;
function copySymbols$1(source, object) {
  return copyObject$1(source, getSymbols$2(source), object);
}
var _copySymbols = copySymbols$1;
function arrayPush$3(array, values) {
  var index = -1, length = values.length, offset2 = array.length;
  while (++index < length) {
    array[offset2 + index] = values[index];
  }
  return array;
}
var _arrayPush = arrayPush$3;
var overArg = _overArg;
var getPrototype$2 = overArg(Object.getPrototypeOf, Object);
var _getPrototype = getPrototype$2;
var arrayPush$2 = _arrayPush, getPrototype$1 = _getPrototype, getSymbols$1 = _getSymbols, stubArray = stubArray_1;
var nativeGetSymbols = Object.getOwnPropertySymbols;
var getSymbolsIn$2 = !nativeGetSymbols ? stubArray : function(object) {
  var result = [];
  while (object) {
    arrayPush$2(result, getSymbols$1(object));
    object = getPrototype$1(object);
  }
  return result;
};
var _getSymbolsIn = getSymbolsIn$2;
var copyObject = _copyObject, getSymbolsIn$1 = _getSymbolsIn;
function copySymbolsIn$1(source, object) {
  return copyObject(source, getSymbolsIn$1(source), object);
}
var _copySymbolsIn = copySymbolsIn$1;
var arrayPush$1 = _arrayPush, isArray$3 = isArray_1;
function baseGetAllKeys$2(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray$3(object) ? result : arrayPush$1(result, symbolsFunc(object));
}
var _baseGetAllKeys = baseGetAllKeys$2;
var baseGetAllKeys$1 = _baseGetAllKeys, getSymbols = _getSymbols, keys$1 = keys_1;
function getAllKeys$1(object) {
  return baseGetAllKeys$1(object, keys$1, getSymbols);
}
var _getAllKeys = getAllKeys$1;
var baseGetAllKeys = _baseGetAllKeys, getSymbolsIn = _getSymbolsIn, keysIn$1 = keysIn_1;
function getAllKeysIn$1(object) {
  return baseGetAllKeys(object, keysIn$1, getSymbolsIn);
}
var _getAllKeysIn = getAllKeysIn$1;
var getNative$3 = _getNative, root$4 = _root;
var DataView$1 = getNative$3(root$4, "DataView");
var _DataView = DataView$1;
var getNative$2 = _getNative, root$3 = _root;
var Promise$2 = getNative$2(root$3, "Promise");
var _Promise = Promise$2;
var getNative$1 = _getNative, root$2 = _root;
var Set$2 = getNative$1(root$2, "Set");
var _Set = Set$2;
var getNative = _getNative, root$1 = _root;
var WeakMap$1 = getNative(root$1, "WeakMap");
var _WeakMap = WeakMap$1;
var DataView = _DataView, Map$1 = _Map, Promise$1 = _Promise, Set$1 = _Set, WeakMap = _WeakMap, baseGetTag = _baseGetTag, toSource = _toSource;
var mapTag$3 = "[object Map]", objectTag$1 = "[object Object]", promiseTag = "[object Promise]", setTag$3 = "[object Set]", weakMapTag$1 = "[object WeakMap]";
var dataViewTag$2 = "[object DataView]";
var dataViewCtorString = toSource(DataView), mapCtorString = toSource(Map$1), promiseCtorString = toSource(Promise$1), setCtorString = toSource(Set$1), weakMapCtorString = toSource(WeakMap);
var getTag$3 = baseGetTag;
if (DataView && getTag$3(new DataView(new ArrayBuffer(1))) != dataViewTag$2 || Map$1 && getTag$3(new Map$1()) != mapTag$3 || Promise$1 && getTag$3(Promise$1.resolve()) != promiseTag || Set$1 && getTag$3(new Set$1()) != setTag$3 || WeakMap && getTag$3(new WeakMap()) != weakMapTag$1) {
  getTag$3 = function(value) {
    var result = baseGetTag(value), Ctor = result == objectTag$1 ? value.constructor : void 0, ctorString = Ctor ? toSource(Ctor) : "";
    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString:
          return dataViewTag$2;
        case mapCtorString:
          return mapTag$3;
        case promiseCtorString:
          return promiseTag;
        case setCtorString:
          return setTag$3;
        case weakMapCtorString:
          return weakMapTag$1;
      }
    }
    return result;
  };
}
var _getTag = getTag$3;
var objectProto = Object.prototype;
var hasOwnProperty$1 = objectProto.hasOwnProperty;
function initCloneArray$1(array) {
  var length = array.length, result = new array.constructor(length);
  if (length && typeof array[0] == "string" && hasOwnProperty$1.call(array, "index")) {
    result.index = array.index;
    result.input = array.input;
  }
  return result;
}
var _initCloneArray = initCloneArray$1;
var root = _root;
var Uint8Array$1 = root.Uint8Array;
var _Uint8Array = Uint8Array$1;
var Uint8Array2 = _Uint8Array;
function cloneArrayBuffer$3(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array2(result).set(new Uint8Array2(arrayBuffer));
  return result;
}
var _cloneArrayBuffer = cloneArrayBuffer$3;
var cloneArrayBuffer$2 = _cloneArrayBuffer;
function cloneDataView$1(dataView, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer$2(dataView.buffer) : dataView.buffer;
  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}
var _cloneDataView = cloneDataView$1;
var reFlags = /\w*$/;
function cloneRegExp$1(regexp) {
  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
  result.lastIndex = regexp.lastIndex;
  return result;
}
var _cloneRegExp = cloneRegExp$1;
var Symbol$4 = _Symbol;
var symbolProto$2 = Symbol$4 ? Symbol$4.prototype : void 0, symbolValueOf = symbolProto$2 ? symbolProto$2.valueOf : void 0;
function cloneSymbol$1(symbol) {
  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
}
var _cloneSymbol = cloneSymbol$1;
var cloneArrayBuffer$1 = _cloneArrayBuffer;
function cloneTypedArray$1(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer$1(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}
var _cloneTypedArray = cloneTypedArray$1;
var cloneArrayBuffer = _cloneArrayBuffer, cloneDataView = _cloneDataView, cloneRegExp = _cloneRegExp, cloneSymbol = _cloneSymbol, cloneTypedArray = _cloneTypedArray;
var boolTag$1 = "[object Boolean]", dateTag$1 = "[object Date]", mapTag$2 = "[object Map]", numberTag$1 = "[object Number]", regexpTag$1 = "[object RegExp]", setTag$2 = "[object Set]", stringTag$1 = "[object String]", symbolTag$1 = "[object Symbol]";
var arrayBufferTag$1 = "[object ArrayBuffer]", dataViewTag$1 = "[object DataView]", float32Tag$1 = "[object Float32Array]", float64Tag$1 = "[object Float64Array]", int8Tag$1 = "[object Int8Array]", int16Tag$1 = "[object Int16Array]", int32Tag$1 = "[object Int32Array]", uint8Tag$1 = "[object Uint8Array]", uint8ClampedTag$1 = "[object Uint8ClampedArray]", uint16Tag$1 = "[object Uint16Array]", uint32Tag$1 = "[object Uint32Array]";
function initCloneByTag$1(object, tag, isDeep) {
  var Ctor = object.constructor;
  switch (tag) {
    case arrayBufferTag$1:
      return cloneArrayBuffer(object);
    case boolTag$1:
    case dateTag$1:
      return new Ctor(+object);
    case dataViewTag$1:
      return cloneDataView(object, isDeep);
    case float32Tag$1:
    case float64Tag$1:
    case int8Tag$1:
    case int16Tag$1:
    case int32Tag$1:
    case uint8Tag$1:
    case uint8ClampedTag$1:
    case uint16Tag$1:
    case uint32Tag$1:
      return cloneTypedArray(object, isDeep);
    case mapTag$2:
      return new Ctor();
    case numberTag$1:
    case stringTag$1:
      return new Ctor(object);
    case regexpTag$1:
      return cloneRegExp(object);
    case setTag$2:
      return new Ctor();
    case symbolTag$1:
      return cloneSymbol(object);
  }
}
var _initCloneByTag = initCloneByTag$1;
var isObject$2 = isObject_1;
var objectCreate = Object.create;
var baseCreate$1 = function() {
  function object() {
  }
  return function(proto) {
    if (!isObject$2(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object.prototype = proto;
    var result = new object();
    object.prototype = void 0;
    return result;
  };
}();
var _baseCreate = baseCreate$1;
var baseCreate = _baseCreate, getPrototype = _getPrototype, isPrototype = _isPrototype;
function initCloneObject$1(object) {
  return typeof object.constructor == "function" && !isPrototype(object) ? baseCreate(getPrototype(object)) : {};
}
var _initCloneObject = initCloneObject$1;
var getTag$2 = _getTag, isObjectLike$2 = isObjectLike_1;
var mapTag$1 = "[object Map]";
function baseIsMap$1(value) {
  return isObjectLike$2(value) && getTag$2(value) == mapTag$1;
}
var _baseIsMap = baseIsMap$1;
var baseIsMap = _baseIsMap, baseUnary$2 = _baseUnary, nodeUtil$1 = _nodeUtil.exports;
var nodeIsMap = nodeUtil$1 && nodeUtil$1.isMap;
var isMap$1 = nodeIsMap ? baseUnary$2(nodeIsMap) : baseIsMap;
var isMap_1 = isMap$1;
var getTag$1 = _getTag, isObjectLike$1 = isObjectLike_1;
var setTag$1 = "[object Set]";
function baseIsSet$1(value) {
  return isObjectLike$1(value) && getTag$1(value) == setTag$1;
}
var _baseIsSet = baseIsSet$1;
var baseIsSet = _baseIsSet, baseUnary$1 = _baseUnary, nodeUtil = _nodeUtil.exports;
var nodeIsSet = nodeUtil && nodeUtil.isSet;
var isSet$1 = nodeIsSet ? baseUnary$1(nodeIsSet) : baseIsSet;
var isSet_1 = isSet$1;
var Stack = _Stack, arrayEach = _arrayEach, assignValue = _assignValue, baseAssign = _baseAssign, baseAssignIn = _baseAssignIn, cloneBuffer = _cloneBuffer.exports, copyArray = _copyArray, copySymbols = _copySymbols, copySymbolsIn = _copySymbolsIn, getAllKeys = _getAllKeys, getAllKeysIn = _getAllKeysIn, getTag = _getTag, initCloneArray = _initCloneArray, initCloneByTag = _initCloneByTag, initCloneObject = _initCloneObject, isArray$2 = isArray_1, isBuffer = isBuffer$2.exports, isMap = isMap_1, isObject$1 = isObject_1, isSet = isSet_1, keys = keys_1, keysIn = keysIn_1;
var CLONE_DEEP_FLAG$1 = 1, CLONE_FLAT_FLAG = 2, CLONE_SYMBOLS_FLAG$1 = 4;
var argsTag = "[object Arguments]", arrayTag = "[object Array]", boolTag = "[object Boolean]", dateTag = "[object Date]", errorTag = "[object Error]", funcTag = "[object Function]", genTag = "[object GeneratorFunction]", mapTag = "[object Map]", numberTag = "[object Number]", objectTag = "[object Object]", regexpTag = "[object RegExp]", setTag = "[object Set]", stringTag = "[object String]", symbolTag = "[object Symbol]", weakMapTag = "[object WeakMap]";
var arrayBufferTag = "[object ArrayBuffer]", dataViewTag = "[object DataView]", float32Tag = "[object Float32Array]", float64Tag = "[object Float64Array]", int8Tag = "[object Int8Array]", int16Tag = "[object Int16Array]", int32Tag = "[object Int32Array]", uint8Tag = "[object Uint8Array]", uint8ClampedTag = "[object Uint8ClampedArray]", uint16Tag = "[object Uint16Array]", uint32Tag = "[object Uint32Array]";
var cloneableTags = {};
cloneableTags[argsTag] = cloneableTags[arrayTag] = cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] = cloneableTags[boolTag] = cloneableTags[dateTag] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[mapTag] = cloneableTags[numberTag] = cloneableTags[objectTag] = cloneableTags[regexpTag] = cloneableTags[setTag] = cloneableTags[stringTag] = cloneableTags[symbolTag] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
cloneableTags[errorTag] = cloneableTags[funcTag] = cloneableTags[weakMapTag] = false;
function baseClone$1(value, bitmask, customizer, key, object, stack) {
  var result, isDeep = bitmask & CLONE_DEEP_FLAG$1, isFlat = bitmask & CLONE_FLAT_FLAG, isFull = bitmask & CLONE_SYMBOLS_FLAG$1;
  if (customizer) {
    result = object ? customizer(value, key, object, stack) : customizer(value);
  }
  if (result !== void 0) {
    return result;
  }
  if (!isObject$1(value)) {
    return value;
  }
  var isArr = isArray$2(value);
  if (isArr) {
    result = initCloneArray(value);
    if (!isDeep) {
      return copyArray(value, result);
    }
  } else {
    var tag = getTag(value), isFunc = tag == funcTag || tag == genTag;
    if (isBuffer(value)) {
      return cloneBuffer(value, isDeep);
    }
    if (tag == objectTag || tag == argsTag || isFunc && !object) {
      result = isFlat || isFunc ? {} : initCloneObject(value);
      if (!isDeep) {
        return isFlat ? copySymbolsIn(value, baseAssignIn(result, value)) : copySymbols(value, baseAssign(result, value));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object ? value : {};
      }
      result = initCloneByTag(value, tag, isDeep);
    }
  }
  stack || (stack = new Stack());
  var stacked = stack.get(value);
  if (stacked) {
    return stacked;
  }
  stack.set(value, result);
  if (isSet(value)) {
    value.forEach(function(subValue) {
      result.add(baseClone$1(subValue, bitmask, customizer, subValue, value, stack));
    });
  } else if (isMap(value)) {
    value.forEach(function(subValue, key2) {
      result.set(key2, baseClone$1(subValue, bitmask, customizer, key2, value, stack));
    });
  }
  var keysFunc = isFull ? isFlat ? getAllKeysIn : getAllKeys : isFlat ? keysIn : keys;
  var props = isArr ? void 0 : keysFunc(value);
  arrayEach(props || value, function(subValue, key2) {
    if (props) {
      key2 = subValue;
      subValue = value[key2];
    }
    assignValue(result, key2, baseClone$1(subValue, bitmask, customizer, key2, value, stack));
  });
  return result;
}
var _baseClone = baseClone$1;
var baseClone = _baseClone;
var CLONE_DEEP_FLAG = 1, CLONE_SYMBOLS_FLAG = 4;
function cloneDeep(value) {
  return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
}
var cloneDeep_1 = cloneDeep;
const DOM_NAME = ["ElDialog", "YunDialog", "YunDrawer", "ElDrawer"];
const isShouldCache = (currentInstance) => {
  if (!currentInstance)
    return true;
  let isFlag = true;
  const getParentClassName = (parentInstance) => {
    if (!parentInstance)
      return;
    const type = parentInstance.type;
    if (!type.name)
      return;
    if (type.name) {
      if (DOM_NAME.includes(type.name)) {
        isFlag = false;
      } else {
        getParentClassName(parentInstance.parent);
      }
    }
  };
  getParentClassName(currentInstance);
  return isFlag;
};
const cacheFilter = (props, filterData, currentInstance, CACHE_NAME2) => {
  if (!isShouldCache(currentInstance))
    return;
  const pathKey = window.location.href;
  const cacheVal = sessionStorage.getItem(CACHE_NAME2) || {};
  if (props.filterCacheName) {
    if (cacheVal[pathKey]) {
      cacheVal[pathKey][props.filterCacheName] = filterData.value;
    } else {
      cacheVal[pathKey] = {};
      cacheVal[pathKey][props.filterCacheName] = filterData.value;
    }
  } else {
    cacheVal[pathKey] = filterData.value;
  }
  sessionStorage.setItem(CACHE_NAME2, cacheVal);
};
const CACHE_NAME$1 = "YUN-TABLE-CACHE";
const backfillFilter = (props, currentInstance) => {
  if (!isShouldCache(currentInstance))
    return;
  const pathKey = window.location.href;
  let cacheFields = {};
  let returnCache = {};
  const cacheVal = sessionStorage.getItem(CACHE_NAME$1);
  if (cacheVal) {
    if (props.filterCacheName && cacheVal[pathKey]) {
      cacheFields = cacheVal[pathKey][props.filterCacheName];
    } else {
      cacheFields = cacheVal[pathKey];
    }
    if (cacheFields && Object.keys(cacheFields).length) {
      returnCache = cacheFields;
    }
  }
  return returnCache;
};
const CACHE_NAME = "YUN-TABLE-CACHE";
const useCacheFilter = (props, filterData, currentInstance) => cacheFilter(props, filterData, currentInstance, CACHE_NAME);
const useBackfillFilter = (props, emit, currentInstance) => {
  const cacheFields = backfillFilter(props, currentInstance);
  if (cacheFields && Object.keys(cacheFields).length) {
    emit("update:modelValue", cacheFields);
  }
};
const SelectComponent = [
  "el-cascader",
  "el-select",
  "el-select-v2",
  "el-date-picker",
  "el-time-picker"
];
function useTableSearch(props, emit) {
  const searchForm = ref([]);
  watch(() => props.modelValue, (value) => {
    searchForm.value = value;
  }, {
    deep: true,
    immediate: true
  });
  const handleSearch = (obj, props2, currentInstance) => {
    if (obj && obj.length > 0) {
      const searchObj = cloneDeep_1(searchForm.value);
      searchForm.value = __spreadValues(__spreadValues({}, searchObj), obj);
    }
    nextTick(() => {
      if (props2.filterCache) {
        useCacheFilter(props2, searchForm, currentInstance);
      }
      emit("search", searchForm.value);
      emit("update:modelValue", searchForm.value);
    });
  };
  const handleCheckBoxSearch = (key, value, options) => {
    const searchObj = cloneDeep_1(searchForm.value);
    delete searchObj[key];
    const optionsKeyValue = [];
    options.forEach((item) => {
      optionsKeyValue.push(item.value);
    });
    if (value) {
      searchForm.value = __spreadValues({}, searchObj);
      searchForm.value[key] = optionsKeyValue;
    } else {
      searchForm.value = __spreadValues({}, searchObj);
      searchForm.value[key] = [];
    }
    nextTick(() => {
      emit("search", searchForm.value);
      emit("update:modelValue", searchForm.value);
    });
  };
  const clearSearch = (key) => {
    if (key) {
      const searchObj = cloneDeep_1(searchForm.value);
      delete searchObj[key];
      searchForm.value = __spreadValues({}, searchObj);
      nextTick(() => {
        emit("search", searchForm.value);
      });
    } else {
      searchForm.value = {};
      nextTick(() => {
        emit("reset", searchForm.value);
      });
    }
    nextTick(() => {
      useCacheFilter(props, searchForm);
      emit("update:modelValue", searchForm.value);
    });
  };
  const getFormFieldProps = (fieldName, props2, label) => {
    const formFieldConfig = getConfig("tableHeader");
    let propsData = __spreadValues({}, props2);
    if (fieldName === "el-date-picker") {
      if ((props2.type === "daterange" || props2.type === "daterange") && !props2.defaultTime) {
        propsData.defaultTime = [
          new Date(2e3, 1, 1, 0, 0, 0),
          new Date(2e3, 2, 1, 23, 59, 59)
        ];
      }
    }
    propsData.placeholder = propsData.placeholder || (SelectComponent.includes(fieldName) ? `\u8BF7\u9009\u62E9${label}` : `\u8BF7\u8F93\u5165${label}`);
    return __spreadValues(__spreadValues({}, formFieldConfig[fieldName]), propsData);
  };
  return {
    searchForm,
    clearSearch,
    handleSearch,
    getFormFieldProps,
    handleCheckBoxSearch
  };
}
function useTableSearchHeader(props, searchForm) {
  const searchData = computed(() => {
    const searchColums = props.columns.filter((item) => !!item.header);
    const searchFormData = cloneDeep$1(searchForm.value);
    const arr = [];
    Object.entries(searchFormData).filter(([key, value]) => {
      if (typeof value === "object") {
        return !isEmpty(value);
      } else if (typeof value === "boolean") {
        return true;
      } else if (typeof value === "number") {
        return true;
      } else {
        return !!value;
      }
    }).forEach(([key, value]) => {
      var _a2, _b2;
      const searchColum = searchColums.find((item) => item.prop === key);
      if (searchColum) {
        const formatter = (obj) => {
          var _a3, _b3, _c;
          if ((_a3 = searchColum.header) == null ? void 0 : _a3.formatter) {
            return (_b3 = searchColum.header) == null ? void 0 : _b3.formatter(obj[key]);
          } else if (searchColum.formatter) {
            return searchColum.formatter(obj);
          } else if (searchColum.header.options) {
            return Array.isArray(obj[key]) ? obj[key].map((item) => {
              var _a4;
              return (_a4 = searchColum.header.options.find((i) => i.value === item)) == null ? void 0 : _a4.label;
            }) : (_c = searchColum.header.options.find((i) => i.value === obj[key])) == null ? void 0 : _c.label;
          } else {
            return obj[key];
          }
        };
        let setValue = null;
        if (value instanceof Array) {
          if (((_b2 = (_a2 = searchColum.header) == null ? void 0 : _a2.componentAttrs) == null ? void 0 : _b2.type) === "daterange") {
            setValue = value.map((val) => formatter({ [key]: val }));
            setValue = searchColum.rangeSeparator ? setValue.join(searchColum.rangeSeparator) : setValue.join(" - ");
          } else {
            setValue = formatter({ [key]: value });
          }
        } else {
          setValue = formatter({ [key]: value });
        }
        arr.push({
          key,
          value: Array.isArray(setValue) ? setValue.join("\u3001") : setValue,
          label: searchColum.label
        });
      }
    });
    return arr;
  });
  return {
    searchData
  };
}
function useColum(props, emit) {
  const { columns, checkedColumns, size } = toRefs(props);
  const checkedList = ref([]);
  const sortList = ref([]);
  const setListColumns = ref([]);
  const tableSize = ref("");
  tableSize.value = size.value;
  watchEffect(() => {
    checkedList.value = checkedColumns.value.length > 0 ? [...checkedColumns.value] : columns.value.map((item) => item.prop);
  });
  const handleSubmit = (columnsProp, sortKeys, size2) => {
    checkedList.value = columnsProp;
    sortList.value = sortKeys;
    tableSize.value = size2;
    emit("columnsChange", columnsProp);
  };
  const columnsformatter = (col) => {
    return col.map((item) => {
      const newItem = __spreadProps(__spreadValues({}, item), {
        header: item.header ? __spreadProps(__spreadValues({}, item.header), {
          component: item.header.component || "el-input"
        }) : item.header
      });
      if (item.children) {
        newItem.children = columnsformatter(item.children);
      }
      return newItem;
    });
  };
  const flatColumns = (list) => {
    return list.reduce((result, item) => {
      if (item.children) {
        return [...result, item, ...flatColumns(item.children)];
      } else {
        return [...result, item];
      }
    }, []);
  };
  const actualColumns = computed(() => {
    const oldColumns = cloneDeep_1(columns.value);
    const formatColumns = columnsformatter(oldColumns);
    const columnTypes = ["index", "selection"];
    const columnTypesArr = formatColumns.filter((i) => columnTypes.includes(i.type));
    const columnPropsArr = formatColumns.filter((i) => !columnTypes.includes(i.type));
    setListColumns.value = columnPropsArr.sort((a, b) => {
      return sortList.value.indexOf(a.prop) - sortList.value.indexOf(b.prop);
    });
    const list = setListColumns.value.filter((item) => checkedList.value.includes(item.prop));
    return [...columnTypesArr, ...list];
  });
  const flatActuakColumns = computed(() => {
    return flatColumns(actualColumns.value);
  });
  const slotKeys = computed(() => {
    return flatActuakColumns.value.map((item) => {
      const map = [];
      if (item.type) {
        map.push(item.type, item.type + "-header");
      }
      if (item.prop) {
        map.push(item.prop, item.prop + "-header");
      }
      return map;
    }).flat();
  });
  return {
    handleSubmit,
    actualColumns,
    flatActuakColumns,
    slotKeys,
    setListColumns,
    tableSize,
    selectedFieldKeys: checkedList
  };
}
class LRUCache {
  constructor(length = 1) {
    if (length < 1)
      throw new Error("\u957F\u5EA6\u4E0D\u80FD\u5C0F\u4E8E1");
    this.length = length;
    this.data = /* @__PURE__ */ new Map();
  }
  static getInstance(length) {
    if (!LRUCache._instance) {
      LRUCache._instance = new LRUCache(length);
    }
    return LRUCache._instance;
  }
  setData(data) {
    this.data = data;
  }
  getData() {
    return this.data;
  }
  set(key, value) {
    const data = this.data;
    if (data.has(key)) {
      data.delete(key);
    }
    data.set(key, value);
    if (data.size > this.length) {
      const delKey = data.keys().next().value;
      data.delete(delKey);
    }
  }
  get(key) {
    const data = this.data;
    if (!data.has(key))
      return null;
    const value = data.get(key);
    data.delete(key);
    data.set(key, value);
    return value;
  }
}
var HASH_UNDEFINED = "__lodash_hash_undefined__";
function setCacheAdd$1(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}
var _setCacheAdd = setCacheAdd$1;
function setCacheHas$1(value) {
  return this.__data__.has(value);
}
var _setCacheHas = setCacheHas$1;
var MapCache$1 = _MapCache, setCacheAdd = _setCacheAdd, setCacheHas = _setCacheHas;
function SetCache$1(values) {
  var index = -1, length = values == null ? 0 : values.length;
  this.__data__ = new MapCache$1();
  while (++index < length) {
    this.add(values[index]);
  }
}
SetCache$1.prototype.add = SetCache$1.prototype.push = setCacheAdd;
SetCache$1.prototype.has = setCacheHas;
var _SetCache = SetCache$1;
function baseFindIndex$1(array, predicate, fromIndex, fromRight) {
  var length = array.length, index = fromIndex + (fromRight ? 1 : -1);
  while (fromRight ? index-- : ++index < length) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }
  return -1;
}
var _baseFindIndex = baseFindIndex$1;
function baseIsNaN$1(value) {
  return value !== value;
}
var _baseIsNaN = baseIsNaN$1;
function strictIndexOf$1(array, value, fromIndex) {
  var index = fromIndex - 1, length = array.length;
  while (++index < length) {
    if (array[index] === value) {
      return index;
    }
  }
  return -1;
}
var _strictIndexOf = strictIndexOf$1;
var baseFindIndex = _baseFindIndex, baseIsNaN = _baseIsNaN, strictIndexOf = _strictIndexOf;
function baseIndexOf$1(array, value, fromIndex) {
  return value === value ? strictIndexOf(array, value, fromIndex) : baseFindIndex(array, baseIsNaN, fromIndex);
}
var _baseIndexOf = baseIndexOf$1;
var baseIndexOf = _baseIndexOf;
function arrayIncludes$1(array, value) {
  var length = array == null ? 0 : array.length;
  return !!length && baseIndexOf(array, value, 0) > -1;
}
var _arrayIncludes = arrayIncludes$1;
function arrayIncludesWith$1(array, value, comparator) {
  var index = -1, length = array == null ? 0 : array.length;
  while (++index < length) {
    if (comparator(value, array[index])) {
      return true;
    }
  }
  return false;
}
var _arrayIncludesWith = arrayIncludesWith$1;
function arrayMap$1(array, iteratee) {
  var index = -1, length = array == null ? 0 : array.length, result = Array(length);
  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}
var _arrayMap = arrayMap$1;
function cacheHas$1(cache, key) {
  return cache.has(key);
}
var _cacheHas = cacheHas$1;
var SetCache = _SetCache, arrayIncludes = _arrayIncludes, arrayIncludesWith = _arrayIncludesWith, arrayMap = _arrayMap, baseUnary = _baseUnary, cacheHas = _cacheHas;
var LARGE_ARRAY_SIZE = 200;
function baseDifference$1(array, values, iteratee, comparator) {
  var index = -1, includes = arrayIncludes, isCommon = true, length = array.length, result = [], valuesLength = values.length;
  if (!length) {
    return result;
  }
  if (iteratee) {
    values = arrayMap(values, baseUnary(iteratee));
  }
  if (comparator) {
    includes = arrayIncludesWith;
    isCommon = false;
  } else if (values.length >= LARGE_ARRAY_SIZE) {
    includes = cacheHas;
    isCommon = false;
    values = new SetCache(values);
  }
  outer:
    while (++index < length) {
      var value = array[index], computed2 = iteratee == null ? value : iteratee(value);
      value = comparator || value !== 0 ? value : 0;
      if (isCommon && computed2 === computed2) {
        var valuesIndex = valuesLength;
        while (valuesIndex--) {
          if (values[valuesIndex] === computed2) {
            continue outer;
          }
        }
        result.push(value);
      } else if (!includes(values, computed2, comparator)) {
        result.push(value);
      }
    }
  return result;
}
var _baseDifference = baseDifference$1;
var Symbol$3 = _Symbol, isArguments = isArguments_1, isArray$1 = isArray_1;
var spreadableSymbol = Symbol$3 ? Symbol$3.isConcatSpreadable : void 0;
function isFlattenable$1(value) {
  return isArray$1(value) || isArguments(value) || !!(spreadableSymbol && value && value[spreadableSymbol]);
}
var _isFlattenable = isFlattenable$1;
var arrayPush = _arrayPush, isFlattenable = _isFlattenable;
function baseFlatten$1(array, depth, predicate, isStrict, result) {
  var index = -1, length = array.length;
  predicate || (predicate = isFlattenable);
  result || (result = []);
  while (++index < length) {
    var value = array[index];
    if (depth > 0 && predicate(value)) {
      if (depth > 1) {
        baseFlatten$1(value, depth - 1, predicate, isStrict, result);
      } else {
        arrayPush(result, value);
      }
    } else if (!isStrict) {
      result[result.length] = value;
    }
  }
  return result;
}
var _baseFlatten = baseFlatten$1;
function identity$2(value) {
  return value;
}
var identity_1 = identity$2;
function apply$1(func, thisArg, args) {
  switch (args.length) {
    case 0:
      return func.call(thisArg);
    case 1:
      return func.call(thisArg, args[0]);
    case 2:
      return func.call(thisArg, args[0], args[1]);
    case 3:
      return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}
var _apply = apply$1;
var apply = _apply;
var nativeMax = Math.max;
function overRest$1(func, start2, transform) {
  start2 = nativeMax(start2 === void 0 ? func.length - 1 : start2, 0);
  return function() {
    var args = arguments, index = -1, length = nativeMax(args.length - start2, 0), array = Array(length);
    while (++index < length) {
      array[index] = args[start2 + index];
    }
    index = -1;
    var otherArgs = Array(start2 + 1);
    while (++index < start2) {
      otherArgs[index] = args[index];
    }
    otherArgs[start2] = transform(array);
    return apply(func, this, otherArgs);
  };
}
var _overRest = overRest$1;
function constant$1(value) {
  return function() {
    return value;
  };
}
var constant_1 = constant$1;
var constant = constant_1, defineProperty = _defineProperty, identity$1 = identity_1;
var baseSetToString$1 = !defineProperty ? identity$1 : function(func, string) {
  return defineProperty(func, "toString", {
    "configurable": true,
    "enumerable": false,
    "value": constant(string),
    "writable": true
  });
};
var _baseSetToString = baseSetToString$1;
var HOT_COUNT = 800, HOT_SPAN = 16;
var nativeNow = Date.now;
function shortOut$1(func) {
  var count = 0, lastCalled = 0;
  return function() {
    var stamp = nativeNow(), remaining = HOT_SPAN - (stamp - lastCalled);
    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(void 0, arguments);
  };
}
var _shortOut = shortOut$1;
var baseSetToString = _baseSetToString, shortOut = _shortOut;
var setToString$1 = shortOut(baseSetToString);
var _setToString = setToString$1;
var identity = identity_1, overRest = _overRest, setToString = _setToString;
function baseRest$1(func, start2) {
  return setToString(overRest(func, start2, identity), func + "");
}
var _baseRest = baseRest$1;
var isArrayLike = isArrayLike_1, isObjectLike = isObjectLike_1;
function isArrayLikeObject$1(value) {
  return isObjectLike(value) && isArrayLike(value);
}
var isArrayLikeObject_1 = isArrayLikeObject$1;
var baseDifference = _baseDifference, baseFlatten = _baseFlatten, baseRest = _baseRest, isArrayLikeObject = isArrayLikeObject_1;
var difference = baseRest(function(array, values) {
  return isArrayLikeObject(array) ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true)) : [];
});
var difference_1 = difference;
const STORAGE_KEYS = {
  DEFAULT: "defaultKeys",
  SELECTED: "selectedKeys",
  ALLWORD: "allWrodKeys",
  SIZE: "tableSize"
};
function useTableColumCache(props, emit) {
  const STORAGE_KEY_SUFFIX = getConfig("table").storageKey;
  const { columns, tableHeaderKey, size, checkedColumns } = toRefs(props);
  const selectedFieldKeys = ref([]);
  const defaultSortKeys = ref([]);
  const storageItemKey = ref("");
  const tableSize = ref("");
  const setListColumns = ref([]);
  const headerKeys = {};
  let defaultShowKeys = [];
  const tableFieldMap = {};
  let lruCache = LRUCache.getInstance(getConfig("table").cacheSize);
  const columnsformatter = (col) => {
    return col.map((item) => {
      const newItem = __spreadProps(__spreadValues({}, item), {
        header: item.header ? __spreadProps(__spreadValues({}, item.header), {
          component: item.header.component || "el-input"
        }) : item.header
      });
      if (item.children) {
        newItem.children = columnsformatter(item.children);
      }
      return newItem;
    });
  };
  const flatColumns = (list) => {
    return list.reduce((result, item) => {
      if (item.children) {
        return [...result, item, ...flatColumns(item.children)];
      } else {
        return [...result, item];
      }
    }, []);
  };
  watchEffect(() => {
    const columnTypes = ["index", "selection"];
    const columnPropsArr = columns.value.filter((i) => !columnTypes.includes(i.type) && i.visible !== false);
    selectedFieldKeys.value = checkedColumns.value && checkedColumns.value.length > 0 ? checkedColumns.value : columnPropsArr.map((item) => item.prop);
    nextTick(() => {
      init();
    });
  });
  watch(tableSize, (newValue, oldValue) => {
    if (newValue !== oldValue) {
      const cachedHeader = getStorageItem() || {};
      if (Object.keys(cachedHeader).length > 0) {
        const tmpHeaderKeys = {};
        tmpHeaderKeys[STORAGE_KEYS.DEFAULT] = cachedHeader[STORAGE_KEYS.DEFAULT];
        tmpHeaderKeys[STORAGE_KEYS.SELECTED] = cachedHeader[STORAGE_KEYS.SELECTED];
        tmpHeaderKeys[STORAGE_KEYS.ALLWORD] = cachedHeader[STORAGE_KEYS.ALLWORD];
        tmpHeaderKeys[STORAGE_KEYS.SIZE] = newValue;
        lruCache.set(storageItemKey.value, tmpHeaderKeys);
        setStorageItem();
      }
    }
  });
  const getStorageItemKey = () => {
    storageItemKey.value = `${tableHeaderKey.value}_TABLE_HEADER_KEYS`.replace(/^_/, "");
  };
  const getStorageItem = () => {
    const cacheData = new Map(storage.getItem(STORAGE_KEY_SUFFIX));
    lruCache.setData(cacheData);
    return lruCache.get(storageItemKey.value);
  };
  const setDefaultShowKeysAsSelectedKeys = () => {
    selectedFieldKeys.value = checkedColumns.value && checkedColumns.value.length > 0 ? checkedColumns.value : defaultShowKeys;
    const tmpHeaderKeys = {};
    tmpHeaderKeys[STORAGE_KEYS.DEFAULT] = defaultShowKeys;
    tmpHeaderKeys[STORAGE_KEYS.SELECTED] = selectedFieldKeys.value;
    tmpHeaderKeys[STORAGE_KEYS.ALLWORD] = defaultShowKeys;
    tmpHeaderKeys[STORAGE_KEYS.SIZE] = size.value;
    lruCache.set(storageItemKey.value, tmpHeaderKeys);
    setStorageItem();
  };
  const combineSelectedKeys = (defaultHeaderKeys, selectedHeaderKeys, tableHeightSize) => {
    const cachedHeaderKeys = getStorageItem() || {};
    let cachedAllWordKeys = cachedHeaderKeys[STORAGE_KEYS.ALLWORD];
    const newKeys = difference_1(defaultShowKeys, defaultHeaderKeys);
    if (Array.isArray(selectedHeaderKeys)) {
      let currentHeaderKeys = selectedHeaderKeys.filter((key) => tableFieldMap[key]);
      if (newKeys.length) {
        currentHeaderKeys = [...new Set(currentHeaderKeys.concat(newKeys))];
      }
      selectedFieldKeys.value = currentHeaderKeys;
      headerKeys[STORAGE_KEYS.SELECTED] = currentHeaderKeys;
    } else {
      selectedFieldKeys.value = defaultShowKeys;
    }
    const newCatchHeaderKeys = sortBy(defaultShowKeys, (x) => findIndex(cachedAllWordKeys, (y) => x === y));
    const addCatchAllKeys = difference_1(defaultShowKeys, cachedAllWordKeys);
    if (addCatchAllKeys.length > 0) {
      addCatchAllKeys.forEach((item) => {
        const indexKey = defaultShowKeys.indexOf(item);
        const indexNowKey = newCatchHeaderKeys.indexOf(item);
        if (indexKey >= 0) {
          newCatchHeaderKeys.splice(indexNowKey, 1);
          newCatchHeaderKeys.splice(indexKey, 0, item);
          cachedAllWordKeys.splice(indexKey, 0, item);
        }
      });
    }
    headerKeys[STORAGE_KEYS.DEFAULT] = newCatchHeaderKeys;
    defaultSortKeys.value = headerKeys[STORAGE_KEYS.DEFAULT];
    headerKeys[STORAGE_KEYS.ALLWORD] = [...new Set(cachedAllWordKeys)];
    headerKeys[STORAGE_KEYS.SIZE] = tableHeightSize || size.value;
    lruCache.set(storageItemKey.value, headerKeys);
    setStorageItem();
  };
  const setStorageItem = () => {
    storage.setItem(STORAGE_KEY_SUFFIX, Array.from(lruCache.getData().entries()));
  };
  const handleHeaderSetChange = (sortKeys, visiblekeys, size2) => {
    selectedFieldKeys.value = visiblekeys;
    defaultSortKeys.value = sortKeys;
    tableSize.value = size2;
    const headerKeys2 = {};
    headerKeys2[STORAGE_KEYS.DEFAULT] = sortKeys;
    headerKeys2[STORAGE_KEYS.SELECTED] = visiblekeys;
    const cachedHeaderKeys = getStorageItem() || {};
    const allWrodKeysCatch = [...new Set(sortKeys.concat(cachedHeaderKeys[STORAGE_KEYS.ALLWORD]))];
    const newCatchHeaderKeys = sortBy(allWrodKeysCatch, (x) => findIndex(sortKeys, (y) => x === y));
    headerKeys2[STORAGE_KEYS.ALLWORD] = newCatchHeaderKeys;
    headerKeys2[STORAGE_KEYS.SIZE] = size2;
    lruCache.set(storageItemKey.value, headerKeys2);
    setStorageItem();
  };
  const handleSubmit = (columnsProp, sortKeys, size2) => {
    handleHeaderSetChange(sortKeys, columnsProp, size2);
    emit("columnsChange", columnsProp);
  };
  const actualColumns = computed(() => {
    const oldColumns = cloneDeep_1(columns.value);
    const formatColumns = columnsformatter(oldColumns);
    const columnTypes = ["index", "selection", "expand"];
    const columnTypesArr = formatColumns.filter((i) => columnTypes.includes(i.type));
    const columnPropsArr = formatColumns.filter((i) => !columnTypes.includes(i.type));
    setListColumns.value = columnPropsArr.sort((a, b) => {
      return defaultSortKeys.value.indexOf(a.prop) - defaultSortKeys.value.indexOf(b.prop);
    });
    const list = setListColumns.value.filter((item) => selectedFieldKeys.value.includes(item.prop));
    return [...columnTypesArr, ...list];
  });
  const flatActuakColumns = computed(() => {
    return flatColumns(actualColumns.value);
  });
  const slotKeys = computed(() => {
    return flatActuakColumns.value.map((item) => {
      const map = [];
      if (item.type) {
        map.push(item.type, item.type + "-header");
      }
      if (item.prop) {
        map.push(item.prop, item.prop + "-header");
      }
      return map;
    }).flat();
  });
  function init() {
    getStorageItemKey();
    const columnTypes = ["index", "selection"];
    const columnPropsArr = columns.value.filter((i) => !columnTypes.includes(i.type));
    defaultShowKeys = [];
    columnPropsArr.forEach(({ visible, prop }) => {
      visible !== false && defaultShowKeys.push(prop);
      tableFieldMap[prop] = true;
    });
    const cachedHeaderKeys = getStorageItem() || {};
    const defaultHeaderKeys = cachedHeaderKeys[STORAGE_KEYS.DEFAULT];
    const selectedHeaderKeys = cachedHeaderKeys[STORAGE_KEYS.SELECTED];
    const tableHeightSize = cachedHeaderKeys[STORAGE_KEYS.SIZE];
    tableSize.value = tableHeightSize || size.value;
    try {
      if (Array.isArray(defaultHeaderKeys)) {
        combineSelectedKeys(defaultHeaderKeys, selectedHeaderKeys, tableHeightSize);
      } else {
        setDefaultShowKeysAsSelectedKeys();
        tableSize.value = size.value;
      }
    } catch (error) {
      setDefaultShowKeysAsSelectedKeys();
      tableSize.value = tableHeightSize || size.value;
    }
  }
  return {
    defaultSortKeys,
    selectedFieldKeys,
    tableSize,
    setStorageItem,
    handleHeaderSetChange,
    handleSubmit,
    actualColumns,
    flatActuakColumns,
    slotKeys,
    setListColumns
  };
}
function useTable(props, emit) {
  const { tableHeaderKey } = toRefs(props);
  const defaultHeaderCellStyle = ref({
    backgroundColor: "#FFFFFF",
    color: "#000F25",
    fontSize: "14px",
    height: "32px"
  });
  const defaultCellStyle = ref({
    color: "#323233",
    fontSize: "14px",
    lineHeight: "23px"
  });
  if (tableHeaderKey.value) {
    const {
      tableSize,
      selectedFieldKeys,
      handleSubmit,
      actualColumns,
      flatActuakColumns,
      slotKeys,
      setListColumns
    } = useTableColumCache(props, emit);
    return {
      defaultHeaderCellStyle,
      defaultCellStyle,
      tableSize,
      selectedFieldKeys,
      handleSubmit,
      actualColumns,
      flatActuakColumns,
      slotKeys,
      setListColumns
    };
  } else {
    const { handleSubmit, actualColumns, setListColumns, flatActuakColumns, slotKeys, tableSize, selectedFieldKeys } = useColum(props, emit);
    return {
      defaultHeaderCellStyle,
      defaultCellStyle,
      tableSize,
      selectedFieldKeys,
      handleSubmit,
      actualColumns,
      flatActuakColumns,
      slotKeys,
      setListColumns
    };
  }
}
function usePagination($emit, pagination) {
  let state = ref(false);
  const paginationConfig = getConfig("pagination");
  const paginationProps = computed(() => {
    const paginationVal = pagination.value || {};
    return __spreadProps(__spreadValues(__spreadValues({
      background: true,
      layout: "total, prev, pager, next, sizes, jumper"
    }, paginationConfig), paginationVal), {
      currentPage: paginationVal.page,
      pageSize: paginationVal.size
    });
  });
  const handleSizeChange = (pageSize) => {
    const pageMax = Math.ceil(pagination.value.total / pageSize);
    if (pagination.value.page > pageMax) {
      state.value = true;
      $emit("update:pagination", __spreadProps(__spreadValues({}, pagination.value), {
        size: pageSize,
        page: 1
      }));
    } else {
      $emit("update:pagination", __spreadProps(__spreadValues({}, pagination.value), {
        size: pageSize
      }));
    }
  };
  const handleCurrentChange = (currentPage) => {
    if (state.value) {
      state.value = false;
      return;
    }
    $emit("update:pagination", __spreadProps(__spreadValues({}, pagination.value), {
      page: currentPage
    }));
  };
  return {
    paginationProps,
    handleSizeChange,
    handleCurrentChange
  };
}
function tryOnScopeDispose(fn2) {
  if (getCurrentScope()) {
    onScopeDispose(fn2);
    return true;
  }
  return false;
}
const isClient = typeof window !== "undefined";
const isString$1 = (val) => typeof val === "string";
const noop = () => {
};
function createFilterWrapper(filter, fn2) {
  function wrapper(...args) {
    filter(() => fn2.apply(this, args), { fn: fn2, thisArg: this, args });
  }
  return wrapper;
}
function debounceFilter(ms, options = {}) {
  let timer;
  let maxTimer;
  const filter = (invoke) => {
    const duration = unref(ms);
    const maxDuration = unref(options.maxWait);
    if (timer)
      clearTimeout(timer);
    if (duration <= 0 || maxDuration !== void 0 && maxDuration <= 0) {
      if (maxTimer) {
        clearTimeout(maxTimer);
        maxTimer = null;
      }
      return invoke();
    }
    if (maxDuration && !maxTimer) {
      maxTimer = setTimeout(() => {
        if (timer)
          clearTimeout(timer);
        maxTimer = null;
        invoke();
      }, maxDuration);
    }
    timer = setTimeout(() => {
      if (maxTimer)
        clearTimeout(maxTimer);
      maxTimer = null;
      invoke();
    }, duration);
  };
  return filter;
}
function throttleFilter(ms, trailing = true, leading = true) {
  let lastExec = 0;
  let timer;
  let preventLeading = !leading;
  const clear = () => {
    if (timer) {
      clearTimeout(timer);
      timer = void 0;
    }
  };
  const filter = (invoke) => {
    const duration = unref(ms);
    const elapsed = Date.now() - lastExec;
    clear();
    if (duration <= 0) {
      lastExec = Date.now();
      return invoke();
    }
    if (elapsed > duration) {
      lastExec = Date.now();
      if (preventLeading)
        preventLeading = false;
      else
        invoke();
    }
    if (trailing) {
      timer = setTimeout(() => {
        lastExec = Date.now();
        if (!leading)
          preventLeading = true;
        clear();
        invoke();
      }, duration);
    }
    if (!leading && !timer)
      timer = setTimeout(() => preventLeading = true, duration);
  };
  return filter;
}
function useDebounceFn(fn2, ms = 200, options = {}) {
  return createFilterWrapper(debounceFilter(ms, options), fn2);
}
function useThrottleFn(fn2, ms = 200, trailing = true, leading = true) {
  return createFilterWrapper(throttleFilter(ms, trailing, leading), fn2);
}
function unrefElement(elRef) {
  var _a2;
  const plain = unref(elRef);
  return (_a2 = plain == null ? void 0 : plain.$el) != null ? _a2 : plain;
}
const defaultWindow = isClient ? window : void 0;
isClient ? window.document : void 0;
isClient ? window.navigator : void 0;
isClient ? window.location : void 0;
function useEventListener(...args) {
  let target;
  let event;
  let listener;
  let options;
  if (isString$1(args[0])) {
    [event, listener, options] = args;
    target = defaultWindow;
  } else {
    [target, event, listener, options] = args;
  }
  if (!target)
    return noop;
  let cleanup = noop;
  const stopWatch = watch(() => unref(target), (el) => {
    cleanup();
    if (!el)
      return;
    el.addEventListener(event, listener, options);
    cleanup = () => {
      el.removeEventListener(event, listener, options);
      cleanup = noop;
    };
  }, { immediate: true, flush: "post" });
  const stop2 = () => {
    stopWatch();
    cleanup();
  };
  tryOnScopeDispose(stop2);
  return stop2;
}
function onClickOutside(target, handler, options = {}) {
  const { window: window2 = defaultWindow, ignore } = options;
  if (!window2)
    return;
  const shouldListen = ref(true);
  const listener = (event) => {
    const el = unrefElement(target);
    const composedPath = event.composedPath();
    if (!el || el === event.target || composedPath.includes(el) || !shouldListen.value)
      return;
    if (ignore && ignore.length > 0) {
      if (ignore.some((target2) => {
        const el2 = unrefElement(target2);
        return el2 && (event.target === el2 || composedPath.includes(el2));
      }))
        return;
    }
    handler(event);
  };
  const cleanup = [
    useEventListener(window2, "click", listener, { passive: true, capture: true }),
    useEventListener(window2, "pointerdown", (e) => {
      const el = unrefElement(target);
      shouldListen.value = !!el && !e.composedPath().includes(el);
    }, { passive: true })
  ];
  const stop2 = () => cleanup.forEach((fn2) => fn2());
  return stop2;
}
const _global = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
const globalKey = "__vueuse_ssr_handlers__";
_global[globalKey] = _global[globalKey] || {};
_global[globalKey];
function useScroll(element, options = {}) {
  const {
    throttle = 0,
    idle = 200,
    onStop = noop,
    onScroll = noop,
    offset: offset2 = {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    },
    eventListenerOptions = {
      capture: false,
      passive: true
    }
  } = options;
  const x = ref(0);
  const y = ref(0);
  const isScrolling = ref(false);
  const arrivedState = reactive({
    left: true,
    right: false,
    top: true,
    bottom: false
  });
  const directions = reactive({
    left: false,
    right: false,
    top: false,
    bottom: false
  });
  if (element) {
    const onScrollEnd = useDebounceFn((e) => {
      isScrolling.value = false;
      directions.left = false;
      directions.right = false;
      directions.top = false;
      directions.bottom = false;
      onStop(e);
    }, throttle + idle);
    const onScrollHandler = (e) => {
      const eventTarget = e.target === document ? e.target.documentElement : e.target;
      const scrollLeft = eventTarget.scrollLeft;
      directions.left = scrollLeft < x.value;
      directions.right = scrollLeft > x.value;
      arrivedState.left = scrollLeft <= 0 + (offset2.left || 0);
      arrivedState.right = scrollLeft + eventTarget.clientWidth >= eventTarget.scrollWidth - (offset2.right || 0);
      x.value = scrollLeft;
      const scrollTop = eventTarget.scrollTop;
      directions.top = scrollTop < y.value;
      directions.bottom = scrollTop > y.value;
      arrivedState.top = scrollTop <= 0 + (offset2.top || 0);
      arrivedState.bottom = scrollTop + eventTarget.clientHeight >= eventTarget.scrollHeight - (offset2.bottom || 0);
      y.value = scrollTop;
      isScrolling.value = true;
      onScrollEnd(e);
      onScroll(e);
    };
    useEventListener(element, "scroll", throttle ? useThrottleFn(onScrollHandler, throttle) : onScrollHandler, eventListenerOptions);
  }
  return {
    x,
    y,
    isScrolling,
    arrivedState,
    directions
  };
}
var _a, _b;
isClient && (window == null ? void 0 : window.navigator) && ((_a = window == null ? void 0 : window.navigator) == null ? void 0 : _a.platform) && /iP(ad|hone|od)/.test((_b = window == null ? void 0 : window.navigator) == null ? void 0 : _b.platform);
var __defProp$3 = Object.defineProperty;
var __getOwnPropSymbols$3 = Object.getOwnPropertySymbols;
var __hasOwnProp$3 = Object.prototype.hasOwnProperty;
var __propIsEnum$3 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$3 = (obj, key, value) => key in obj ? __defProp$3(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$3 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$3.call(b, prop))
      __defNormalProp$3(a, prop, b[prop]);
  if (__getOwnPropSymbols$3)
    for (var prop of __getOwnPropSymbols$3(b)) {
      if (__propIsEnum$3.call(b, prop))
        __defNormalProp$3(a, prop, b[prop]);
    }
  return a;
};
const initialRect = {
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  height: 0,
  width: 0
};
__spreadValues$3({
  text: ""
}, initialRect);
const _sfc_main$9 = {};
const _hoisted_1$6 = /* @__PURE__ */ createElementVNode("svg", {
  class: "top",
  width: "8",
  height: "5",
  viewBox: "0 0 8 5",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, [
  /* @__PURE__ */ createElementVNode("path", {
    d: "M3.52853 0.804637C3.78888 0.544288 4.21099 0.544288 4.47134 0.804637L6.86186 3.19516C7.28184 3.61514 6.98439 4.33323 6.39046 4.33323H1.60941C1.01547 4.33323 0.718028 3.61514 1.138 3.19516L3.52853 0.804637Z",
    fill: "#B3B7BE"
  })
], -1);
const _hoisted_2$4 = /* @__PURE__ */ createElementVNode("svg", {
  class: "bot",
  width: "8",
  height: "5",
  viewBox: "0 0 8 5",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, [
  /* @__PURE__ */ createElementVNode("path", {
    d: "M3.52853 4.19536C3.78888 4.45571 4.21099 4.45571 4.47134 4.19536L6.86186 1.80484C7.28184 1.38486 6.98439 0.666767 6.39046 0.666767H1.60941C1.01547 0.666767 0.718028 1.38486 1.138 1.80484L3.52853 4.19536Z",
    fill: "#B3B7BE"
  })
], -1);
function _sfc_render$2(_ctx, _cache) {
  return openBlock(), createElementBlock(Fragment, null, [
    _hoisted_1$6,
    _hoisted_2$4
  ], 64);
}
var SvgMd = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["render", _sfc_render$2]]);
var fieldSub_vue_vue_type_style_index_0_scoped_true_lang = /* @__PURE__ */ (() => ".el-select[data-v-832844e0],.el-cascader[data-v-832844e0],.el-date-editor.el-input[data-v-832844e0],.el-date-editor--daterange.el-input[data-v-832844e0],.el-date-editor--daterange.el-input__inner[data-v-832844e0],.el-date-editor--timerange.el-input[data-v-832844e0],.el-date-editor--timerange.el-input__inner[data-v-832844e0],.el-date-editor--datetimerange.el-input[data-v-832844e0],.el-date-editor--datetimerange.el-input__inner[data-v-832844e0]{width:100%}.el-date-editor .el-range-separator[data-v-832844e0]{width:auto}.el-radio[data-v-832844e0]{margin-right:24px}.el-radio[data-v-832844e0]:last-child{margin-right:0}.el-checkbox[data-v-832844e0]{margin-right:24px}.el-checkbox[data-v-832844e0]:last-child{margin-right:0}\n")();
const _hoisted_1$5 = /* @__PURE__ */ createTextVNode(" \u5168\u90E8 ");
const _sfc_main$8 = {
  props: {
    options: {
      type: Array,
      default: () => []
    },
    hasAll: {
      type: Boolean,
      default: true
    },
    parentName: {
      type: String,
      default: ""
    },
    subComponent: {
      type: [String, Object],
      default: ""
    }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_el_option = resolveComponent("el-option");
      const _component_el_checkbox = resolveComponent("el-checkbox");
      const _component_el_radio = resolveComponent("el-radio");
      return __props.subComponent ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(__props.options, (option) => {
        return openBlock(), createElementBlock(Fragment, {
          key: option.value
        }, [
          __props.subComponent === "el-option" ? (openBlock(), createBlock(resolveDynamicComponent(__props.subComponent), mergeProps({ key: 0 }, option, {
            label: option.label,
            value: option.value
          }), null, 16, ["label", "value"])) : (openBlock(), createBlock(resolveDynamicComponent(__props.subComponent), mergeProps({ key: 1 }, option, {
            label: option.value
          }), {
            default: withCtx(() => [
              createTextVNode(toDisplayString(option.label), 1)
            ]),
            _: 2
          }, 1040, ["label"]))
        ], 64);
      }), 128)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
        __props.parentName === "el-select" ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(__props.options, (option) => {
          return openBlock(), createBlock(_component_el_option, mergeProps({
            key: option.value
          }, option, {
            label: option.label,
            value: option.value
          }), null, 16, ["label", "value"]);
        }), 128)) : createCommentVNode("", true),
        __props.parentName === "el-checkbox-group" || __props.parentName === "yun-checkbox-group" ? (openBlock(true), createElementBlock(Fragment, { key: 1 }, renderList(__props.options, (option) => {
          return openBlock(), createBlock(_component_el_checkbox, mergeProps({
            key: option.value
          }, option, {
            label: option.value
          }), {
            default: withCtx(() => [
              createTextVNode(toDisplayString(option.label), 1)
            ]),
            _: 2
          }, 1040, ["label"]);
        }), 128)) : createCommentVNode("", true),
        __props.parentName === "el-radio-group" || __props.parentName === "yun-radio-group" ? (openBlock(), createElementBlock(Fragment, { key: 2 }, [
          __props.hasAll ? (openBlock(), createBlock(_component_el_radio, {
            key: 0,
            label: ""
          }, {
            default: withCtx(() => [
              _hoisted_1$5
            ]),
            _: 1
          })) : createCommentVNode("", true),
          (openBlock(true), createElementBlock(Fragment, null, renderList(__props.options, (option) => {
            return openBlock(), createBlock(_component_el_radio, mergeProps({
              key: option.value
            }, option, {
              label: option.value
            }), {
              default: withCtx(() => [
                createTextVNode(toDisplayString(option.label), 1)
              ]),
              _: 2
            }, 1040, ["label"]);
          }), 128))
        ], 64)) : createCommentVNode("", true)
      ], 64));
    };
  }
};
var FieldSub = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__scopeId", "data-v-832844e0"]]);
const _sfc_main$7 = {};
const _hoisted_1$4 = {
  width: "17",
  height: "16",
  viewBox: "0 0 17 16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$3 = /* @__PURE__ */ createStaticVNode('<path fill-rule="evenodd" clip-rule="evenodd" d="M10.4967 6.00001C9.1346 6.00001 8.02999 7.1042 8.02999 8.46667C8.02999 9.82914 9.1346 10.9333 10.4967 10.9333C11.8587 10.9333 12.9633 9.82914 12.9633 8.46667C12.9633 7.1042 11.8587 6.00001 10.4967 6.00001ZM6.69666 8.46667C6.69666 6.36766 8.39837 4.66667 10.4967 4.66667C12.5949 4.66667 14.2967 6.36766 14.2967 8.46667C14.2967 10.5657 12.5949 12.2667 10.4967 12.2667C8.39837 12.2667 6.69666 10.5657 6.69666 8.46667Z" fill="#B0B7C2"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M12.4218 10.8929C12.6931 10.644 13.1148 10.6621 13.3637 10.9334L14.9791 12.6942C15.2281 12.9655 15.2099 13.3873 14.9386 13.6362C14.6673 13.8851 14.2456 13.8669 13.9967 13.5956L12.3812 11.8348C12.1323 11.5635 12.1505 11.1418 12.4218 10.8929Z" fill="#B0B7C2"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M1.36353 2.66667C1.36353 2.29848 1.662 2 2.03019 2H13.3635C13.7317 2 14.0302 2.29848 14.0302 2.66667C14.0302 3.03486 13.7317 3.33333 13.3635 3.33333H2.03019C1.662 3.33333 1.36353 3.03486 1.36353 2.66667Z" fill="#B0B7C2"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M1.36353 7.37139C1.36353 7.0032 1.662 6.70473 2.03019 6.70473H5.07014C5.43833 6.70473 5.7368 7.0032 5.7368 7.37139C5.7368 7.73958 5.43833 8.03806 5.07014 8.03806H2.03019C1.662 8.03806 1.36353 7.73958 1.36353 7.37139Z" fill="#B0B7C2"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M1.36359 12.5035C1.36763 12.1354 1.66937 11.8402 2.03754 11.8442L6.704 11.8955C7.07217 11.8996 7.36735 12.2013 7.3633 12.5695C7.35926 12.9376 7.05752 13.2328 6.68935 13.2288L2.02289 13.1775C1.65472 13.1734 1.35954 12.8717 1.36359 12.5035Z" fill="#B0B7C2"></path>', 5);
const _hoisted_7$1 = [
  _hoisted_2$3
];
function _sfc_render$1(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$4, _hoisted_7$1);
}
var SearchSvg = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$1]]);
var FilterNomal_vue_vue_type_style_index_0_scoped_true_lang = /* @__PURE__ */ (() => ".filter-box[data-v-92e9f5c2]{height:23px}.dm-filter-header-radio[data-v-92e9f5c2]{display:table;width:28px;height:28px;border-radius:4px;overflow:hidden;margin-right:-6px}.dm-filter-header-radio .icon-filter[data-v-92e9f5c2]{color:#808792}.dm-filter-header-radio[data-v-92e9f5c2]:hover{border-radius:4px}.dm-popover[data-v-92e9f5c2] .el-input__inner{color:#000f25;font-size:14px;font-weight:400;line-height:22px}.dm-popover .el-radio-group[data-v-92e9f5c2]{align-items:flex-start;display:flex;flex-direction:column}.dm-popover .el-radio-group .el-radio[data-v-92e9f5c2]{height:22px;line-height:22px}.dm-popover .el-checkbox-group[data-v-92e9f5c2]{align-items:flex-start;display:flex;flex-direction:column}.dm-popover .el-checkbox-group .el-checkbox[data-v-92e9f5c2]{height:22px;line-height:22px}.dm-popover .el-select[data-v-92e9f5c2],.dm-popover .el-input[data-v-92e9f5c2]{width:180px}.el-tooltip__trigger[aria-describedby] .fiter-icon[data-v-92e9f5c2]{background-color:var(--el-border-color-light)}.fiter-icon[data-v-92e9f5c2]{width:28px;height:28px;display:flex;align-items:center;justify-content:center;font-size:14px;border-radius:4px;cursor:pointer}.fiter-icon[data-v-92e9f5c2]:hover,.fiter-icon[aria-describedby][data-v-92e9f5c2]{background-color:var(--el-border-color-lighter)}.dm-popover-header[data-v-92e9f5c2]{display:flex;justify-content:space-between}.dm-popover-header .btn[data-v-92e9f5c2]{width:48px;height:24px;font-size:12px;line-height:20px;margin-top:7px}.divider[data-v-92e9f5c2]{margin:13px 0;border-color:var(--el-border-color-light)}.cell[data-v-92e9f5c2]{overflow:inherit}\n")();
var FilterNomal_vue_vue_type_style_index_1_lang = /* @__PURE__ */ (() => ".dm-popover.el-popper{padding:12px 20px;display:flex;flex-direction:column;inset:-7px 0px auto auto!important}\n")();
const _hoisted_1$3 = { class: "popover-pos" };
const _hoisted_2$2 = { class: "fiter-icon" };
const _hoisted_3$1 = {
  key: 1,
  class: "fiter-icon"
};
const _hoisted_4$1 = /* @__PURE__ */ createTextVNode(" \u5168\u9009 ");
const _sfc_main$6 = {
  props: {
    field: {
      type: Object,
      default: () => {
      }
    },
    searchForm: {
      type: Object,
      default: () => {
      }
    },
    getFormFieldProps: {
      type: Object,
      default: () => {
      }
    }
  },
  emits: ["handle-search", "update:searchForm"],
  setup(__props, { emit }) {
    const props = __props;
    const NoSlotComponents2 = ["el-date-picker", "el-cascader"];
    const InputComponent = [
      "el-input"
    ];
    const componentType = computed(() => {
      if (NoSlotComponents2.includes(props.field.header.component)) {
        return 1;
      } else if (InputComponent.includes(props.field.header.component)) {
        return 2;
      } else {
        return 3;
      }
    });
    const inputDom = ref(null);
    const tooltipVisible = ref(true);
    const handleHide = () => {
      tooltipVisible.value = true;
    };
    const handleFocus = () => {
      tooltipVisible.value = false;
      nextTick(() => {
        inputDom.value.focus && inputDom.value.focus();
      });
    };
    const localSearchData = ref(null);
    watch(() => props.searchForm[props.field.prop], (data) => {
      localSearchData.value = data;
    }, {
      immediate: true,
      deep: true
    });
    const checkAll = ref(false);
    const isIndeterminate = ref(false);
    const handleCheckBoxSearch = inject("handleCheckBoxSearch");
    const handleCheckAllChange = (val) => {
      handleCheckBoxSearch(props.field.prop, val, props.field.header.options);
      isIndeterminate.value = false;
    };
    const handleChange = (val) => {
      var _a2, _b2;
      if (props.field.header.component === "el-checkbox-group") {
        if (props.field.header.options.length === val.length) {
          checkAll.value = true;
          isIndeterminate.value = false;
        }
        if (props.field.header.options.length > val.length && val.length > 0) {
          checkAll.value = true;
          isIndeterminate.value = true;
        }
        if (val.length === 0) {
          checkAll.value = false;
          isIndeterminate.value = false;
        }
      }
      if (props.field.header.component !== "el-checkbox-group") {
        handleCheckCancel();
      }
      if (props.field.header.component === "el-input") {
        localSearchData.value = (_b2 = (_a2 = localSearchData.value).trim) == null ? void 0 : _b2.call(_a2);
      }
      emit("update:searchForm", __spreadProps(__spreadValues({}, props.searchForm), { [props.field.prop]: localSearchData.value }));
      emit("handle-search");
    };
    const popoverDom = ref(null);
    const handleCheckCancel = () => {
      nextTick(() => {
        popoverDom.value.hide();
      });
    };
    return (_ctx, _cache) => {
      const _component_el_tooltip = resolveComponent("el-tooltip");
      const _component_el_checkbox = resolveComponent("el-checkbox");
      const _component_el_popover = resolveComponent("el-popover");
      return openBlock(), createElementBlock("div", {
        class: "dm-filter-header-radio",
        onClick: _cache[6] || (_cache[6] = withModifiers(() => {
        }, ["stop"]))
      }, [
        createVNode(_component_el_popover, {
          ref_key: "popoverDom",
          ref: popoverDom,
          width: "auto",
          "popper-class": "dm-popover",
          placement: "bottom-end",
          trigger: "click",
          onShow: handleFocus,
          onHide: handleHide
        }, {
          reference: withCtx(() => [
            createElementVNode("div", _hoisted_1$3, [
              tooltipVisible.value ? (openBlock(), createBlock(_component_el_tooltip, {
                key: 0,
                content: "\u641C\u7D22/\u7B5B\u9009",
                placement: "bottom"
              }, {
                default: withCtx(() => [
                  createElementVNode("span", _hoisted_2$2, [
                    createVNode(SearchSvg)
                  ])
                ]),
                _: 1
              })) : (openBlock(), createElementBlock("span", _hoisted_3$1, [
                createVNode(SearchSvg)
              ]))
            ])
          ]),
          default: withCtx(() => [
            __props.field.header.component === "el-checkbox-group" ? (openBlock(), createBlock(_component_el_checkbox, {
              key: 0,
              modelValue: checkAll.value,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => checkAll.value = $event),
              indeterminate: isIndeterminate.value,
              label: "true",
              onChange: handleCheckAllChange
            }, {
              default: withCtx(() => [
                _hoisted_4$1
              ]),
              _: 1
            }, 8, ["modelValue", "indeterminate"])) : createCommentVNode("", true),
            unref(componentType) === 1 ? (openBlock(), createBlock(resolveDynamicComponent(__props.field.header.component), mergeProps({
              key: 1,
              ref_key: "inputDom",
              ref: inputDom,
              modelValue: localSearchData.value,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => localSearchData.value = $event)
            }, __props.getFormFieldProps, { onChange: handleChange }), null, 16, ["modelValue"])) : unref(componentType) === 2 ? (openBlock(), createBlock(resolveDynamicComponent(__props.field.header.component), mergeProps({
              key: 2,
              ref_key: "inputDom",
              ref: inputDom,
              modelValue: localSearchData.value,
              "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => localSearchData.value = $event)
            }, __props.getFormFieldProps, {
              "automatic-dropdown": true,
              placeholder: `${__props.getFormFieldProps.placeholder || "\u641C\u7D22"} \u6309Enter\u786E\u8BA4`,
              onKeyup: _cache[3] || (_cache[3] = withKeys(() => handleChange(localSearchData.value), ["enter"])),
              onClear: _cache[4] || (_cache[4] = () => handleChange(localSearchData.value))
            }), {
              default: withCtx(() => [
                createVNode(FieldSub, {
                  "parent-name": __props.field.header.component,
                  "has-all": __props.field.header.hasAll,
                  options: __props.field.header.options
                }, null, 8, ["parent-name", "has-all", "options"])
              ]),
              _: 1
            }, 16, ["modelValue", "placeholder"])) : unref(componentType) === 3 ? (openBlock(), createBlock(resolveDynamicComponent(__props.field.header.component), mergeProps({
              key: 3,
              ref_key: "inputDom",
              ref: inputDom,
              modelValue: localSearchData.value,
              "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => localSearchData.value = $event)
            }, __props.getFormFieldProps, {
              "automatic-dropdown": true,
              onChange: handleChange
            }), {
              default: withCtx(() => [
                createVNode(FieldSub, {
                  "parent-name": __props.field.header.component,
                  "has-all": __props.field.header.hasAll,
                  options: __props.field.header.options
                }, null, 8, ["parent-name", "has-all", "options"])
              ]),
              _: 1
            }, 16, ["modelValue"])) : createCommentVNode("", true)
          ]),
          _: 1
        }, 512)
      ]);
    };
  }
};
var FilterDefault = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-92e9f5c2"]]);
var FilterOther_vue_vue_type_style_index_0_scoped_true_lang = /* @__PURE__ */ (() => ".filter-box[data-v-3a1df1d4]{height:23px}.dm-filter-header-radio[data-v-3a1df1d4]{display:table;width:28px;height:28px;border-radius:4px;overflow:hidden;margin-right:-6px}.dm-filter-header-radio .icon-filter[data-v-3a1df1d4]{color:#808792}.dm-filter-header-radio[data-v-3a1df1d4]:hover{border-radius:4px}.dm-popover[data-v-3a1df1d4] .el-input__inner{color:#000f25;font-size:14px;font-weight:400;line-height:22px}.dm-popover .el-radio-group[data-v-3a1df1d4]{align-items:flex-start;display:flex;flex-direction:column}.dm-popover .el-radio-group .el-radio[data-v-3a1df1d4]{height:22px;line-height:22px}.dm-popover .el-checkbox-group[data-v-3a1df1d4]{align-items:flex-start;display:flex;flex-direction:column}.dm-popover .el-checkbox-group .el-checkbox[data-v-3a1df1d4]{height:22px;line-height:22px}.dm-popover .el-select[data-v-3a1df1d4],.dm-popover .el-input[data-v-3a1df1d4]{width:180px}.el-tooltip__trigger[aria-describedby] .fiter-icon[data-v-3a1df1d4]{background-color:var(--el-border-color-light)}.fiter-icon[data-v-3a1df1d4]{width:28px;height:28px;display:flex;align-items:center;justify-content:center;font-size:14px;border-radius:4px;cursor:pointer}.fiter-icon[data-v-3a1df1d4]:hover,.fiter-icon[aria-describedby][data-v-3a1df1d4]{background-color:var(--el-border-color-lighter)}.dm-popover-header[data-v-3a1df1d4]{display:flex;justify-content:space-between}.dm-popover-header .btn[data-v-3a1df1d4]{width:48px;height:24px;font-size:12px;line-height:20px;margin-top:7px}.divider[data-v-3a1df1d4]{margin:13px 0;border-color:var(--el-border-color-light)}.cell[data-v-3a1df1d4]{overflow:inherit}\n")();
var FilterOther_vue_vue_type_style_index_1_lang = /* @__PURE__ */ (() => ".dm-popover.el-popper{padding:12px 20px;display:flex;flex-direction:column;inset:-7px 0px auto auto!important}\n")();
const _hoisted_1$2 = { class: "fiter-icon" };
const _hoisted_2$1 = {
  key: 1,
  class: "fiter-icon"
};
const _sfc_main$5 = {
  props: {
    field: {
      type: Object,
      default: () => {
      }
    },
    searchForm: {
      type: Object,
      default: () => {
      }
    },
    getFormFieldProps: {
      type: Object,
      default: () => {
      }
    }
  },
  emits: ["handle-search", "update:searchForm"],
  setup(__props, { emit }) {
    const props = __props;
    const NoSlotComponents2 = ["el-date-picker", "el-cascader"];
    const InputComponent = [
      "el-input"
    ];
    const visible = ref(false);
    const popoverVisible = ref(false);
    const triggerVisible = () => {
      visible.value = !visible.value;
    };
    const hide2 = (val) => {
      popoverVisible.value = val;
      if (!val) {
        visible.value = false;
      }
    };
    const componentType = computed(() => {
      if (NoSlotComponents2.includes(props.field.header.component)) {
        return 1;
      } else if (InputComponent.includes(props.field.header.component)) {
        return 2;
      } else {
        return 3;
      }
    });
    const inputDom = ref(null);
    const tooltipVisible = ref(true);
    const handleHide = () => {
      tooltipVisible.value = true;
    };
    const handleFocus = () => {
      tooltipVisible.value = false;
      nextTick(() => {
        inputDom.value.focus && inputDom.value.focus();
      });
    };
    const localSearchData = ref(null);
    watch(() => props.searchForm[props.field.prop], (data) => {
      localSearchData.value = data;
    }, {
      immediate: true,
      deep: true
    });
    const handleChange = (val) => {
      emit("update:searchForm", __spreadProps(__spreadValues({}, props.searchForm), { [props.field.prop]: localSearchData.value }));
      emit("handle-search");
    };
    const popoverDom = ref(null);
    const popoverDomContent = ref(null);
    onClickOutside(popoverDomContent, (event) => {
      if (visible.value && !popoverVisible.value) {
        if (!event.target.className.includes("dm-others-popover")) {
          visible.value = false;
        }
      }
    });
    return (_ctx, _cache) => {
      const _component_el_tooltip = resolveComponent("el-tooltip");
      const _component_el_popover = resolveComponent("el-popover");
      return openBlock(), createElementBlock("div", {
        class: "dm-filter-header-radio",
        onClick: _cache[6] || (_cache[6] = withModifiers(() => {
        }, ["stop"]))
      }, [
        createVNode(_component_el_popover, {
          ref_key: "popoverDom",
          ref: popoverDom,
          visible: visible.value,
          "onUpdate:visible": _cache[5] || (_cache[5] = ($event) => visible.value = $event),
          width: "auto",
          "popper-class": "dm-popover dm-others-popover",
          placement: "bottom-end",
          trigger: "click",
          onShow: handleFocus,
          onHide: handleHide
        }, {
          reference: withCtx(() => [
            createElementVNode("div", {
              class: "popover-pos",
              onClick: triggerVisible
            }, [
              tooltipVisible.value ? (openBlock(), createBlock(_component_el_tooltip, {
                key: 0,
                content: "\u641C\u7D22/\u7B5B\u9009",
                placement: "bottom"
              }, {
                default: withCtx(() => [
                  createElementVNode("span", _hoisted_1$2, [
                    createVNode(SearchSvg)
                  ])
                ]),
                _: 1
              })) : (openBlock(), createElementBlock("span", _hoisted_2$1, [
                createVNode(SearchSvg)
              ]))
            ])
          ]),
          default: withCtx(() => [
            createElementVNode("div", {
              ref_key: "popoverDomContent",
              ref: popoverDomContent
            }, [
              unref(componentType) === 1 ? (openBlock(), createBlock(resolveDynamicComponent(__props.field.header.component), mergeProps({
                key: 0,
                ref_key: "inputDom",
                ref: inputDom,
                modelValue: localSearchData.value,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => localSearchData.value = $event)
              }, __props.getFormFieldProps, {
                onChange: handleChange,
                onVisibleChange: hide2
              }), null, 16, ["modelValue"])) : unref(componentType) === 2 ? (openBlock(), createBlock(resolveDynamicComponent(__props.field.header.component), mergeProps({
                key: 1,
                ref_key: "inputDom",
                ref: inputDom,
                modelValue: localSearchData.value,
                "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => localSearchData.value = $event)
              }, __props.getFormFieldProps, {
                "automatic-dropdown": true,
                placeholder: `${__props.getFormFieldProps.placeholder || "\u641C\u7D22"} \u6309Enter\u786E\u8BA4`,
                onKeyup: _cache[2] || (_cache[2] = withKeys(() => handleChange(localSearchData.value), ["enter"])),
                onClear: _cache[3] || (_cache[3] = () => handleChange(localSearchData.value)),
                onVisibleChange: hide2
              }), {
                default: withCtx(() => [
                  createVNode(FieldSub, {
                    "parent-name": __props.field.header.component,
                    "has-all": __props.field.header.hasAll,
                    options: __props.field.header.options
                  }, null, 8, ["parent-name", "has-all", "options"])
                ]),
                _: 1
              }, 16, ["modelValue", "placeholder"])) : unref(componentType) === 3 ? (openBlock(), createBlock(resolveDynamicComponent(__props.field.header.component), mergeProps({
                key: 2,
                ref_key: "inputDom",
                ref: inputDom,
                modelValue: localSearchData.value,
                "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => localSearchData.value = $event)
              }, __props.getFormFieldProps, {
                "automatic-dropdown": true,
                onChange: handleChange,
                onVisibleChange: hide2
              }), {
                default: withCtx(() => [
                  createVNode(FieldSub, {
                    "parent-name": __props.field.header.component,
                    "has-all": __props.field.header.hasAll,
                    options: __props.field.header.options
                  }, null, 8, ["parent-name", "has-all", "options"])
                ]),
                _: 1
              }, 16, ["modelValue"])) : createCommentVNode("", true)
            ], 512)
          ]),
          _: 1
        }, 8, ["visible"])
      ]);
    };
  }
};
var FilterOther = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-3a1df1d4"]]);
const __default__ = {
  name: "HeaderFilter",
  inheritAttrs: false
};
const _sfc_main$4 = /* @__PURE__ */ Object.assign(__default__, {
  setup(__props) {
    const attrs = useAttrs();
    const othersComponent = ["el-cascader", "el-select"];
    const isOtherComponent = computed(() => {
      return othersComponent.includes(attrs.field.header.component);
    });
    return (_ctx, _cache) => {
      return unref(isOtherComponent) ? (openBlock(), createBlock(FilterOther, normalizeProps(mergeProps({ key: 0 }, _ctx.$attrs)), null, 16)) : (openBlock(), createBlock(FilterDefault, normalizeProps(mergeProps({ key: 1 }, _ctx.$attrs)), null, 16));
    };
  }
});
var toggleSelection = function() {
  var selection = document.getSelection();
  if (!selection.rangeCount) {
    return function() {
    };
  }
  var active = document.activeElement;
  var ranges = [];
  for (var i = 0; i < selection.rangeCount; i++) {
    ranges.push(selection.getRangeAt(i));
  }
  switch (active.tagName.toUpperCase()) {
    case "INPUT":
    case "TEXTAREA":
      active.blur();
      break;
    default:
      active = null;
      break;
  }
  selection.removeAllRanges();
  return function() {
    selection.type === "Caret" && selection.removeAllRanges();
    if (!selection.rangeCount) {
      ranges.forEach(function(range) {
        selection.addRange(range);
      });
    }
    active && active.focus();
  };
};
var deselectCurrent = toggleSelection;
var clipboardToIE11Formatting = {
  "text/plain": "Text",
  "text/html": "Url",
  "default": "Text"
};
var defaultMessage = "Copy to clipboard: #{key}, Enter";
function format(message) {
  var copyKey = (/mac os x/i.test(navigator.userAgent) ? "\u2318" : "Ctrl") + "+C";
  return message.replace(/#{\s*key\s*}/g, copyKey);
}
function copy(text, options) {
  var debug, message, reselectPrevious, range, selection, mark, success = false;
  if (!options) {
    options = {};
  }
  debug = options.debug || false;
  try {
    reselectPrevious = deselectCurrent();
    range = document.createRange();
    selection = document.getSelection();
    mark = document.createElement("span");
    mark.textContent = text;
    mark.ariaHidden = "true";
    mark.style.all = "unset";
    mark.style.position = "fixed";
    mark.style.top = 0;
    mark.style.clip = "rect(0, 0, 0, 0)";
    mark.style.whiteSpace = "pre";
    mark.style.webkitUserSelect = "text";
    mark.style.MozUserSelect = "text";
    mark.style.msUserSelect = "text";
    mark.style.userSelect = "text";
    mark.addEventListener("copy", function(e) {
      e.stopPropagation();
      if (options.format) {
        e.preventDefault();
        if (typeof e.clipboardData === "undefined") {
          debug && console.warn("unable to use e.clipboardData");
          debug && console.warn("trying IE specific stuff");
          window.clipboardData.clearData();
          var format2 = clipboardToIE11Formatting[options.format] || clipboardToIE11Formatting["default"];
          window.clipboardData.setData(format2, text);
        } else {
          e.clipboardData.clearData();
          e.clipboardData.setData(options.format, text);
        }
      }
      if (options.onCopy) {
        e.preventDefault();
        options.onCopy(e.clipboardData);
      }
    });
    document.body.appendChild(mark);
    range.selectNodeContents(mark);
    selection.addRange(range);
    var successful = document.execCommand("copy");
    if (!successful) {
      throw new Error("copy command was unsuccessful");
    }
    success = true;
  } catch (err) {
    debug && console.error("unable to copy using execCommand: ", err);
    debug && console.warn("trying IE specific stuff");
    try {
      window.clipboardData.setData(options.format || "text", text);
      options.onCopy && options.onCopy(window.clipboardData);
      success = true;
    } catch (err2) {
      debug && console.error("unable to copy using clipboardData: ", err2);
      debug && console.error("falling back to prompt");
      message = format("message" in options ? options.message : defaultMessage);
      window.prompt(message, text);
    }
  } finally {
    if (selection) {
      if (typeof selection.removeRange == "function") {
        selection.removeRange(range);
      } else {
        selection.removeAllRanges();
      }
    }
    if (mark) {
      document.body.removeChild(mark);
    }
    reselectPrevious();
  }
  return success;
}
var copyToClipboard = copy;
var copyColumn_vue_vue_type_style_index_0_scoped_true_lang = /* @__PURE__ */ (() => ".cell-copy[data-v-d27a4628]{display:inline-block;align-items:center;height:20px;width:20px;text-align:center;cursor:pointer;border-radius:4px;margin-left:4px}.cell-copy[data-v-d27a4628]:hover{background:#E6EAF0}.cell-copy .el-icon[data-v-d27a4628]{transform:translateY(2px)}.dark .cell-copy[data-v-d27a4628]:hover{background:#E6EAF0}.dark .cell-copy:hover .el-icon[data-v-d27a4628]{color:#000}\n")();
const _hoisted_1$1 = {
  key: 0,
  class: "cell-copy"
};
const _sfc_main$3 = {
  props: {
    copy: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    const props = __props;
    const { copy: copy2 } = toRefs(props);
    const copyHandle = () => {
      if (copy2.value) {
        copyToClipboard(copy2.value);
        ElMessage({
          message: "\u590D\u5236\u6210\u529F",
          type: "success",
          grouping: true,
          duration: 500
        });
      }
    };
    return (_ctx, _cache) => {
      const _component_el_icon = resolveComponent("el-icon");
      return unref(copy2) ? (openBlock(), createElementBlock("div", _hoisted_1$1, [
        createVNode(_component_el_icon, { onClick: copyHandle }, {
          default: withCtx(() => [
            createVNode(unref(DocumentCopy))
          ]),
          _: 1
        })
      ])) : createCommentVNode("", true);
    };
  }
};
var CopyColumn = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-d27a4628"]]);
const NOOP = () => {
};
const hasOwnProperty = Object.prototype.hasOwnProperty;
const hasOwn = (val, key) => hasOwnProperty.call(val, key);
const isArray = Array.isArray;
const isString = (val) => typeof val === "string";
const isObject = (val) => val !== null && typeof val === "object";
const objectToString = Object.prototype.toString;
const toTypeString = (value) => objectToString.call(value);
const toRawType = (value) => {
  return toTypeString(value).slice(8, -1);
};
var Symbol$2 = _Symbol;
var symbolProto$1 = Symbol$2 ? Symbol$2.prototype : void 0;
symbolProto$1 ? symbolProto$1.valueOf : void 0;
class ElementPlusError extends Error {
  constructor(m) {
    super(m);
    this.name = "ElementPlusError";
  }
}
function throwError(scope, m) {
  throw new ElementPlusError(`[${scope}] ${m}`);
}
const generateId = () => Math.floor(Math.random() * 1e4);
const isBool = (val) => typeof val === "boolean";
const isHTMLElement$1 = (val) => toRawType(val).startsWith("HTML");
const trimArr = function(s) {
  return (s || "").split(" ").filter((item) => !!item.trim());
};
const on = function(element, event, handler, useCapture = false) {
  if (element && event && handler) {
    element == null ? void 0 : element.addEventListener(event, handler, useCapture);
  }
};
function addClass(el, cls) {
  if (!el)
    return;
  let className = el.getAttribute("class") || "";
  const curClass = trimArr(className);
  const classes = (cls || "").split(" ").filter((item) => !curClass.includes(item) && !!item.trim());
  if (el.classList) {
    el.classList.add(...classes);
  } else {
    className += ` ${classes.join(" ")}`;
    el.setAttribute("class", className);
  }
}
function removeClass(el, cls) {
  if (!el || !cls)
    return;
  const classes = trimArr(cls);
  let curClass = el.getAttribute("class") || "";
  if (el.classList) {
    el.classList.remove(...classes);
    return;
  }
  classes.forEach((item) => {
    curClass = curClass.replace(` ${item} `, " ");
  });
  const className = trimArr(curClass).join(" ");
  el.setAttribute("class", className);
}
const stop = (e) => e.stopPropagation();
function fromPairs(pairs) {
  var index = -1, length = pairs == null ? 0 : pairs.length, result = {};
  while (++index < length) {
    var pair = pairs[index];
    result[pair[0]] = pair[1];
  }
  return result;
}
var fromPairs_1 = fromPairs;
const wrapperKey = Symbol();
const propKey = Symbol();
function buildProp(option, key) {
  if (!isObject(option) || !!option[propKey])
    return option;
  const { values, required, default: defaultValue, type, validator } = option;
  const _validator = values || validator ? (val) => {
    let valid = false;
    let allowedValues = [];
    if (values) {
      allowedValues = [...values, defaultValue];
      valid || (valid = allowedValues.includes(val));
    }
    if (validator)
      valid || (valid = validator(val));
    if (!valid && allowedValues.length > 0) {
      const allowValuesText = [...new Set(allowedValues)].map((value) => JSON.stringify(value)).join(", ");
      warn(`Invalid prop: validation failed${key ? ` for prop "${key}"` : ""}. Expected one of [${allowValuesText}], got value ${JSON.stringify(val)}.`);
    }
    return valid;
  } : void 0;
  return {
    type: typeof type === "object" && Object.getOwnPropertySymbols(type).includes(wrapperKey) ? type[wrapperKey] : type,
    required: !!required,
    default: defaultValue,
    validator: _validator,
    [propKey]: true
  };
}
const buildProps = (props) => fromPairs_1(Object.entries(props).map(([key, option]) => [
  key,
  buildProp(option, key)
]));
const definePropType = (val) => ({ [wrapperKey]: val });
const componentSize = ["large", "default", "small"];
const configProviderContextKey = Symbol();
function useGlobalConfig(key) {
  const config = inject(configProviderContextKey, {});
  if (key) {
    return isObject(config) && hasOwn(config, key) ? toRef(config, key) : ref(void 0);
  } else {
    return config;
  }
}
buildProp({
  type: String,
  values: ["", ...componentSize],
  default: ""
});
var MapCache = _MapCache;
var FUNC_ERROR_TEXT = "Expected a function";
function memoize$1(func, resolver) {
  if (typeof func != "function" || resolver != null && typeof resolver != "function") {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize$1.Cache || MapCache)();
  return memoized;
}
memoize$1.Cache = MapCache;
var memoize_1 = memoize$1;
var memoize = memoize_1;
var MAX_MEMOIZE_SIZE = 500;
function memoizeCapped$1(func) {
  var result = memoize(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });
  var cache = result.cache;
  return result;
}
var _memoizeCapped = memoizeCapped$1;
var memoizeCapped = _memoizeCapped;
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
var reEscapeChar = /\\(\\)?/g;
memoizeCapped(function(string) {
  var result = [];
  if (string.charCodeAt(0) === 46) {
    result.push("");
  }
  string.replace(rePropName, function(match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, "$1") : number || match);
  });
  return result;
});
var Symbol$1 = _Symbol;
var symbolProto = Symbol$1 ? Symbol$1.prototype : void 0;
symbolProto ? symbolProto.toString : void 0;
buildProps({
  locale: {
    type: definePropType(Object)
  }
});
const EVENT_CODE = {
  tab: "Tab",
  enter: "Enter",
  space: "Space",
  left: "ArrowLeft",
  up: "ArrowUp",
  right: "ArrowRight",
  down: "ArrowDown",
  esc: "Escape",
  delete: "Delete",
  backspace: "Backspace",
  numpadEnter: "NumpadEnter"
};
const modalStack = [];
const closeModal = (e) => {
  if (modalStack.length === 0)
    return;
  if (e.code === EVENT_CODE.esc) {
    e.stopPropagation();
    const topModal = modalStack[modalStack.length - 1];
    topModal.handleClose();
  }
};
if (isClient)
  useEventListener(document, "keydown", closeModal);
const UPDATE_MODEL_EVENT = "update:modelValue";
buildProps({
  modelValue: {
    type: definePropType(Boolean),
    default: null
  },
  "onUpdate:modelValue": Function
});
var top = "top";
var bottom = "bottom";
var right = "right";
var left = "left";
var auto = "auto";
var basePlacements = [top, bottom, right, left];
var start = "start";
var end = "end";
var clippingParents = "clippingParents";
var viewport = "viewport";
var popper = "popper";
var reference = "reference";
var variationPlacements = /* @__PURE__ */ basePlacements.reduce(function(acc, placement) {
  return acc.concat([placement + "-" + start, placement + "-" + end]);
}, []);
var placements = /* @__PURE__ */ [].concat(basePlacements, [auto]).reduce(function(acc, placement) {
  return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
}, []);
var beforeRead = "beforeRead";
var read = "read";
var afterRead = "afterRead";
var beforeMain = "beforeMain";
var main = "main";
var afterMain = "afterMain";
var beforeWrite = "beforeWrite";
var write = "write";
var afterWrite = "afterWrite";
var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];
function getNodeName(element) {
  return element ? (element.nodeName || "").toLowerCase() : null;
}
function getWindow(node) {
  if (node == null) {
    return window;
  }
  if (node.toString() !== "[object Window]") {
    var ownerDocument = node.ownerDocument;
    return ownerDocument ? ownerDocument.defaultView || window : window;
  }
  return node;
}
function isElement(node) {
  var OwnElement = getWindow(node).Element;
  return node instanceof OwnElement || node instanceof Element;
}
function isHTMLElement(node) {
  var OwnElement = getWindow(node).HTMLElement;
  return node instanceof OwnElement || node instanceof HTMLElement;
}
function isShadowRoot(node) {
  if (typeof ShadowRoot === "undefined") {
    return false;
  }
  var OwnElement = getWindow(node).ShadowRoot;
  return node instanceof OwnElement || node instanceof ShadowRoot;
}
function applyStyles(_ref) {
  var state = _ref.state;
  Object.keys(state.elements).forEach(function(name) {
    var style = state.styles[name] || {};
    var attributes = state.attributes[name] || {};
    var element = state.elements[name];
    if (!isHTMLElement(element) || !getNodeName(element)) {
      return;
    }
    Object.assign(element.style, style);
    Object.keys(attributes).forEach(function(name2) {
      var value = attributes[name2];
      if (value === false) {
        element.removeAttribute(name2);
      } else {
        element.setAttribute(name2, value === true ? "" : value);
      }
    });
  });
}
function effect$2(_ref2) {
  var state = _ref2.state;
  var initialStyles = {
    popper: {
      position: state.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  Object.assign(state.elements.popper.style, initialStyles.popper);
  state.styles = initialStyles;
  if (state.elements.arrow) {
    Object.assign(state.elements.arrow.style, initialStyles.arrow);
  }
  return function() {
    Object.keys(state.elements).forEach(function(name) {
      var element = state.elements[name];
      var attributes = state.attributes[name] || {};
      var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]);
      var style = styleProperties.reduce(function(style2, property) {
        style2[property] = "";
        return style2;
      }, {});
      if (!isHTMLElement(element) || !getNodeName(element)) {
        return;
      }
      Object.assign(element.style, style);
      Object.keys(attributes).forEach(function(attribute) {
        element.removeAttribute(attribute);
      });
    });
  };
}
var applyStyles$1 = {
  name: "applyStyles",
  enabled: true,
  phase: "write",
  fn: applyStyles,
  effect: effect$2,
  requires: ["computeStyles"]
};
function getBasePlacement(placement) {
  return placement.split("-")[0];
}
var max = Math.max;
var min = Math.min;
var round = Math.round;
function getUAString() {
  var uaData = navigator.userAgentData;
  if (uaData != null && uaData.brands && Array.isArray(uaData.brands)) {
    return uaData.brands.map(function(item) {
      return item.brand + "/" + item.version;
    }).join(" ");
  }
  return navigator.userAgent;
}
function isLayoutViewport() {
  return !/^((?!chrome|android).)*safari/i.test(getUAString());
}
function getBoundingClientRect(element, includeScale, isFixedStrategy) {
  if (includeScale === void 0) {
    includeScale = false;
  }
  if (isFixedStrategy === void 0) {
    isFixedStrategy = false;
  }
  var clientRect = element.getBoundingClientRect();
  var scaleX = 1;
  var scaleY = 1;
  if (includeScale && isHTMLElement(element)) {
    scaleX = element.offsetWidth > 0 ? round(clientRect.width) / element.offsetWidth || 1 : 1;
    scaleY = element.offsetHeight > 0 ? round(clientRect.height) / element.offsetHeight || 1 : 1;
  }
  var _ref = isElement(element) ? getWindow(element) : window, visualViewport = _ref.visualViewport;
  var addVisualOffsets = !isLayoutViewport() && isFixedStrategy;
  var x = (clientRect.left + (addVisualOffsets && visualViewport ? visualViewport.offsetLeft : 0)) / scaleX;
  var y = (clientRect.top + (addVisualOffsets && visualViewport ? visualViewport.offsetTop : 0)) / scaleY;
  var width = clientRect.width / scaleX;
  var height = clientRect.height / scaleY;
  return {
    width,
    height,
    top: y,
    right: x + width,
    bottom: y + height,
    left: x,
    x,
    y
  };
}
function getLayoutRect(element) {
  var clientRect = getBoundingClientRect(element);
  var width = element.offsetWidth;
  var height = element.offsetHeight;
  if (Math.abs(clientRect.width - width) <= 1) {
    width = clientRect.width;
  }
  if (Math.abs(clientRect.height - height) <= 1) {
    height = clientRect.height;
  }
  return {
    x: element.offsetLeft,
    y: element.offsetTop,
    width,
    height
  };
}
function contains(parent, child) {
  var rootNode = child.getRootNode && child.getRootNode();
  if (parent.contains(child)) {
    return true;
  } else if (rootNode && isShadowRoot(rootNode)) {
    var next = child;
    do {
      if (next && parent.isSameNode(next)) {
        return true;
      }
      next = next.parentNode || next.host;
    } while (next);
  }
  return false;
}
function getComputedStyle(element) {
  return getWindow(element).getComputedStyle(element);
}
function isTableElement(element) {
  return ["table", "td", "th"].indexOf(getNodeName(element)) >= 0;
}
function getDocumentElement(element) {
  return ((isElement(element) ? element.ownerDocument : element.document) || window.document).documentElement;
}
function getParentNode(element) {
  if (getNodeName(element) === "html") {
    return element;
  }
  return element.assignedSlot || element.parentNode || (isShadowRoot(element) ? element.host : null) || getDocumentElement(element);
}
function getTrueOffsetParent(element) {
  if (!isHTMLElement(element) || getComputedStyle(element).position === "fixed") {
    return null;
  }
  return element.offsetParent;
}
function getContainingBlock(element) {
  var isFirefox = /firefox/i.test(getUAString());
  var isIE = /Trident/i.test(getUAString());
  if (isIE && isHTMLElement(element)) {
    var elementCss = getComputedStyle(element);
    if (elementCss.position === "fixed") {
      return null;
    }
  }
  var currentNode = getParentNode(element);
  if (isShadowRoot(currentNode)) {
    currentNode = currentNode.host;
  }
  while (isHTMLElement(currentNode) && ["html", "body"].indexOf(getNodeName(currentNode)) < 0) {
    var css = getComputedStyle(currentNode);
    if (css.transform !== "none" || css.perspective !== "none" || css.contain === "paint" || ["transform", "perspective"].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === "filter" || isFirefox && css.filter && css.filter !== "none") {
      return currentNode;
    } else {
      currentNode = currentNode.parentNode;
    }
  }
  return null;
}
function getOffsetParent(element) {
  var window2 = getWindow(element);
  var offsetParent = getTrueOffsetParent(element);
  while (offsetParent && isTableElement(offsetParent) && getComputedStyle(offsetParent).position === "static") {
    offsetParent = getTrueOffsetParent(offsetParent);
  }
  if (offsetParent && (getNodeName(offsetParent) === "html" || getNodeName(offsetParent) === "body" && getComputedStyle(offsetParent).position === "static")) {
    return window2;
  }
  return offsetParent || getContainingBlock(element) || window2;
}
function getMainAxisFromPlacement(placement) {
  return ["top", "bottom"].indexOf(placement) >= 0 ? "x" : "y";
}
function within(min$1, value, max$1) {
  return max(min$1, min(value, max$1));
}
function withinMaxClamp(min2, value, max2) {
  var v = within(min2, value, max2);
  return v > max2 ? max2 : v;
}
function getFreshSideObject() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function mergePaddingObject(paddingObject) {
  return Object.assign({}, getFreshSideObject(), paddingObject);
}
function expandToHashMap(value, keys2) {
  return keys2.reduce(function(hashMap, key) {
    hashMap[key] = value;
    return hashMap;
  }, {});
}
var toPaddingObject = function toPaddingObject2(padding, state) {
  padding = typeof padding === "function" ? padding(Object.assign({}, state.rects, {
    placement: state.placement
  })) : padding;
  return mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
};
function arrow(_ref) {
  var _state$modifiersData$;
  var state = _ref.state, name = _ref.name, options = _ref.options;
  var arrowElement = state.elements.arrow;
  var popperOffsets2 = state.modifiersData.popperOffsets;
  var basePlacement = getBasePlacement(state.placement);
  var axis = getMainAxisFromPlacement(basePlacement);
  var isVertical = [left, right].indexOf(basePlacement) >= 0;
  var len = isVertical ? "height" : "width";
  if (!arrowElement || !popperOffsets2) {
    return;
  }
  var paddingObject = toPaddingObject(options.padding, state);
  var arrowRect = getLayoutRect(arrowElement);
  var minProp = axis === "y" ? top : left;
  var maxProp = axis === "y" ? bottom : right;
  var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets2[axis] - state.rects.popper[len];
  var startDiff = popperOffsets2[axis] - state.rects.reference[axis];
  var arrowOffsetParent = getOffsetParent(arrowElement);
  var clientSize = arrowOffsetParent ? axis === "y" ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
  var centerToReference = endDiff / 2 - startDiff / 2;
  var min2 = paddingObject[minProp];
  var max2 = clientSize - arrowRect[len] - paddingObject[maxProp];
  var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
  var offset2 = within(min2, center, max2);
  var axisProp = axis;
  state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset2, _state$modifiersData$.centerOffset = offset2 - center, _state$modifiersData$);
}
function effect$1(_ref2) {
  var state = _ref2.state, options = _ref2.options;
  var _options$element = options.element, arrowElement = _options$element === void 0 ? "[data-popper-arrow]" : _options$element;
  if (arrowElement == null) {
    return;
  }
  if (typeof arrowElement === "string") {
    arrowElement = state.elements.popper.querySelector(arrowElement);
    if (!arrowElement) {
      return;
    }
  }
  if (!contains(state.elements.popper, arrowElement)) {
    return;
  }
  state.elements.arrow = arrowElement;
}
var arrow$1 = {
  name: "arrow",
  enabled: true,
  phase: "main",
  fn: arrow,
  effect: effect$1,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function getVariation(placement) {
  return placement.split("-")[1];
}
var unsetSides = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function roundOffsetsByDPR(_ref, win) {
  var x = _ref.x, y = _ref.y;
  var dpr = win.devicePixelRatio || 1;
  return {
    x: round(x * dpr) / dpr || 0,
    y: round(y * dpr) / dpr || 0
  };
}
function mapToStyles(_ref2) {
  var _Object$assign2;
  var popper2 = _ref2.popper, popperRect = _ref2.popperRect, placement = _ref2.placement, variation = _ref2.variation, offsets = _ref2.offsets, position = _ref2.position, gpuAcceleration = _ref2.gpuAcceleration, adaptive = _ref2.adaptive, roundOffsets = _ref2.roundOffsets, isFixed = _ref2.isFixed;
  var _offsets$x = offsets.x, x = _offsets$x === void 0 ? 0 : _offsets$x, _offsets$y = offsets.y, y = _offsets$y === void 0 ? 0 : _offsets$y;
  var _ref3 = typeof roundOffsets === "function" ? roundOffsets({
    x,
    y
  }) : {
    x,
    y
  };
  x = _ref3.x;
  y = _ref3.y;
  var hasX = offsets.hasOwnProperty("x");
  var hasY = offsets.hasOwnProperty("y");
  var sideX = left;
  var sideY = top;
  var win = window;
  if (adaptive) {
    var offsetParent = getOffsetParent(popper2);
    var heightProp = "clientHeight";
    var widthProp = "clientWidth";
    if (offsetParent === getWindow(popper2)) {
      offsetParent = getDocumentElement(popper2);
      if (getComputedStyle(offsetParent).position !== "static" && position === "absolute") {
        heightProp = "scrollHeight";
        widthProp = "scrollWidth";
      }
    }
    offsetParent = offsetParent;
    if (placement === top || (placement === left || placement === right) && variation === end) {
      sideY = bottom;
      var offsetY = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.height : offsetParent[heightProp];
      y -= offsetY - popperRect.height;
      y *= gpuAcceleration ? 1 : -1;
    }
    if (placement === left || (placement === top || placement === bottom) && variation === end) {
      sideX = right;
      var offsetX = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.width : offsetParent[widthProp];
      x -= offsetX - popperRect.width;
      x *= gpuAcceleration ? 1 : -1;
    }
  }
  var commonStyles = Object.assign({
    position
  }, adaptive && unsetSides);
  var _ref4 = roundOffsets === true ? roundOffsetsByDPR({
    x,
    y
  }, getWindow(popper2)) : {
    x,
    y
  };
  x = _ref4.x;
  y = _ref4.y;
  if (gpuAcceleration) {
    var _Object$assign;
    return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? "0" : "", _Object$assign[sideX] = hasX ? "0" : "", _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
  }
  return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : "", _Object$assign2[sideX] = hasX ? x + "px" : "", _Object$assign2.transform = "", _Object$assign2));
}
function computeStyles(_ref5) {
  var state = _ref5.state, options = _ref5.options;
  var _options$gpuAccelerat = options.gpuAcceleration, gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat, _options$adaptive = options.adaptive, adaptive = _options$adaptive === void 0 ? true : _options$adaptive, _options$roundOffsets = options.roundOffsets, roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;
  var commonStyles = {
    placement: getBasePlacement(state.placement),
    variation: getVariation(state.placement),
    popper: state.elements.popper,
    popperRect: state.rects.popper,
    gpuAcceleration,
    isFixed: state.options.strategy === "fixed"
  };
  if (state.modifiersData.popperOffsets != null) {
    state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.popperOffsets,
      position: state.options.strategy,
      adaptive,
      roundOffsets
    })));
  }
  if (state.modifiersData.arrow != null) {
    state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.arrow,
      position: "absolute",
      adaptive: false,
      roundOffsets
    })));
  }
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    "data-popper-placement": state.placement
  });
}
var computeStyles$1 = {
  name: "computeStyles",
  enabled: true,
  phase: "beforeWrite",
  fn: computeStyles,
  data: {}
};
var passive = {
  passive: true
};
function effect(_ref) {
  var state = _ref.state, instance = _ref.instance, options = _ref.options;
  var _options$scroll = options.scroll, scroll = _options$scroll === void 0 ? true : _options$scroll, _options$resize = options.resize, resize = _options$resize === void 0 ? true : _options$resize;
  var window2 = getWindow(state.elements.popper);
  var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);
  if (scroll) {
    scrollParents.forEach(function(scrollParent) {
      scrollParent.addEventListener("scroll", instance.update, passive);
    });
  }
  if (resize) {
    window2.addEventListener("resize", instance.update, passive);
  }
  return function() {
    if (scroll) {
      scrollParents.forEach(function(scrollParent) {
        scrollParent.removeEventListener("scroll", instance.update, passive);
      });
    }
    if (resize) {
      window2.removeEventListener("resize", instance.update, passive);
    }
  };
}
var eventListeners = {
  name: "eventListeners",
  enabled: true,
  phase: "write",
  fn: function fn() {
  },
  effect,
  data: {}
};
var hash$1 = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, function(matched) {
    return hash$1[matched];
  });
}
var hash = {
  start: "end",
  end: "start"
};
function getOppositeVariationPlacement(placement) {
  return placement.replace(/start|end/g, function(matched) {
    return hash[matched];
  });
}
function getWindowScroll(node) {
  var win = getWindow(node);
  var scrollLeft = win.pageXOffset;
  var scrollTop = win.pageYOffset;
  return {
    scrollLeft,
    scrollTop
  };
}
function getWindowScrollBarX(element) {
  return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
}
function getViewportRect(element, strategy) {
  var win = getWindow(element);
  var html = getDocumentElement(element);
  var visualViewport = win.visualViewport;
  var width = html.clientWidth;
  var height = html.clientHeight;
  var x = 0;
  var y = 0;
  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    var layoutViewport = isLayoutViewport();
    if (layoutViewport || !layoutViewport && strategy === "fixed") {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }
  return {
    width,
    height,
    x: x + getWindowScrollBarX(element),
    y
  };
}
function getDocumentRect(element) {
  var _element$ownerDocumen;
  var html = getDocumentElement(element);
  var winScroll = getWindowScroll(element);
  var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
  var width = max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
  var height = max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
  var x = -winScroll.scrollLeft + getWindowScrollBarX(element);
  var y = -winScroll.scrollTop;
  if (getComputedStyle(body || html).direction === "rtl") {
    x += max(html.clientWidth, body ? body.clientWidth : 0) - width;
  }
  return {
    width,
    height,
    x,
    y
  };
}
function isScrollParent(element) {
  var _getComputedStyle = getComputedStyle(element), overflow = _getComputedStyle.overflow, overflowX = _getComputedStyle.overflowX, overflowY = _getComputedStyle.overflowY;
  return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}
function getScrollParent(node) {
  if (["html", "body", "#document"].indexOf(getNodeName(node)) >= 0) {
    return node.ownerDocument.body;
  }
  if (isHTMLElement(node) && isScrollParent(node)) {
    return node;
  }
  return getScrollParent(getParentNode(node));
}
function listScrollParents(element, list) {
  var _element$ownerDocumen;
  if (list === void 0) {
    list = [];
  }
  var scrollParent = getScrollParent(element);
  var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
  var win = getWindow(scrollParent);
  var target = isBody ? [win].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
  var updatedList = list.concat(target);
  return isBody ? updatedList : updatedList.concat(listScrollParents(getParentNode(target)));
}
function rectToClientRect(rect) {
  return Object.assign({}, rect, {
    left: rect.x,
    top: rect.y,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  });
}
function getInnerBoundingClientRect(element, strategy) {
  var rect = getBoundingClientRect(element, false, strategy === "fixed");
  rect.top = rect.top + element.clientTop;
  rect.left = rect.left + element.clientLeft;
  rect.bottom = rect.top + element.clientHeight;
  rect.right = rect.left + element.clientWidth;
  rect.width = element.clientWidth;
  rect.height = element.clientHeight;
  rect.x = rect.left;
  rect.y = rect.top;
  return rect;
}
function getClientRectFromMixedType(element, clippingParent, strategy) {
  return clippingParent === viewport ? rectToClientRect(getViewportRect(element, strategy)) : isElement(clippingParent) ? getInnerBoundingClientRect(clippingParent, strategy) : rectToClientRect(getDocumentRect(getDocumentElement(element)));
}
function getClippingParents(element) {
  var clippingParents2 = listScrollParents(getParentNode(element));
  var canEscapeClipping = ["absolute", "fixed"].indexOf(getComputedStyle(element).position) >= 0;
  var clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element) : element;
  if (!isElement(clipperElement)) {
    return [];
  }
  return clippingParents2.filter(function(clippingParent) {
    return isElement(clippingParent) && contains(clippingParent, clipperElement) && getNodeName(clippingParent) !== "body";
  });
}
function getClippingRect(element, boundary, rootBoundary, strategy) {
  var mainClippingParents = boundary === "clippingParents" ? getClippingParents(element) : [].concat(boundary);
  var clippingParents2 = [].concat(mainClippingParents, [rootBoundary]);
  var firstClippingParent = clippingParents2[0];
  var clippingRect = clippingParents2.reduce(function(accRect, clippingParent) {
    var rect = getClientRectFromMixedType(element, clippingParent, strategy);
    accRect.top = max(rect.top, accRect.top);
    accRect.right = min(rect.right, accRect.right);
    accRect.bottom = min(rect.bottom, accRect.bottom);
    accRect.left = max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromMixedType(element, firstClippingParent, strategy));
  clippingRect.width = clippingRect.right - clippingRect.left;
  clippingRect.height = clippingRect.bottom - clippingRect.top;
  clippingRect.x = clippingRect.left;
  clippingRect.y = clippingRect.top;
  return clippingRect;
}
function computeOffsets(_ref) {
  var reference2 = _ref.reference, element = _ref.element, placement = _ref.placement;
  var basePlacement = placement ? getBasePlacement(placement) : null;
  var variation = placement ? getVariation(placement) : null;
  var commonX = reference2.x + reference2.width / 2 - element.width / 2;
  var commonY = reference2.y + reference2.height / 2 - element.height / 2;
  var offsets;
  switch (basePlacement) {
    case top:
      offsets = {
        x: commonX,
        y: reference2.y - element.height
      };
      break;
    case bottom:
      offsets = {
        x: commonX,
        y: reference2.y + reference2.height
      };
      break;
    case right:
      offsets = {
        x: reference2.x + reference2.width,
        y: commonY
      };
      break;
    case left:
      offsets = {
        x: reference2.x - element.width,
        y: commonY
      };
      break;
    default:
      offsets = {
        x: reference2.x,
        y: reference2.y
      };
  }
  var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;
  if (mainAxis != null) {
    var len = mainAxis === "y" ? "height" : "width";
    switch (variation) {
      case start:
        offsets[mainAxis] = offsets[mainAxis] - (reference2[len] / 2 - element[len] / 2);
        break;
      case end:
        offsets[mainAxis] = offsets[mainAxis] + (reference2[len] / 2 - element[len] / 2);
        break;
    }
  }
  return offsets;
}
function detectOverflow(state, options) {
  if (options === void 0) {
    options = {};
  }
  var _options = options, _options$placement = _options.placement, placement = _options$placement === void 0 ? state.placement : _options$placement, _options$strategy = _options.strategy, strategy = _options$strategy === void 0 ? state.strategy : _options$strategy, _options$boundary = _options.boundary, boundary = _options$boundary === void 0 ? clippingParents : _options$boundary, _options$rootBoundary = _options.rootBoundary, rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary, _options$elementConte = _options.elementContext, elementContext = _options$elementConte === void 0 ? popper : _options$elementConte, _options$altBoundary = _options.altBoundary, altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary, _options$padding = _options.padding, padding = _options$padding === void 0 ? 0 : _options$padding;
  var paddingObject = mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
  var altContext = elementContext === popper ? reference : popper;
  var popperRect = state.rects.popper;
  var element = state.elements[altBoundary ? altContext : elementContext];
  var clippingClientRect = getClippingRect(isElement(element) ? element : element.contextElement || getDocumentElement(state.elements.popper), boundary, rootBoundary, strategy);
  var referenceClientRect = getBoundingClientRect(state.elements.reference);
  var popperOffsets2 = computeOffsets({
    reference: referenceClientRect,
    element: popperRect,
    strategy: "absolute",
    placement
  });
  var popperClientRect = rectToClientRect(Object.assign({}, popperRect, popperOffsets2));
  var elementClientRect = elementContext === popper ? popperClientRect : referenceClientRect;
  var overflowOffsets = {
    top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
    bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
    left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
    right: elementClientRect.right - clippingClientRect.right + paddingObject.right
  };
  var offsetData = state.modifiersData.offset;
  if (elementContext === popper && offsetData) {
    var offset2 = offsetData[placement];
    Object.keys(overflowOffsets).forEach(function(key) {
      var multiply = [right, bottom].indexOf(key) >= 0 ? 1 : -1;
      var axis = [top, bottom].indexOf(key) >= 0 ? "y" : "x";
      overflowOffsets[key] += offset2[axis] * multiply;
    });
  }
  return overflowOffsets;
}
function computeAutoPlacement(state, options) {
  if (options === void 0) {
    options = {};
  }
  var _options = options, placement = _options.placement, boundary = _options.boundary, rootBoundary = _options.rootBoundary, padding = _options.padding, flipVariations = _options.flipVariations, _options$allowedAutoP = _options.allowedAutoPlacements, allowedAutoPlacements = _options$allowedAutoP === void 0 ? placements : _options$allowedAutoP;
  var variation = getVariation(placement);
  var placements$1 = variation ? flipVariations ? variationPlacements : variationPlacements.filter(function(placement2) {
    return getVariation(placement2) === variation;
  }) : basePlacements;
  var allowedPlacements = placements$1.filter(function(placement2) {
    return allowedAutoPlacements.indexOf(placement2) >= 0;
  });
  if (allowedPlacements.length === 0) {
    allowedPlacements = placements$1;
  }
  var overflows = allowedPlacements.reduce(function(acc, placement2) {
    acc[placement2] = detectOverflow(state, {
      placement: placement2,
      boundary,
      rootBoundary,
      padding
    })[getBasePlacement(placement2)];
    return acc;
  }, {});
  return Object.keys(overflows).sort(function(a, b) {
    return overflows[a] - overflows[b];
  });
}
function getExpandedFallbackPlacements(placement) {
  if (getBasePlacement(placement) === auto) {
    return [];
  }
  var oppositePlacement = getOppositePlacement(placement);
  return [getOppositeVariationPlacement(placement), oppositePlacement, getOppositeVariationPlacement(oppositePlacement)];
}
function flip(_ref) {
  var state = _ref.state, options = _ref.options, name = _ref.name;
  if (state.modifiersData[name]._skip) {
    return;
  }
  var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis, specifiedFallbackPlacements = options.fallbackPlacements, padding = options.padding, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, _options$flipVariatio = options.flipVariations, flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio, allowedAutoPlacements = options.allowedAutoPlacements;
  var preferredPlacement = state.options.placement;
  var basePlacement = getBasePlacement(preferredPlacement);
  var isBasePlacement = basePlacement === preferredPlacement;
  var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [getOppositePlacement(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
  var placements2 = [preferredPlacement].concat(fallbackPlacements).reduce(function(acc, placement2) {
    return acc.concat(getBasePlacement(placement2) === auto ? computeAutoPlacement(state, {
      placement: placement2,
      boundary,
      rootBoundary,
      padding,
      flipVariations,
      allowedAutoPlacements
    }) : placement2);
  }, []);
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var checksMap = /* @__PURE__ */ new Map();
  var makeFallbackChecks = true;
  var firstFittingPlacement = placements2[0];
  for (var i = 0; i < placements2.length; i++) {
    var placement = placements2[i];
    var _basePlacement = getBasePlacement(placement);
    var isStartVariation = getVariation(placement) === start;
    var isVertical = [top, bottom].indexOf(_basePlacement) >= 0;
    var len = isVertical ? "width" : "height";
    var overflow = detectOverflow(state, {
      placement,
      boundary,
      rootBoundary,
      altBoundary,
      padding
    });
    var mainVariationSide = isVertical ? isStartVariation ? right : left : isStartVariation ? bottom : top;
    if (referenceRect[len] > popperRect[len]) {
      mainVariationSide = getOppositePlacement(mainVariationSide);
    }
    var altVariationSide = getOppositePlacement(mainVariationSide);
    var checks = [];
    if (checkMainAxis) {
      checks.push(overflow[_basePlacement] <= 0);
    }
    if (checkAltAxis) {
      checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
    }
    if (checks.every(function(check) {
      return check;
    })) {
      firstFittingPlacement = placement;
      makeFallbackChecks = false;
      break;
    }
    checksMap.set(placement, checks);
  }
  if (makeFallbackChecks) {
    var numberOfChecks = flipVariations ? 3 : 1;
    var _loop = function _loop2(_i2) {
      var fittingPlacement = placements2.find(function(placement2) {
        var checks2 = checksMap.get(placement2);
        if (checks2) {
          return checks2.slice(0, _i2).every(function(check) {
            return check;
          });
        }
      });
      if (fittingPlacement) {
        firstFittingPlacement = fittingPlacement;
        return "break";
      }
    };
    for (var _i = numberOfChecks; _i > 0; _i--) {
      var _ret = _loop(_i);
      if (_ret === "break")
        break;
    }
  }
  if (state.placement !== firstFittingPlacement) {
    state.modifiersData[name]._skip = true;
    state.placement = firstFittingPlacement;
    state.reset = true;
  }
}
var flip$1 = {
  name: "flip",
  enabled: true,
  phase: "main",
  fn: flip,
  requiresIfExists: ["offset"],
  data: {
    _skip: false
  }
};
function getSideOffsets(overflow, rect, preventedOffsets) {
  if (preventedOffsets === void 0) {
    preventedOffsets = {
      x: 0,
      y: 0
    };
  }
  return {
    top: overflow.top - rect.height - preventedOffsets.y,
    right: overflow.right - rect.width + preventedOffsets.x,
    bottom: overflow.bottom - rect.height + preventedOffsets.y,
    left: overflow.left - rect.width - preventedOffsets.x
  };
}
function isAnySideFullyClipped(overflow) {
  return [top, right, bottom, left].some(function(side) {
    return overflow[side] >= 0;
  });
}
function hide(_ref) {
  var state = _ref.state, name = _ref.name;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var preventedOffsets = state.modifiersData.preventOverflow;
  var referenceOverflow = detectOverflow(state, {
    elementContext: "reference"
  });
  var popperAltOverflow = detectOverflow(state, {
    altBoundary: true
  });
  var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
  var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
  var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
  var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
  state.modifiersData[name] = {
    referenceClippingOffsets,
    popperEscapeOffsets,
    isReferenceHidden,
    hasPopperEscaped
  };
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    "data-popper-reference-hidden": isReferenceHidden,
    "data-popper-escaped": hasPopperEscaped
  });
}
var hide$1 = {
  name: "hide",
  enabled: true,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: hide
};
function distanceAndSkiddingToXY(placement, rects, offset2) {
  var basePlacement = getBasePlacement(placement);
  var invertDistance = [left, top].indexOf(basePlacement) >= 0 ? -1 : 1;
  var _ref = typeof offset2 === "function" ? offset2(Object.assign({}, rects, {
    placement
  })) : offset2, skidding = _ref[0], distance = _ref[1];
  skidding = skidding || 0;
  distance = (distance || 0) * invertDistance;
  return [left, right].indexOf(basePlacement) >= 0 ? {
    x: distance,
    y: skidding
  } : {
    x: skidding,
    y: distance
  };
}
function offset(_ref2) {
  var state = _ref2.state, options = _ref2.options, name = _ref2.name;
  var _options$offset = options.offset, offset2 = _options$offset === void 0 ? [0, 0] : _options$offset;
  var data = placements.reduce(function(acc, placement) {
    acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset2);
    return acc;
  }, {});
  var _data$state$placement = data[state.placement], x = _data$state$placement.x, y = _data$state$placement.y;
  if (state.modifiersData.popperOffsets != null) {
    state.modifiersData.popperOffsets.x += x;
    state.modifiersData.popperOffsets.y += y;
  }
  state.modifiersData[name] = data;
}
var offset$1 = {
  name: "offset",
  enabled: true,
  phase: "main",
  requires: ["popperOffsets"],
  fn: offset
};
function popperOffsets(_ref) {
  var state = _ref.state, name = _ref.name;
  state.modifiersData[name] = computeOffsets({
    reference: state.rects.reference,
    element: state.rects.popper,
    strategy: "absolute",
    placement: state.placement
  });
}
var popperOffsets$1 = {
  name: "popperOffsets",
  enabled: true,
  phase: "read",
  fn: popperOffsets,
  data: {}
};
function getAltAxis(axis) {
  return axis === "x" ? "y" : "x";
}
function preventOverflow(_ref) {
  var state = _ref.state, options = _ref.options, name = _ref.name;
  var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, padding = options.padding, _options$tether = options.tether, tether = _options$tether === void 0 ? true : _options$tether, _options$tetherOffset = options.tetherOffset, tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
  var overflow = detectOverflow(state, {
    boundary,
    rootBoundary,
    padding,
    altBoundary
  });
  var basePlacement = getBasePlacement(state.placement);
  var variation = getVariation(state.placement);
  var isBasePlacement = !variation;
  var mainAxis = getMainAxisFromPlacement(basePlacement);
  var altAxis = getAltAxis(mainAxis);
  var popperOffsets2 = state.modifiersData.popperOffsets;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var tetherOffsetValue = typeof tetherOffset === "function" ? tetherOffset(Object.assign({}, state.rects, {
    placement: state.placement
  })) : tetherOffset;
  var normalizedTetherOffsetValue = typeof tetherOffsetValue === "number" ? {
    mainAxis: tetherOffsetValue,
    altAxis: tetherOffsetValue
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, tetherOffsetValue);
  var offsetModifierState = state.modifiersData.offset ? state.modifiersData.offset[state.placement] : null;
  var data = {
    x: 0,
    y: 0
  };
  if (!popperOffsets2) {
    return;
  }
  if (checkMainAxis) {
    var _offsetModifierState$;
    var mainSide = mainAxis === "y" ? top : left;
    var altSide = mainAxis === "y" ? bottom : right;
    var len = mainAxis === "y" ? "height" : "width";
    var offset2 = popperOffsets2[mainAxis];
    var min$1 = offset2 + overflow[mainSide];
    var max$1 = offset2 - overflow[altSide];
    var additive = tether ? -popperRect[len] / 2 : 0;
    var minLen = variation === start ? referenceRect[len] : popperRect[len];
    var maxLen = variation === start ? -popperRect[len] : -referenceRect[len];
    var arrowElement = state.elements.arrow;
    var arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {
      width: 0,
      height: 0
    };
    var arrowPaddingObject = state.modifiersData["arrow#persistent"] ? state.modifiersData["arrow#persistent"].padding : getFreshSideObject();
    var arrowPaddingMin = arrowPaddingObject[mainSide];
    var arrowPaddingMax = arrowPaddingObject[altSide];
    var arrowLen = within(0, referenceRect[len], arrowRect[len]);
    var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis : minLen - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis;
    var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis : maxLen + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis;
    var arrowOffsetParent = state.elements.arrow && getOffsetParent(state.elements.arrow);
    var clientOffset = arrowOffsetParent ? mainAxis === "y" ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
    var offsetModifierValue = (_offsetModifierState$ = offsetModifierState == null ? void 0 : offsetModifierState[mainAxis]) != null ? _offsetModifierState$ : 0;
    var tetherMin = offset2 + minOffset - offsetModifierValue - clientOffset;
    var tetherMax = offset2 + maxOffset - offsetModifierValue;
    var preventedOffset = within(tether ? min(min$1, tetherMin) : min$1, offset2, tether ? max(max$1, tetherMax) : max$1);
    popperOffsets2[mainAxis] = preventedOffset;
    data[mainAxis] = preventedOffset - offset2;
  }
  if (checkAltAxis) {
    var _offsetModifierState$2;
    var _mainSide = mainAxis === "x" ? top : left;
    var _altSide = mainAxis === "x" ? bottom : right;
    var _offset = popperOffsets2[altAxis];
    var _len = altAxis === "y" ? "height" : "width";
    var _min = _offset + overflow[_mainSide];
    var _max = _offset - overflow[_altSide];
    var isOriginSide = [top, left].indexOf(basePlacement) !== -1;
    var _offsetModifierValue = (_offsetModifierState$2 = offsetModifierState == null ? void 0 : offsetModifierState[altAxis]) != null ? _offsetModifierState$2 : 0;
    var _tetherMin = isOriginSide ? _min : _offset - referenceRect[_len] - popperRect[_len] - _offsetModifierValue + normalizedTetherOffsetValue.altAxis;
    var _tetherMax = isOriginSide ? _offset + referenceRect[_len] + popperRect[_len] - _offsetModifierValue - normalizedTetherOffsetValue.altAxis : _max;
    var _preventedOffset = tether && isOriginSide ? withinMaxClamp(_tetherMin, _offset, _tetherMax) : within(tether ? _tetherMin : _min, _offset, tether ? _tetherMax : _max);
    popperOffsets2[altAxis] = _preventedOffset;
    data[altAxis] = _preventedOffset - _offset;
  }
  state.modifiersData[name] = data;
}
var preventOverflow$1 = {
  name: "preventOverflow",
  enabled: true,
  phase: "main",
  fn: preventOverflow,
  requiresIfExists: ["offset"]
};
function getHTMLElementScroll(element) {
  return {
    scrollLeft: element.scrollLeft,
    scrollTop: element.scrollTop
  };
}
function getNodeScroll(node) {
  if (node === getWindow(node) || !isHTMLElement(node)) {
    return getWindowScroll(node);
  } else {
    return getHTMLElementScroll(node);
  }
}
function isElementScaled(element) {
  var rect = element.getBoundingClientRect();
  var scaleX = round(rect.width) / element.offsetWidth || 1;
  var scaleY = round(rect.height) / element.offsetHeight || 1;
  return scaleX !== 1 || scaleY !== 1;
}
function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
  if (isFixed === void 0) {
    isFixed = false;
  }
  var isOffsetParentAnElement = isHTMLElement(offsetParent);
  var offsetParentIsScaled = isHTMLElement(offsetParent) && isElementScaled(offsetParent);
  var documentElement = getDocumentElement(offsetParent);
  var rect = getBoundingClientRect(elementOrVirtualElement, offsetParentIsScaled, isFixed);
  var scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  var offsets = {
    x: 0,
    y: 0
  };
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== "body" || isScrollParent(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isHTMLElement(offsetParent)) {
      offsets = getBoundingClientRect(offsetParent, true);
      offsets.x += offsetParent.clientLeft;
      offsets.y += offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }
  return {
    x: rect.left + scroll.scrollLeft - offsets.x,
    y: rect.top + scroll.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height
  };
}
function order(modifiers) {
  var map = /* @__PURE__ */ new Map();
  var visited = /* @__PURE__ */ new Set();
  var result = [];
  modifiers.forEach(function(modifier) {
    map.set(modifier.name, modifier);
  });
  function sort(modifier) {
    visited.add(modifier.name);
    var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
    requires.forEach(function(dep) {
      if (!visited.has(dep)) {
        var depModifier = map.get(dep);
        if (depModifier) {
          sort(depModifier);
        }
      }
    });
    result.push(modifier);
  }
  modifiers.forEach(function(modifier) {
    if (!visited.has(modifier.name)) {
      sort(modifier);
    }
  });
  return result;
}
function orderModifiers(modifiers) {
  var orderedModifiers = order(modifiers);
  return modifierPhases.reduce(function(acc, phase) {
    return acc.concat(orderedModifiers.filter(function(modifier) {
      return modifier.phase === phase;
    }));
  }, []);
}
function debounce(fn2) {
  var pending;
  return function() {
    if (!pending) {
      pending = new Promise(function(resolve) {
        Promise.resolve().then(function() {
          pending = void 0;
          resolve(fn2());
        });
      });
    }
    return pending;
  };
}
function mergeByName(modifiers) {
  var merged = modifiers.reduce(function(merged2, current) {
    var existing = merged2[current.name];
    merged2[current.name] = existing ? Object.assign({}, existing, current, {
      options: Object.assign({}, existing.options, current.options),
      data: Object.assign({}, existing.data, current.data)
    }) : current;
    return merged2;
  }, {});
  return Object.keys(merged).map(function(key) {
    return merged[key];
  });
}
var DEFAULT_OPTIONS = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function areValidElements() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  return !args.some(function(element) {
    return !(element && typeof element.getBoundingClientRect === "function");
  });
}
function popperGenerator(generatorOptions) {
  if (generatorOptions === void 0) {
    generatorOptions = {};
  }
  var _generatorOptions = generatorOptions, _generatorOptions$def = _generatorOptions.defaultModifiers, defaultModifiers2 = _generatorOptions$def === void 0 ? [] : _generatorOptions$def, _generatorOptions$def2 = _generatorOptions.defaultOptions, defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
  return function createPopper2(reference2, popper2, options) {
    if (options === void 0) {
      options = defaultOptions;
    }
    var state = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
      modifiersData: {},
      elements: {
        reference: reference2,
        popper: popper2
      },
      attributes: {},
      styles: {}
    };
    var effectCleanupFns = [];
    var isDestroyed = false;
    var instance = {
      state,
      setOptions: function setOptions(setOptionsAction) {
        var options2 = typeof setOptionsAction === "function" ? setOptionsAction(state.options) : setOptionsAction;
        cleanupModifierEffects();
        state.options = Object.assign({}, defaultOptions, state.options, options2);
        state.scrollParents = {
          reference: isElement(reference2) ? listScrollParents(reference2) : reference2.contextElement ? listScrollParents(reference2.contextElement) : [],
          popper: listScrollParents(popper2)
        };
        var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers2, state.options.modifiers)));
        state.orderedModifiers = orderedModifiers.filter(function(m) {
          return m.enabled;
        });
        runModifierEffects();
        return instance.update();
      },
      forceUpdate: function forceUpdate() {
        if (isDestroyed) {
          return;
        }
        var _state$elements = state.elements, reference3 = _state$elements.reference, popper3 = _state$elements.popper;
        if (!areValidElements(reference3, popper3)) {
          return;
        }
        state.rects = {
          reference: getCompositeRect(reference3, getOffsetParent(popper3), state.options.strategy === "fixed"),
          popper: getLayoutRect(popper3)
        };
        state.reset = false;
        state.placement = state.options.placement;
        state.orderedModifiers.forEach(function(modifier) {
          return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
        });
        for (var index = 0; index < state.orderedModifiers.length; index++) {
          if (state.reset === true) {
            state.reset = false;
            index = -1;
            continue;
          }
          var _state$orderedModifie = state.orderedModifiers[index], fn2 = _state$orderedModifie.fn, _state$orderedModifie2 = _state$orderedModifie.options, _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2, name = _state$orderedModifie.name;
          if (typeof fn2 === "function") {
            state = fn2({
              state,
              options: _options,
              name,
              instance
            }) || state;
          }
        }
      },
      update: debounce(function() {
        return new Promise(function(resolve) {
          instance.forceUpdate();
          resolve(state);
        });
      }),
      destroy: function destroy() {
        cleanupModifierEffects();
        isDestroyed = true;
      }
    };
    if (!areValidElements(reference2, popper2)) {
      return instance;
    }
    instance.setOptions(options).then(function(state2) {
      if (!isDestroyed && options.onFirstUpdate) {
        options.onFirstUpdate(state2);
      }
    });
    function runModifierEffects() {
      state.orderedModifiers.forEach(function(_ref3) {
        var name = _ref3.name, _ref3$options = _ref3.options, options2 = _ref3$options === void 0 ? {} : _ref3$options, effect2 = _ref3.effect;
        if (typeof effect2 === "function") {
          var cleanupFn = effect2({
            state,
            name,
            instance,
            options: options2
          });
          var noopFn = function noopFn2() {
          };
          effectCleanupFns.push(cleanupFn || noopFn);
        }
      });
    }
    function cleanupModifierEffects() {
      effectCleanupFns.forEach(function(fn2) {
        return fn2();
      });
      effectCleanupFns = [];
    }
    return instance;
  };
}
var defaultModifiers = [eventListeners, popperOffsets$1, computeStyles$1, applyStyles$1, offset$1, flip$1, preventOverflow$1, arrow$1, hide$1];
var createPopper = /* @__PURE__ */ popperGenerator({
  defaultModifiers
});
const nodeList = /* @__PURE__ */ new Map();
let startClick;
if (isClient) {
  on(document, "mousedown", (e) => startClick = e);
  on(document, "mouseup", (e) => {
    for (const handlers of nodeList.values()) {
      for (const { documentHandler } of handlers) {
        documentHandler(e, startClick);
      }
    }
  });
}
function createDocumentHandler(el, binding) {
  let excludes = [];
  if (Array.isArray(binding.arg)) {
    excludes = binding.arg;
  } else if (binding.arg instanceof HTMLElement) {
    excludes.push(binding.arg);
  }
  return function(mouseup, mousedown) {
    const popperRef = binding.instance.popperRef;
    const mouseUpTarget = mouseup.target;
    const mouseDownTarget = mousedown == null ? void 0 : mousedown.target;
    const isBound = !binding || !binding.instance;
    const isTargetExists = !mouseUpTarget || !mouseDownTarget;
    const isContainedByEl = el.contains(mouseUpTarget) || el.contains(mouseDownTarget);
    const isSelf = el === mouseUpTarget;
    const isTargetExcluded = excludes.length && excludes.some((item) => item == null ? void 0 : item.contains(mouseUpTarget)) || excludes.length && excludes.includes(mouseDownTarget);
    const isContainedByPopper = popperRef && (popperRef.contains(mouseUpTarget) || popperRef.contains(mouseDownTarget));
    if (isBound || isTargetExists || isContainedByEl || isSelf || isTargetExcluded || isContainedByPopper) {
      return;
    }
    binding.value(mouseup, mousedown);
  };
}
const ClickOutside = {
  beforeMount(el, binding) {
    if (!nodeList.has(el)) {
      nodeList.set(el, []);
    }
    nodeList.get(el).push({
      documentHandler: createDocumentHandler(el, binding),
      bindingFn: binding.value
    });
  },
  updated(el, binding) {
    if (!nodeList.has(el)) {
      nodeList.set(el, []);
    }
    const handlers = nodeList.get(el);
    const oldHandlerIndex = handlers.findIndex((item) => item.bindingFn === binding.oldValue);
    const newHandler = {
      documentHandler: createDocumentHandler(el, binding),
      bindingFn: binding.value
    };
    if (oldHandlerIndex >= 0) {
      handlers.splice(oldHandlerIndex, 1, newHandler);
    } else {
      handlers.push(newHandler);
    }
  },
  unmounted(el) {
    nodeList.delete(el);
  }
};
var c = !!(typeof window < "u" && window.document && window.document.createElement), U = { canUseDOM: c, canUseWorkers: typeof Worker < "u", canUseEventListeners: c && !!(window.addEventListener || window.attachEvent), canUseViewport: c && !!window.screen, isInWorker: !c }, h = U;
h.canUseDOM && (document.implementation && document.implementation.hasFeature && document.implementation.hasFeature("", "") !== true);
/**
* Checks if an event is supported in the current execution environment.
*
* NOTE: This will not work correctly for non-generic events such as `change`,
* `reset`, `load`, `error`, and `select`.
*
* Borrows from Modernizr.
*
* @param {string} eventNameSuffix Event name, e.g. "click".
* @param {?boolean} capture Check if the capture phase is supported.
* @return {boolean} True if the event is supported.
* @internal
* @license Modernizr 3.0.0pre (Custom Build) | MIT
*/
const TEMPLATE = "template";
const isFragment = (node) => isVNode(node) && node.type === Fragment;
const isComment = (node) => node.type === Comment;
const isTemplate = (node) => node.type === TEMPLATE;
function getChildren(node, depth) {
  if (isComment(node))
    return;
  if (isFragment(node) || isTemplate(node)) {
    return depth > 0 ? getFirstValidNode(node.children, depth - 1) : void 0;
  }
  return node;
}
const getFirstValidNode = (nodes, maxDepth = 3) => {
  if (Array.isArray(nodes)) {
    return getChildren(nodes[0], maxDepth);
  } else {
    return getChildren(nodes, maxDepth);
  }
};
const onTouchMove = (e) => {
  e.preventDefault();
  e.stopPropagation();
};
const onModalClick = () => {
  PopupManager == null ? void 0 : PopupManager.doOnModalClick();
};
let hasModal = false;
const getModal = function() {
  if (!isClient)
    return void 0;
  let modalDom = PopupManager.modalDom;
  if (modalDom) {
    hasModal = true;
  } else {
    hasModal = false;
    modalDom = document.createElement("div");
    PopupManager.modalDom = modalDom;
    on(modalDom, "touchmove", onTouchMove);
    on(modalDom, "click", onModalClick);
  }
  return modalDom;
};
const instances = {};
const PopupManager = {
  modalFade: true,
  modalDom: void 0,
  globalInitialZIndex: 2e3,
  zIndex: 0,
  getInitialZIndex() {
    var _a2;
    if (!getCurrentInstance())
      return this.globalInitialZIndex;
    return (_a2 = useGlobalConfig("zIndex").value) != null ? _a2 : this.globalInitialZIndex;
  },
  getInstance(id) {
    return instances[id];
  },
  register(id, instance) {
    if (id && instance) {
      instances[id] = instance;
    }
  },
  deregister(id) {
    if (id) {
      instances[id] = null;
      delete instances[id];
    }
  },
  nextZIndex() {
    return this.getInitialZIndex() + ++this.zIndex;
  },
  modalStack: [],
  doOnModalClick() {
    const topItem = PopupManager.modalStack[PopupManager.modalStack.length - 1];
    if (!topItem)
      return;
    const instance = PopupManager.getInstance(topItem.id);
    if (instance && instance.closeOnClickModal.value) {
      instance.close();
    }
  },
  openModal(id, zIndex, dom, modalClass, modalFade) {
    if (!isClient)
      return;
    if (!id || zIndex === void 0)
      return;
    this.modalFade = modalFade;
    const modalStack2 = this.modalStack;
    for (let i = 0, j = modalStack2.length; i < j; i++) {
      const item = modalStack2[i];
      if (item.id === id) {
        return;
      }
    }
    const modalDom = getModal();
    addClass(modalDom, "v-modal");
    if (this.modalFade && !hasModal) {
      addClass(modalDom, "v-modal-enter");
    }
    if (modalClass) {
      const classArr = modalClass.trim().split(/\s+/);
      classArr.forEach((item) => addClass(modalDom, item));
    }
    setTimeout(() => {
      removeClass(modalDom, "v-modal-enter");
    }, 200);
    if (dom && dom.parentNode && dom.parentNode.nodeType !== 11) {
      dom.parentNode.appendChild(modalDom);
    } else {
      document.body.appendChild(modalDom);
    }
    if (zIndex) {
      modalDom.style.zIndex = String(zIndex);
    }
    modalDom.tabIndex = 0;
    modalDom.style.display = "";
    this.modalStack.push({ id, zIndex, modalClass });
  },
  closeModal(id) {
    const modalStack2 = this.modalStack;
    const modalDom = getModal();
    if (modalStack2.length > 0) {
      const topItem = modalStack2[modalStack2.length - 1];
      if (topItem.id === id) {
        if (topItem.modalClass) {
          const classArr = topItem.modalClass.trim().split(/\s+/);
          classArr.forEach((item) => removeClass(modalDom, item));
        }
        modalStack2.pop();
        if (modalStack2.length > 0) {
          modalDom.style.zIndex = `${modalStack2[modalStack2.length - 1].zIndex}`;
        }
      } else {
        for (let i = modalStack2.length - 1; i >= 0; i--) {
          if (modalStack2[i].id === id) {
            modalStack2.splice(i, 1);
            break;
          }
        }
      }
    }
    if (modalStack2.length === 0) {
      if (this.modalFade) {
        addClass(modalDom, "v-modal-leave");
      }
      setTimeout(() => {
        if (modalStack2.length === 0) {
          if (modalDom.parentNode)
            modalDom.parentNode.removeChild(modalDom);
          modalDom.style.display = "none";
          PopupManager.modalDom = void 0;
        }
        removeClass(modalDom, "v-modal-leave");
      }, 200);
    }
  }
};
const getTopPopup = function() {
  if (!isClient)
    return;
  if (PopupManager.modalStack.length > 0) {
    const topPopup = PopupManager.modalStack[PopupManager.modalStack.length - 1];
    if (!topPopup)
      return;
    const instance = PopupManager.getInstance(topPopup.id);
    return instance;
  }
};
if (isClient) {
  window.addEventListener("keydown", function(event) {
    if (event.code === EVENT_CODE.esc) {
      const topPopup = getTopPopup();
      if (topPopup && topPopup.closeOnPressEscape.value) {
        topPopup.handleClose ? topPopup.handleClose() : topPopup.handleAction ? topPopup.handleAction("cancel") : topPopup.close();
      }
    }
  });
}
function buildModifier(props, externalModifiers = []) {
  const { arrow: arrow2, arrowOffset, offset: offset2, gpuAcceleration, fallbackPlacements } = props;
  const modifiers = [
    {
      name: "offset",
      options: {
        offset: [0, offset2 != null ? offset2 : 12]
      }
    },
    {
      name: "preventOverflow",
      options: {
        padding: {
          top: 2,
          bottom: 2,
          left: 5,
          right: 5
        }
      }
    },
    {
      name: "flip",
      options: {
        padding: 5,
        fallbackPlacements: fallbackPlacements != null ? fallbackPlacements : []
      }
    },
    {
      name: "computeStyles",
      options: {
        gpuAcceleration,
        adaptive: gpuAcceleration
      }
    }
  ];
  if (arrow2) {
    modifiers.push({
      name: "arrow",
      options: {
        element: arrow2,
        padding: arrowOffset != null ? arrowOffset : 5
      }
    });
  }
  modifiers.push(...externalModifiers);
  return modifiers;
}
function usePopperOptions(props, state) {
  return computed(() => {
    var _a2;
    return __spreadProps(__spreadValues({
      placement: props.placement
    }, props.popperOptions), {
      modifiers: buildModifier({
        arrow: state.arrow.value,
        arrowOffset: props.arrowOffset,
        offset: props.offset,
        gpuAcceleration: props.gpuAcceleration,
        fallbackPlacements: props.fallbackPlacements
      }, (_a2 = props.popperOptions) == null ? void 0 : _a2.modifiers)
    });
  });
}
const DEFAULT_FALLBACK_PLACEMENTS = [];
var popperDefaultProps = {
  arrowOffset: {
    type: Number,
    default: 5
  },
  appendToBody: {
    type: Boolean,
    default: true
  },
  autoClose: {
    type: Number,
    default: 0
  },
  boundariesPadding: {
    type: Number,
    default: 0
  },
  content: {
    type: String,
    default: ""
  },
  class: {
    type: String,
    default: ""
  },
  style: Object,
  hideAfter: {
    type: Number,
    default: 200
  },
  cutoff: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  effect: {
    type: String,
    default: "dark"
  },
  enterable: {
    type: Boolean,
    default: true
  },
  manualMode: {
    type: Boolean,
    default: false
  },
  showAfter: {
    type: Number,
    default: 0
  },
  offset: {
    type: Number,
    default: 12
  },
  placement: {
    type: String,
    default: "bottom"
  },
  popperClass: {
    type: String,
    default: ""
  },
  pure: {
    type: Boolean,
    default: false
  },
  popperOptions: {
    type: Object,
    default: () => null
  },
  showArrow: {
    type: Boolean,
    default: true
  },
  strategy: {
    type: String,
    default: "fixed"
  },
  transition: {
    type: String,
    default: "el-fade-in-linear"
  },
  trigger: {
    type: [String, Array],
    default: "hover"
  },
  visible: {
    type: Boolean,
    default: void 0
  },
  stopPopperMouseEvent: {
    type: Boolean,
    default: true
  },
  gpuAcceleration: {
    type: Boolean,
    default: true
  },
  fallbackPlacements: {
    type: Array,
    default: DEFAULT_FALLBACK_PLACEMENTS
  }
};
const UPDATE_VISIBLE_EVENT$1 = "update:visible";
function usePopper(props, { emit }) {
  const arrowRef = ref(null);
  const triggerRef = ref(null);
  const popperRef = ref(null);
  const popperId = `el-popper-${generateId()}`;
  let popperInstance = null;
  let showTimer = null;
  let hideTimer = null;
  let triggerFocused = false;
  const isManualMode = () => props.manualMode || props.trigger === "manual";
  const popperStyle = ref({ zIndex: PopupManager.nextZIndex() });
  const popperOptions = usePopperOptions(props, {
    arrow: arrowRef
  });
  const state = reactive({
    visible: !!props.visible
  });
  const visibility = computed({
    get() {
      if (props.disabled) {
        return false;
      } else {
        return isBool(props.visible) ? props.visible : state.visible;
      }
    },
    set(val) {
      if (isManualMode())
        return;
      isBool(props.visible) ? emit(UPDATE_VISIBLE_EVENT$1, val) : state.visible = val;
    }
  });
  function _show() {
    if (props.autoClose > 0) {
      hideTimer = window.setTimeout(() => {
        _hide();
      }, props.autoClose);
    }
    visibility.value = true;
  }
  function _hide() {
    visibility.value = false;
  }
  function clearTimers() {
    clearTimeout(showTimer);
    clearTimeout(hideTimer);
  }
  const show = () => {
    if (isManualMode() || props.disabled)
      return;
    clearTimers();
    if (props.showAfter === 0) {
      _show();
    } else {
      showTimer = window.setTimeout(() => {
        _show();
      }, props.showAfter);
    }
  };
  const hide2 = () => {
    if (isManualMode())
      return;
    clearTimers();
    if (props.hideAfter > 0) {
      hideTimer = window.setTimeout(() => {
        close();
      }, props.hideAfter);
    } else {
      close();
    }
  };
  const close = () => {
    _hide();
    if (props.disabled) {
      doDestroy(true);
    }
  };
  function onPopperMouseEnter() {
    if (props.enterable && props.trigger !== "click") {
      clearTimeout(hideTimer);
    }
  }
  function onPopperMouseLeave() {
    const { trigger } = props;
    const shouldPrevent = isString(trigger) && (trigger === "click" || trigger === "focus") || trigger.length === 1 && (trigger[0] === "click" || trigger[0] === "focus");
    if (shouldPrevent)
      return;
    hide2();
  }
  function initializePopper() {
    if (!unref(visibility)) {
      return;
    }
    const unwrappedTrigger = unref(triggerRef);
    const _trigger = isHTMLElement$1(unwrappedTrigger) ? unwrappedTrigger : unwrappedTrigger.$el;
    popperInstance = createPopper(_trigger, unref(popperRef), unref(popperOptions));
    popperInstance.update();
  }
  function doDestroy(forceDestroy) {
    if (!popperInstance || unref(visibility) && !forceDestroy)
      return;
    detachPopper();
  }
  function detachPopper() {
    var _a2;
    (_a2 = popperInstance == null ? void 0 : popperInstance.destroy) == null ? void 0 : _a2.call(popperInstance);
    popperInstance = null;
  }
  const events = {};
  function update() {
    if (!unref(visibility)) {
      return;
    }
    if (popperInstance) {
      popperInstance.update();
    } else {
      initializePopper();
    }
  }
  function onVisibilityChange(toState) {
    if (toState) {
      popperStyle.value.zIndex = PopupManager.nextZIndex();
      if (popperInstance) {
        popperInstance.update();
      } else {
        initializePopper();
      }
    }
  }
  if (!isManualMode()) {
    const toggleState = () => {
      if (unref(visibility)) {
        hide2();
      } else {
        show();
      }
    };
    const popperEventsHandler = (e) => {
      e.stopPropagation();
      switch (e.type) {
        case "click": {
          if (triggerFocused) {
            triggerFocused = false;
          } else {
            toggleState();
          }
          break;
        }
        case "mouseenter": {
          show();
          break;
        }
        case "mouseleave": {
          hide2();
          break;
        }
        case "focus": {
          triggerFocused = true;
          show();
          break;
        }
        case "blur": {
          triggerFocused = false;
          hide2();
          break;
        }
      }
    };
    const triggerEventsMap = {
      click: ["onClick"],
      hover: ["onMouseenter", "onMouseleave"],
      focus: ["onFocus", "onBlur"]
    };
    const mapEvents = (t) => {
      triggerEventsMap[t].forEach((event) => {
        events[event] = popperEventsHandler;
      });
    };
    if (isArray(props.trigger)) {
      Object.values(props.trigger).forEach(mapEvents);
    } else {
      mapEvents(props.trigger);
    }
  }
  watch(popperOptions, (val) => {
    if (!popperInstance)
      return;
    popperInstance.setOptions(val);
    popperInstance.update();
  });
  watch(visibility, onVisibilityChange);
  return {
    update,
    doDestroy,
    show,
    hide: hide2,
    onPopperMouseEnter,
    onPopperMouseLeave,
    onAfterEnter: () => {
      emit("after-enter");
    },
    onAfterLeave: () => {
      detachPopper();
      emit("after-leave");
    },
    onBeforeEnter: () => {
      emit("before-enter");
    },
    onBeforeLeave: () => {
      emit("before-leave");
    },
    initializePopper,
    isManualMode,
    arrowRef,
    events,
    popperId,
    popperInstance,
    popperRef,
    popperStyle,
    triggerRef,
    visibility
  };
}
function renderPopper(props, children) {
  const {
    effect: effect2,
    name,
    stopPopperMouseEvent,
    popperClass,
    popperStyle,
    popperRef,
    pure,
    popperId,
    visibility,
    onMouseenter,
    onMouseleave,
    onAfterEnter,
    onAfterLeave,
    onBeforeEnter,
    onBeforeLeave
  } = props;
  const kls = [popperClass, "el-popper", `is-${effect2}`, pure ? "is-pure" : ""];
  const mouseUpAndDown = stopPopperMouseEvent ? stop : NOOP;
  return h$1(Transition, {
    name,
    onAfterEnter,
    onAfterLeave,
    onBeforeEnter,
    onBeforeLeave
  }, {
    default: withCtx(() => [
      withDirectives(h$1("div", {
        "aria-hidden": String(!visibility),
        class: kls,
        style: popperStyle != null ? popperStyle : {},
        id: popperId,
        ref: popperRef != null ? popperRef : "popperRef",
        role: "tooltip",
        onMouseenter,
        onMouseleave,
        onClick: stop,
        onMousedown: mouseUpAndDown,
        onMouseup: mouseUpAndDown
      }, children), [[vShow, visibility]])
    ])
  });
}
function renderTrigger(trigger, extraProps) {
  const firstElement = getFirstValidNode(trigger, 1);
  if (!firstElement)
    throwError("renderTrigger", "trigger expects single rooted node");
  return cloneVNode(firstElement, extraProps, true);
}
function renderArrow(showArrow) {
  return showArrow ? h$1("div", {
    ref: "arrowRef",
    class: "el-popper__arrow",
    "data-popper-arrow": ""
  }, null) : h$1(Comment, null, "");
}
const compName = "ElPopper";
const UPDATE_VISIBLE_EVENT = "update:visible";
const _sfc_main$2 = defineComponent({
  name: compName,
  props: popperDefaultProps,
  emits: [
    UPDATE_VISIBLE_EVENT,
    "after-enter",
    "after-leave",
    "before-enter",
    "before-leave"
  ],
  setup(props, ctx) {
    if (!ctx.slots.trigger) {
      throwError(compName, "Trigger must be provided");
    }
    const popperStates = usePopper(props, ctx);
    const forceDestroy = () => popperStates.doDestroy(true);
    onMounted(popperStates.initializePopper);
    onBeforeUnmount(forceDestroy);
    onActivated(popperStates.initializePopper);
    onDeactivated(forceDestroy);
    return popperStates;
  },
  render() {
    var _a2;
    const {
      $slots,
      appendToBody,
      class: kls,
      style,
      effect: effect2,
      hide: hide2,
      onPopperMouseEnter,
      onPopperMouseLeave,
      onAfterEnter,
      onAfterLeave,
      onBeforeEnter,
      onBeforeLeave,
      popperClass,
      popperId,
      popperStyle,
      pure,
      showArrow,
      transition,
      visibility,
      stopPopperMouseEvent
    } = this;
    const isManual = this.isManualMode();
    const arrow2 = renderArrow(showArrow);
    const popper2 = renderPopper({
      effect: effect2,
      name: transition,
      popperClass,
      popperId,
      popperStyle,
      pure,
      stopPopperMouseEvent,
      onMouseenter: onPopperMouseEnter,
      onMouseleave: onPopperMouseLeave,
      onAfterEnter,
      onAfterLeave,
      onBeforeEnter,
      onBeforeLeave,
      visibility
    }, [
      renderSlot($slots, "default", {}, () => {
        return [toDisplayString(this.content)];
      }),
      arrow2
    ]);
    const _t = (_a2 = $slots.trigger) == null ? void 0 : _a2.call($slots);
    const triggerProps = __spreadValues({
      "aria-describedby": popperId,
      class: kls,
      style,
      ref: "triggerRef"
    }, this.events);
    const trigger = isManual ? renderTrigger(_t, triggerProps) : withDirectives(renderTrigger(_t, triggerProps), [[ClickOutside, hide2]]);
    return h$1(Fragment, null, [
      trigger,
      h$1(Teleport, {
        to: "body",
        disabled: !appendToBody
      }, [popper2])
    ]);
  }
});
var Popper = _sfc_main$2;
Popper.install = (app) => {
  app.component(Popper.name, Popper);
};
const _Popper = Popper;
var ElPopper = _Popper;
var Tooltip = defineComponent({
  name: "ElTooltip",
  components: {
    ElPopper
  },
  props: __spreadProps(__spreadValues({}, popperDefaultProps), {
    manual: {
      type: Boolean,
      default: false
    },
    modelValue: {
      type: Boolean,
      validator: (val) => {
        return typeof val === "boolean";
      },
      default: void 0
    },
    openDelay: {
      type: Number,
      default: 0
    },
    visibleArrow: {
      type: Boolean,
      default: true
    },
    tabindex: {
      type: [String, Number],
      default: "0"
    }
  }),
  emits: [UPDATE_MODEL_EVENT],
  setup(props, ctx) {
    if (props.manual && typeof props.modelValue === "undefined") {
      throwError("[ElTooltip]", "You need to pass a v-model to el-tooltip when `manual` is true");
    }
    const popper2 = ref(null);
    const onUpdateVisible = (val) => {
      ctx.emit(UPDATE_MODEL_EVENT, val);
    };
    const updatePopper = () => {
      return popper2.value.update();
    };
    return {
      popper: popper2,
      onUpdateVisible,
      updatePopper
    };
  },
  render() {
    const {
      $slots,
      content,
      manual,
      openDelay,
      onUpdateVisible,
      showAfter,
      visibleArrow,
      modelValue,
      tabindex,
      fallbackPlacements
    } = this;
    const throwErrorTip = () => {
      throwError("[ElTooltip]", "you need to provide a valid default slot.");
    };
    const popper2 = h$1(ElPopper, __spreadProps(__spreadValues({}, Object.keys(popperDefaultProps).reduce((result, key) => {
      return __spreadProps(__spreadValues({}, result), { [key]: this[key] });
    }, {})), {
      ref: "popper",
      manualMode: manual,
      showAfter: openDelay || showAfter,
      showArrow: visibleArrow,
      visible: modelValue,
      "onUpdate:visible": onUpdateVisible,
      fallbackPlacements: fallbackPlacements.length ? fallbackPlacements : ["bottom-start", "top-start", "right", "left"]
    }), {
      default: () => $slots.content ? $slots.content() : content,
      trigger: () => {
        if ($slots.default) {
          const firstVnode = getFirstValidNode($slots.default(), 1);
          if (!firstVnode)
            throwErrorTip();
          return cloneVNode(firstVnode, { tabindex }, true);
        }
        throwErrorTip();
      }
    });
    return popper2;
  }
});
Tooltip.install = (app) => {
  app.component(Tooltip.name, Tooltip);
};
const _Tooltip = Tooltip;
const ElTooltip = _Tooltip;
const _sfc_main$1 = {
  name: "YunTableColumn",
  props: {
    actualColumns: {
      type: Array,
      default: () => []
    },
    slotKeys: {
      type: Array,
      default: () => []
    },
    searchForm: {
      type: Object,
      default: () => {
      }
    },
    getFormFieldProps: {
      type: Function,
      default: () => {
      }
    },
    pagination: {
      type: Object,
      default: () => null
    },
    deep: {
      type: Number,
      default: 0
    },
    transformation: {
      type: [Object, Function],
      default: () => (val) => {
        return val === void 0 || val === "" || val === null ? "-" : val;
      }
    }
  },
  emits: ["handle-search", "update:searchForm"],
  setup(props, { emit, slots }) {
    const searchFormValue = ref();
    watch(() => props.searchForm, (v) => {
      searchFormValue.value = v;
    }, {
      deep: true,
      immediate: true
    });
    watch(() => searchFormValue.value, (v) => {
      emit("update:searchForm", v);
    }, {
      deep: true,
      immediate: true
    });
    const handleSearch = (...rest) => {
      emit("handle-search", ...rest);
    };
    const indexMethod = (index) => {
      if (props.pagination) {
        return index + 1 + ((props.pagination.page || 1) - 1) * (props.pagination.size || 0);
      } else {
        return index + 1;
      }
    };
    const isComment2 = (slot, scope) => {
      const vnodes = slot(scope);
      return vnodes.every((v) => v.type === Comment);
    };
    const fieldChange = (field) => {
      let bindField = __spreadValues({}, omit(field, ["children"]));
      if (bindField && !bindField.minWidth) {
        bindField.minWidth = 110;
      }
      if (field.type === "index") {
        field.index = field.index || indexMethod;
      }
      return bindField;
    };
    function createHeaderSlot(field, scope) {
      if (field.header || slots[`${field.prop}-header`] || field.sortable || field.tips) {
        return (scope2) => {
          if (slots[`${field.prop}-header`]) {
            return [slots[`${field.prop}-header`]({ column: scope2.column, $index: scope2.$index })];
          } else {
            return h$1("div", { class: { "filter-box": true } }, [
              h$1("div", { class: {
                "sort-box": field.sortable,
                "filter-box-content": true
              } }, [
                h$1("span", { class: "text-warpper" }, [
                  h$1("span", { class: "text-box" }, [
                    field.sortable ? h$1("span", { class: "caret-own-wrapper" }, [
                      h$1(SvgMd)
                    ]) : null,
                    h$1("i", { class: "text", title: field.label }, [field.label])
                  ]),
                  field.tips ? h$1(ElTooltip, {
                    effect: "dark",
                    placement: "top"
                  }, {
                    content: () => h$1("div", {
                      innerHTML: field.tips
                    }),
                    default: () => h$1("span", { class: "icon-box" }, [
                      h$1("b", { class: "yun-iconfont icon-question tips-icon" })
                    ])
                  }) : null
                ]),
                field.header ? h$1(_sfc_main$4, {
                  searchForm: props.searchForm,
                  "onUpdate:searchForm": (value) => emit("update:searchForm", value),
                  field,
                  getFormFieldProps: props.getFormFieldProps(field.header.component, __spreadValues({
                    size: "default"
                  }, field.header.componentAttrs || {}), field.label),
                  onHandleSearch: handleSearch
                }) : null
              ])
            ]);
          }
        };
      } else {
        return () => [
          h$1("div", { class: "filter-box" }, [
            h$1("div", { class: "filter-box-content" }, [
              h$1("div", { class: "text-box" }, [
                h$1("i", { class: "text", title: "field.label" }, [field.label])
              ])
            ])
          ])
        ];
      }
    }
    function createDetaultSlot(field) {
      if (slots[field.prop]) {
        return (scope) => [
          slots[field.prop]({ row: scope.row, column: scope.column, $index: scope.$index }),
          field.copy ? h$1(CopyColumn, { copy: scope.row[field.prop] }) : null
        ];
      } else if (slots[field.type]) {
        return (scope) => [
          slots[field.type]({ row: scope.row, column: scope.column, $index: scope.$index })
        ];
      } else if (slots.default && !field.type) {
        return (scope) => {
          if (!isComment2(slots.default, scope)) {
            return [
              slots.default({ row: scope.row, column: scope.column, $index: scope.$index }),
              field.copy ? h$1(CopyColumn, { copy: scope.row[field.prop] }) : null
            ];
          } else {
            return [
              scope.row[field.prop],
              field.copy ? h$1(CopyColumn, { copy: scope.row[field.prop] }) : null
            ];
          }
        };
      } else if (field.children) {
        return () => [
          createDepthColumns(field.children)
        ];
      } else if (props.transformation && !field.type) {
        return (scope) => {
          var _a2, _b2, _c, _d;
          const vnodes = [];
          if (field.formatter) {
            vnodes.push((_a2 = props.transformation(field.formatter(scope.row, scope.column, scope.row[field.prop], scope.$index))) != null ? _a2 : scope.row[field.prop]);
          } else if (field.enums) {
            vnodes.push((_c = props.transformation((_b2 = field.enums.find((item) => item.value === scope.row[field.prop])) == null ? void 0 : _b2.label)) != null ? _c : scope.row[field.prop]);
          } else {
            vnodes.push((_d = props.transformation(scope.row[field.prop])) != null ? _d : scope.row[field.prop]);
          }
          if (field.copy) {
            vnodes.push(h$1(CopyColumn, { copy: scope.row[field.prop] }));
          }
          return vnodes;
        };
      } else if (!field.type) {
        return (scope) => [
          scope.row[field.prop],
          h$1(CopyColumn, { copy: scope.row[field.prop] })
        ];
      }
    }
    function createDepthColumns(actualColumns) {
      const columns = actualColumns.map((field, index) => h$1(ElTableColumn, __spreadProps(__spreadValues({
        showOverflowTooltip: true
      }, fieldChange(field)), {
        resizable: true,
        className: `${field.prop}-cell`
      }), {
        header: createHeaderSlot(field),
        default: createDetaultSlot(field)
      }));
      return columns;
    }
    const render = () => {
      return createDepthColumns(props.actualColumns);
    };
    return render;
  }
};
var index_vue_vue_type_style_index_0_scoped_true_lang = /* @__PURE__ */ (() => '.dm-table[data-v-d843548c]{position:relative}.dm-table.autoHeight[data-v-d843548c]{height:100%}.dm-table[data-v-d843548c] .el-table__empty-block{width:100%!important}.dm-table__footer[data-v-d843548c]{display:flex;justify-content:space-between;padding-top:16px;flex-wrap:nowrap}.dm-table__footer .el-pagination[data-v-d843548c]{overflow:hidden}.dm-table__footer[data-v-d843548c] .dm-bulk-operations{display:flex;align-items:center;margin-right:24px;flex:1;overflow:hidden}.dm-table__footer[data-v-d843548c] button.btn-next{margin-right:8px!important}.dm-table__footer[data-v-d843548c] .el-pagination{padding:0}.dm-table[data-v-d843548c] .el-table-column--selection .cell{display:flex}.dm-table[data-v-d843548c] .el-button span{line-height:0}.dm-table[data-v-d843548c] .pl-rest{height:22px}.dm-table[data-v-d843548c] .filter-manage-box{padding:4px 0;display:flex;justify-content:flex-start;align-items:center;border-bottom:1px solid var(--el-border-color-light);flex-wrap:nowrap}.dm-table[data-v-d843548c] .filter-manage-box>.clear-box{margin-right:8px}.dm-table[data-v-d843548c] .filter-manage-box>.clear-box .el-button{width:72px;height:24px;font-style:normal;font-weight:500;font-size:12px;line-height:20px;text-align:center;font-weight:400}.dm-table[data-v-d843548c] .filter-manage-box>.list{flex-shrink:1;display:flex;justify-content:flex-start;align-items:center;flex-wrap:wrap;overflow:hidden}.dm-table[data-v-d843548c] .filter-manage-box>.list .item{margin:4px 8px 4px 0;overflow:hidden;border-radius:4px}.dm-table[data-v-d843548c] .filter-manage-box>.list .item .el-tag__content{width:calc(100% - 10px);overflow:hidden;white-space:nowrap;text-overflow:ellipsis;font-size:12px;color:var(--el-text-color-secondary)}.dm-table[data-v-d843548c] .filter-manage-box>.list .item .el-tag__content .item_value{color:var(--el-text-color-primary)}.dm-table[data-v-d843548c] .filter-manage-box>.list .item .el-tag__close{color:var(--el-text-color-regular)}.dm-table[data-v-d843548c] .filter-manage-box>.list .item .el-tag__close:hover{color:var(--el-color-white);background-color:var(--el-text-color-regular)}.dm-table[data-v-d843548c] .dm-table-wrapper{position:relative}.dm-table[data-v-d843548c] .dm-table-wrapper .lf-border{position:absolute;width:1px;height:100%;background:#fff;left:0px;top:0px;z-index:5}.dm-table[data-v-d843548c] .dm-table-wrapper .tp-border{position:absolute;width:100%;height:1px;background:#fff;top:0px;left:0px;z-index:5}.dm-table[data-v-d843548c] .dm-table-wrapper .rt-border{position:absolute;width:1px;height:100%;background:#fff;right:0px;top:0px;z-index:5}.dm-table[data-v-d843548c] .dm-table-wrapper .bt-border{position:absolute;height:1px;width:100%;background:#fff;left:0px;bottom:0px;z-index:5}.dm-table[data-v-d843548c] .el-table th.el-table__cell{vertical-align:top;position:relative}.dm-table[data-v-d843548c] .el-table__cell{border-right:0px}.dm-table[data-v-d843548c] .el-table__cell.action-cell .cell{overflow:inherit}.dm-table[data-v-d843548c] .header-search-label{margin-bottom:4px;display:inline-block;line-height:20px!important}.dm-table[data-v-d843548c] .el-table th.el-table__cell>.cell{font-weight:700;font-size:14px;line-height:22px;color:#404b5c;white-space:nowrap;height:23px;overflow:inherit}.dm-table[data-v-d843548c] .el-table td.el-table__cell{vertical-align:top}.dm-table[data-v-d843548c] .el-table td.el-table__cell .cell button.el-button--action,.dm-table[data-v-d843548c] .el-table td.el-table__cell .cell button.el-button--text{height:22px;padding-top:0;padding-bottom:0}.dm-table[data-v-d843548c] .el-table td.el-table__cell>.cell{line-height:20px;font-weight:400;font-size:14px;line-height:22px;color:var(--el-text-color-primary)}.dm-table[data-v-d843548c] .el-table--border .el-table__inner-wrapper td:first-child{border-left:none!important}.dm-table[data-v-d843548c] .el-table td.el-table__cell.el-table-fixed-column--left,.dm-table[data-v-d843548c] .el-table th.el-table__cell.el-table-fixed-column--left{border-right:none!important}.dm-table[data-v-d843548c] .el-table th.el-table__cell:not(:last-child):after{content:" ";position:absolute;width:16px;height:0px;left:-9px;top:50%;margin-top:-1px;border-top:1px solid var(--el-border-color-light);transform:rotate(90deg)}.dm-table[data-v-d843548c] .el-table th.el-table__cell:first-child:after{display:none}.dm-table[data-v-d843548c] .operate-column{position:relative}.dm-table[data-v-d843548c] .filter-box{width:100%;display:flex;justify-content:space-between;align-items:center;height:23px}.dm-table[data-v-d843548c] .filter-box-content{display:inline-flex;align-items:center;justify-content:space-between;flex-grow:1}.dm-table[data-v-d843548c] .filter-box .filter-box-content{font-size:14px;padding:3px 0;font-weight:600;display:inline-flex;align-items:center;justify-content:space-between;flex-grow:1;width:calc(100% - 28px)}.dm-table[data-v-d843548c] .filter-box .filter-box-content .text-warpper{font-size:14px;font-weight:600;display:flex;align-items:center;padding:3px 8px;min-width:44px;margin-left:-8px}.dm-table[data-v-d843548c] .filter-box .filter-box-content .icon-box{width:28px;height:28px;border-radius:4px;display:flex;justify-content:center;align-items:center;margin-left:4px}.dm-table[data-v-d843548c] .filter-box .filter-box-content .icon-box:hover{background:var(--el-border-color-light)}.dm-table[data-v-d843548c] .filter-box .filter-box-content .icon-box b{margin:0;color:var(--el-text-color-placeholder)}.dm-table[data-v-d843548c] .filter-box .filter-box-content .text-box{font-size:14px;font-weight:600;display:flex;align-items:center;padding:3px 8px;min-width:44px;margin-left:-8px}.dm-table[data-v-d843548c] .filter-box .filter-box-content .text-box i{display:block;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;margin-top:-1px;font-style:normal}.dm-table[data-v-d843548c] th.is-sortable .cell{display:flex;align-items:center}.dm-table[data-v-d843548c] th.is-sortable div.sort-box{font-size:14px;padding:3px 0;font-weight:600;display:inline-flex;align-items:center;justify-content:space-between;flex-grow:1;width:calc(100% - 28px)}.dm-table[data-v-d843548c] th.is-sortable div.sort-box .text-box{font-size:14px;font-weight:600;display:flex;align-items:center;padding:3px 8px;min-width:66px;margin-left:-8px}.dm-table[data-v-d843548c] th.is-sortable div.sort-box .text-box i{display:block;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;margin-top:-1px;font-style:normal}.dm-table[data-v-d843548c] th.is-sortable div.sort-box .caret-own-wrapper{width:16px;height:16px;display:flex;flex-direction:column;justify-content:center;align-items:center;transform:translate(-3px)}.dm-table[data-v-d843548c] th.is-sortable div.sort-box .caret-own-wrapper svg{width:10px;height:7px}.dm-table[data-v-d843548c] th.is-sortable .caret-wrapper{display:none}.dm-table[data-v-d843548c] th.is-sortable.ascending .text-box,.dm-table[data-v-d843548c] th.is-sortable.descending .text-box,.dm-table[data-v-d843548c] th.is-sortable .text-box:hover{border-radius:4px;padding:3px 8px;margin-left:-8px}.dm-table[data-v-d843548c] th.is-sortable.ascending .text-box{margin-left:0}.dm-table[data-v-d843548c] th.is-sortable.ascending .text-box .caret-own-wrapper{display:flex}.dm-table[data-v-d843548c] th.is-sortable.ascending .text-box .caret-own-wrapper .top path{fill:var(--el-color-primary)}.dm-table[data-v-d843548c] th.is-sortable.ascending .text-box .caret-own-wrapper .bot path{fill:var(--el-border-color-base)}.dm-table[data-v-d843548c] th.is-sortable.descending .text-box{margin-left:0}.dm-table[data-v-d843548c] th.is-sortable.descending .text-box .caret-own-wrapper{display:flex}.dm-table[data-v-d843548c] th .text-box .caret-own-wrapper .top path{fill:var(--el-border-color-base)}.dm-table[data-v-d843548c] th .text-box .caret-own-wrapper .bot path{fill:var(--el-border-color-base)}.dm-table[data-v-d843548c] th.is-sortable.descending .text-box .caret-own-wrapper .top path{fill:var(--el-border-color-base)}.dm-table[data-v-d843548c] th.is-sortable.descending .text-box .caret-own-wrapper .bot path{fill:var(--el-color-primary)}.dm-table[data-v-d843548c] th.is-sortable .text-box:hover{background:var(--el-border-color-lighter)}.dm-table[data-v-d843548c] th.is-sortable .text-box:hover .caret-own-wrapper{display:flex}.dm-table[data-v-d843548c] th.is-sortable .text-box:hover .caret-own-wrapper .top path{fill:var(--el-border-color-base)}.dm-table[data-v-d843548c] th.is-sortable .text-box:hover .caret-own-wrapper .bot path{fill:var(--el-border-color-base)}.dm-table[data-v-d843548c] th.is-sortable.ascending .text-box:hover{background:var(--el-border-color-lighter)}.dm-table[data-v-d843548c] th.is-sortable.ascending .text-box:hover .caret-own-wrapper{display:flex}.dm-table[data-v-d843548c] th.is-sortable.ascending .text-box:hover .caret-own-wrapper .top path{fill:var(--el-color-primary)}.dm-table[data-v-d843548c] th.is-sortable.ascending .text-box:hover .caret-own-wrapper .bot path{fill:var(--el-border-color-base)}.dm-table[data-v-d843548c] th.is-sortable.descending .text-box:hover{background:var(--el-border-color-lighter)}.dm-table[data-v-d843548c] th.is-sortable.descending .text-box:hover .caret-own-wrapper{display:flex}.dm-table[data-v-d843548c] th.is-sortable.descending .text-box:hover .caret-own-wrapper .top path{fill:var(--el-border-color-base)}.dm-table[data-v-d843548c] th.is-sortable.descending .text-box:hover .caret-own-wrapper .bot path{fill:var(--el-color-primary)}.dm-table[data-v-d843548c] .el-table .cell{padding:0 12px}.dm-table[data-v-d843548c] .el-table th:nth-last-child(2):before{content:" ";position:absolute;width:16px;height:0px;right:-7px;top:50%;margin-top:-1px;border-top:1px solid var(--el-border-color-light);transform:rotate(90deg)}.dm-table[data-v-d843548c] .el-table--small.el-table.show-table-setting-table .el-table__cell:last-child .filter-box{display:flex}.dm-table[data-v-d843548c] .el-table--small.el-table.show-table-setting-table .el-table__cell:last-child .filter-box .dm-filter-header-radio{margin-right:28px}.dm-table[data-v-d843548c] .el-table--default.el-table.show-table-setting-table .el-table__cell:last-child .filter-box{display:flex}.dm-table[data-v-d843548c] .el-table--default.el-table.show-table-setting-table .el-table__cell:last-child .filter-box .dm-filter-header-radio{margin-right:35px}.dm-table[data-v-d843548c] .el-table--large.el-table.show-table-setting-table .el-table__cell:last-child .filter-box{display:flex}.dm-table[data-v-d843548c] .el-table--large.el-table.show-table-setting-table .el-table__cell:last-child .filter-box .dm-filter-header-radio{margin-right:45px}.dm-table[data-v-d843548c] .el-table--small.el-table th{height:32px;padding:5px 0}.dm-table[data-v-d843548c] .el-table--small.el-table td{padding:0}.dm-table[data-v-d843548c] .el-table--small.el-table td>.cell{min-height:32px;padding:5px 12px}.dm-table[data-v-d843548c] .el-table--small.el-table .el-table__footer-wrapper td{line-height:23px}.dm-table[data-v-d843548c] .el-table--default.el-table th{height:40px;padding:9px 0}.dm-table[data-v-d843548c] .el-table--default.el-table td{padding:0}.dm-table[data-v-d843548c] .el-table--default.el-table td>.cell{min-height:40px;padding:9px 12px}.dm-table[data-v-d843548c] .el-table--default.el-table .el-table__footer-wrapper td{line-height:23px}.dm-table[data-v-d843548c] .el-table--large.el-table th{height:48px;padding:12px 0 13px}.dm-table[data-v-d843548c] .el-table--large.el-table td{padding:0}.dm-table[data-v-d843548c] .el-table--large.el-table td>.cell{min-height:48px;padding:13px 12px}.dm-table[data-v-d843548c] .el-table--large.el-table .el-table__footer-wrapper td{line-height:23px}.dm-table[data-v-d843548c] tr.el-table__row,.dm-table[data-v-d843548c] td.el-table-fixed-column--left,.dm-table[data-v-d843548c] td.el-table-fixed-column--right{background:#fafafb}.dm-table[data-v-d843548c] .el-table.no-stripe-bg tr.el-table__row,.dm-table[data-v-d843548c] .el-table.no-stripe-bg td.el-table-fixed-column--left,.dm-table[data-v-d843548c] .el-table.no-stripe-bg td.el-table-fixed-column--right{background:#ffffff}.dm-table[data-v-d843548c] tr.el-table__row.el-table__row--striped,.dm-table[data-v-d843548c] tr.el-table__row.el-table__row--striped td.el-table-fixed-column--left,.dm-table[data-v-d843548c] tr.el-table__row.el-table__row--striped td.el-table-fixed-column--right{background:#fff}.dm-table[data-v-d843548c] tr.el-table__row--striped td.el-table__cell{background:#fff!important}.dm-table[data-v-d843548c] tr.el-table__row:hover td.el-table__cell,.dm-table[data-v-d843548c] tr.el-table__row--striped:hover td.el-table__cell{background:#f5f5f6!important}.dm-table[data-v-d843548c] tr.el-table__row td .cell .el-tag{height:22px!important}.dm-table[data-v-d843548c] .el-table__footer-wrapper td.el-table-fixed-column--left,.dm-table[data-v-d843548c] .el-table__footer-wrapper td.el-table-fixed-column--right{background-color:var(--el-table-row-hover-bg-color)}.dm-table .tips-icon[data-v-d843548c]{font-size:16px;margin-right:4px;cursor:pointer;vertical-align:bottom;color:var(--el-text-color-secondary)}.dm-table .tips-icon[data-v-d843548c]:hover{color:var(--el-text-color-primary)}.dm-table .dm-table_border[data-v-d843548c] .el-table__inner-wrapper:before{height:2px}.dm-table .dm-table_border[data-v-d843548c] .el-table__body-wrapper:before{content:"";position:absolute;background-color:var(--el-table-border-color);top:-1px;left:0;width:2px;height:100%;z-index:3}.dm-table .dm-table_border[data-v-d843548c] .el-table__body-wrapper:after{content:"";position:absolute;background-color:var(--el-table-border-color);top:-1px;right:0;width:2px;height:100%;z-index:3}.dm-table .dm-table_border[data-v-d843548c] .el-table__body-wrapper .el-table__cell{border-right:var(--el-table-border)}.dm-table[data-v-d843548c] .el-table[loading-number] .el-table__empty-text .el-empty{visibility:hidden}.dark .dm-table[data-v-d843548c] .el-table th.el-table__cell{background:var(--el-color-dark-bg)!important}.dark .dm-table[data-v-d843548c] .el-table th.el-table__cell>.cell{color:var(--el-text-color-regular)}.dark .dm-table[data-v-d843548c] tr.el-table__row,.dark .dm-table[data-v-d843548c] tr.el-table__row td.el-table__cell{background:var(--el-color-dark-bg)}.dark .dm-table[data-v-d843548c] tr.el-table__row td.el-table__cell>.cell{color:var(--el-text-color-primary)!important}.dark .dm-table[data-v-d843548c] tr.el-table__row--striped td.el-table__cell{background:var(--el-border-color-extra-light)!important}.dark .dm-table[data-v-d843548c] tr.el-table__row:hover td.el-table__cell,.dark .dm-table[data-v-d843548c] tr.el-table__row--striped:hover td.el-table__cell{background:var(--el-border-color-lighter)!important}.dark .dm-table[data-v-d843548c] .dm-table-wrapper .lf-border,.dark .dm-table[data-v-d843548c] .dm-table-wrapper .tp-border,.dark .dm-table[data-v-d843548c] .dm-table-wrapper .rt-border,.dark .dm-table[data-v-d843548c] .dm-table-wrapper .bt-border,.dark .dm-table[data-v-d843548c] .el-table.no-stripe-bg tr.el-table__row,.dark .dm-table[data-v-d843548c] .el-table.no-stripe-bg td.el-table-fixed-column--left,.dark .dm-table[data-v-d843548c] .el-table.no-stripe-bg td.el-table-fixed-column--right,.dark .dm-table[data-v-d843548c] .el-table__footer-wrapper td.el-table-fixed-column--left,.dark .dm-table[data-v-d843548c] .el-table__footer-wrapper td.el-table-fixed-column--right{background:var(--el-color-dark-bg)}.dark .dm-table[data-v-d843548c] .el-table td.el-table__cell>.cell{color:var(--el-text-color-regular)}.dark .dm-table[data-v-d843548c] .el-empty__image{width:160px;height:173px;background:url(https://prod-ylzapp-public.oss-cn-zhangjiakou.aliyuncs.com/frontend/yun-design/empty__image-dark.png);background-size:100% 100%}.dark .dm-table[data-v-d843548c] .el-empty__image img{display:none}.dark .dm-table[data-v-d843548c] tr.el-table__row td.el-table-fixed-column--left,.dark .dm-table[data-v-d843548c] tr.el-table__row td.el-table-fixed-column--right{background:var(--el-color-dark-bg)!important}.dark .dm-table[data-v-d843548c] tr.el-table__row--striped td.el-table-fixed-column--left,.dark .dm-table[data-v-d843548c] tr.el-table__row--striped td.el-table-fixed-column--right{background:var(--el-border-color-extra-light)!important}.dark .dm-table[data-v-d843548c] tr.el-table__row:hover td.el-table-fixed-column--left,.dark .dm-table[data-v-d843548c] tr.el-table__row:hover td.el-table-fixed-column--right{background:var(--el-border-color-lighter)!important}\n')();
const NoSlotComponents = ["el-date-picker", "el-cascader"];
let scrollBehavior = null;
const _sfc_main = {
  name: "YunTable",
  components: {
    TableHeader,
    TableOperate,
    YunTableColumn: _sfc_main$1
  },
  directives: {
    scollRight: {
      updated: (el, binding, vnode) => {
        const selectWrap = el.querySelector(".el-scrollbar__wrap");
        selectWrap.removeEventListener("scroll", scrollBehavior);
        const { arrivedState } = useScroll(selectWrap);
        let timer = null;
        const openTips = () => {
          var _a2;
          if (timer) {
            clearTimeout(timer);
          }
          if (binding.value && ((_a2 = binding.value) == null ? void 0 : _a2.elm)) {
            binding.value.elm.open = true;
            timer = setTimeout(() => {
              binding.value.elm.open = false;
            }, 3e3);
          }
        };
        scrollBehavior = (e) => {
          if (arrivedState.right === true) {
            openTips();
          }
        };
        selectWrap.addEventListener("scroll", scrollBehavior);
      },
      unmounted: (el) => {
        const selectWrap = el.querySelector(".el-scrollbar__wrap");
        selectWrap.removeEventListener("scroll", scrollBehavior);
      }
    }
  },
  inheritAttrs: false,
  props: {
    events: {
      type: Object,
      default: () => ({})
    },
    autoHeight: {
      type: Boolean,
      default: false
    },
    showTableSetting: {
      type: Boolean,
      default: false
    },
    tableSetting: {
      type: Object,
      default: () => {
      }
    },
    tableHeaderKey: {
      type: String,
      default: ""
    },
    cacheSize: {
      type: Number,
      default: 20
    },
    checkedColumns: {
      type: Array,
      default: () => []
    },
    modelValue: {
      type: Object,
      default: () => ({})
    },
    loading: {
      type: Boolean,
      default: false
    },
    columns: {
      type: Array,
      default: () => []
    },
    pagination: {
      type: Object,
      default: () => null
    },
    transformation: {
      type: [Object, Function],
      default: () => (val) => {
        return val === void 0 || val === "" || val === null ? "-" : val;
      }
    },
    size: {
      type: String,
      default: "small"
    },
    yunPagination: {
      type: Boolean,
      default: () => getConfig("table").yunPagination
    },
    showBorder: {
      type: Boolean,
      default: false
    },
    filterCache: {
      type: Boolean,
      default: () => getConfig("table").filterCache
    },
    filterCacheName: {
      type: String,
      default: ""
    }
  },
  emits: [
    "columnsChange",
    "update:modelValue",
    "update:pagination",
    "search",
    "reset"
  ],
  setup(props, { emit }) {
    const { pagination } = toRefs(props);
    const elTable = ref(null);
    const { paginationProps, handleSizeChange, handleCurrentChange } = usePagination(emit, pagination);
    const { defaultHeaderCellStyle, defaultCellStyle, handleSubmit, actualColumns, slotKeys, setListColumns, tableSize, selectedFieldKeys } = useTable(props, emit);
    watch(() => tableSize.value, (newVal, oldVal) => {
      nextTick(() => {
        elTable.value.doLayout();
      });
    });
    const {
      searchForm,
      clearSearch,
      handleSearch,
      getFormFieldProps,
      handleCheckBoxSearch
    } = useTableSearch(props, emit);
    provide("searchFrom", searchForm);
    provide("handleCheckBoxSearch", handleCheckBoxSearch);
    const exportFunc = useExport(elTable);
    const currentInstance = getCurrentInstance();
    onMounted(() => {
      if (props.filterCache) {
        useBackfillFilter(props, emit, currentInstance);
      }
    });
    const { searchData } = useTableSearchHeader(props, searchForm);
    const headerDragend = (...args) => {
      if (args[0] < 110) {
        args[2].width = 110;
      }
    };
    const indexMethod = (index) => {
      if (props.pagination) {
        return index + 1 + ((props.pagination.page || 1) - 1) * (props.pagination.size || 0);
      } else {
        return index + 1;
      }
    };
    const fieldChange = (field) => {
      let bindField = __spreadValues({}, field);
      if (bindField && !bindField.minWidth) {
        bindField.minWidth = 110;
      }
      if (field.type === "index") {
        field.index = field.index || indexMethod;
      }
      return bindField;
    };
    const isComment2 = (slot, scope) => {
      const vnodes = slot(scope);
      return vnodes.every((v) => v.type === Comment);
    };
    const getMd5Key = (obj) => {
      return jsMd5(obj ? JSON.stringify(obj) : "null");
    };
    const imgUrl = "https://prod-ylzapp-public.oss-cn-zhangjiakou.aliyuncs.com/frontend/yun-design/empty__image.png";
    const tableSettingPopover = ref(null);
    const tableSettingVisible = ref(true);
    const tableSettingData = ref({
      disabled: true,
      visble: false,
      tips: "\u652F\u6301\u70B9\u51FB\u6DFB\u52A0\u66F4\u591A\u5B57\u6BB5\u663E\u793A"
    });
    watchEffect(() => {
      var _a2, _b2, _c;
      if ((_a2 = props.tableSetting) == null ? void 0 : _a2.visble) {
        if (tableSettingPopover.value) {
          tableSettingPopover.value.open = true;
        }
      }
      tableSettingData.value.tips = ((_b2 = props.tableSetting) == null ? void 0 : _b2.tips) || "\u652F\u6301\u70B9\u51FB\u6DFB\u52A0\u66F4\u591A\u5B57\u6BB5\u663E\u793A";
      tableSettingData.value.disabled = ((_c = props.tableSetting) == null ? void 0 : _c.tipsDisabled) ? false : true;
    });
    const {
      tableHeight,
      containerRef,
      headerRef,
      filterRef,
      footerRef
    } = useTableHeightResize(props);
    return __spreadProps(__spreadValues({
      tableSettingData,
      tableSettingPopover,
      tableSettingVisible,
      imgUrl,
      fieldChange,
      elTable,
      tableSize,
      NoSlotComponents,
      actualColumns,
      slotKeys,
      setListColumns,
      handleSubmit,
      selectedFieldKeys,
      clearSearch,
      defaultHeaderCellStyle,
      defaultCellStyle,
      paginationProps,
      handleSizeChange,
      handleCurrentChange,
      searchForm,
      searchData,
      handleSearch,
      currentInstance,
      getFormFieldProps
    }, exportFunc), {
      headerDragend,
      isComment: isComment2,
      getMd5Key,
      setConfig,
      containerRef,
      headerRef,
      filterRef,
      footerRef,
      tableHeight
    });
  }
};
const _withScopeId = (n) => (pushScopeId("data-v-d843548c"), n = n(), popScopeId(), n);
const _hoisted_1 = {
  ref: "headerRef",
  class: "table-header-warpper"
};
const _hoisted_2 = {
  ref: "filterRef",
  class: "filter-manage-box-warpper"
};
const _hoisted_3 = { class: "filter-manage-box" };
const _hoisted_4 = { class: "clear-box" };
const _hoisted_5 = /* @__PURE__ */ createTextVNode(" \u6E05\u9664\u7B5B\u9009 ");
const _hoisted_6 = {
  key: 0,
  class: "list"
};
const _hoisted_7 = { class: "item_value" };
const _hoisted_8 = { class: "dm-table-wrapper" };
const _hoisted_9 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("div", { class: "lf-border" }, null, -1));
const _hoisted_10 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("div", { class: "tp-border" }, null, -1));
const _hoisted_11 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("div", { class: "rt-border" }, null, -1));
const _hoisted_12 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("div", { class: "bt-border" }, null, -1));
const _hoisted_13 = {
  ref: "footerRef",
  class: "dm-table__footer-warpper"
};
const _hoisted_14 = {
  key: 0,
  class: "dm-table__footer"
};
const _hoisted_15 = { class: "dm-bulk-operations" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _a2, _b2;
  const _component_table_header = resolveComponent("table-header");
  const _component_el_button = resolveComponent("el-button");
  const _component_el_tag = resolveComponent("el-tag");
  const _component_table_operate = resolveComponent("table-operate");
  const _component_el_tooltip = resolveComponent("el-tooltip");
  const _component_el_empty = resolveComponent("el-empty");
  const _component_YunTableColumn = resolveComponent("YunTableColumn");
  const _component_el_table = resolveComponent("el-table");
  const _component_yun_pagination = resolveComponent("yun-pagination");
  const _component_el_pagination = resolveComponent("el-pagination");
  const _directive_scollRight = resolveDirective("scollRight");
  const _directive_loading = resolveDirective("loading");
  return openBlock(), createElementBlock("div", {
    ref: "containerRef",
    class: normalizeClass(["dm-table", { autoHeight: $props.autoHeight }])
  }, [
    createElementVNode("div", _hoisted_1, [
      createVNode(_component_table_header, {
        columns: $props.columns,
        "checked-columns": $props.checkedColumns,
        onSubmit: $setup.handleSubmit
      }, createSlots({ _: 2 }, [
        _ctx.$slots.tableHeaderLeft ? {
          name: "tableHeaderLeft",
          fn: withCtx(() => [
            renderSlot(_ctx.$slots, "tableHeaderLeft", {}, void 0, true)
          ])
        } : void 0,
        _ctx.$slots.tableHeaderRight ? {
          name: "tableHeaderRight",
          fn: withCtx(() => [
            renderSlot(_ctx.$slots, "tableHeaderRight", {}, void 0, true)
          ])
        } : void 0,
        _ctx.$slots.tableShoulder ? {
          name: "tableShoulder",
          fn: withCtx(() => [
            renderSlot(_ctx.$slots, "tableShoulder", {}, void 0, true)
          ])
        } : void 0
      ]), 1032, ["columns", "checked-columns", "onSubmit"])
    ], 512),
    createElementVNode("div", _hoisted_2, [
      withDirectives(createElementVNode("div", _hoisted_3, [
        createElementVNode("div", _hoisted_4, [
          createVNode(_component_el_button, {
            type: "secondary",
            onClick: _cache[0] || (_cache[0] = ($event) => $setup.clearSearch(false))
          }, {
            default: withCtx(() => [
              _hoisted_5
            ]),
            _: 1
          })
        ]),
        $setup.searchData.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_6, [
          (openBlock(true), createElementBlock(Fragment, null, renderList($setup.searchData, (item) => {
            return openBlock(), createBlock(_component_el_tag, {
              key: item.key,
              closable: "",
              class: "item",
              effect: "plain",
              type: "info",
              "disable-transitions": false,
              onClose: ($event) => $setup.clearSearch(item.key)
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(item.label) + ": ", 1),
                createElementVNode("span", _hoisted_7, toDisplayString(item.value), 1)
              ]),
              _: 2
            }, 1032, ["onClose"]);
          }), 128))
        ])) : createCommentVNode("", true)
      ], 512), [
        [vShow, $setup.searchData.length > 0]
      ])
    ], 512),
    createElementVNode("div", _hoisted_8, [
      _hoisted_9,
      _hoisted_10,
      _hoisted_11,
      _hoisted_12,
      createVNode(_component_el_tooltip, {
        ref: "tableSettingPopover",
        effect: "dark",
        placement: "top",
        trigger: "hover",
        disabled: $setup.tableSettingData.disabled
      }, {
        content: withCtx(() => [
          createTextVNode(toDisplayString($setup.tableSettingData.tips), 1)
        ]),
        default: withCtx(() => [
          createVNode(_component_table_operate, {
            tableSize: $setup.tableSize,
            "onUpdate:tableSize": _cache[1] || (_cache[1] = ($event) => $setup.tableSize = $event),
            "show-table-setting": $props.showTableSetting,
            columns: $setup.setListColumns,
            "default-columns": $props.columns,
            "default-checked-columns": $props.checkedColumns,
            "default-size": $props.size,
            "checked-columns": $setup.selectedFieldKeys,
            onSubmit: $setup.handleSubmit
          }, null, 8, ["tableSize", "show-table-setting", "columns", "default-columns", "default-checked-columns", "default-size", "checked-columns", "onSubmit"])
        ]),
        _: 1
      }, 8, ["disabled"]),
      withDirectives((openBlock(), createBlock(_component_el_table, mergeProps({
        ref: "elTable",
        key: $setup.slotKeys.join(""),
        "header-cell-style": $setup.defaultHeaderCellStyle,
        "cell-style": $setup.defaultCellStyle,
        size: $setup.tableSize,
        height: $props.autoHeight ? $setup.tableHeight : _ctx.$attrs.height,
        stripe: true
      }, _ctx.$attrs, {
        border: true,
        "empty-middle": true,
        class: {
          "dm-table__main": true,
          "show-table-setting-table": $props.showTableSetting,
          "no-stripe-bg": typeof _ctx.$attrs.stripe === "undefined" ? false : !_ctx.$attrs.stripe,
          "dm-table_border": $props.showBorder
        }
      }, toHandlers($props.events), { onHeaderDragend: $setup.headerDragend }), {
        empty: withCtx(() => [
          _ctx.$slots.empty ? renderSlot(_ctx.$slots, "empty", { key: 0 }, void 0, true) : (openBlock(), createBlock(_component_el_empty, {
            key: 1,
            image: $setup.imgUrl,
            description: "\u6682\u65E0\u6570\u636E"
          }, null, 8, ["image"]))
        ]),
        default: withCtx(() => [
          createVNode(_component_YunTableColumn, {
            searchForm: $setup.searchForm,
            "onUpdate:searchForm": _cache[2] || (_cache[2] = ($event) => $setup.searchForm = $event),
            "actual-columns": $setup.actualColumns,
            transformation: $props.transformation,
            "slot-keys": $setup.slotKeys,
            "get-form-field-props": $setup.getFormFieldProps,
            onHandleSearch: _cache[3] || (_cache[3] = ($event) => $setup.handleSearch($event, _ctx.$props, $setup.currentInstance))
          }, createSlots({ _: 2 }, [
            renderList(Object.keys(_ctx.$slots).filter((key) => $setup.slotKeys.includes(key)), (key) => {
              return {
                name: key,
                fn: withCtx((scope) => [
                  key.endsWith("-header") ? renderSlot(_ctx.$slots, key, {
                    key: 0,
                    column: scope.column,
                    $index: scope.$index
                  }, void 0, true) : renderSlot(_ctx.$slots, key, {
                    key: 1,
                    row: scope.row,
                    column: scope.column,
                    $index: scope.$index
                  }, void 0, true)
                ])
              };
            })
          ]), 1032, ["searchForm", "actual-columns", "transformation", "slot-keys", "get-form-field-props"])
        ]),
        _: 3
      }, 16, ["header-cell-style", "cell-style", "size", "height", "class", "onHeaderDragend"])), [
        [_directive_scollRight, { elm: $setup.tableSettingPopover, num: Math.random() }],
        [_directive_loading, $props.loading]
      ])
    ]),
    createElementVNode("div", _hoisted_13, [
      $props.pagination || _ctx.$slots.bulkOperations || _ctx.$slots.batch ? (openBlock(), createElementBlock("div", _hoisted_14, [
        createElementVNode("div", _hoisted_15, [
          _ctx.$slots.bulkOperations ? renderSlot(_ctx.$slots, "bulkOperations", { key: 0 }, void 0, true) : _ctx.$slots.batch ? renderSlot(_ctx.$slots, "batch", { key: 1 }, void 0, true) : createCommentVNode("", true)
        ]),
        createElementVNode("div", null, [
          $props.yunPagination ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
            $props.pagination && ((_a2 = $props.pagination) == null ? void 0 : _a2.total) > 0 ? (openBlock(), createBlock(_component_yun_pagination, mergeProps({ key: 0 }, $setup.paginationProps, {
              onCurrentChange: $setup.handleCurrentChange,
              onSizeChange: $setup.handleSizeChange
            }), null, 16, ["onCurrentChange", "onSizeChange"])) : createCommentVNode("", true)
          ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
            $props.pagination && ((_b2 = $props.pagination) == null ? void 0 : _b2.total) > 0 ? (openBlock(), createBlock(_component_el_pagination, mergeProps({ key: 0 }, $setup.paginationProps, {
              onCurrentChange: $setup.handleCurrentChange,
              onSizeChange: $setup.handleSizeChange
            }), null, 16, ["onCurrentChange", "onSizeChange"])) : createCommentVNode("", true)
          ], 64))
        ])
      ])) : createCommentVNode("", true)
    ], 512)
  ], 2);
}
var DmTable = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-d843548c"]]);
function useTablePropMerge(columns, filterSearchData) {
  if (!columns || columns.length === 0) {
    return {};
  }
  if (!filterSearchData || filterSearchData.length === 0) {
    return {};
  }
  let obj = __spreadValues({}, filterSearchData);
  const localColumns = cloneDeep$1(columns);
  const localData = cloneDeep$1(filterSearchData);
  Object.keys(localData).forEach((itemKey) => {
    let keyValue = localData[itemKey];
    localColumns.forEach((item) => {
      if ((item == null ? void 0 : item.prop) === itemKey) {
        if (item == null ? void 0 : item.overProp) {
          obj[item.overProp] = keyValue;
        } else {
          obj[item.prop] = keyValue;
        }
      }
    });
  });
  return obj;
}
DmTable.install = (app, config) => {
  setConfig(config);
  app.component(DmTable.name, DmTable);
};
export { DmTable as default, setConfig, useTablePropMerge };
