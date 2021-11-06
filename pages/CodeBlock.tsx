import { CodeComponent, ReactMarkdownNames } from 'react-markdown/lib/ast-to-react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { a11yLight } from 'react-syntax-highlighter/dist/cjs/styles/hljs';


const CodeBlock: CodeComponent | ReactMarkdownNames = ({
    inline,
    className,
    children,
    ...props
}) => {

    const match = /language-(\w+)/.exec(className || '');

    return !inline && match ? (
        <SyntaxHighlighter style={a11yLight} language={match[1]}>
          {String(children).replace(/\n$/, '')}
        </SyntaxHighlighter>

      ) : (

        <code className={className} {...props}>
          {children}
        </code>

      )
}

export default CodeBlock