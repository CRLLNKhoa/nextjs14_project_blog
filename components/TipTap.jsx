"use client";

import { useEditor, EditorProvider, EditorContent } from "@tiptap/react";
import Heading from "@tiptap/extension-heading";
import StarterKit from "@tiptap/starter-kit";
import MenuBar from "./MenuBar";
import Code from "@tiptap/extension-code";
import Link from "@tiptap/extension-link";
import CodeBlock from "@tiptap/extension-code-block";
import TextAlign from "@tiptap/extension-text-align";
import Image from '@tiptap/extension-image'
import { Color } from '@tiptap/extension-color'
import TextStyle from '@tiptap/extension-text-style'

const Tiptap = ({ onChange, content }) => {
  const editor = useEditor({
    extensions: [
      StarterKit.configure(),
      Heading,
      Code,
      CodeBlock.configure({
        HTMLAttributes: {
          class: "bg-black text-white p-2 rounded-sm",
          languageClassPrefix: "language-",
          exitOnTripleEnter: false,
        },
      }),
      TextAlign.configure({
        types: ["heading", "paragraph","image"],
      }),
      Link.configure({
        openOnClick: true,
      }),
      Image,TextStyle, Color
    ],
    content: content,
    editorProps: {
      attributes: {
        class: "border min-h-[150px] outline-none p-4 ",
      },
    },
    onUpdate({ editor }) {
      onChange(editor?.getHTML());
    },
  });
  return (
    <div className="flex flex-col min-h-[200px]">
      <MenuBar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  );
};

export default Tiptap;
