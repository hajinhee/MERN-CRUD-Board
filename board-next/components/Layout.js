import { Modal, Pagination, Table } from '@/components'


export function Layout({ children }){
  return (
    <div>
      <main>{children}</main>
      <Table/>
      <Pagination/>
      <Modal/>
    </div>

  );
}