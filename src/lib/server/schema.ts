import { relations, sql } from 'drizzle-orm';
import { text, integer, sqliteTable } from 'drizzle-orm/sqlite-core';

export const userTable = sqliteTable('user', {
  id: text('id').notNull().primaryKey(),
  username: text('username').notNull().unique(),
  password: text('password').notNull(),
  role: integer('role').notNull().default(0), // 0: user, 1: admin
  status: integer('status').notNull().default(0), // 0:belum daftar 1: belum approve 2: sudah approve
  createdAt: text('created_at').default(sql`(CURRENT_TIMESTAMP)`),
  updatedAt: text('updated_at')
    .default(sql`(CURRENT_TIMESTAMP)`)
    .$onUpdate(() => sql`(CURRENT_TIMESTAMP)`)
});

export const sessionTable = sqliteTable('session', {
  id: text('id').notNull().primaryKey(),
  userId: text('user_id')
    .notNull()
    .references(() => userTable.id, { onDelete: 'cascade' }),
  expiresAt: integer('expires_at').notNull()
});

export const userDtlTable = sqliteTable('user_dtl', {
  id: text('id').notNull().primaryKey(),
  userId: text('user_id')
    .notNull()
    .references(() => userTable.id, { onDelete: 'cascade' }),
  namaLengkap: text('nama_lengkap').notNull(),
  namaPanggilan: text('nama_lengkap').notNull(),
  email: text('email').notNull(),
  noTelepon: text('no_telepon').notNull(),
  tempatLahir: text('tempat_lahir').notNull(),
  tanggalLahir: text('tanggal_lahir').notNull(),
  gender: text('gender').notNull(),
  statusPernikahan: text('status_pernikahan').notNull(),
  provinsi: text('provinsi').notNull(),
  kabupatenKota: text('kabupaten_kota').notNull(),
  kecamatan: text('kecamatan').notNull(),
  kelurahanDesa: text('kelurahan_desa').notNull(),
  alamat: text('alamat').notNull(),
  statusTempatTinggal: text('status_tempat_tinggal').notNull(),
  jumlahSaudara: text('jumlah_saudara').notNull(),
  anakKe: text('anak_ke').notNull(),
  suku: text('suku').notNull(),
  pendidikanTerakhir: text('pendidikan_terakhir').notNull(),
  jurusanPendidikan: text('jurusan_pendidikan').notNull(),
  pekerjaan: text('pekerjaan').notNull(),
  tinggi: integer('tinggi').notNull(),
  berat: integer('berat').notNull(),
  hobi: text('hobi').notNull(),
  ceritaDiri: text('cerita_diri').notNull(),
  kriteria: text('kriteria').notNull(),
  path_image: text('path_image').notNull(),
  createdAt: text('created_at').default(sql`(CURRENT_TIMESTAMP)`),
  updatedAt: text('updated_at')
    .default(sql`(CURRENT_TIMESTAMP)`)
    .$onUpdate(() => sql`(CURRENT_TIMESTAMP)`)
});

export const diskonTable = sqliteTable('diskon', {
  id: text('id').notNull().primaryKey(),
  nama: text('nama').notNull(),
  jumlah: text('jumlah').notNull(),
  expireAt: text('expire_at').notNull(),
  createdAt: text('created_at').default(sql`(CURRENT_TIMESTAMP)`),
  updatedAt: text('updated_at')
    .default(sql`(CURRENT_TIMESTAMP)`)
    .$onUpdate(() => sql`(CURRENT_TIMESTAMP)`)
});

export const productTable = sqliteTable('product', {
  id: text('id').notNull().primaryKey(),
  nama: text('nama').notNull(),
  deskripsi: text('deskripsi').notNull(),
  harga: text('harga').notNull(),
  createdAt: text('created_at').default(sql`(CURRENT_TIMESTAMP)`),
  updatedAt: text('updated_at')
    .default(sql`(CURRENT_TIMESTAMP)`)
    .$onUpdate(() => sql`(CURRENT_TIMESTAMP)`)
});

export const userProductTable = sqliteTable('user_product', {
  id: text('id').notNull().primaryKey(),
  userId: text('user_id').references(() => userTable.id, { onDelete: 'cascade' }),
  productId: text('product_id').references(() => productTable.id, { onDelete: 'cascade' }),
  status: integer('status').notNull().default(0), //0: belum dibayar 1: sudah dibayar
  createdAt: text('created_at').default(sql`(CURRENT_TIMESTAMP)`),
  updatedAt: text('updated_at')
    .default(sql`(CURRENT_TIMESTAMP)`)
    .$onUpdate(() => sql`(CURRENT_TIMESTAMP)`)
});

// Relations:

export const userRelation = relations(userTable, ({ one, many }) => ({
  userDtl: one(userDtlTable, {
    fields: [userTable.id],
    references: [userDtlTable.userId]
  }),
  userProduct: many(userProductTable)
}));

export const productRelation = relations(userProductTable, ({ one }) => ({
  product: one(productTable, {
    fields: [userProductTable.productId],
    references: [productTable.id]
  })
}));
