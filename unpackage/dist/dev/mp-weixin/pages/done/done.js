"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      totalItems: []
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
    checkmarkClick(item) {
      item.done = !item.done;
      common_vendor.index.setStorage({
        key: "totalItems",
        data: this.totalItems
      });
    },
    checkboxClick(item) {
      item.done = !item.done;
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
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.totalItems.filter((item) => {
      return item.done;
    }), (item, k0, i0) => {
      return common_vendor.e({
        a: item.done
      }, item.done ? {
        b: common_vendor.o(($event) => $options.checkmarkClick(item), item.id),
        c: "0ed39b25-0-" + i0,
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
        i: "0ed39b25-1-" + i0,
        j: item.id
      });
    }),
    b: common_vendor.p({
      type: "closeempty",
      size: "30"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/user/Documents/HBuilderProjects/简单-SimpleList/pages/done/done.vue"]]);
wx.createPage(MiniProgramPage);
