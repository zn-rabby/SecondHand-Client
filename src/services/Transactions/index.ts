"use server";

import { cookies } from "next/headers";

export const createTransactions = async (order: {itemID:string}) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/transactions`, {
      method: "POST",
      headers: {
        Authorization: (await cookies()).get("accessToken")!.value,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(order),
    });

    return await res.json();
  } catch (error: any) {
    return Error(error);
  }
};


// get all Track Purchases
export const getPurchases = async (page?: string, limit?: string) => {
  try {
    
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/transactions/purchases?limit=${limit}&page=${page}`,
      {
        method: "GET",
        headers: {
          Authorization: (await cookies()).get("accessToken")!.value,
        },
        next: {
          tags: ["PURCHASES"],
        },
      }
    );
    const data = await res.json();
    return data;
  } catch (error: any) {
    return Error(error.message);
  }
};
// get all Track Purchases
export const getSales= async (page?: string, limit?: string) => {
  try {
    
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/transactions/sales?limit=${limit}&page=${page}`,
      {
        method: "GET",
        headers: {
          Authorization: (await cookies()).get("accessToken")!.value,
        },
        next: {
          tags: ["PURCHASES"],
        },
      }
    );
    const data = await res.json();
    return data;
  } catch (error: any) {
    return Error(error.message);
  }
};


// update product
export const updateStatus = async (
  productId: string,
  productData:any
) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/transactions/${productId}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: (await cookies()).get("accessToken")!.value,
        },
        body: JSON.stringify(productData),

      }
    );
    // revalidateTag("PRODUCT");
    const data= await res.json();
    // console.log(data,"action")
    return data
  } catch (error: any) {
    return Error(error);
  }
};


// get all Track Purchases
export const getMe= async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/user/me`,
      {
        method: "GET",
        headers: {
          Authorization: (await cookies()).get("accessToken")!.value,
        },
        next: {
          tags: ["PURCHASES"],
        },
      }
    );
    const data = await res.json();
    console.log(data,res,"action")
    return data;
  } catch (error: any) {
    return Error(error.message);
  }
};


// update product
export const updateProfile = async (
  productId: string,
  productData:any
) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/user/${productId}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: (await cookies()).get("accessToken")!.value,
        },
        body: JSON.stringify(productData),

      }
    );
    // revalidateTag("PRODUCT");
    const data= await res.json();
    // console.log(data,"action")
    return data
  } catch (error: any) {
    return Error(error);
  }
};