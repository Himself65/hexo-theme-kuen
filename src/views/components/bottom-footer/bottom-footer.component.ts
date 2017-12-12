import Vue from 'vue';
import Component from 'vue-class-component';
import { Site, ThemeBackground } from '@/models/hexo-config.class';
import BlurDiv from '@/views/components/blur-div/blur-div.component.ts';

@Component({
  name: 'bottom-footer',
  components: { BlurDiv },
  props: {
    powered: {
      type: String,
      'default': 'Hexo Theme Lite'
    },
    social: {
      required: true,
      type: Object
    },
    icons: {
      required: true,
      type: Object
    },
    site: {
      required: true,
      validator: obj => obj instanceof Site
    },
    background: {
      required: true,
      validator: obj => obj instanceof ThemeBackground
    }
  }
})
export default class BottomFooter extends Vue {
  powered_by: string;
  social: { [ key: string ]: string };
  icons: { [ key: string ]: string | boolean };
  site: Site;
  background: ThemeBackground

  get socialItems() {
    return Object.keys(this.social)
      .map(key => ({
        name: key,
        url: this.social[ key ],
        icon: this.icons[ key ]
      }));
  }
}