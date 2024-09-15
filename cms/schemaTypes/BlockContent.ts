// schemas/blockContent.ts
import { defineType } from 'sanity';

export const blockContentType = defineType({
  name: 'blockContent',
  title: 'Block Content',
  type: 'array',
  of: [
    {
      type: 'block',
      // Styles let you set formatting options in the editor
      styles: [
        { title: 'Normal', value: 'normal' },
        { title: 'Heading 1', value: 'h1' },
        { title: 'Heading 2', value: 'h2' },
        { title: 'Heading 3', value: 'h3' },
        { title: 'Quote', value: 'blockquote' },
      ],
      // Marks let you annotate text with links, bold, italics, etc.
      marks: {
        decorators: [
          { title: 'Bold', value: 'strong' },
          { title: 'Italic', value: 'em' },
          { title: 'Underline', value: 'underline' },
        ],
        annotations: [
          {
            name: 'link',
            title: 'URL',
            type: 'object',
            fields: [
              {
                name: 'href',
                title: 'URL',
                type: 'url',
              },
            ],
          },
        ],
      },
    },
    // Add custom types here, like images, code blocks, etc.
    {
      type: 'image',
      options: { hotspot: true },
    },
  ],
});
