import { Remarkable } from "remarkable";

const md = new Remarkable();

export default function MarkdownPreview({ markdown }: { markdown: any }) {
  return (
    <div
      className="content"
      dangerouslySetInnerHTML={{ __html: md.render(markdown) }}
    />
  );
}
