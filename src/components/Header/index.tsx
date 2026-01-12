import "./styles.css";

type Props = {
  total: number;
};

export default function Header({ total }: Props) {
  return (
    <>
      <div className="container dsf-title-header">
        <h1>DSFilter</h1>
        <p>{total} Produto(s)</p>
      </div>
    </>
  );
}
