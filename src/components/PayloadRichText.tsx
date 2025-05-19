import React from "react";

export default function PayloadRichText({ content }: { content: any }) {
  if (!Array.isArray(content)) return null;

  const renderNode = (node: any, key: React.Key) => {
    switch (node.type) {
      case "h1":
        return <h1 key={key}>{node.children.map(renderLeaf)}</h1>;
      case "h2":
        return <h2 key={key}>{node.children.map(renderLeaf)}</h2>;
      case "h3":
        return <h3 key={key}>{node.children.map(renderLeaf)}</h3>;
      case "ul":
        return <ul key={key}>{node.children.map((li: any, i: number) => <li key={i}>{li.children.map(renderLeaf)}</li>)}</ul>;
      case "ol":
        return <ol key={key}>{node.children.map((li: any, i: number) => <li key={i}>{li.children.map(renderLeaf)}</li>)}</ol>;
      case "blockquote":
        return <blockquote key={key}>{node.children.map(renderLeaf)}</blockquote>;
      case "link":
        return (
          <a key={key} href={node.url} target="_blank" rel="noopener noreferrer">
            {node.children.map(renderLeaf)}
          </a>
        );
      case "upload":
        if (node.relationTo === "media" && node.value?.url) {
          const url = node.value.url.startsWith("http")
            ? node.value.url
            : `http://localhost:3000${node.value.url}`;
          return (
            <img
              key={key}
              src={url}
              alt={node.value.alt || ""}
              className="my-4 rounded-lg"
              style={{ maxWidth: "100%" }}
            />
          );
        }
        return null;
      case "p":
      default:
        return <p key={key}>{node.children.map(renderLeaf)}</p>;
    }
  };

  const renderLeaf = (leaf: any, i: number) => {
    let el: React.ReactNode = leaf.text || leaf.children?.map((n: any, j: number) => renderLeaf(n, j));
    if (leaf.bold) el = <strong key={i}>{el}</strong>;
    if (leaf.italic) el = <em key={i}>{el}</em>;
    if (leaf.underline) el = <u key={i}>{el}</u>;
    return el;
  };

  return <>{content.map((node: any, i: number) => renderNode(node, i))}</>;
}