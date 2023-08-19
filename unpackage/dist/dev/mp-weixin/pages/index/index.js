"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      totalItems: [],
      newTodoContent: "",
      fabPattern: {
        buttonColor: "0xffffff"
      }
    };
  },
  onShow() {
    common_vendor.index.getStorage({
      key: "totalItems",
      success: (res) => {
        this.totalItems = res.data;
      }
    });
  },
  methods: {
    checkboxClick(item) {
      item.done = !item.done;
      common_vendor.index.setStorage({
        key: "totalItems",
        data: this.totalItems
      });
    },
    checkmarkClick(item) {
      item.done = !item.done;
      common_vendor.index.setStorage({
        key: "totalItems",
        data: this.totalItems
      });
    },
    uniFabClick() {
      let curId;
      if (this.totalItems.length == 0)
        curId = 0;
      else
        curId = this.totalItems[this.totalItems.length - 1].id + 1;
      this.totalItems.push({
        id: curId,
        done: false,
        content: "你想做的"
      });
      common_vendor.index.setStorage({
        key: "totalItems",
        data: this.totalItems
      });
    },
    closeemptyClick(item) {
      let id = item.id;
      this.totalItems = this.totalItems.filter((i) => {
        if (i.id != id)
          return true;
        else
          return false;
      });
      common_vendor.index.setStorage({
        key: "totalItems",
        data: this.totalItems
      });
    }
  }
};
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uni_fab2 = common_vendor.resolveComponent("uni-fab");
  (_easycom_uni_icons2 + _easycom_uni_fab2)();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_fab = () => "../../uni_modules/uni-fab/components/uni-fab/uni-fab.js";
if (!Math) {
  (_easycom_uni_icons + _easycom_uni_fab)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.totalItems.filter((item) => {
      return !item.done;
    }), (item, k0, i0) => {
      return common_vendor.e({
        a: item.done
      }, item.done ? {
        b: common_vendor.o(($event) => $options.checkmarkClick(item), item.id),
        c: "70022fea-0-" + i0,
        d: common_vendor.p({
          type: "checkmarkempty",
          size: "30"
        })
      } : {
        e: common_vendor.o(($event) => $options.checkboxClick(item), item.id)
      }, {
        f: item.content,
        g: common_vendor.o(($event) => item.content = $event.detail.value, item.id),
        h: common_vendor.o(($event) => $options.closeemptyClick(item), item.id),
        i: "70022fea-1-" + i0,
        j: item.id
      });
    }),
    b: common_vendor.p({
      type: "closeempty",
      size: "30"
    }),
    c: common_vendor.o($options.uniFabClick),
    d: common_vendor.p({
      horizontal: "right",
      pattern: $data.fabPattern
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/user/Documents/HBuilderProjects/简单-SimpleList/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
