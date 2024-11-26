interface TextLabelProps {
    children: React.ReactNode;
    className?: string;
}

export default function TextLabel({children, className}: TextLabelProps){
    return <h1 className={`text-xs font-semibold ${className}`}>{children}</h1>
}