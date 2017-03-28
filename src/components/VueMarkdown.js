import MarkdownIt from 'markdown-it'
import emoji from 'markdown-it-emoji'
import subscript from 'markdown-it-sub'
import superscript from 'markdown-it-sup'
import footnote from 'markdown-it-footnote'
import deflist from 'markdown-it-deflist'
import abbreviation from 'markdown-it-abbr'
import insert from 'markdown-it-ins'
import mark from 'markdown-it-mark'
import toc from 'markdown-it-toc-and-anchor'
import Prism from 'prismjs'

export default {
  template: '<div />',
  props: {
    source: {
      type: String,
      default: `<h3 id="introduction" class="section scrollspy">真的假的</h3>

### 真的假的

<div class="list">
- sss
- ddd
- fff
</div>

### 我的

[^first]: Footnote **can have markup**

*[HTML]: Hyper Text Markup Language

Term 1

:   Definition 1
with lazy continuation.`,
    },
    htmlId: {
      type: String,
      default: 'mian-text',
    },
    tocClass: {
      type: String,
      default: 'section table-of-contents',
    },
    tocId: {
      type: String,
      default: 'my-toc',
    },
  },
  methods: {
    tocCallback: (tocMarkdown, tocArray, tocHtml) => {
      // if (this.tocid) console.log(6262, this.tocid)
      console.log(5757, tocHtml)
    },
  },
  ready() {
    const op = {
      html: true,
      xhtmlOut: false,
      breaks: false,
      linkify: false,
      typographer: true,
      quotes: '“”‘’',
      highlight: (code, lang) => {
        const l = Prism.languages[lang]
        if (l) return Prism.highlight(code, l)
        return ''
      },
    }
    const md = new MarkdownIt(op).use(emoji).use(subscript).use(superscript)
      .use(footnote).use(deflist).use(abbreviation).use(insert).use(mark)
      .use(toc, {
        tocClassName: this.tocClass,
        tocCallback: (tocMarkdown, tocArray, tocHtml) => {
          if (this.tocId && document.getElementById(this.tocId)) {
            document.getElementById(this.tocId).innerHTML = tocHtml
          }
          this.$dispatch('toc', tocHtml)
        },
      })
    this.html = md.render(this.source)
    this.$el.innerHTML = this.html
    this.$dispatch('parsed', this.html)
  },
}
