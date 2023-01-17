import { Form } from "@/components/Form/Form";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()

export default function Home() {
  return (
    <QueryClientProvider client={queryClient}>
    <main className='min-h-screen w-full bg-slate-800 '>
    <header className="flex items-center justify-between py-2 px-5 container">
      <strong className='text-white text-2xl'>FastDownload</strong>
    </header>

    <section className="container max-w-[700px] flex flex-col gap-5 items-center justify-center my-10 p-3">
      <div className='text-white text-center'>
      <h1 className='text-3xl'><b>Baixar vídeo do YouTube</b></h1>
      <p className="mt-3">Copie e cole o link do vídeo no campo abaixo, e aguarde até que o botão de download apareça</p>
      </div>
      <Form/>

    </section>
    </main>
    </QueryClientProvider>
  )
}
