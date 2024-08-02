<script>
  import { Button } from '$lib/components/ui/button';
  import { Input } from '$lib/components/ui/input';
  import { Textarea } from '$lib/components/ui/textarea';
</script>

<div
  class="flex h-96 w-full flex-col items-center justify-center gap-4 bg-eastern-blue-500 px-96 text-center text-white"
>
  <h1 class="text-5xl font-bold">Kontak Kami</h1>
  <p class="text-xl leading-9">
    Jika Anda memiliki pertanyaan atau mengalami berbagai kendala perihal penggunaan di website
    Udivise, silahkan hubungi kami melalui pilihan dibawah ini.
  </p>
</div>
<div class="flex w-full items-center justify-center">
  <div class="flex -translate-y-20 flex-col items-center gap-8 rounded-lg bg-white p-8 shadow-xl">
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="w-20">
      <title>WhatsApp</title>
      <path
        fill="#25D366"
        d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"
      />
    </svg>
    <div class="text-center">
      <h1 class="text-lg font-semibold">WhatsApp</h1>
      <p>Whatsapp Hubungi admin Whatsapp kami melalui tombol dibawah ini.</p>
    </div>
    <Button>WhatsApp</Button>
  </div>
</div>
<div
  class="container my-12 flex max-w-[1000px] flex-col gap-4 rounded-lg bg-eastern-blue-100 p-12 shadow-xl"
>
  <h1 class="text-center text-4xl font-semibold">Email</h1>
  <p class="text-center text-lg">
    Anda bisa menghubungi kami melalui layanan email melalui kolom dibawah ini.
  </p>
  <div class="flex gap-4">
    <Input placeholder="Nama" />
    <Input placeholder="Alamat Email" />
  </div>
  <Textarea placeholder="Pesan" rows={10} />
  <div class="flex justify-end">
    <Button>Kirim</Button>
  </div>
</div>
