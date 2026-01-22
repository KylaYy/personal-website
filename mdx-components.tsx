// mdx-components.tsx (place in root directory, same level as app/)
import type { MDXComponents } from 'mdx/types'
import Image, { ImageProps } from 'next/image'
import Link from 'next/link'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Headings
    h1: ({ children }) => (
      <h1 className="text-4xl font-bold mt-8 mb-4 leading-tight">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-3xl font-bold mt-6 mb-3 leading-tight">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-2xl font-bold mt-4 mb-2 leading-snug">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-xl font-semibold mt-3 mb-2">
        {children}
      </h4>
    ),
    h5: ({ children }) => (
      <h5 className="text-lg font-semibold mt-2 mb-1">
        {children}
      </h5>
    ),
    h6: ({ children }) => (
      <h6 className="text-base font-semibold mt-2 mb-1">
        {children}
      </h6>
    ),

    // Paragraphs and text
    p: ({ children }) => (
      <p className="my-4 leading-7">
        {children}
      </p>
    ),
    strong: ({ children }) => (
      <strong className="font-bold">
        {children}
      </strong>
    ),
    em: ({ children }) => (
      <em className="italic">
        {children}
      </em>
    ),

    // Lists
    ul: ({ children }) => (
      <ul className="list-disc list-outside ml-6 my-4 space-y-2">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal list-outside ml-6 my-4 space-y-2">
        {children}
      </ol>
    ),
    li: ({ children }) => (
      <li className="leading-7">
        {children}
      </li>
    ),

    // Blockquotes
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-gray-300 pl-4 py-2 my-4 italic bg-gray-50">
        {children}
      </blockquote>
    ),

    // Code
    code: ({ children }) => (
      <code className="bg-gray-100 rounded px-1.5 py-0.5 text-sm font-mono">
        {children}
      </code>
    ),
    pre: ({ children }) => (
      <pre className="bg-gray-900 text-gray-100 rounded-lg p-4 my-4 overflow-x-auto">
        {children}
      </pre>
    ),

    // Links
    a: ({ href, children }) => (
      <Link 
        href={href as string} 
        className="text-blue-600 hover:text-blue-800 underline"
      >
        {children}
      </Link>
    ),

    // Images
    img: (props) => (
      <Image
        {...(props as ImageProps)}
        className="rounded-lg my-4"
        width={800}
        height={400}
        alt={props.alt || ''}
      />
    ),

    // Horizontal rule
    hr: () => (
      <hr className="my-8 border-t border-gray-300" />
    ),

    // Tables
    table: ({ children }) => (
      <div className="overflow-x-auto my-4">
        <table className="min-w-full border-collapse border border-gray-300">
          {children}
        </table>
      </div>
    ),
    thead: ({ children }) => (
      <thead className="bg-gray-100">
        {children}
      </thead>
    ),
    tbody: ({ children }) => (
      <tbody>
        {children}
      </tbody>
    ),
    tr: ({ children }) => (
      <tr className="border-b border-gray-300">
        {children}
      </tr>
    ),
    th: ({ children }) => (
      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">
        {children}
      </th>
    ),
    td: ({ children }) => (
      <td className="border border-gray-300 px-4 py-2">
        {children}
      </td>
    ),

    // Allow custom components to be passed in
    ...components,
  }
}