import React, { useRef, useEffect } from 'react'
import Quill from 'quill'
import 'quill/dist/quill.snow.css'

const RichTextEditor = ({
  value,
  onChange,
  placeholder = 'Escribe aquí...',
  height = '200px',
  label,
}) => {
  const editorRef = useRef(null)
  const quillRef = useRef(null)

  useEffect(() => {
    // Clean up any previous Quill instance and DOM
    if (editorRef.current) {
      editorRef.current.innerHTML = ''
    }
    quillRef.current = null

    // Initialize Quill
    if (editorRef.current) {
      quillRef.current = new Quill(editorRef.current, {
        theme: 'snow',
        placeholder,
        modules: {
          toolbar: [
            ['bold', 'italic', 'underline'],
            [{ list: 'ordered' }, { list: 'bullet' }],
            [{ color: [] }],
            ['link', 'image'],
            ['clean'],
          ],
        },
      })

      // Set initial content
      if (value) {
        quillRef.current.root.innerHTML = value
      }

      // Set height
      editorRef.current.style.height = height

      // Add change handler
      quillRef.current.on('text-change', () => {
        const content = quillRef.current.root.innerHTML
        onChange(content)
      })
    }

    // Cleanup: remove Quill and its toolbar
    return () => {
      if (quillRef.current) {
        quillRef.current.off('text-change')
        quillRef.current = null
      }
      if (editorRef.current) {
        // Remove all children (including toolbar)
        while (editorRef.current.firstChild) {
          editorRef.current.removeChild(editorRef.current.firstChild)
        }
      }
      // Remove any toolbar that Quill may have injected outside the editorRef
      const toolbars = document.querySelectorAll('.ql-toolbar');
      toolbars.forEach(toolbar => {
        if (toolbar.parentNode) {
          toolbar.parentNode.removeChild(toolbar)
        }
      })
    }
    // eslint-disable-next-line
  }, [])

  // Update content when value prop changes
  useEffect(() => {
    if (quillRef.current && value !== quillRef.current.root.innerHTML) {
      quillRef.current.root.innerHTML = value
    }
  }, [value])

  return (
    <div>
      {label && <label className="form-label">{label}</label>}
      <div className="border rounded bg-white">
        <div ref={editorRef} />
      </div>
    </div>
  )
}

export default RichTextEditor 
