import React, { useRef, useEffect } from 'react'
import Quill from 'quill'
import 'quill/dist/quill.snow.css'

const RichTextEditor = ({ value, onChange, placeholder = 'Escribe aquí...', height = '300px' }) => {
  const editorRef = useRef(null)
  const quillRef = useRef(null)

  useEffect(() => {
    if (editorRef.current && !quillRef.current) {
      quillRef.current = new Quill(editorRef.current, {
        theme: 'snow',
        placeholder: placeholder,
        modules: {
          toolbar: [
            [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
            ['bold', 'italic', 'underline', 'strike'],
            [{ 'list': 'ordered'}, { 'list': 'bullet' }],
            [{ 'color': [] }, { 'background': [] }],
            ['link', 'image'],
            ['clean']
          ]
        }
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

    return () => {
      if (quillRef.current) {
        quillRef.current = null
      }
    }
  }, [])

  // Update content when value prop changes
  useEffect(() => {
    if (quillRef.current && value !== quillRef.current.root.innerHTML) {
      quillRef.current.root.innerHTML = value
    }
  }, [value])

  return (
    <div className="border rounded bg-white">
      <div ref={editorRef} style={{ marginBottom: '50px' }} />
    </div>
  )
}

export default RichTextEditor 
