const {stripIndent} = require("common-tags");

module.exports = () => {
  const md = stripIndent`
    # One
    This is some content on page 1.

    And some more content.

    <!-- pagebreak -->

    ## TWO
    I'm so interesting I need additional pages to tell you about me.

    <!--pagebreak-->

    ## THREE

    A third page of interesting content?

    \`\`\`
    one
      two
        three
    \`\`\`

    Can it be done?

    <!-- pagebreak-->

    ## Four

    Testing having mismatched spaces around the pagebreak marker.
  `;

  return md.split(/<!--\s?pagebreak\s?-->/g).map(section => section.trim());
};