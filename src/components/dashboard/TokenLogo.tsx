interface ITokenLogoProps {
  imageUrl: string;
  bodyClass: string;
}

const TokenLogo = ({ imageUrl, bodyClass }: ITokenLogoProps) => {
  return (
    <div
      className={`${bodyClass} rounded-full border dark:border-neutral-800`}
      style={{
        backgroundImage: `url('${imageUrl}')`,
        backgroundSize: 'contain',
      }}
    />
  );
};
export default TokenLogo;
