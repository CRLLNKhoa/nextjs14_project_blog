import { cn } from "@/lib/utils";
import { useCallback } from "react";
import {
  CiTextAlignLeft,
  CiTextAlignCenter,
  CiTextAlignRight,
  CiTextAlignJustify,
} from "react-icons/ci";
import { IoLinkSharp } from "react-icons/io5";
import { FaImage } from "react-icons/fa";

export default function MenuBar({ editor }) {
  const setLink = useCallback(() => {
    const previousUrl = editor.getAttributes("link").href;
    const url = window.prompt("URL", previousUrl);

    // cancelled
    if (url === null) {
      return;
    }

    // empty
    if (url === "") {
      editor.chain().focus().extendMarkRange("link").unsetLink().run();

      return;
    }

    // update link
    editor.chain().focus().extendMarkRange("link").setLink({ href: url }).run();
  }, [editor]);

  const addImage = useCallback(() => {
    const url = window.prompt("URL");

    if (url) {
      editor.chain().focus().setImage({ src: url }).run();
    }
  }, [editor]);

  if (!editor) {
    return null;
  }

  return (
    <div className="border mb-4 p-2 flex items-center flex-wrap gap-2">
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        disabled={!editor.can().chain().focus().toggleBold().run()}
        className={cn(
          "px-3 py-1 rounded-sm font-bold",
          editor.isActive("bold") && "bg-sky-300"
        )}
      >
        B
      </button>
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        disabled={!editor.can().chain().focus().toggleItalic().run()}
        className={cn(
          "w-[32px] h-[32px] rounded-sm font-bold italic",
          editor.isActive("italic") && "bg-sky-300"
        )}
      >
        I
      </button>
      <button
        onClick={() => editor.chain().focus().toggleStrike().run()}
        disabled={!editor.can().chain().focus().toggleStrike().run()}
        className={cn(
          "w-[32px] h-[32px] rounded-sm font-bold line-through",
          editor.isActive("strike") && "bg-sky-300"
        )}
      >
        U
      </button>
      <button
        onClick={() => editor.chain().focus().toggleCode().run()}
        disabled={!editor.can().chain().focus().toggleCode().run()}
        className={cn(
          "w-[32px] h-[32px] rounded-sm font-bold",
          editor.isActive("code") && "bg-sky-300"
        )}
      >
        {"</>"}
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className={cn(
          "w-[32px] h-[32px] rounded-sm font-bold",
          editor.isActive("heading", { level: 1 }) && "bg-sky-300"
        )}
      >
        H1
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={cn(
          "w-[32px] h-[32px] rounded-sm font-bold",
          editor.isActive("heading", { level: 2 }) && "bg-sky-300"
        )}
      >
        H2
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        className={cn(
          "w-[32px] h-[32px] rounded-sm font-bold",
          editor.isActive("heading", { level: 3 }) && "bg-sky-300"
        )}
      >
        H3
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
        className={cn(
          "w-[32px] h-[32px] rounded-sm font-bold",
          editor.isActive("heading", { level: 4 }) && "bg-sky-300"
        )}
      >
        H4
      </button>
      <button
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        className={cn(
          "px-2 h-[32px] rounded-sm font-bold",
          editor.isActive("codeBlock") && "bg-sky-300"
        )}
      >
        {`<></>`}
      </button>
      <button
        onClick={() => editor.chain().focus().setTextAlign("left").run()}
        className={cn(
          "w-[32px] h-[32px] rounded-sm font-bold flex justify-center items-center",
          editor.isActive({ textAlign: "left" }) && "bg-sky-300"
        )}
      >
        <CiTextAlignLeft className="w-6 h-6" />
      </button>
      <button
        onClick={() => editor.chain().focus().setTextAlign("center").run()}
        className={cn(
          "w-[32px] h-[32px] rounded-sm font-bold flex justify-center items-center",
          editor.isActive({ textAlign: "center" }) && "bg-sky-300"
        )}
      >
        <CiTextAlignCenter className="w-6 h-6" />
      </button>
      <button
        onClick={() => editor.chain().focus().setTextAlign("right").run()}
        className={cn(
          "w-[32px] h-[32px] rounded-sm font-bold flex justify-center items-center",
          editor.isActive({ textAlign: "right" }) && "bg-sky-300"
        )}
      >
        <CiTextAlignRight className="w-6 h-6" />
      </button>
      <button
        onClick={() => editor.chain().focus().setTextAlign("justify").run()}
        className={cn(
          "w-[32px] h-[32px] rounded-sm font-bold flex justify-center items-center",
          editor.isActive({ textAlign: "justify" }) && "bg-sky-300"
        )}
      >
        <CiTextAlignJustify className="w-6 h-6" />
      </button>
      <button
        onClick={setLink}
        className={cn(
          "w-[32px] h-[32px] rounded-sm font-bold flex justify-center items-center",
          editor.isActive("link") && "bg-sky-300"
        )}
      >
        <IoLinkSharp className="w-6 h-6" />
      </button>
      <button onClick={addImage}><FaImage className="w-6 h-6"/></button>
      <input
        type="color"
        onInput={event => editor.chain().focus().setColor(event.target.value).run()}
        value={editor.getAttributes('textStyle').color}
        data-testid="setColor"
      />
    </div>
  );
}
