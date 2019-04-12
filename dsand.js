(() => {
  "use strict";
  let _ = require('cte');
  let $ = _(function (e) {
    return _(
      $[e] ? $[e] : $.prototype
    )
    .create({
      h: {
        value: `<${e}`
      },
      a: {
        value: _(['>'])
      },
      f: {
        get () {
          return _(this).get(e, "single")._ ? '' : `</${e}>`;
        }
      }
    });
  })
  .fork
  .by
  .define({
    get : {
      get () {
        return _(this).flat(({h, a, f}) => a.pushL(h).pushR(f))._;
      }
    },
  });
})();

/*
'br':
'img':
'hr':
'meta':
'input':
'embed':
'area':
'base':
'col':
'keygen':
'link':
'param':
'source':

*/