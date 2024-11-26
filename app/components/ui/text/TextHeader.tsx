interface TextHeaderProps {
    children: React.ReactNode;
    className?: string;
}

export default function TextHeader({children, className}: TextHeaderProps){
    return <h1 className={`text-2xl font-bold ${className}`}>{children}</h1>
}