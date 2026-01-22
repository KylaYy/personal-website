interface ParagraphProps{
    children: React.ReactNode;
}

const Paragraph = ({children}: ParagraphProps) => {
    return(
        <div className="py-2">
            <p className="text-foreground text-lg">{children}</p>
        </div>
    );
};

export default Paragraph;