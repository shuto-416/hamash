import { CodeComponent, ReactMarkdownNames } from 'react-markdown/lib/ast-to-react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism'

const CodeBlock: CodeComponent | ReactMarkdownNames = ({
    inline,
    className,
    children,
    ...props
}) => {

    const match = /language-(\w+)/.exec(className || '');

    return !inline && match ? (

        <SyntaxHighlighter style={dark} language={match[1]}>
          {String(children).replace(/\n$/, '')}
        </SyntaxHighlighter>

      ) : (

        <code className={className} {...props}>
          {children}
        </code>

      )
}

export default CodeBlock