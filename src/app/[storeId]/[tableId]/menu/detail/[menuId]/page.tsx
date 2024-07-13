export default function Page({ params }: { params: { menuId: number } }) {
  return (
    <div>
      <h1>메뉴 상세 페이지</h1>
      <p>menuId: {params.menuId}</p>
    </div>
  );
}
