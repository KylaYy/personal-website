interface ParagraphProps{
    children: React.ReactNode;
}

const Paragraph = ({children}: ParagraphProps) => {
    return(
        <div className="py-3">
            <p className="text-foreground">{children}</p>
        </div>
    );
};

export default Paragraph;