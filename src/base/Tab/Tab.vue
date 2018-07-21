<!--  -->
<template>
  <div class="jr-tab">
    <div class="jr-tab-nav" :class="tabTypeCls">
      <div class="jr-tab-item-group">
        <div class="jr-tab-item-background">
          <div v-for="(item, index) in tabList" 
              :class="tabCls(item)"
              @click="handleTabChange(index)"
              :key="index">
              <span>{{item.label}}</span>
            
          </div>
        </div>
        <p class="jr-tab-slider-bar" v-if="tabTypeCls !== 'tabBorder'">
          <span class="bar" ref="bar"></span>
        </p>
      </div>
    </div>

    <div class="jr-tab-group">
      <slot></slot>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    value: { type:[String, Number] },
    type: [String],
  },

  computed: {
    tabTypeCls () {
      return this.type === "border" ? "tabBorder" : "";
    }
  },

  data () {
    return {
      tabList: [],
      tabIndex: 0,
      currentValue: this.value,
    };
  },

  mounted () {    
    this.updateTabItem();
    this.updateStatus();
    this.$refs.bar && this.setSliderBarWidth();
  },

  methods: {
    tabCls (item) {
      return [
        'jr-tab-item', 
        {'jr-tab-item-active': item.name === this.currentValue}
      ]
    },

    getTabItem () {
      return this.$children.filter((item) => {
        return item.$options._componentTag === "TabItem";
      });
    },

    updateTabItem () {
      this.getTabItem().forEach((item, index) => {
        this.tabList.push({
          name: item.$attrs.name || index,
          label: item.$attrs.label || index
        });
      });
    },

    updateStatus () {
      this.getTabItem().forEach((tab, index) => {
        return tab.isShow = tab.$attrs.name === this.currentValue;
      });
    },

    setSliderBarWidth () {
      let width = 1 / this.getTabItem().length;
      this.$refs.bar.style.width = `${width * 100}%`
    },

    updateSliderBar (index) {
      let width = this.$refs.bar.offsetWidth;
      this.$refs.bar.style.transform = `translate3d(${ width * index}px , 0, 0)`;
    },

    handleTabChange (index) {
      const name = this.tabList[index].name;

      this.currentValue = name;
      this.$emit('change', name);
      
      this.$refs.bar && this.updateSliderBar(index);
    }
  },

  watch: {
    currentValue() {
      this.updateStatus();
    }
  }
}

</script>
<style lang='less' scoped>
  .jr-tab {
    // position: relative;
    z-index: 2;
    font-size: 16px;
    .jr-tab-nav {
      background: #fff;
      &.tabBorder {
        color: #666;
        .jr-tab-item-group {
          align-items: center;
          justify-content: center;
        }
        .jr-tab-item-background {
          display: flex;
          height: 25px;
          width: auto;
          background: #f3f3f3;
          border-radius: 12px;
        }
        .jr-tab-item {
          flex: 0 0 90px;
          width: 90px;
          height: 25px;
          line-height: 25px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 12px;
          font-size: 14px;
          &.jr-tab-item-active {
            color: #fff;
            background:rgba(255,79,0,1);
          }
        }

      }
    }
      .jr-tab-group {
        flex: 1;
        height: 100%;
      }
      .jr-tab-item-group {
        position: relative;
        z-index: 2;
        margin: 0 12px;
        background: #fff;
        // width: 100%;
        display: flex;
        height: 40px;
        line-height: 40px;
        text-align: center;
        .jr-tab-item-background {
          display: flex;
          width: 100%;
        }
        .jr-tab-slider-bar {
          position: absolute;
          bottom: 0;
          left: 0;
          height: 3px;
          width: 100%;
          overflow: hidden;
          .bar {
            transition: transform .5s cubic-bezier(.23,1,.32,1);
            display: block;
            // width:50%;
            height: 100%;
            background: #ff4f00;
          }
        }
        .jr-tab-item {
          flex: 1;
          height: 100%;
          // box-sizing: border-box;
          // border-bottom: 0px solid transparent;
          // transition: color .3s ease, border-bottom 1s ease;
          transition: color .3s ease;
          &.jr-tab-item-active {
            color: #ff4f00;
            // border-bottom: 4px solid #ff4f00;
          }
        }
      }
    


  }
</style>