interface TextBodyProps {
    children: React.ReactNode;
    className?: string;
}

export default function TextBody({children, className}: TextBodyProps){
    return <h1 className={`text-base font-semibold text-body-gray ${className}`}>{children}</h1>
}