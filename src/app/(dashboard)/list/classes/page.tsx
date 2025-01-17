import Pagination from "@/components/Pagination"
import Table from "@/components/Table"
import TableSearch from "@/components/TableSearch"
import Image from "next/image"
import Link from "next/link"
import { role, classesData } from "@/lib/data";
import FormModal from "@/components/FormModal"

type Class = {
  id: number;
  capacity: number;
  name: string;
  grade: number;
  supervisor: string;
}

const columns = [
  {
    header: "Class Name", accessor:"name"
  },
  {
    header: "Capacity", accessor:"capacity", className: "hidden md:table-cell"
  },
  {
    header: "Grade", accessor:"grade", className: "hidden md:table-cell"
  },
  {
    header: "Supervisor", accessor:"supervisor", className: "hidden md:table-cell"
  },
  {
    header: "Actions", accessor:"actions"
  }
];

const ClassListPage = () => {

  const renderRow = (item:Class ) => (
    <tr key={item.id} className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-schoolPurpleLight">
      <td className="flex items-center gap-4 p-4">
        <div className="flex flex-col">
          <h3 className="font-semibold">{item.name}</h3>
        </div>
      </td>
      <td className="hidden md:table-cell">{item.grade}</td>
      <td className="hidden md:table-cell">{item.capacity}</td>
      <td className="hidden md:table-cell">{item.supervisor}</td>
      <td>
        <div className="flex items-center gap-2">
          <Link href={`/list/classes/${item.id}`}>
            <button className="w-7 h-7 flex items-center justify-center rounded-full bg-schoolSky">
              <Image src="/update.png" alt="" width={16} height={16}/>
            </button>
          </Link>
          {role === "admin" && (
            <>
            <FormModal table="class" type="update" id={item.id}/>
            <FormModal table="class" type="delete" id={item.id}/>
            </>
          )}
        </div>
      </td>
    </tr>
  );

  return (
    <div className='bg-white p-4 rounded-md flex-1 m-4 mt-0'>
      {/* TOP */}
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold">All Classes</h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TableSearch />
          <div className="flex items-center gap-4 self-end">
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-schoolYellow">
              <Image src="/filter.png" alt="" width={14} height={14}/>
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-schoolYellow">
              <Image src="/sort.png" alt="" width={14} height={14}/>
            </button>
            {role === "admin" && (
            <FormModal table="class" type="create"/>
            )}
          </div>
        </div>
      </div>
      {/* List */}
      <Table columns={columns} renderRow={renderRow} data={classesData}/>
      {/* pagination */}
      <Pagination />
    </div>
  );
};

export default ClassListPage