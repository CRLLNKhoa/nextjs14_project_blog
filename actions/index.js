"use server";
import createSupabaseServerClient from "@/lib/supabase/server";

export async function addBlog(blog) {
  const supabase = await createSupabaseServerClient();
  const { data, error } = await supabase.from("blog").insert([blog]).select();
  if (error) {
    return { status: "Error!", data: error };
  } else return { status: "Success!", data: data };
}

export async function getBlog() {
  const supabase = await createSupabaseServerClient();
  const { data, error } = await supabase.from("blog").select("*");
  if (error) {
    return { status: "Error!", data: error };
  } else return { status: "Success!", data: data };
}

export async function getBlogWithId(id) {
  const supabase = await createSupabaseServerClient();
  const { data, error } = await supabase.from("blog").select().eq("id", id);
  if (error) {
    return { status: "Error!", data: error };
  } else return { status: "Success!", data: data };
}

export async function deleteBlog(id) {
  const supabase = await createSupabaseServerClient();
  const { error } = await supabase.from("blog").delete().eq("id", id);
}
